import React, { ReactNode } from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/components/Public/Navbar';
import SiteFooter from '@/components/Public/SiteFooter';

interface PublicLayoutProps {
    children: ReactNode;
    title?: string;
    menus: any;
    settings: any;
    footer_columns: any;
}

export default function PublicLayout({ children, title, menus, settings, footer_columns }: PublicLayoutProps) {
    const pageTitle = title ? `${title} | ${settings.site_name || 'Arrbey'}` : (settings.site_name || 'Arrbey');

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-teal-200 selection:text-teal-900">
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={settings.meta_description || ''} />
            </Head>

            <Navbar menus={menus.header || []} settings={settings} />

            <main className="flex-grow">
                {children}
            </main>

            <SiteFooter footer_columns={footer_columns} settings={settings} />
        </div>
    );
}
