<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateSiteSettingRequest;
use App\Services\SiteSettingService;
use Inertia\Inertia;

class SiteSettingController extends Controller
{
    protected $service;

    public function __construct(SiteSettingService $service)
    {
        $this->service = $service;
    }

    public function edit()
    {
        return Inertia::render('Admin/Settings/Edit', [
            'settings' => $this->service->getSettings(),
        ]);
    }

    public function update(UpdateSiteSettingRequest $request)
    {
        $this->service->updateSettings($request->validated());

        return redirect()->route('admin.settings.edit')->with('success', 'Settings updated successfully.');
    }
}
