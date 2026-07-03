<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class FooterColumn extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'order', 'is_active'];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function links()
    {
        return $this->hasMany(FooterLink::class)->active()->ordered();
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('order');
    }
}
