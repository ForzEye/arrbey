import React from 'react';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceUnit {
    id: number;
    name: string;
    subtitle?: string;
    description: string;
    accent_color: string;
}

interface Props {
    units: ServiceUnit[];
}

export default function ServiceUnitsGrid({ units }: Props) {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Service Units</h2>
                    <p className="text-lg text-slate-600">
                        Comprehensive logistics solutions tailored to meet the unique demands of your business across the global supply chain.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {units.map((unit) => (
                        <Card key={unit.id} className="group hover:shadow-xl transition-all duration-300 border-slate-200 overflow-hidden flex flex-col h-full">
                            <div className="h-2 w-full" style={{ backgroundColor: unit.accent_color || '#0d9488' }} />
                            <CardHeader>
                                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                                    {unit.name}
                                </CardTitle>
                                {unit.subtitle && (
                                    <CardDescription className="text-teal-600 font-medium">
                                        {unit.subtitle}
                                    </CardDescription>
                                )}
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col justify-between">
                                <p className="text-slate-600 mb-6 line-clamp-3">
                                    {unit.description}
                                </p>
                                <Link
                                    href={`/services/${unit.id}`}
                                    className="inline-flex items-center text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors mt-auto"
                                >
                                    Learn More <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
