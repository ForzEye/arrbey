<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GrowthPointSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('growth_points')->insert([
            [
                'title' => 'Global Network',
                'description' => 'Partners with leading logistics providers in over 50 countries worldwide.',
                'icon' => 'fa-globe',
                'order' => 1,
                'is_active' => true,
            ],
            [
                'title' => 'Advanced Technology',
                'description' => 'Real-time tracking and advanced logistics software for complete visibility.',
                'icon' => 'fa-microchip',
                'order' => 2,
                'is_active' => true,
            ],
            [
                'title' => 'Expert Team',
                'description' => 'Experienced professionals dedicated to delivering exceptional service.',
                'icon' => 'fa-users',
                'order' => 3,
                'is_active' => true,
            ],
            [
                'title' => 'Sustainable Practices',
                'description' => 'Committed to environmentally friendly logistics solutions.',
                'icon' => 'fa-leaf',
                'order' => 4,
                'is_active' => true,
            ],
            [
                'title' => 'Competitive Rates',
                'description' => 'Best value logistics solutions tailored to your business needs.',
                'icon' => 'fa-tags',
                'order' => 5,
                'is_active' => true,
            ],
            [
                'title' => '24/7 Support',
                'description' => 'Round-the-clock customer support for all your logistics needs.',
                'icon' => 'fa-headset',
                'order' => 6,
                'is_active' => true,
            ],
            [
                'title' => 'Proven Track Record',
                'description' => 'Decades of experience serving clients across various industries.',
                'icon' => 'fa-award',
                'order' => 7,
                'is_active' => true,
            ],
            [
                'title' => 'Flexible Solutions',
                'description' => 'Customized logistics solutions to meet your unique requirements.',
                'icon' => 'fa-sliders',
                'order' => 8,
                'is_active' => true,
            ],
        ]);
    }
}
