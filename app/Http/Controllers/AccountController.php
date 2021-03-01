<?php

namespace App\Http\Controllers;

use App\Services\AccountService;
use App\Http\Requests\AccountRequest;

class AccountController extends Controller
{
    public function __construct(AccountService $accountService)
    {
        $this->accountService = $accountService;
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
}
