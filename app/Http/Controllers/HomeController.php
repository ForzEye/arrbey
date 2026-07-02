<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\HomepageService;
use Inertia\Inertia;

class HomeController extends Controller
{
    protected $homepageService;

    public function __construct(HomepageService $homepageService)
    {
        $this->homepageService = $homepageService;
    }

    public function index()
    {
        $data = $this->homepageService->getHomepageData();
        return Inertia::render('Public/Home', $data);
    }
}
