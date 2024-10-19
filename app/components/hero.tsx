import React from 'react';
import Image from 'next/image';
import GlitchEffect from './GlitchEffect';
import HeroImage from '../../public/images/mandalas/mandala-2.png';
import { FaChevronDown } from 'react-icons/fa';

const Hero: React.FC = () => {
    return (
        <div className="relative w-full h-screen flex flex-col justify-center items-center pt-20">
            {/* Background Hero Image */}
            <Image
                src={HeroImage}
                alt="Hero Image"
                layout="fill" // Makes the image fill the container
                objectFit="cover" // Ensures the image covers the entire container
                quality={100} // Set image quality
                priority // Ensures the hero image loads faster
            />

            {/* Glitch Effect */}
            <div className="absolute top-1/2 transform -translate-y-1/2">
                <GlitchEffect />
            </div>

            {/* Blinking Down Arrow */}
            <div className="absolute bottom-40 blink text-white text-4xl">
                <FaChevronDown />
            </div>
        </div>
    );
};

export default Hero;
