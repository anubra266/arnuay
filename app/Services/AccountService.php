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
}
