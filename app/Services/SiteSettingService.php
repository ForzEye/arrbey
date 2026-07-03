<?php

namespace App\Services;

use App\Models\SiteSetting;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;

class SiteSettingService
{
    public function getSettings(): array
    {
        return SiteSetting::query()->pluck('value', 'key')->toArray();
    }

    public function updateSettings(array $data): void
    {
        $files = ['site_logo', 'site_favicon'];

        foreach ($files as $fileKey) {
            if (isset($data[$fileKey]) && is_object($data[$fileKey])) {
                $current = SiteSetting::where('key', $fileKey)->value('value');
                if ($current) {
                    Storage::disk('public')->delete($current);
                }
                $data[$fileKey] = $data[$fileKey]->store('settings', 'public');
            } elseif (isset($data[$fileKey])) {
                unset($data[$fileKey]);
            }
        }

        foreach ($data as $key => $value) {
            if ($value === null) {
                $value = '';
            }

            SiteSetting::updateOrCreate(
                ['key' => $key],
                ['value' => $value, 'type' => in_array($key, $files, true) ? 'image' : 'text']
            );
        }

        Cache::forget('homepage_data');
    }
}