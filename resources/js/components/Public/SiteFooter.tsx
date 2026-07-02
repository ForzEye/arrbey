import React from 'react';
import { Link } from '@inertiajs/react';
import { ArrowUp } from 'lucide-react';

interface FooterLinkItem {
    id: number;
    label: string;
    url: string;
}

interface FooterColumnItem {
    id: number;
    title: string;
    links: FooterLinkItem[];
}

interface FooterProps {
    footer_columns: FooterColumnItem[];
    settings: Record<string, string>;
}

export default function SiteFooter({ footer_columns, settings }: FooterProps) {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-teal-950 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                    {/* Brand column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="text-2xl font-bold tracking-wider">
                            {settings.site_name || 'ARRBEY'}
                        </Link>
                        <p className="mt-4 text-teal-200/70 text-sm leading-relaxed max-w-sm">
                            {settings.site_description || 'Global Logistics & Export Solutions. Delivering excellence worldwide.'}
                        </p>
                        <div className="mt-6 space-y-2 text-sm text-teal-200/60">
                            <p>{settings.contact_address || 'Jakarta, Indonesia'}</p>
                            <p>{settings.contact_phone || '+62 21 1234 5678'}</p>
                            <p>{settings.contact_email || 'info@arrbey.com'}</p>
                        </div>
                    </div>

                    {/* Footer link columns */}
                    {footer_columns.map((column) => (
                        <div key={column.id}>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-300">
                                {column.title}
                            </h3>
                            <ul className="mt-4 space-y-3">
                                {column.links.map((link) => (
                                    <li key={link.id}>
                                        <Link
                                            href={link.url}
                                            className="text-sm text-teal-200/60 hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-teal-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-teal-200/40">
                        &copy; {new Date().getFullYear()} {settings.site_name || 'Arrbey'}. All rights reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-xs text-teal-300 hover:text-white transition-colors"
                    >
                        Back to top <ArrowUp className="w-3.5 h-3.5" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
