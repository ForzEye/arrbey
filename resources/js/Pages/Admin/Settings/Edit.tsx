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

interface Props {
    settings: Record<string, string | null>;
    flash?: { success?: string };
}

export default function Edit({ settings, flash }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        _method: 'PUT',
        site_name: settings.site_name || 'Arrbey',
        site_logo: null as File | null,
        site_favicon: null as File | null,
        contact_email: settings.contact_email || '',
        contact_phone: settings.contact_phone || '',
        contact_address: settings.contact_address || '',
        social_instagram: settings.social_instagram || '',
        social_linkedin: settings.social_linkedin || '',
        social_youtube: settings.social_youtube || '',
        meta_title: settings.meta_title || '',
        meta_description: settings.meta_description || '',
    });

    const [logoPreview, setLogoPreview] = useState<string | null>(
        settings.site_logo ? `/storage/${settings.site_logo}` : null,
    );
    const [faviconPreview, setFaviconPreview] = useState<string | null>(
        settings.site_favicon ? `/storage/${settings.site_favicon}` : null,
    );

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.settings.update'));
    };

    const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData('site_logo', file);
            setLogoPreview(URL.createObjectURL(file));
        }
    };

    const handleFaviconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData('site_favicon', file);
            setFaviconPreview(URL.createObjectURL(file));
        }
    };

    return (
        <AdminLayout title="Site Settings">
            <Head title="Site Settings" />
            <div className="mx-auto max-w-4xl">
                {flash?.success && (
                    <div className="mb-6 rounded-md border border-teal-200 bg-teal-50 p-4 text-teal-700">
                        {flash.success}
                    </div>
                )}

                <Card>
                    <CardHeader>
                        <CardTitle>Site Settings</CardTitle>
                        <CardDescription>
                            Manage website identity, contact information, social
                            links, and SEO defaults.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submit} className="space-y-8">
                            <section className="space-y-4">
                                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                                    Brand Identity
                                </h3>
                                <div className="space-y-2">
                                    <Label htmlFor="site_name">Site Name</Label>
                                    <Input
                                        id="site_name"
                                        value={data.site_name}
                                        onChange={(e) =>
                                            setData('site_name', e.target.value)
                                        }
                                    />
                                    <InputError message={errors.site_name} />
                                </div>
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="site_logo">Logo</Label>
                                        {logoPreview && (
                                            <img
                                                src={logoPreview}
                                                alt="Logo Preview"
                                                className="h-16 w-auto rounded border border-slate-200 bg-slate-50 p-2"
                                            />
                                        )}
                                        <Input
                                            id="site_logo"
                                            type="file"
                                            accept="image/*"
                                            onChange={handleLogoChange}
                                        />
                                        <InputError
                                            message={errors.site_logo}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="site_favicon">
                                            Favicon
                                        </Label>
                                        {faviconPreview && (
                                            <img
                                                src={faviconPreview}
                                                alt="Favicon Preview"
                                                className="h-12 w-12 rounded border border-slate-200 bg-slate-50 p-2"
                                            />
                                        )}
                                        <Input
                                            id="site_favicon"
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFaviconChange}
                                        />
                                        <InputError
                                            message={errors.site_favicon}
                                        />
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-4">
                                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                                    Contact
                                </h3>
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="contact_email">
                                            Email
                                        </Label>
                                        <Input
                                            id="contact_email"
                                            type="email"
                                            value={data.contact_email}
                                            onChange={(e) =>
                                                setData(
                                                    'contact_email',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.contact_email}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="contact_phone">
                                            Phone
                                        </Label>
                                        <Input
                                            id="contact_phone"
                                            value={data.contact_phone}
                                            onChange={(e) =>
                                                setData(
                                                    'contact_phone',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.contact_phone}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="contact_address">
                                        Address
                                    </Label>
                                    <Textarea
                                        id="contact_address"
                                        value={data.contact_address}
                                        onChange={(e) =>
                                            setData(
                                                'contact_address',
                                                e.target.value,
                                            )
                                        }
                                        rows={3}
                                    />
                                    <InputError
                                        message={errors.contact_address}
                                    />
                                </div>
                            </section>

                            <section className="space-y-4">
                                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                                    Social Links
                                </h3>
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                                    <div className="space-y-2">
                                        <Label htmlFor="social_instagram">
                                            Instagram
                                        </Label>
                                        <Input
                                            id="social_instagram"
                                            value={data.social_instagram}
                                            onChange={(e) =>
                                                setData(
                                                    'social_instagram',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="social_linkedin">
                                            LinkedIn
                                        </Label>
                                        <Input
                                            id="social_linkedin"
                                            value={data.social_linkedin}
                                            onChange={(e) =>
                                                setData(
                                                    'social_linkedin',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="social_youtube">
                                            YouTube
                                        </Label>
                                        <Input
                                            id="social_youtube"
                                            value={data.social_youtube}
                                            onChange={(e) =>
                                                setData(
                                                    'social_youtube',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-4">
                                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                                    SEO Defaults
                                </h3>
                                <div className="space-y-2">
                                    <Label htmlFor="meta_title">
                                        Meta Title
                                    </Label>
                                    <Input
                                        id="meta_title"
                                        value={data.meta_title}
                                        onChange={(e) =>
                                            setData(
                                                'meta_title',
                                                e.target.value,
                                            )
                                        }
                                    />
                                    <InputError message={errors.meta_title} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="meta_description">
                                        Meta Description
                                    </Label>
                                    <Textarea
                                        id="meta_description"
                                        value={data.meta_description}
                                        onChange={(e) =>
                                            setData(
                                                'meta_description',
                                                e.target.value,
                                            )
                                        }
                                        rows={3}
                                    />
                                    <InputError
                                        message={errors.meta_description}
                                    />
                                </div>
                            </section>

                            <div className="flex justify-end">
                                <Button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-teal-900 text-white hover:bg-teal-800"
                                >
                                    {processing ? 'Saving...' : 'Save Settings'}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}
