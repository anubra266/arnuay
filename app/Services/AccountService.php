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
        return authUser()->accounts()->with('wallet')->get();
    }
}
