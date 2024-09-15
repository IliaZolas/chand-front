"use client";

import { useEffect } from 'react';
import { useMusicPlayer } from './components/musicPlayerContext';
import Hero from './components/hero';
import Playlist from './components/playlist';

const Home: React.FC = () => {

  return (
    <div>
      <Hero />
      <Playlist />
    </div>
  );
};

export default Home;
