// components/CenteredTextSection.tsx

import React from 'react';

interface SectionContentCenterProps {
    title: string;
    subtitle?: string;
    text: string;
}

const SectionContentCenter: React.FC<SectionContentCenterProps> = ({
    title,
    subtitle,
    text,
    }) => {
    return (
    <section className="py-20 bg-transparent">
        <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
        {subtitle && (
            <h2 className="text-2xl font-medium text-white mb-6">{subtitle}</h2>
        )}
        <p className="text-lg text-white max-w-2xl mx-auto">{text}</p>
        </div>
    </section>
    );
};

export default SectionContentCenter;
