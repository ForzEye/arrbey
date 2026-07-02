<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServiceBarItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('service_bar_items')->insert([
            ['label' => 'Export', 'icon' => 'fa-ship', 'url' => '/services/export', 'order' => 1, 'is_active' => true],
            ['label' => 'Import', 'icon' => 'fa-truck', 'url' => '/services/import', 'order' => 2, 'is_active' => true],
            ['label' => 'Warehousing', 'icon' => 'fa-warehouse', 'url' => '/services/warehousing', 'order' => 3, 'is_active' => true],
            ['label' => 'Distribution', 'icon' => 'fa-distribution', 'url' => '/services/distribution', 'order' => 4, 'is_active' => true],
        ]);
    }
}
