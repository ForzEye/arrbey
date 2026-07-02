import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface Stat {
    id: number;
    label: string;
    value: string;
    suffix?: string;
}

interface Props {
    stats: Stat[];
}

export default function StatsPanel({ stats }: Props) {
    return (
        <section className="py-24 bg-teal-950 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat) => (
                        <div key={stat.id} className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <ArrowUp className="w-5 h-5 text-teal-400" />
                                <span className="text-4xl md:text-5xl font-bold text-white">
                                    {stat.value}
                                </span>
                                {stat.suffix && (
                                    <span className="text-2xl text-teal-400">{stat.suffix}</span>
                                )}
                            </div>
                            <p className="text-lg text-teal-200/80 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}