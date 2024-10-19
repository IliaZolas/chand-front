// components/SectionBlurb.tsx

import React from 'react';
import Blurb from '../blurb'
import Test1 from '../../../public/images/group-shots/test1.png';
import Test2 from '../../../public/images/group-shots/test2.png';
import Test3 from '../../../public/images/group-shots/test3.png';
import Test4 from '../../../public/images/group-shots/test4.png';
import Merch1 from '../../../public/images/merch/merch-1.png';
import Show1 from '../../../public/images/group-shots/ch-1.jpg';
import Listen1 from '../../../public/images/group-shots/ch-18.png';
import Discord1 from '../../../public/images/group-shots/ch-2.png';

const SectionBlurb: React.FC = () => {
    return (
    <section className="py-10 px-4">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Blurb 
            imageSrc={Show1} 
            title="SHOWS" 
            readMoreLink="/"
            comingSoon={true}          
        />
        <Blurb 
            imageSrc={Merch1} 
            title="MERCH" 
            readMoreLink="/" 
            comingSoon={true}         
        />
        <Blurb 
            imageSrc={Listen1} 
            title="LISTEN" 
            readMoreLink="/stream"          
        />
        <Blurb 
            imageSrc={Discord1} 
            title="DISCORD" 
            readMoreLink="/discord"          
        />
        </div>
    </section>
    );
};

export default SectionBlurb;
