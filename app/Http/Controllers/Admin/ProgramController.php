<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProgramRequest;
use App\Http\Requests\UpdateProgramRequest;
use App\Models\Program;
use App\Services\ProgramService;
use Inertia\Inertia;

class ProgramController extends Controller
{
    protected $service;

    public function __construct(ProgramService $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        $programs = $this->service->getAll();

        return Inertia::render('Admin/Programs/Index', [
            'programs' => $programs
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Programs/Create');
    }

    public function store(StoreProgramRequest $request)
    {
        $data = $request->validated();
        $imageFile = $request->file('image');

        $this->service->create($data, $imageFile);

        return redirect()->route('admin.programs.index')->with('success', 'Program created successfully.');
    }

    public function edit(Program $program)
    {
        return Inertia::render('Admin/Programs/Edit', [
            'program' => $program
        ]);
    }

    public function update(UpdateProgramRequest $request, Program $program)
    {
        $data = $request->validated();
        $imageFile = $request->file('image');

        $this->service->update($program, $data, $imageFile);

        return redirect()->route('admin.programs.index')->with('success', 'Program updated successfully.');
    }

    public function destroy(Program $program)
    {
        $this->service->delete($program);

        return redirect()->route('admin.programs.index')->with('success', 'Program deleted successfully.');
    }
}
