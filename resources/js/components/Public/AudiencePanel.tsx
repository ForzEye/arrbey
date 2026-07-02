import React from 'react';
import { Users, Briefcase, Factory, Store, Truck, Globe, Building2 } from 'lucide-react';

interface AudienceCategory {
    id: number;
    name: string;
    description?: string;
    icon?: string;
}

interface Props {
    categories: AudienceCategory[];
}

export default function AudiencePanel({ categories }: Props) {
    const iconMap: Record<string, React.ElementType> = {
        Users,
        Briefcase,
        Factory,
        Store,
        Truck,
        Globe,
        Building2,
    };

    return (
        <section className="py-24 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">For Whom We Serve</h2>
                    <p className="text-lg text-slate-400">
                        We partner with businesses across industries to deliver logistics solutions that drive growth and efficiency.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category) => {
                        const Icon = category.icon ? iconMap[category.icon] : Users;
                        return (
                            <div key={category.id} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-teal-500/50 transition-colors">
                                <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                                    <Icon className="w-6 h-6 text-teal-400" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                                {category.description && (
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        {category.description}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}