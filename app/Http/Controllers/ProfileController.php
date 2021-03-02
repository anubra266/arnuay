<?php

namespace App\Http\Controllers;

use App\Http\Requests\PersonalInfo;
use App\Services\ProfileService;

class ProfileController extends Controller
{

    public $path = "private/profile";

    public function __construct(ProfileService $profileService)
    {
        $this->profileService = $profileService;
    }

    public function personalInfo()
    {
        $info = $this->profileService->personalInfo();
        return inertia("$this->path/personal-info", ["info" => $info]);
    }

    public function updatePersonalInfo(PersonalInfo $request, $field)
    {
        $this->profileService->updatePersonalInfo($request, $field);
        return back();
    }
}
