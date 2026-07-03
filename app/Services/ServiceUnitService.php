<?php

namespace App\Services;

use App\Models\ServiceUnit;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Cache;

class ServiceUnitService
{
    public function getAll()
    {
        return ServiceUnit::ordered()->get();
    }

    public function create(array $data, $imageFile = null)
    {
        if ($imageFile) {
            $data['image'] = $imageFile->store('service-units', 'public');
        }

        $data['is_active'] = $data['is_active'] ?? true;
        $unit = ServiceUnit::create($data);

        Cache::forget('homepage_data');
        return $unit;
    }

    public function update(ServiceUnit $unit, array $data, $imageFile = null)
    {
        if ($imageFile) {
            if ($unit->image) {
                Storage::disk('public')->delete($unit->image);
            }
            $data['image'] = $imageFile->store('service-units', 'public');
        }

        $data['is_active'] = $data['is_active'] ?? true;
        $unit->update($data);

        Cache::forget('homepage_data');
        return $unit;
    }

    public function delete(ServiceUnit $unit)
    {
        if ($unit->image) {
            Storage::disk('public')->delete($unit->image);
        }
        
        $unit->delete();
        Cache::forget('homepage_data');
    }
}