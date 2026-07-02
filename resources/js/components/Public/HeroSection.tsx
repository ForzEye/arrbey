import React from 'react';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeroProps {
    title: string;
    description: string;
    image?: string;
    button_text?: string;
    button_url?: string;
}

export default function HeroSection({ title, description, image, button_text, button_url }: HeroProps) {
    const bgImage = image ? `/storage/${image}` : 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80';

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-teal-950 overflow-hidden pt-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={bgImage}
                    alt="Global Logistics"
                    className="w-full h-full object-cover opacity-30 scale-105 animate-pulse-slow"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-950 via-teal-950/80 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
                <div className="max-w-3xl">
                    <span className="inline-block text-teal-400 text-sm font-semibold tracking-widest uppercase mb-4">
                        Arrbey Global Logistics
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none mb-6">
                        {title}
                    </h1>
                    <p className="text-lg sm:text-xl text-teal-100/80 leading-relaxed mb-8 max-w-2xl">
                        {description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        {button_text && button_url && (
                            <Link
                                href={button_url}
                                className={cn(
                                    buttonVariants({ variant: 'default', size: 'lg' }),
                                    "bg-teal-500 hover:bg-teal-400 text-teal-950 font-semibold px-8 py-6 rounded-md shadow-lg shadow-teal-500/20 inline-flex items-center gap-2"
                                )}
                            >
                                {button_text} <ArrowRight className="w-5 h-5" />
                            </Link>
                        )}
                        <Link
                            href="/services"
                            className={cn(
                                buttonVariants({ variant: 'outline', size: 'lg' }),
                                "border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-md"
                            )}
                        >
                            Our Services
                        </Link>
                    </div>
                </div>
            </div>

            {/* Decorative bottom curve */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10" />
        </section>
    );
}
