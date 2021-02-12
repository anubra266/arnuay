<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\AccountService;

class AccountController extends Controller
{
    public function __construct(AccountService $accountService)
    {
        $this->accountService = $accountService;
    }
}
