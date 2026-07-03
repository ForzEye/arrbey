import { Link, usePage } from '@inertiajs/react';
import {
    Briefcase,
    GraduationCap,
    Image as ImageIcon,
    LayoutDashboard,
    LogOut,
    Menu,
    Settings,
    User,
    X,
} from 'lucide-react';
import React, { useState } from 'react';

interface Props {
    children: React.ReactNode;
    title?: string;
}

export default function AdminLayout({ children, title }: Props) {
    const user = usePage().props.auth.user;
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const menuItems = [
        { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
        { name: 'Hero Section', href: '/admin/hero', icon: ImageIcon },
        {
            name: 'Service Units',
            href: '/admin/service-units',
            icon: Briefcase,
        },
        { name: 'Programs', href: '/admin/programs', icon: GraduationCap },
        { name: 'Site Settings', href: '/admin/settings', icon: Settings },
    ];

    return (
        <div className="flex min-h-screen bg-slate-100">
            {/* Sidebar Desktop */}
            <aside className="hidden w-64 flex-col border-r border-slate-800 bg-slate-900 text-white md:flex">
                <div className="flex h-16 items-center border-b border-slate-800 px-6">
                    <Link
                        href="/admin"
                        className="text-xl font-bold tracking-wider text-teal-400"
                    >
                        ARRBEY ADMIN
                    </Link>
                </div>
                <nav className="flex-1 space-y-1 px-4 py-6">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = window.location.pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                                    isActive
                                        ? 'bg-teal-600 text-white'
                                        : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                }`}
                            >
                                <Icon className="h-5 w-5" />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
                <div className="border-t border-slate-800 p-4">
                    <div className="mb-2 flex items-center gap-3 px-4 py-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 font-bold text-white">
                            {user.name[0].toUpperCase()}
                        </div>
                        <div className="overflow-hidden">
                            <p className="truncate text-sm font-medium">
                                {user.name}
                            </p>
                            <p className="truncate text-xs text-slate-500">
                                {user.email}
                            </p>
                        </div>
                    </div>
                    <Link
                        href="/logout"
                        method="post"
                        as="button"
                        className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium text-rose-400 transition-colors hover:bg-rose-950/30 hover:text-rose-300"
                    >
                        <LogOut className="h-5 w-5" />
                        Log Out
                    </Link>
                </div>
            </aside>

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-slate-900/50 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar Mobile */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-slate-900 text-white transition-transform duration-300 md:hidden ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="flex h-16 items-center justify-between border-b border-slate-800 px-6">
                    <span className="text-xl font-bold tracking-wider text-teal-400">
                        ARRBEY ADMIN
                    </span>
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="text-slate-400 hover:text-white"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>
                <nav className="flex-1 space-y-1 px-4 py-6">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = window.location.pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsSidebarOpen(false)}
                                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                                    isActive
                                        ? 'bg-teal-600 text-white'
                                        : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                }`}
                            >
                                <Icon className="h-5 w-5" />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
                <div className="border-t border-slate-800 p-4">
                    <Link
                        href="/logout"
                        method="post"
                        as="button"
                        className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium text-rose-400 transition-colors hover:bg-rose-950/30 hover:text-rose-300"
                    >
                        <LogOut className="h-5 w-5" />
                        Log Out
                    </Link>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex min-w-0 flex-1 flex-col">
                {/* Top Header */}
                <header className="z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="text-slate-600 hover:text-slate-900 md:hidden"
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                    <h1 className="text-lg font-semibold text-slate-800">
                        {title || 'Admin Panel'}
                    </h1>
                    <div className="flex items-center gap-3">
                        <span className="hidden text-sm text-slate-600 sm:inline">
                            {user.name}
                        </span>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 font-bold text-slate-700">
                            <User className="h-4 w-4" />
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="flex-1 overflow-y-auto p-6">{children}</main>
            </div>
        </div>
    );
}
