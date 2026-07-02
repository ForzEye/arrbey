<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CtaBannerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('cta_banners')->insert([
            [
                'title' => 'Ready to Scale Your Business Globally?',
                'description' => 'Let our logistics experts help you expand your reach and optimize your supply chain.',
                'button_text' => 'Get Started',
                'button_url' => '/contact',
                'image' => '',
                'is_active' => true,
            ],
        ]);
    }
}
