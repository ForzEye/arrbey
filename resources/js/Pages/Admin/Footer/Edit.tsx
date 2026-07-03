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
import { Trash2 } from 'lucide-react';
import React from 'react';

interface FooterLink {
    id: number;
    label: string;
    url: string;
    order: number;
    is_active: boolean;
}

interface FooterColumn {
    id: number;
    title: string;
    order: number;
    is_active: boolean;
    links: FooterLink[];
}

interface Props {
    column: FooterColumn;
    flash?: { success?: string };
}

export default function Edit({ column, flash }: Props) {
    const { data, setData, put, processing, errors } = useForm({
        title: column.title || '',
        order: column.order || 0,
        is_active: column.is_active ?? true,
    });

    const {
        data: linkData,
        setData: setLinkData,
        post: postLink,
        processing: linkProcessing,
        errors: linkErrors,
        reset: resetLink,
    } = useForm({
        label: '',
        url: '',
        order: 0,
        is_active: true,
    });

    const { delete: destroyLink } = useForm();

    const submitColumn = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('admin.footer-columns.update', column.id));
    };

    const submitLink = (e: React.FormEvent) => {
        e.preventDefault();
        postLink(route('admin.footer-columns.links.store', column.id), {
            onSuccess: () => resetLink(),
        });
    };

    const handleDeleteLink = (id: number) => {
        if (confirm('Are you sure you want to delete this link?')) {
            destroyLink(route('admin.footer-links.destroy', id));
        }
    };

    return (
        <AdminLayout title="Edit Footer Column">
            <Head title="Edit Footer Column" />
            <div className="mx-auto max-w-5xl space-y-6">
                {flash?.success && (
                    <div className="rounded-md border border-teal-200 bg-teal-50 p-4 text-teal-700">
                        {flash.success}
                    </div>
                )}

                <Card>
                    <CardHeader>
                        <CardTitle>Edit Footer Column</CardTitle>
                        <CardDescription>
                            Update column details.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submitColumn} className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="title">Title</Label>
                                    <Input
                                        id="title"
                                        value={data.title}
                                        onChange={(e) =>
                                            setData('title', e.target.value)
                                        }
                                    />
                                    <InputError message={errors.title} />
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
                                    href={route('admin.footer-columns.index')}
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

                <Card>
                    <CardHeader>
                        <CardTitle>Footer Links</CardTitle>
                        <CardDescription>
                            Manage links for this column.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            <div className="rounded-md border border-slate-200">
                                <table className="w-full text-left text-sm">
                                    <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase text-slate-500">
                                        <tr>
                                            <th className="px-4 py-3 font-medium">
                                                Order
                                            </th>
                                            <th className="px-4 py-3 font-medium">
                                                Label
                                            </th>
                                            <th className="px-4 py-3 font-medium">
                                                URL
                                            </th>
                                            <th className="px-4 py-3 font-medium">
                                                Status
                                            </th>
                                            <th className="px-4 py-3 text-right font-medium">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {column.links.length === 0 ? (
                                            <tr>
                                                <td
                                                    colSpan={5}
                                                    className="px-4 py-6 text-center text-slate-500"
                                                >
                                                    No links found.
                                                </td>
                                            </tr>
                                        ) : (
                                            column.links.map((link) => (
                                                <tr
                                                    key={link.id}
                                                    className="border-b border-slate-100 hover:bg-slate-50"
                                                >
                                                    <td className="px-4 py-3">
                                                        {link.order}
                                                    </td>
                                                    <td className="px-4 py-3 font-medium text-slate-900">
                                                        {link.label}
                                                    </td>
                                                    <td className="px-4 py-3 text-slate-500">
                                                        {link.url}
                                                    </td>
                                                    <td className="px-4 py-3">
                                                        <span
                                                            className={`rounded-full px-2 py-1 text-[10px] font-medium ${link.is_active ? 'bg-teal-100 text-teal-800' : 'bg-slate-100 text-slate-800'}`}
                                                        >
                                                            {link.is_active
                                                                ? 'Active'
                                                                : 'Inactive'}
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3 text-right">
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            className="h-7 px-2 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600"
                                                            onClick={() =>
                                                                handleDeleteLink(
                                                                    link.id,
                                                                )
                                                            }
                                                        >
                                                            <Trash2 className="h-3.5 w-3.5" />
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                                <h4 className="mb-4 font-medium text-slate-900">
                                    Add New Link
                                </h4>
                                <form
                                    onSubmit={submitLink}
                                    className="grid grid-cols-1 items-end gap-4 md:grid-cols-12"
                                >
                                    <div className="space-y-2 md:col-span-3">
                                        <Label htmlFor="link_label">
                                            Label
                                        </Label>
                                        <Input
                                            id="link_label"
                                            value={linkData.label}
                                            onChange={(e) =>
                                                setLinkData(
                                                    'label',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        <InputError
                                            message={linkErrors.label}
                                        />
                                    </div>
                                    <div className="space-y-2 md:col-span-4">
                                        <Label htmlFor="link_url">URL</Label>
                                        <Input
                                            id="link_url"
                                            value={linkData.url}
                                            onChange={(e) =>
                                                setLinkData(
                                                    'url',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        <InputError message={linkErrors.url} />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <Label htmlFor="link_order">
                                            Order
                                        </Label>
                                        <Input
                                            id="link_order"
                                            type="number"
                                            value={linkData.order}
                                            onChange={(e) =>
                                                setLinkData(
                                                    'order',
                                                    Number(e.target.value),
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="flex h-10 items-center md:col-span-1">
                                        <input
                                            type="checkbox"
                                            id="link_active"
                                            checked={linkData.is_active}
                                            onChange={(e) =>
                                                setLinkData(
                                                    'is_active',
                                                    e.target.checked,
                                                )
                                            }
                                            className="rounded border-slate-300 text-teal-600 shadow-sm focus:ring-teal-500"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <Button
                                            type="submit"
                                            disabled={linkProcessing}
                                            className="w-full bg-slate-900 text-white hover:bg-slate-800"
                                        >
                                            Add Link
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}
