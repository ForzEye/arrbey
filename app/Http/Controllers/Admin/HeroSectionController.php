<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateHeroSectionRequest;
use App\Services\HeroSectionService;
use Inertia\Inertia;

class HeroSectionController extends Controller
{
    protected $heroService;

    public function __construct(HeroSectionService $heroService)
    {
        $this->heroService = $heroService;
    }

    public function edit()
    {
        $hero = $this->heroService->getActiveHero();

        return Inertia::render('Admin/Hero/Edit', [
            'hero' => $hero
        ]);
    }

    public function update(UpdateHeroSectionRequest $request)
    {
        $data = $request->validated();
        $imageFile = $request->file('image');

        $this->heroService->updateHero($data, $imageFile);

        return redirect()->route('admin.hero.edit')->with('success', 'Hero section updated successfully.');
    }
}
