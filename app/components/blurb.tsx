// components/Blurb.tsx

import React from 'react';
import Image, { StaticImageData }  from 'next/image';
import Link from 'next/link';

interface BlurbProps {
    imageSrc: string | StaticImageData;
    title: string;
    readMoreLink: string;
    comingSoon?: boolean;
}

const Blurb: React.FC<BlurbProps> = ({ imageSrc, title, readMoreLink, comingSoon }) => {
    return (
    <div className="blurb-component max-w-sm mx-auto">
        <div className="image-container">
        <Image
            src={imageSrc}
            alt={title}
            width={500}   // Adjust the width as needed
            height={300}  // Adjust the height as needed
            layout="responsive"
            objectFit="cover"
            className="rounded"
        />
        </div>
        <h2 className="blurb-title text-white text-xl font-semibold mt-4">{title}</h2>
        <div className="mt-2">
                {comingSoon ? (
                    <span className="blurb-read-more text-white hover:underline inline-block">Coming Soon</span>  // Show "Coming Soon"
                ) : (
                    <Link className="blurb-read-more text-white hover:underline inline-block" href={readMoreLink}>
                        Read More
                    </Link>
                )}
            </div>
    </div>
    );
};

export default Blurb;
