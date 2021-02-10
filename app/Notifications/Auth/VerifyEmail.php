<?php

namespace App\Notifications\Auth;

use Illuminate\Bus\Queueable;
use Illuminate\Auth\Notifications\VerifyEmail as VerifyEmailNotification;
use Illuminate\Contracts\Queue\ShouldQueue;

class VerifyEmail extends VerifyEmailNotification implements ShouldQueue
{
    use Queueable;

    public function __construct()
    {
        //specifying queue is optional but recommended
        $this->queue = 'auth';
    }
}
