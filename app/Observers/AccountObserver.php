<?php

namespace App\Observers;

use App\Models\Account;
use Illuminate\Validation\ValidationException;

class AccountObserver
{
    /**
     * Handle the Account "saving" event.
     *
     * @param  \App\Models\Account  $account
     * @return void
     */
    public function saving(Account $account)
    {
        $existingAccount = authUser()->accounts()->whereName($account->name)->first();
        if ($existingAccount) {
            vError(['name' => "You already have an account named $account->name"]);
            return false;
        }
    }

    /**
     * Handle the Account "created" event.
     *
     * @param  \App\Models\Account  $account
     * @return void
     */
    public function created(Account $account)
    {
        //
    }

    /**
     * Handle the Account "updated" event.
     *
     * @param  \App\Models\Account  $account
     * @return void
     */
    public function updated(Account $account)
    {
        //
    }

    /**
     * Handle the Account "deleted" event.
     *
     * @param  \App\Models\Account  $account
     * @return void
     */
    public function deleted(Account $account)
    {
        //
    }

    /**
     * Handle the Account "restored" event.
     *
     * @param  \App\Models\Account  $account
     * @return void
     */
    public function restored(Account $account)
    {
        //
    }

    /**
     * Handle the Account "force deleted" event.
     *
     * @param  \App\Models\Account  $account
     * @return void
     */
    public function forceDeleted(Account $account)
    {
        //
    }
}
