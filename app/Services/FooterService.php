<?php

namespace App\Services;

use App\Models\FooterColumn;
use App\Models\FooterLink;
use Illuminate\Support\Facades\Cache;

class FooterService
{
    public function getAllColumns()
    {
        return FooterColumn::with('links')->ordered()->get();
    }

    public function createColumn(array $data)
    {
        $data['is_active'] = $data['is_active'] ?? true;
        $column = FooterColumn::create($data);
        Cache::forget('homepage_data');
        return $column;
    }

    public function updateColumn(FooterColumn $column, array $data)
    {
        $data['is_active'] = $data['is_active'] ?? true;
        $column->update($data);
        Cache::forget('homepage_data');
        return $column;
    }

    public function deleteColumn(FooterColumn $column)
    {
        $column->links()->delete();
        $column->delete();
        Cache::forget('homepage_data');
    }

    public function createLink(FooterColumn $column, array $data)
    {
        $data['footer_column_id'] = $column->id;
        $data['is_active'] = $data['is_active'] ?? true;
        $link = FooterLink::create($data);
        Cache::forget('homepage_data');
        return $link;
    }

    public function deleteLink(FooterLink $link)
    {
        $link->delete();
        Cache::forget('homepage_data');
    }
}