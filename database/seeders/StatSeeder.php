<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('stats')->insert([
            ['label' => 'Years Experience', 'value' => '15', 'suffix' => '+', 'order' => 1, 'is_active' => true],
            ['label' => 'Countries Served', 'value' => '50', 'suffix' => '+', 'order' => 2, 'is_active' => true],
            ['label' => 'Clients Worldwide', 'value' => '1000', 'suffix' => '+', 'order' => 3, 'is_active' => true],
            ['label' => 'Shipments Handled', 'value' => '50000', 'suffix' => '+', 'order' => 4, 'is_active' => true],
        ]);
    }
}
