<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProfileController extends Controller
{

    public $path = "private/profile";

    public function personalInfo()
    {
        return inertia("$this->path/personal-info");
    }
}
