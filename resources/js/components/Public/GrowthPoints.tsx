import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface GrowthPoint {
    id: number;
    title: string;
    description?: string;
    icon?: string;
}

interface Props {
    points: GrowthPoint[];
}

export default function GrowthPoints({ points }: Props) {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Arrbey?</h2>
                    <p className="text-lg text-slate-600">
                        We deliver excellence through experience, technology, and a commitment to your success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {points.map((point) => (
                        <div key={point.id} className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                                <CheckCircle2 className="w-6 h-6 text-teal-700" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-900 mb-2">{point.title}</h3>
                                {point.description && (
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {point.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}