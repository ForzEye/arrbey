<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServiceUnitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('service_units')->insert([
            [
                'name' => 'Ocean Freight',
                'subtitle' => 'Sea Shipping Solutions',
                'description' => 'Reliable ocean freight services for containers and bulk cargo. We offer FCL and LCL options with competitive rates.',
                'image' => '',
                'accent_color' => '#0d9488',
                'order' => 1,
                'is_active' => true,
            ],
            [
                'name' => 'Air Freight',
                'subtitle' => 'Air Cargo Services',
                'description' => 'Fast and secure air freight solutions for time-sensitive shipments. We handle both cargo and passenger flights.',
                'image' => '',
                'accent_color' => '#0d9488',
                'order' => 2,
                'is_active' => true,
            ],
            [
                'name' => 'Land Transport',
                'subtitle' => 'Road & Rail Solutions',
                'description' => 'Comprehensive land transport services including trucking and rail freight for domestic and cross-border shipments.',
                'image' => '',
                'accent_color' => '#0d9488',
                'order' => 3,
                'is_active' => true,
            ],
            [
                'name' => 'Warehousing',
                'subtitle' => 'Storage & Distribution',
                'description' => 'Modern warehousing facilities with inventory management and distribution services to streamline your supply chain.',
                'image' => '',
                'accent_color' => '#0d9488',
                'order' => 4,
                'is_active' => true,
            ],
            [
                'name' => 'Customs Clearance',
                'subtitle' => 'Regulatory Compliance',
                'description' => 'Expert customs brokerage services to ensure smooth clearance of your shipments through all customs procedures.',
                'image' => '',
                'accent_color' => '#0d9488',
                'order' => 5,
                'is_active' => true,
            ],
            [
                'name' => 'Project Cargo',
                'subtitle' => 'Heavy Lifting Solutions',
                'description' => 'Specialized project cargo handling for oversized and heavy equipment with advanced logistics planning.',
                'image' => '',
                'accent_color' => '#0d9488',
                'order' => 6,
                'is_active' => true,
            ],
            [
                'name' => 'Supply Chain Management',
                'subtitle' => 'End-to-End Solutions',
                'description' => 'Comprehensive supply chain management services to optimize your logistics operations and reduce costs.',
                'image' => '',
                'accent_color' => '#0d9488',
                'order' => 7,
                'is_active' => true,
            ],
        ]);
    }
}
