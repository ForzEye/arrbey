<?php

use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\Admin\HeroSectionController;
use App\Http\Controllers\Admin\ServiceUnitController;
use App\Http\Controllers\Admin\ProgramController;
use App\Http\Controllers\Admin\MenuController;
use App\Http\Controllers\Admin\FooterColumnController;
use App\Http\Controllers\Admin\SiteSettingController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::middleware(['auth', 'verified'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', [AdminDashboardController::class, 'index'])->name('dashboard');
    
    // Hero Section
    Route::get('/hero', [HeroSectionController::class, 'edit'])->name('hero.edit');
    Route::put('/hero', [HeroSectionController::class, 'update'])->name('hero.update');

    // Service Units
    Route::resource('service-units', ServiceUnitController::class)->except(['show']);

    // Programs
    Route::resource('programs', ProgramController::class)->except(['show']);

    // Menus
    Route::resource('menus', MenuController::class)->except(['show']);

    // Footer Columns & Links
    Route::resource('footer-columns', FooterColumnController::class)->except(['show']);
    Route::post('footer-columns/{footer_column}/links', [FooterColumnController::class, 'storeLink'])->name('footer-columns.links.store');
    Route::delete('footer-links/{footer_link}', [FooterColumnController::class, 'destroyLink'])->name('footer-links.destroy');

    // Site Settings
    Route::get('/settings', [SiteSettingController::class, 'edit'])->name('settings.edit');
    Route::put('/settings', [SiteSettingController::class, 'update'])->name('settings.update');
});

Route::redirect('/dashboard', '/admin')
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
