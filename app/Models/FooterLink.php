<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\HasFactory;

class FooterLink extends Model
{
    use HasFactory;

    protected $fillable = ['footer_column_id', 'label', 'url', 'order', 'is_active'];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function column()
    {
        return $this->belongsTo(FooterColumn::class);
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
