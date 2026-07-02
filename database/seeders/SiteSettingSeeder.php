<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SiteSettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('site_settings')->insert([
            ['key' => 'site_name', 'value' => 'Arrbey', 'type' => 'string'],
            ['key' => 'site_description', 'value' => 'Global Logistics & Export Solutions', 'type' => 'string'],
            ['key' => 'contact_email', 'value' => 'info@arrbey.com', 'type' => 'string'],
            ['key' => 'contact_phone', 'value' => '+62 21 1234 5678', 'type' => 'string'],
            ['key' => 'contact_address', 'value' => 'Jakarta, Indonesia', 'type' => 'string'],
            ['key' => 'logo_path', 'value' => '', 'type' => 'string'],
            ['key' => 'favicon_path', 'value' => '', 'type' => 'string'],
            ['key' => 'meta_title', 'value' => 'Arrbey - Global Logistics & Export Solutions', 'type' => 'string'],
            ['key' => 'meta_description', 'value' => 'Leading provider of global logistics, export services, and supply chain solutions for businesses worldwide.', 'type' => 'string'],
        ]);
    }
}
