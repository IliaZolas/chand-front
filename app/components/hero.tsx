import React from 'react';
import Image from 'next/image'
import { VideoHTMLAttributes } from 'react';
import GlitchEffect from './GlitchEffect';
import HeroImage from '../../public/images/group-shots/test1.png';
import { FaChevronDown } from 'react-icons/fa';
// import HeroMovie from '../../public/video/video-test.mp4'; 

const Hero: React.FC = () => {
    return (
        <div className="relative w-full h-screen flex flex-col justify-center items-center pt-20">
            {/* Background Hero Image
            <Image
                src={HeroImage}
                alt="Hero Image"
                layout="fill" // Makes the image fill the container
                objectFit="cover" // Ensures the image covers the entire container
                quality={100} // Set image quality
                priority // Ensures the hero image loads faster
            /> */}

        <video
            className="absolute top-0 left-0 w-full h-full object-cover object-left"
            autoPlay
            loop
            muted
            playsInline // Ensures the video plays smoothly on mobile browsers
            >
            <source 
                src="/video/video-test.mp4" 
                type="video/mp4" 
                />
            Your browser does not support the video tag.
        </video>

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
