// components/Blurb.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlurbProps {
    imageSrc: string;
    title: string;
    readMoreLink: string;
}

const Blurb: React.FC<BlurbProps> = ({ imageSrc, title, readMoreLink }) => {
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
        <Link className="blurb-read-more text-white hover:underline mt-2 inline-block" href={readMoreLink}>
            Read More
        </Link>
    </div>
    );
};

export default Blurb;
