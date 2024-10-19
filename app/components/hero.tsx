import React from 'react';
import Image from 'next/image';
import GlitchEffect from './GlitchEffect';
import HeroImage from '../../public/images/group-shots/header.png'

const Hero: React.FC = () => {
    return (
        <div className="w-full flex justify-center items-center pt-20">
            <Image
                src={HeroImage}
                alt="Hero Image"
                width={2000} 
                height={100} 
            />
            <div className="absolute t-5">
                <GlitchEffect />
            </div>
        </div>
    );
};

export default Hero;
