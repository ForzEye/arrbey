<?php

namespace App\Services;

use App\Models\HeroSection;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Cache;

class HeroSectionService
{
    public function getActiveHero()
    {
        return HeroSection::active()->ordered()->first() ?? new HeroSection();
    }

    public function updateHero(array $data, $imageFile = null)
    {
        $hero = HeroSection::first();
        
        if (!$hero) {
            $hero = new HeroSection();
        }

        if ($imageFile) {
            if ($hero->image) {
                Storage::disk('public')->delete($hero->image);
            }
            $path = $imageFile->store('hero', 'public');
            $data['image'] = $path;
        }

        $hero->fill($data);
        $hero->is_active = $data['is_active'] ?? true;
        $hero->save();

        Cache::forget('homepage_data');

        return $hero;
    }
}