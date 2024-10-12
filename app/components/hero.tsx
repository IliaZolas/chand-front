import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
    return (
        <div className="w-full flex justify-center items-center pt-10">
            <Image
                src=""
                alt="Hero Image"
                width={1200} 
                height={600} 
            />
        </div>
    );
};

export default Hero;
