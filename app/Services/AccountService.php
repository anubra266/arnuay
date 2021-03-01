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
        authUser()->createWallet($account);
    }
}
