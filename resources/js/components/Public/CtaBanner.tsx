import React from 'react';
import { Link } from '@inertiajs/react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CtaBannerProps {
    title: string;
    description?: string;
    button_text: string;
    button_url: string;
}

export default function CtaBanner({ title, description, button_text, button_url }: CtaBannerProps) {
    return (
        <section className="py-24 bg-gradient-to-br from-teal-900 to-teal-950 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-700 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    {title}
                </h2>
                {description && (
                    <p className="text-lg md:text-xl text-teal-100/80 mb-10 max-w-2xl mx-auto">
                        {description}
                    </p>
                )}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href={button_url}
                        className={cn(
                            buttonVariants({ variant: 'default', size: 'lg' }),
                            "bg-white text-teal-900 hover:bg-teal-50 font-semibold px-8 py-6 rounded-md shadow-lg"
                        )}
                    >
                        {button_text}
                    </Link>
                    <Link
                        href="/contact"
                        className={cn(
                            buttonVariants({ variant: 'outline', size: 'lg' }),
                            "border-white/30 text-white hover:bg-white/10 px-8 py-6 rounded-md"
                        )}
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}