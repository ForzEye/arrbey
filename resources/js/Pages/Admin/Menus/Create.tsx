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
import { Head, Link, useForm } from '@inertiajs/react';
import React from 'react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        url: '',
        location: 'header',
        order: 0,
        is_active: true,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.menus.store'));
    };

    return (
        <AdminLayout title="Create Menu">
            <Head title="Create Menu" />
            <div className="mx-auto max-w-3xl">
                <Card>
                    <CardHeader>
                        <CardTitle>Create Menu</CardTitle>
                        <CardDescription>
                            Add a new navigation menu item.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                                    <Label htmlFor="url">URL</Label>
                                    <Input
                                        id="url"
                                        value={data.url}
                                        onChange={(e) =>
                                            setData('url', e.target.value)
                                        }
                                        placeholder="/about-us"
                                    />
                                    <InputError message={errors.url} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="location">Location</Label>
                                    <select
                                        id="location"
                                        value={data.location}
                                        onChange={(e) =>
                                            setData('location', e.target.value)
                                        }
                                        className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
                                    >
                                        <option value="header">Header</option>
                                        <option value="footer">Footer</option>
                                    </select>
                                    <InputError message={errors.location} />
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
                                    href={route('admin.menus.index')}
                                    className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                                >
                                    Cancel
                                </Link>
                                <Button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-teal-900 text-white hover:bg-teal-800"
                                >
                                    {processing ? 'Saving...' : 'Create'}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}
