<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\ServiceUnit;
use App\Models\Program;
use App\Models\HeroSection;
use App\Models\User;

class DashboardController extends Controller
{
    public function index()
    {
        $stats = [
            'service_units_count' => ServiceUnit::active()->count(),
            'programs_count' => Program::active()->count(),
            'hero_active' => HeroSection::active()->exists(),
            'users_count' => User::count(),
        ];

        return Inertia::render('Admin/Dashboard', [
            'stats' => $stats
        ]);
    }
}
