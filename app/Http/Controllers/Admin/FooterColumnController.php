<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreFooterColumnRequest;
use App\Http\Requests\UpdateFooterColumnRequest;
use App\Models\FooterColumn;
use App\Models\FooterLink;
use App\Services\FooterService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FooterColumnController extends Controller
{
    protected $service;

    public function __construct(FooterService $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        return Inertia::render('Admin/Footer/Index', [
            'columns' => $this->service->getAllColumns(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Footer/Create');
    }

    public function store(StoreFooterColumnRequest $request)
    {
        $this->service->createColumn($request->validated());
        return redirect()->route('admin.footer-columns.index')->with('success', 'Footer column created.');
    }

    public function edit(FooterColumn $footer_column)
    {
        $footer_column->load('links');
        return Inertia::render('Admin/Footer/Edit', [
            'column' => $footer_column,
        ]);
    }

    public function update(UpdateFooterColumnRequest $request, FooterColumn $footer_column)
    {
        $this->service->updateColumn($footer_column, $request->validated());
        return redirect()->route('admin.footer-columns.index')->with('success', 'Footer column updated.');
    }

    public function destroy(FooterColumn $footer_column)
    {
        $this->service->deleteColumn($footer_column);
        return redirect()->route('admin.footer-columns.index')->with('success', 'Footer column deleted.');
    }

    public function storeLink(Request $request, FooterColumn $footer_column)
    {
        $data = $request->validate([
            'label' => 'required|string|max:255',
            'url' => 'required|string|max:255',
            'order' => 'integer',
            'is_active' => 'boolean',
        ]);
        $this->service->createLink($footer_column, $data);
        return back()->with('success', 'Link added.');
    }

    public function destroyLink(FooterLink $footer_link)
    {
        $this->service->deleteLink($footer_link);
        return back()->with('success', 'Link deleted.');
    }
}
