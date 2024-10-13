// components/SectionContentRight.tsx

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface SectionContentRightProps {
imageSrc: string | StaticImageData;
title: string;
text: string;
subtitle: string;
showButton?: boolean;
buttonText?: string;
buttonLink?: string;
backgroundColor?: string;
}

const SectionContentRight: React.FC<SectionContentRightProps> = ({
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
        <div className="container mx-auto flex flex-col md:flex-row items-center py-24 text-white">
        {/* Content Column */}
        <div className="md:w-1/2 w-full md:pr-8">
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
        {/* Image Column */}
        <div className="md:w-1/2 w-full mt-8 md:mt-0">
            <Image
            src={imageSrc}
            alt={title}
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
            />
        </div>
        </div>
    </section>
    );
    };

export default SectionContentRight;
