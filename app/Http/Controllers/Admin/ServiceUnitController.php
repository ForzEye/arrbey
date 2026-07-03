<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreServiceUnitRequest;
use App\Http\Requests\UpdateServiceUnitRequest;
use App\Models\ServiceUnit;
use App\Services\ServiceUnitService;
use Inertia\Inertia;

class ServiceUnitController extends Controller
{
    protected $service;

    public function __construct(ServiceUnitService $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        $units = $this->service->getAll();

        return Inertia::render('Admin/ServiceUnits/Index', [
            'units' => $units
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/ServiceUnits/Create');
    }

    public function store(StoreServiceUnitRequest $request)
    {
        $data = $request->validated();
        $imageFile = $request->file('image');

        $this->service->create($data, $imageFile);

        return redirect()->route('admin.service-units.index')->with('success', 'Service unit created successfully.');
    }

    public function edit(ServiceUnit $serviceUnit)
    {
        return Inertia::render('Admin/ServiceUnits/Edit', [
            'unit' => $serviceUnit
        ]);
    }

    public function update(UpdateServiceUnitRequest $request, ServiceUnit $serviceUnit)
    {
        $data = $request->validated();
        $imageFile = $request->file('image');

        $this->service->update($serviceUnit, $data, $imageFile);

        return redirect()->route('admin.service-units.index')->with('success', 'Service unit updated successfully.');
    }

    public function destroy(ServiceUnit $serviceUnit)
    {
        $this->service->delete($serviceUnit);

        return redirect()->route('admin.service-units.index')->with('success', 'Service unit deleted successfully.');
    }
}
