<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProgramSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('programs')->insert([
            [
                'title' => 'Custom Export Solutions',
                'description' => 'Tailored export services designed to meet your specific business requirements. We handle everything from documentation to final delivery.',
                'image' => '',
                'url' => '/programs/custom-export',
                'order' => 1,
                'is_active' => true,
            ],
            [
                'title' => 'Warehousing & Distribution',
                'description' => 'Comprehensive warehousing solutions with inventory management and distribution services to optimize your supply chain.',
                'image' => '',
                'url' => '/programs/warehousing',
                'order' => 2,
                'is_active' => true,
            ],
            [
                'title' => 'Project Cargo Handling',
                'description' => 'Specialized handling for oversized and heavy equipment with advanced logistics planning and execution.',
                'image' => '',
                'url' => '/programs/project-cargo',
                'order' => 3,
                'is_active' => true,
            ],
            [
                'title' => 'Supply Chain Optimization',
                'description' => 'End-to-end supply chain management services to reduce costs and improve efficiency across your operations.',
                'image' => '',
                'url' => '/programs/supply-chain',
                'order' => 4,
                'is_active' => true,
            ],
            [
                'title' => 'Cold Chain Logistics',
                'description' => 'Temperature-controlled logistics solutions for perishable goods and sensitive products.',
                'image' => '',
                'url' => '/programs/cold-chain',
                'order' => 5,
                'is_active' => true,
            ],
            [
                'title' => 'Last-Mile Delivery',
                'description' => 'Efficient last-mile delivery services to ensure timely and accurate final delivery to your customers.',
                'image' => '',
                'url' => '/programs/last-mile',
                'order' => 6,
                'is_active' => true,
            ],
        ]);
    }
}
