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
        dd($request->validated());
        $wallet = $this->accountService->send($wallet, $request->validated());
        // return inertia("private/accounts/acc-actions/receive", ['wallet' => $wallet]);
    }
}
