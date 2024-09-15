"use client";

import { useEffect } from 'react';
import { useMusicPlayer } from './components/musicPlayerContext';
import Hero from './components/hero';

const Home: React.FC = () => {

  return (
    <div>
      <Hero />
      {/* Rest of your page content */}
    </div>
  );
};

export default Home;
