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
import { Head, Link, useForm } from '@inertiajs/react';
import React, { useState } from 'react';

interface ServiceUnit {
    id: number;
    name: string;
    subtitle: string | null;
    description: string;
    image: string | null;
    accent_color: string;
    order: number;
    is_active: boolean;
}

interface Props {
    unit: ServiceUnit;
}

export default function Edit({ unit }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        _method: 'PUT',
        name: unit.name || '',
        subtitle: unit.subtitle || '',
        description: unit.description || '',
        image: null as File | null,
        accent_color: unit.accent_color || '#0d9488',
        order: unit.order || 0,
        is_active: unit.is_active ?? true,
    });

    const [preview, setPreview] = useState<string | null>(
        unit.image ? `/storage/${unit.image}` : null,
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
        post(route('admin.service-units.update', unit.id));
    };

    return (
        <AdminLayout title="Edit Service Unit">
            <Head title="Edit Service Unit" />
            <div className="mx-auto max-w-3xl">
                <Card>
                    <CardHeader>
                        <CardTitle>Edit Service Unit</CardTitle>
                        <CardDescription>
                            Update the details of the service unit.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                />
                                <InputError message={errors.name} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="subtitle">Subtitle</Label>
                                <Input
                                    id="subtitle"
                                    value={data.subtitle}
                                    onChange={(e) =>
                                        setData('subtitle', e.target.value)
                                    }
                                />
                                <InputError message={errors.subtitle} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData('description', e.target.value)
                                    }
                                    rows={4}
                                />
                                <InputError message={errors.description} />
                            </div>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="accent_color">
                                        Accent Color
                                    </Label>
                                    <Input
                                        id="accent_color"
                                        type="color"
                                        value={data.accent_color}
                                        onChange={(e) =>
                                            setData(
                                                'accent_color',
                                                e.target.value,
                                            )
                                        }
                                        className="h-10"
                                    />
                                    <InputError message={errors.accent_color} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="order">Order</Label>
                                    <Input
                                        id="order"
                                        type="number"
                                        value={data.order}
                                        onChange={(e) =>
                                            setData(
                                                'order',
                                                Number(e.target.value),
                                            )
                                        }
                                    />
                                    <InputError message={errors.order} />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="image">Image</Label>
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
                                </p>
                                <InputError message={errors.image} />
                            </div>
                            <div className="flex items-center gap-2">
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
                                    Active
                                </Label>
                            </div>
                            <div className="flex justify-end gap-3">
                                <Link
                                    href={route('admin.service-units.index')}
                                    className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                                >
                                    Cancel
                                </Link>
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
