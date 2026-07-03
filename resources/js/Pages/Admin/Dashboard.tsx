import AdminLayout from '@/Layouts/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Head } from '@inertiajs/react';
import {
    Briefcase,
    GraduationCap,
    Image as ImageIcon,
    Users,
} from 'lucide-react';

interface DashboardProps {
    stats: {
        service_units_count: number;
        programs_count: number;
        hero_active: boolean;
        users_count: number;
    };
}

export default function Dashboard({ stats }: DashboardProps) {
    return (
        <AdminLayout title="Dashboard">
            <Head title="Admin Dashboard" />

            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-slate-600">
                            Service Units
                        </CardTitle>
                        <Briefcase className="h-4 w-4 text-teal-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-slate-900">
                            {stats.service_units_count}
                        </div>
                        <p className="mt-1 text-xs text-slate-500">
                            Active service units
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-slate-600">
                            Programs
                        </CardTitle>
                        <GraduationCap className="h-4 w-4 text-teal-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-slate-900">
                            {stats.programs_count}
                        </div>
                        <p className="mt-1 text-xs text-slate-500">
                            Active programs
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-slate-600">
                            Hero Section
                        </CardTitle>
                        <ImageIcon className="h-4 w-4 text-teal-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-slate-900">
                            {stats.hero_active ? 'Active' : 'Inactive'}
                        </div>
                        <p className="mt-1 text-xs text-slate-500">
                            Homepage hero status
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-slate-600">
                            Admin Users
                        </CardTitle>
                        <Users className="h-4 w-4 text-teal-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-slate-900">
                            {stats.users_count}
                        </div>
                        <p className="mt-1 text-xs text-slate-500">
                            Registered admins
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-8 text-center">
                <h2 className="mb-2 text-xl font-semibold text-slate-800">
                    Welcome to Arrbey Admin Panel
                </h2>
                <p className="mx-auto max-w-2xl text-slate-600">
                    Use the sidebar navigation to manage your homepage content.
                    You can update the hero section, manage service units, and
                    configure featured programs. Changes will be reflected
                    immediately on the public website.
                </p>
            </div>
        </AdminLayout>
    );
}
