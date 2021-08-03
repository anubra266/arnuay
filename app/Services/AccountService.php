<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Http;

class AccountService
{

    public function index()
    {
        $accounts = authUser()->wallets()->get();
        return $accounts;
    }

    public function store($request)
    {
        $account = $request->validated();
        $existingAccounts = authUser()->wallets()->whereName($request->name)->count();
        if ($existingAccounts) {
            vError(['name' => "You already have an account named $request->name"]);
        }
        authUser()->createWallet($account);
    }

    public function receive($slug)
    {
        $wallet = authUser()->wallets()->whereSlug($slug)->first();
        $receive_id = authUser()->username . "/$wallet->id";
        $wallet->receive_id = $receive_id;
        return $wallet;
    }

    public function sendInfo($slug)
    {
        $wallet = authUser()->wallets()->whereSlug($slug)->first();
        $canSend = $wallet->balance > 0;
        return [$wallet, $canSend];
    }

    public function send($sender, $receiver_info)
    {
        $receiver = User::whereUsername($receiver_info['receiver'])->first();
        $receiving_wallet = $receiver->wallets($receiver_info['id'])->first();
        $sender->transfer($receiving_wallet, $receiver_info['amount']);
        return $sender->balance;
    }

    public function deposit($request, $wallet)
    {
        $transaction_id = $request->transaction_id;
        $verification_url = "https://api.flutterwave.com/v3/transactions/$transaction_id/verify";
        $SEC_KEY = env('FLW_SECRET_KEY');
        $res = Http::withHeaders([
            'Authorization' => 'Bearer ' . $SEC_KEY,
        ])->acceptJson()->get($verification_url);
        $verification_response =  $res->json()['data'];

        $amount = $verification_response['amount'];
        $dev_fee = 1 / 100 * $amount;
        $customer_settlement = $verification_response['amount_settled'] - $dev_fee;

        $wallet->deposit($customer_settlement);

        return $verification_response['status'];
    }

    public function withdrawProcess($request, $wallet)
    {
        $request_data = $request->validate([
            'amount' => 'numeric|required',
            'account_number' => 'numeric|required',
            'account_bank' => 'required'
        ]);
        $info = [
            "narration" => "Withdrawal from $wallet->name",
            "currency" => "NGN",
            "debit_currency" => "NGN"
        ];


        $transfer_data = array_merge($request_data, $info);

        $SEC_KEY = env('FLW_SECRET_KEY');
        $res = Http::withHeaders([
            'Authorization' => 'Bearer ' . $SEC_KEY,
        ])->acceptJson()->post("https://api.flutterwave.com/v3/transfers", $transfer_data);
        $verification_response =  $res->json();

        $wallet->withdraw($verification_response['data']['amount']);

        return $verification_response;
    }
}
