<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FooterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('footer_columns')->insert([
            ['title' => 'Company', 'order' => 1, 'is_active' => true],
            ['title' => 'Services', 'order' => 2, 'is_active' => true],
            ['title' => 'Programs', 'order' => 3, 'is_active' => true],
            ['title' => 'Contact', 'order' => 4, 'is_active' => true],
        ]);

        DB::table('footer_links')->insert([
            ['footer_column_id' => 1, 'label' => 'About Us', 'url' => '/about', 'order' => 1, 'is_active' => true],
            ['footer_column_id' => 1, 'label' => 'Our Team', 'url' => '/about/team', 'order' => 2, 'is_active' => true],
            ['footer_column_id' => 1, 'label' => 'Careers', 'url' => '/about/careers', 'order' => 3, 'is_active' => true],
            ['footer_column_id' => 1, 'label' => 'News & Insights', 'url' => '/about/news', 'order' => 4, 'is_active' => true],
            ['footer_column_id' => 2, 'label' => 'Ocean Freight', 'url' => '/services/ocean-freight', 'order' => 1, 'is_active' => true],
            ['footer_column_id' => 2, 'label' => 'Air Freight', 'url' => '/services/air-freight', 'order' => 2, 'is_active' => true],
            ['footer_column_id' => 2, 'label' => 'Warehousing', 'url' => '/services/warehousing', 'order' => 3, 'is_active' => true],
            ['footer_column_id' => 2, 'label' => 'Customs Clearance', 'url' => '/services/customs', 'order' => 4, 'is_active' => true],
            ['footer_column_id' => 3, 'label' => 'Custom Export', 'url' => '/programs/custom-export', 'order' => 1, 'is_active' => true],
            ['footer_column_id' => 3, 'label' => 'Warehousing', 'url' => '/programs/warehousing', 'order' => 2, 'is_active' => true],
            ['footer_column_id' => 3, 'label' => 'Project Cargo', 'url' => '/programs/project-cargo', 'order' => 3, 'is_active' => true],
            ['footer_column_id' => 3, 'label' => 'Supply Chain', 'url' => '/programs/supply-chain', 'order' => 4, 'is_active' => true],
            ['footer_column_id' => 4, 'label' => 'Contact Us', 'url' => '/contact', 'order' => 1, 'is_active' => true],
            ['footer_column_id' => 4, 'label' => 'Email', 'url' => 'mailto:info@arrbey.com', 'order' => 2, 'is_active' => true],
            ['footer_column_id' => 4, 'label' => 'Phone', 'url' => 'tel:+622112345678', 'order' => 3, 'is_active' => true],
            ['footer_column_id' => 4, 'label' => 'Address', 'url' => '/contact', 'order' => 4, 'is_active' => true],
        ]);
    }
}
