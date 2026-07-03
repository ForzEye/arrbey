import AdminLayout from '@/Layouts/AdminLayout';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Head, Link, useForm } from '@inertiajs/react';
import { Edit, Plus, Trash2 } from 'lucide-react';

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
    columns: FooterColumn[];
    flash?: { success?: string };
}

export default function Index({ columns, flash }: Props) {
    const { delete: destroy } = useForm();

    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this footer column?')) {
            destroy(route('admin.footer-columns.destroy', id));
        }
    };

    return (
        <AdminLayout title="Footer">
            <Head title="Footer" />

            <div className="mx-auto max-w-5xl">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-slate-800">
                        Manage Footer
                    </h2>
                    <Link
                        href={route('admin.footer-columns.create')}
                        className={cn(
                            buttonVariants(),
                            'flex items-center gap-2 bg-teal-900 text-white hover:bg-teal-800',
                        )}
                    >
                        <Plus className="h-4 w-4" /> Add Column
                    </Link>
                </div>

                {flash?.success && (
                    <div className="mb-6 rounded-md border border-teal-200 bg-teal-50 p-4 text-teal-700">
                        {flash.success}
                    </div>
                )}

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {columns.map((column) => (
                        <Card key={column.id}>
                            <CardContent className="p-6">
                                <div className="mb-4 flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="font-semibold text-slate-900">
                                            {column.title}
                                        </h3>
                                        <p className="text-xs text-slate-500">
                                            Order: {column.order} •{' '}
                                            {column.is_active
                                                ? 'Active'
                                                : 'Inactive'}
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <Link
                                            href={route(
                                                'admin.footer-columns.edit',
                                                column.id,
                                            )}
                                            className={cn(
                                                buttonVariants({
                                                    variant: 'outline',
                                                    size: 'sm',
                                                }),
                                                'h-8 px-2',
                                            )}
                                        >
                                            <Edit className="h-4 w-4" />
                                        </Link>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="h-8 px-2 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600"
                                            onClick={() =>
                                                handleDelete(column.id)
                                            }
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    {column.links.length === 0 ? (
                                        <p className="text-sm text-slate-500">
                                            No links yet.
                                        </p>
                                    ) : (
                                        column.links.map((link) => (
                                            <div
                                                key={link.id}
                                                className="flex items-center justify-between rounded-md border border-slate-100 bg-slate-50 px-3 py-2 text-sm"
                                            >
                                                <span className="font-medium text-slate-700">
                                                    {link.label}
                                                </span>
                                                <span className="text-slate-500">
                                                    {link.url}
                                                </span>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </AdminLayout>
    );
}
