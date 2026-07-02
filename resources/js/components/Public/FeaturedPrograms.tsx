import React from 'react';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Program {
    id: number;
    title: string;
    description: string;
    image?: string;
    url?: string;
}

interface Props {
    programs: Program[];
}

export default function FeaturedPrograms({ programs }: Props) {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Programs</h2>
                    <p className="text-lg text-slate-600">
                        Explore our specialized logistics programs designed to optimize your supply chain and drive business growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program) => (
                        <Card key={program.id} className="group hover:shadow-xl transition-all duration-300 border-slate-200 overflow-hidden flex flex-col h-full">
                            {program.image && (
                                <div className="h-48 bg-slate-200 overflow-hidden">
                                    <img
                                        src={`/storage/${program.image}`}
                                        alt={program.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            )}
                            <CardHeader>
                                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                                    {program.title}
                                </CardTitle>
                                <CardDescription className="text-slate-600">
                                    {program.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col justify-between">
                                {program.url && (
                                    <Link
                                        href={program.url}
                                        className="inline-flex items-center text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors mt-auto"
                                    >
                                        Learn More <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}