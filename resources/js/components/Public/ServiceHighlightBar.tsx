import React from 'react';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

interface BarItem {
    id: number;
    label: string;
    url?: string;
}

interface Props {
    items: BarItem[];
}

export default function ServiceHighlightBar({ items }: Props) {
    return (
        <section className="bg-teal-950 text-white py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-16">
                    {items.map((item) => (
                        <Link
                            key={item.id}
                            href={item.url || '#'}
                            className="group flex items-center gap-2 text-sm sm:text-base font-medium text-teal-200 hover:text-white transition-colors"
                        >
                            <ArrowRight className="w-4 h-4 text-teal-500 group-hover:translate-x-1 transition-transform" />
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
