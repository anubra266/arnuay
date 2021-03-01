<?php

namespace App\Observers;

use Bavix\Wallet\Models\Wallet;

class WalletObserver
{
    /**
     * Handle the Wallet "saving" event.
     *
     * @param  \Bavix\Wallet\Models\Wallet  $wallet
     * @return void
     */
    public function saving(Wallet $wallet)
    {
        // if ($wallet->slug === 'default') {
        //     $wallet->name = authUser()->username;
        // }
        $existingWallet = authUser()->getWallet($wallet->slug);
        if ($existingWallet) {
            vError(['name' => "You already have an account named $wallet->name"]);
            return false;
        }
    }

    /**
     * Handle the Wallet "created" event.
     *
     * @param  \Bavix\Wallet\Models\Wallet  $wallet
     * @return void
     */
    public function created(Wallet $wallet)
    {
        //
    }

    /**
     * Handle the Wallet "updated" event.
     *
     * @param  \Bavix\Wallet\Models\Wallet  $wallet
     * @return void
     */
    public function updated(Wallet $wallet)
    {
        //
    }

    /**
     * Handle the Wallet "deleted" event.
     *
     * @param  \Bavix\Wallet\Models\Wallet  $wallet
     * @return void
     */
    public function deleted(Wallet $wallet)
    {
        //
    }

    /**
     * Handle the Wallet "restored" event.
     *
     * @param  \Bavix\Wallet\Models\Wallet  $wallet
     * @return void
     */
    public function restored(Wallet $wallet)
    {
        //
    }

    /**
     * Handle the Wallet "force deleted" event.
     *
     * @param  \Bavix\Wallet\Models\Wallet  $wallet
     * @return void
     */
    public function forceDeleted(Wallet $wallet)
    {
        //
    }
}
