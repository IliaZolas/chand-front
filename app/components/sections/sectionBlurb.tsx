// components/SectionBlurb.tsx

import React from 'react';
import Blurb from '../blurb'
import Test1 from '../../../public/images/group-shots/test1.png';
import Test2 from '../../../public/images/group-shots/test2.png';
import Test3 from '../../../public/images/group-shots/test3.png';
import Test4 from '../../../public/images/group-shots/test4.png';

const SectionBlurb: React.FC = () => {
    return (
    <section className="py-10">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Blurb 
            imageSrc={Test1} 
            title="SHOWS" 
            readMoreLink="/shows"          
        />
        <Blurb 
            imageSrc={Test2} 
            title="MERCH" 
            readMoreLink="/merch"          
        />
        <Blurb 
            imageSrc={Test3} 
            title="LISTEN" 
            readMoreLink="/listen"          
        />
        <Blurb 
            imageSrc={Test4} 
            title="DISCORD" 
            readMoreLink="/discord"          
        />
        </div>
    </section>
    );
};

export default SectionBlurb;
