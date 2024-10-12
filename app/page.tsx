"use client";

// import { useEffect } from 'react';
// import { useMusicPlayer } from './components/musicPlayerContext';
import Hero from './components/hero';
import Playlist from './components/playlist';
import Blurb from './components/blurb';

import Test1 from '../public/images/group-shots/test1.png'
import Test2 from '../public/images/group-shots/test2.png'
import Test3 from '../public/images/group-shots/test3.png'
import Test4 from '../public/images/group-shots/test4.png'

const Home: React.FC = () => {

  return (
    <div className='pb-96'>
      <Hero />
      <div className="flex py-8">
        <Blurb 
          imageSrc={Test1} 
          title={'SHOWS'} 
          readMoreLink={''}          
        />
        <Blurb 
          imageSrc={Test2} 
          title={'MERCH'} 
          readMoreLink={''}          
        />
        <Blurb 
          imageSrc={Test3} 
          title={'LISTEN'} 
          readMoreLink={''}          
        />
        <Blurb 
          imageSrc={Test4} 
          title={'DISCORD'} 
          readMoreLink={''}          
        />

      </div>
      <Playlist />
    </div>
  );
};

export default Home;
