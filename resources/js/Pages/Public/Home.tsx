import React from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import HeroSection from '@/components/Public/HeroSection';
import ServiceHighlightBar from '@/components/Public/ServiceHighlightBar';
import ServiceUnitsGrid from '@/components/Public/ServiceUnitsGrid';
import GrowthPoints from '@/components/Public/GrowthPoints';
import StatsPanel from '@/components/Public/StatsPanel';
import AudiencePanel from '@/components/Public/AudiencePanel';
import FeaturedPrograms from '@/components/Public/FeaturedPrograms';
import CtaBanner from '@/components/Public/CtaBanner';

interface HomeProps {
    settings: Record<string, string>;
    menus: {
        header: any[];
        footer: any[];
    };
    hero: any;
    service_bar_items: any[];
    service_units: any[];
    growth_points: any[];
    stats: any[];
    audience_categories: any[];
    programs: any[];
    cta_banner: any;
    footer_columns: any[];
}

export default function Home({ settings, menus, hero, service_bar_items, service_units, growth_points, stats, audience_categories, programs, cta_banner, footer_columns }: HomeProps) {
    return (
        <PublicLayout
            title=""
            menus={menus}
            settings={settings}
            footer_columns={footer_columns}
        >
            {/* Hero Section */}
            {hero && (
                <HeroSection
                    title={hero.title}
                    description={hero.description}
                    image={hero.image}
                    button_text={hero.button_text}
                    button_url={hero.button_url}
                />
            )}

            {/* Service Highlight Bar */}
            {service_bar_items.length > 0 && (
                <ServiceHighlightBar items={service_bar_items} />
            )}

            {/* Service Units Grid */}
            {service_units.length > 0 && (
                <ServiceUnitsGrid units={service_units} />
            )}

            {/* Growth Points */}
            {growth_points.length > 0 && (
                <GrowthPoints points={growth_points} />
            )}

            {/* Stats Panel */}
            {stats.length > 0 && (
                <StatsPanel stats={stats} />
            )}

            {/* Audience Panel */}
            {audience_categories.length > 0 && (
                <AudiencePanel categories={audience_categories} />
            )}

            {/* Featured Programs */}
            {programs.length > 0 && (
                <FeaturedPrograms programs={programs} />
            )}

            {/* CTA Banner */}
            {cta_banner && (
                <CtaBanner
                    title={cta_banner.title}
                    description={cta_banner.description}
                    button_text={cta_banner.button_text}
                    button_url={cta_banner.button_url}
                />
            )}
        </PublicLayout>
    );
}