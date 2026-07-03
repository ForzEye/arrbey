<?php

namespace App\Services;

use App\Models\Menu;
use Illuminate\Support\Facades\Cache;

class MenuService
{
    public function getAll()
    {
        return Menu::ordered()->get();
    }

    public function create(array $data)
    {
        $data['is_active'] = $data['is_active'] ?? true;
        $menu = Menu::create($data);
        Cache::forget('homepage_data');
        return $menu;
    }

    public function update(Menu $menu, array $data)
    {
        $data['is_active'] = $data['is_active'] ?? true;
        $menu->update($data);
        Cache::forget('homepage_data');
        return $menu;
    }

    public function delete(Menu $menu)
    {
        $menu->delete();
        Cache::forget('homepage_data');
    }
}