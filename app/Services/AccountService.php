<?php

namespace App\Services;


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

    public function send($sender, $receive_info)
    {
        $canSend = false;
        // if($sender->balance === 0) $canSend =

    }
}
