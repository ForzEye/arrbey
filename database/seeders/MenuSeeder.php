<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('menus')->insert([
            ['name' => 'Home', 'location' => 'header', 'url' => '/', 'order' => 1, 'is_active' => true],
            ['name' => 'About', 'location' => 'header', 'url' => '/about', 'order' => 2, 'is_active' => true],
            ['name' => 'Services', 'location' => 'header', 'url' => '/services', 'order' => 3, 'is_active' => true],
            ['name' => 'Programs', 'location' => 'header', 'url' => '/programs', 'order' => 4, 'is_active' => true],
            ['name' => 'Contact', 'location' => 'header', 'url' => '/contact', 'order' => 5, 'is_active' => true],
            ['name' => 'About', 'location' => 'footer', 'url' => '/about', 'order' => 1, 'is_active' => true],
            ['name' => 'Services', 'location' => 'footer', 'url' => '/services', 'order' => 2, 'is_active' => true],
            ['name' => 'Programs', 'location' => 'footer', 'url' => '/programs', 'order' => 3, 'is_active' => true],
            ['name' => 'Contact', 'location' => 'footer', 'url' => '/contact', 'order' => 4, 'is_active' => true],
        ]);
    }
}
