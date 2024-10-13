// components/SectionContentLeft.tsx

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface SectionContentLeftProps {
    imageSrc: string | StaticImageData;
    title: string;
    subtitle: string;
    text: string;
    showButton?: boolean;
    buttonText?: string;
    buttonLink?: string;
    backgroundColor?: string;
}

const SectionContentLeft: React.FC<SectionContentLeftProps> = ({
    imageSrc,
    title,
    subtitle,
    text,
    showButton = false,
    buttonText = 'Learn More',
    buttonLink = '#',
    backgroundColor = '#ffffff',
    }) => {
    return (
        <section
        className="w-full"
        style={{ backgroundColor: backgroundColor }}
        >
        <div className="container mx-auto flex justify-around flex-col md:flex-row items-center py-24 text-white">
            {/* Image Column */}
            <div className="md:w-1/2 w-full">
            <Image
                src={imageSrc}
                alt={title}
                width={600}
                height={400}
                layout="responsive"
                objectFit="cover"
            />
            </div>
            {/* Content Column */}
            <div className="md:w-1/2 w-full md:pl-8 mt-8 md:mt-0">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <h3 className="text-1xl font-bold mb-4">{subtitle}</h3>
            <p className="text-lg mb-6">{text}</p>
            {showButton && (
                <Link href={buttonLink}>
                <a className="px-6 py-3 text-white rounded hover:bg-blue-700">
                    {buttonText}
                </a>
                </Link>
            )}
            </div>
        </div>
        </section>
    );
};

export default SectionContentLeft;
