import AdminLayout from '@/Layouts/AdminLayout';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Head, Link, useForm } from '@inertiajs/react';
import { Edit, Plus, Trash2 } from 'lucide-react';

interface ServiceUnit {
    id: number;
    name: string;
    subtitle: string | null;
    is_active: boolean;
    order: number;
}

interface Props {
    units: ServiceUnit[];
    flash?: {
        success?: string;
    };
}

export default function Index({ units, flash }: Props) {
    const { delete: destroy } = useForm();

    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this service unit?')) {
            destroy(route('admin.service-units.destroy', id));
        }
    };

    return (
        <AdminLayout title="Service Units">
            <Head title="Service Units" />

            <div className="mx-auto max-w-5xl">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-slate-800">
                        Manage Service Units
                    </h2>
                    <Link
                        href={route('admin.service-units.create')}
                        className={cn(
                            buttonVariants(),
                            'flex items-center gap-2 bg-teal-900 text-white hover:bg-teal-800',
                        )}
                    >
                        <Plus className="h-4 w-4" /> Add New Unit
                    </Link>
                </div>

                {flash?.success && (
                    <div className="mb-6 rounded-md border border-teal-200 bg-teal-50 p-4 text-teal-700">
                        {flash.success}
                    </div>
                )}

                <Card>
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase text-slate-500">
                                    <tr>
                                        <th className="px-6 py-4 font-medium">
                                            Order
                                        </th>
                                        <th className="px-6 py-4 font-medium">
                                            Name
                                        </th>
                                        <th className="px-6 py-4 font-medium">
                                            Subtitle
                                        </th>
                                        <th className="px-6 py-4 font-medium">
                                            Status
                                        </th>
                                        <th className="px-6 py-4 text-right font-medium">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {units.length === 0 ? (
                                        <tr>
                                            <td
                                                colSpan={5}
                                                className="px-6 py-8 text-center text-slate-500"
                                            >
                                                No service units found.
                                            </td>
                                        </tr>
                                    ) : (
                                        units.map((unit) => (
                                            <tr
                                                key={unit.id}
                                                className="border-b border-slate-100 hover:bg-slate-50"
                                            >
                                                <td className="px-6 py-4">
                                                    {unit.order}
                                                </td>
                                                <td className="px-6 py-4 font-medium text-slate-900">
                                                    {unit.name}
                                                </td>
                                                <td className="px-6 py-4 text-slate-500">
                                                    {unit.subtitle || '-'}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span
                                                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                                                            unit.is_active
                                                                ? 'bg-teal-100 text-teal-800'
                                                                : 'bg-slate-100 text-slate-800'
                                                        }`}
                                                    >
                                                        {unit.is_active
                                                            ? 'Active'
                                                            : 'Inactive'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <Link
                                                            href={route(
                                                                'admin.service-units.edit',
                                                                unit.id,
                                                            )}
                                                            className={cn(
                                                                buttonVariants({
                                                                    variant:
                                                                        'outline',
                                                                    size: 'sm',
                                                                }),
                                                                'h-8 px-2',
                                                            )}
                                                        >
                                                            <Edit className="h-4 w-4 text-slate-600" />
                                                        </Link>
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            className="h-8 px-2 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600"
                                                            onClick={() =>
                                                                handleDelete(
                                                                    unit.id,
                                                                )
                                                            }
                                                        >
                                                            <Trash2 className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}
