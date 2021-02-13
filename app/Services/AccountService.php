<?php

namespace App\Services;

use App\Models\Account;

class AccountService
{
    public function __construct(Account $account)
    {
        $this->account = $account;
    }

    public function index()
    {
        $accounts = authUser()->accounts()->with('wallet')->get();
        // dd($accounts);
        return $accounts;
    }

    public function store($request)
    {
        $account = $request->validated();
        authUser()->accounts()->create($account);
    }
}