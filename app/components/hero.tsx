import React from 'react';
import Image from 'next/image';
import GlitchEffect from './GlitchEffect';
import HeroImage from '../../public/images/group-shots/header.png';

const Hero: React.FC = () => {
    return (
        <div className="relative w-full h-screen flex justify-center items-center pt-20">
            <Image
                src={HeroImage}
                alt="Hero Image"
                layout="fill" // Makes the image fill the container
                objectFit="cover" // Ensures the image covers the entire container
                quality={100} // Set image quality
                priority // Ensures the hero image loads faster
            />
            <div className="absolute top-1/2 transform -translate-y-1/2">
                <GlitchEffect />
            </div>
        </div>
    );
};

export default Hero;
