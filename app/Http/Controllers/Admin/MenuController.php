<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMenuRequest;
use App\Http\Requests\UpdateMenuRequest;
use App\Models\Menu;
use App\Services\MenuService;
use Inertia\Inertia;

class MenuController extends Controller
{
    protected $service;

    public function __construct(MenuService $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        return Inertia::render('Admin/Menus/Index', [
            'menus' => $this->service->getAll(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Menus/Create');
    }

    public function store(StoreMenuRequest $request)
    {
        $this->service->create($request->validated());

        return redirect()->route('admin.menus.index')->with('success', 'Menu created successfully.');
    }

    public function edit(Menu $menu)
    {
        return Inertia::render('Admin/Menus/Edit', [
            'menu' => $menu,
        ]);
    }

    public function update(UpdateMenuRequest $request, Menu $menu)
    {
        $this->service->update($menu, $request->validated());

        return redirect()->route('admin.menus.index')->with('success', 'Menu updated successfully.');
    }

    public function destroy(Menu $menu)
    {
        $this->service->delete($menu);

        return redirect()->route('admin.menus.index')->with('success', 'Menu deleted successfully.');
    }
}
