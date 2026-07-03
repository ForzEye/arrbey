<?php

namespace App\Services;

use App\Models\Program;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Cache;

class ProgramService
{
    public function getAll()
    {
        return Program::ordered()->get();
    }

    public function create(array $data, $imageFile = null)
    {
        if ($imageFile) {
            $data['image'] = $imageFile->store('programs', 'public');
        }

        $data['is_active'] = $data['is_active'] ?? true;
        $program = Program::create($data);

        Cache::forget('homepage_data');
        return $program;
    }

    public function update(Program $program, array $data, $imageFile = null)
    {
        if ($imageFile) {
            if ($program->image) {
                Storage::disk('public')->delete($program->image);
            }
            $data['image'] = $imageFile->store('programs', 'public');
        }

        $data['is_active'] = $data['is_active'] ?? true;
        $program->update($data);

        Cache::forget('homepage_data');
        return $program;
    }

    public function delete(Program $program)
    {
        if ($program->image) {
            Storage::disk('public')->delete($program->image);
        }
        
        $program->delete();
        Cache::forget('homepage_data');
    }
}