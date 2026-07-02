<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            AdminUserSeeder::class,
            SiteSettingSeeder::class,
            MenuSeeder::class,
            HeroSectionSeeder::class,
            ServiceBarItemSeeder::class,
            ServiceUnitSeeder::class,
            GrowthPointSeeder::class,
            StatSeeder::class,
            AudienceCategorySeeder::class,
            ProgramSeeder::class,
            CtaBannerSeeder::class,
            FooterSeeder::class,
        ]);
    }
}
