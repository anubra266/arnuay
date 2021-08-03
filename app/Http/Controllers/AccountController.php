<?php

namespace App\Http\Controllers;

use App\Http\Requests\AccountActionRequest;
use App\Services\AccountService;
use App\Http\Requests\AccountRequest;
use Bavix\Wallet\Models\Wallet;
use Illuminate\Http\Request;

class AccountController extends Controller
{
    public function __construct(AccountService $accountService)
    {
        $this->accountService = $accountService;
    }

    public function home()
    {
        $transactions = authUser()->transactions()->with('wallet')->get();
        return inertia('private/home', ['transactions' => $transactions]);
    }

    public function index()
    {
        $accounts = $this->accountService->index();
        return inertia("private/accounts", ['accounts' => $accounts]);
    }

    public function store(AccountRequest $request)
    {
        $this->accountService->store($request);
        return back()->with('success', ['Create Account', 'Account Created Successfully']);
    }

    public function receive($slug)
    {
        $wallet = $this->accountService->receive($slug);
        return inertia("private/accounts/acc-actions/receive", ['wallet' => $wallet]);
    }

    public function sendInfo($slug)
    {
        [$wallet, $canSend] = $this->accountService->sendInfo($slug);
        if ($canSend) {
            return inertia("private/accounts/acc-actions/send", ['wallet' => $wallet]);
        }
        return back()->with('error', ['Send Funds', "$wallet->name account is empty."]);
    }

    public function send(AccountActionRequest $request, Wallet $wallet)
    {
        $newBalance = $this->accountService->send($wallet, $request->validated());
        return back()->with('success', ['Send Funds', "Transfer was successful. Your balance is now N$newBalance"]);
    }

    public function deposit($slug)
    {
        $wallet = $this->accountService->receive($slug);
        return inertia("private/accounts/acc-actions/deposit", ['wallet' => $wallet]);
    }

    public function depositProcess(Request $request, Wallet $wallet)
    {
        $status = $this->accountService->deposit($request, $wallet);
        if ($status !== 'successful') {
            return back()->with('error', ['Deposit Funds', "Unsuccessful. Something went wrong"]);
        }
        return redirect()->route('accounts.deposit', ['slug' => $wallet->slug])->with('success', ['Deposit Funds', "Successful. Your balance is now $wallet->balance"]);
    }

    public function withdraw($slug)
    {
        $wallet = $this->accountService->receive($slug);
        return inertia("private/accounts/acc-actions/withdraw", ['wallet' => $wallet]);
    }

    public function withdrawProcess(Request $request, Wallet $wallet)
    {
        $data = $this->accountService->withdrawProcess($request, $wallet);
        $amount = $data['data']['amount'];
        $receiver = $data['data']['full_name'];
        if ($data['status'] !== 'success') {
            return back()->with('error', ['Withdraw Funds', "Unsuccessful. Something went wrong"]);
        }
        return back()->with('success', ['Send Funds', "$amount successfully sent to $receiver"]);
    }
}
