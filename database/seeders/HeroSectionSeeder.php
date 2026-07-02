<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HeroSectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('hero_sections')->insert([
            [
                'title' => 'Global Logistics & Export Solutions',
                'description' => 'We provide comprehensive logistics and export services to help your business grow globally. From warehousing to shipping, we handle it all.',
                'image' => '',
                'button_text' => 'Let\'s Talk',
                'button_url' => '/contact',
                'is_active' => true,
                'order' => 1,
            ],
        ]);
    }
}
