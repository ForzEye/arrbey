import AdminLayout from '@/Layouts/AdminLayout';
import InputError from '@/components/InputError';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Head, useForm } from '@inertiajs/react';
import React, { useState } from 'react';

interface HeroProps {
    hero: {
        id?: number;
        title: string;
        description: string;
        button_text: string | null;
        button_url: string | null;
        image: string | null;
        is_active: boolean;
    };
    flash?: {
        success?: string;
    };
}

export default function Edit({ hero, flash }: HeroProps) {
    const { data, setData, post, processing, errors } = useForm({
        _method: 'PUT',
        title: hero.title || '',
        description: hero.description || '',
        button_text: hero.button_text || '',
        button_url: hero.button_url || '',
        image: null as File | null,
        is_active: hero.is_active ?? true,
    });

    const [preview, setPreview] = useState<string | null>(
        hero.image ? `/storage/${hero.image}` : null,
    );

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData('image', file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.hero.update'), {
            preserveScroll: true,
        });
    };

    return (
        <AdminLayout title="Hero Section">
            <Head title="Edit Hero Section" />

            <div className="mx-auto max-w-3xl">
                <Card>
                    <CardHeader>
                        <CardTitle>Hero Section Content</CardTitle>
                        <CardDescription>
                            Update the main hero section displayed on the public
                            homepage.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {flash?.success && (
                            <div className="mb-6 rounded-md border border-teal-200 bg-teal-50 p-4 text-teal-700">
                                {flash.success}
                            </div>
                        )}

                        <form onSubmit={submit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData('title', e.target.value)
                                    }
                                    placeholder="e.g. Global Logistics & Export Solutions"
                                />
                                <InputError message={errors.title} />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData('description', e.target.value)
                                    }
                                    placeholder="Enter a compelling description..."
                                    rows={4}
                                />
                                <InputError message={errors.description} />
                            </div>

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="button_text">
                                        Button Text
                                    </Label>
                                    <Input
                                        id="button_text"
                                        value={data.button_text}
                                        onChange={(e) =>
                                            setData(
                                                'button_text',
                                                e.target.value,
                                            )
                                        }
                                        placeholder="e.g. Let's Talk"
                                    />
                                    <InputError message={errors.button_text} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="button_url">
                                        Button URL
                                    </Label>
                                    <Input
                                        id="button_url"
                                        value={data.button_url}
                                        onChange={(e) =>
                                            setData(
                                                'button_url',
                                                e.target.value,
                                            )
                                        }
                                        placeholder="e.g. /contact"
                                    />
                                    <InputError message={errors.button_url} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="image">Background Image</Label>
                                {preview && (
                                    <div className="mb-4">
                                        <img
                                            src={preview}
                                            alt="Preview"
                                            className="h-48 w-full rounded-md border border-slate-200 object-cover"
                                        />
                                    </div>
                                )}
                                <Input
                                    id="image"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                                <p className="text-xs text-slate-500">
                                    Leave empty to keep current image.
                                    Recommended size: 1920x1080px.
                                </p>
                                <InputError message={errors.image} />
                            </div>

                            <div className="flex items-center gap-2 border-t border-slate-100 pt-4">
                                <input
                                    type="checkbox"
                                    id="is_active"
                                    checked={data.is_active}
                                    onChange={(e) =>
                                        setData('is_active', e.target.checked)
                                    }
                                    className="rounded border-slate-300 text-teal-600 shadow-sm focus:ring-teal-500"
                                />
                                <Label
                                    htmlFor="is_active"
                                    className="font-normal"
                                >
                                    Active (Show on homepage)
                                </Label>
                            </div>

                            <div className="flex justify-end pt-4">
                                <Button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-teal-900 text-white hover:bg-teal-800"
                                >
                                    {processing ? 'Saving...' : 'Save Changes'}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}
