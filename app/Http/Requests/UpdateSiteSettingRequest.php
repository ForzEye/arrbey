<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSiteSettingRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'site_name' => ['nullable', 'string', 'max:255'],
            'site_logo' => ['nullable', 'image', 'max:2048'],
            'site_favicon' => ['nullable', 'image', 'max:1024'],
            'contact_email' => ['nullable', 'email', 'max:255'],
            'contact_phone' => ['nullable', 'string', 'max:255'],
            'contact_address' => ['nullable', 'string'],
            'social_instagram' => ['nullable', 'string', 'max:255'],
            'social_linkedin' => ['nullable', 'string', 'max:255'],
            'social_youtube' => ['nullable', 'string', 'max:255'],
            'meta_title' => ['nullable', 'string', 'max:255'],
            'meta_description' => ['nullable', 'string'],
        ];
    }
}
