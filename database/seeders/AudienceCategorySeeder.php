<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AudienceCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('audience_categories')->insert([
            [
                'name' => 'Manufacturing Companies',
                'description' => 'Businesses requiring reliable logistics for raw materials and finished goods.',
                'icon' => 'fa-industry',
                'order' => 1,
                'is_active' => true,
            ],
            [
                'name' => 'Retailers',
                'description' => 'E-commerce and brick-and-mortar stores needing efficient distribution.',
                'icon' => 'fa-store',
                'order' => 2,
                'is_active' => true,
            ],
            [
                'name' => 'Import/Export Traders',
                'description' => 'Companies engaged in international trade requiring customs clearance.',
                'icon' => 'fa-exchange-alt',
                'order' => 3,
                'is_active' => true,
            ],
            [
                'name' => 'Construction & Engineering',
                'description' => 'Projects requiring heavy lifting and specialized cargo handling.',
                'icon' => 'fa-hard-hat',
                'order' => 4,
                'is_active' => true,
            ],
            [
                'name' => 'Energy & Mining',
                'description' => 'Companies in energy and mining sectors needing bulk logistics.',
                'icon' => 'fa-bolt',
                'order' => 5,
                'is_active' => true,
            ],
            [
                'name' => 'Healthcare & Pharmaceuticals',
                'description' => 'Medical companies requiring temperature-controlled logistics.',
                'icon' => 'fa-heartbeat',
                'order' => 6,
                'is_active' => true,
            ],
            [
                'name' => 'Technology & Electronics',
                'description' => 'Tech companies needing secure and fast shipping for sensitive equipment.',
                'icon' => 'fa-microchip',
                'order' => 7,
                'is_active' => true,
            ],
        ]);
    }
}
