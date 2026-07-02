<?php

namespace App\Services;

use App\Models\SiteSetting;
use App\Models\Menu;
use App\Models\HeroSection;
use App\Models\ServiceBarItem;
use App\Models\ServiceUnit;
use App\Models\GrowthPoint;
use App\Models\Stat;
use App\Models\AudienceCategory;
use App\Models\Program;
use App\Models\CtaBanner;
use App\Models\FooterColumn;
use Illuminate\Support\Facades\Cache;

class HomepageService
{
    public function getHomepageData(): array
    {
        return Cache::remember('homepage_data', 3600, function () {
            return [
                'settings' => SiteSetting::pluck('value', 'key')->toArray(),
                'menus' => [
                    'header' => Menu::active()->ordered()->where('location', 'header')->get(),
                    'footer' => Menu::active()->ordered()->where('location', 'footer')->get(),
                ],
                'hero' => HeroSection::active()->ordered()->first(),
                'service_bar_items' => ServiceBarItem::active()->ordered()->get(),
                'service_units' => ServiceUnit::active()->ordered()->get(),
                'growth_points' => GrowthPoint::active()->ordered()->get(),
                'stats' => Stat::active()->ordered()->get(),
                'audience_categories' => AudienceCategory::active()->ordered()->get(),
                'programs' => Program::active()->ordered()->get(),
                'cta_banner' => CtaBanner::active()->first(),
                'footer_columns' => FooterColumn::active()->ordered()->with('links')->get(),
            ];
        });
    }

    public function clearCache(): void
    {
        Cache::forget('homepage_data');
    }
}
