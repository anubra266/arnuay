<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class ProfileSetup
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $isSetup = (authUser()->settings()->get('profile.pinfo'));
        return $isSetup ? $next($request) : redirect(route('profile.pinfo'))
            ->with('info', ['Setup Profile', 'You must complete your personal info first']);
    }
}
