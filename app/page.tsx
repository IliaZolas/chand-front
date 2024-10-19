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

import SectionContentLeft from "./components/sections/seciontContentLeft";
import SectionContentRight from "./components/sections/sectionContentRight";
import SectionContentCenter from "./components/sections/sectionContentCenter";
import SectionContact from "./components/sections/sectionContact";
import SectionBlurb from './components/sections/sectionBlurb';
import SectionSocialMedia from './components/sections/sectionSocial';
import SectionStreaming from './components/sections/sectionStream';
import SectionShows from './components/sections/sectionShows';
import GlitchEffect from './components/GlitchEffect';
import Footer from './components/footer';


const Home: React.FC = () => {

  return (
    <div className='flex justify-around'>
      <div className='container'>
        <Hero />
        {/* <GlitchEffect /> */}
        <div className="py-8">
          <SectionStreaming />
          <SectionSocialMedia />
          <SectionContentCenter 
            title={'Burn The Past'}
            subtitle={'Defy the future'}
            text={'A unique fusion of punk rock and stoner rock, sprinkled with oriental influences, reflecting the city of Chandigarh, where the order of Swiss design meets the living chaos of India, pushing the boundaries of conventional music.'}        
            />
            <div className='flex justify-around'>
              <div style={{width: "800px", margin: "auto 0"}}>
                <Playlist />
                {/* <SectionShows /> */}
              </div>
            </div>
          {/* <SectionContentLeft 
            imageSrc={Test2} 
            title={'Raphaël'} 
            subtitle={'Lead Guitar & Backup Vocals'}
            text={'Raphaël’s riffs cut through the air like a chainsaw through steel. He brings a fiery edge to the band, weaving intricate melodies into the rawness of their sound. His guitar is the spark that ignites every track, while his backing vocals are the anthem of revolution.'}  
            backgroundColor='#272525'  
            
            />
          <SectionContentRight 
            imageSrc={Test1} 
            title={'Antoine'} 
            subtitle={'Bass & Backup Vocals'}
            text={'Antoine’s bass lines lay the groundwork, rumbling beneath the chaos with a groove that’s as heavy as it is rebellious. His deep, pulsating rhythms resonate through your bones, keeping you grounded while the world around you spirals into a frenzy. His backup vocals add an unexpected depth to the sound.'} 
            backgroundColor='#222020'       
            />
          <SectionContentLeft 
            imageSrc={Test2} 
            title={'Victor'} 
            subtitle={'Drums & Backup Vocals'}
            text={'Victor is the heartbeat of the band—relentless, unpredictable, and impossible to ignore. His drumming is a war cry that fuels the rebellion, shaking walls and cracking foundations. His backing vocals add another layer of energy, punching through with fierce conviction.'}  
            backgroundColor='#272525'  
            />
          <SectionContentRight 
            imageSrc={Test1} 
            title={'Ilia'} 
            subtitle={'Main Vocals & Guitar 2'}
            text={'Ilia is the voice that sets the rebellion in motion. Armed with a guitar and vocals that tear through the noise, they lead the charge. Ilia’s raspy, raw power resonates with the chaos of the world, channeling the angst, frustration, and raw energy that punk has always thrived on.'} 
            backgroundColor='#222020'       
            /> */}
            <SectionBlurb />
        </div>
        {/* <SectionContact
          backgroundColor='#272525'
        /> */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
