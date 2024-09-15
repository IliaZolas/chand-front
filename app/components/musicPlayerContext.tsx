import { NextMiddleware } from 'next/server';
import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

interface Track {
    title: string;
    url: string;
}

interface MusicPlayerContextProps {
    currentTrackIndex: number;
    isPlaying: boolean;
    progress: number;
    duration: number;
    playTrack: () => void;
    pauseTrack: () => void;
    nextTrack: () => void;
    previousTrack: () => void;
    setProgress: (time: number) => void;
    setCurrentTrackIndex: (index: number) => void;
    tracks: Track[];
}

const MusicPlayerContext = createContext<MusicPlayerContextProps | undefined>(undefined);

export const useMusicPlayer = () => {
    const context = useContext(MusicPlayerContext);
    if (!context) {
        throw new Error('useMusicPlayer must be used within a MusicPlayerProvider');
    }
    return context;
};

export const MusicPlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Define the tracks inside the context
    const [tracks] = useState<Track[]>([
        { title: 'Song 1', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
        { title: 'Song 2', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
        { title: 'Song 3', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' }
    ]);

    const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);


    useEffect(() => {
        if (audioRef.current) {
            const audio = audioRef.current;
            const handleTimeUpdate = () => {
                setProgress(audio.currentTime);
            };
            audio.addEventListener('timeupdate', handleTimeUpdate);
            audio.addEventListener('loadedmetadata', () => {
                setDuration(audio.duration);
            });
            return () => {
                audio.removeEventListener('timeupdate', handleTimeUpdate);
            };
        }
    }, [currentTrackIndex]);

    useEffect(() => {
        if (audioRef.current && tracks.length > 0) {
            audioRef.current.src = tracks[currentTrackIndex].url;
            audioRef.current.load();
            if (isPlaying) {
                audioRef.current.play();
            }
        }
    }, [currentTrackIndex, tracks, isPlaying]);

    const playTrack = () => {
        if (audioRef.current) {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const pauseTrack = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const nextTrack = () => {
        setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
        setProgress(0);
    };

    const previousTrack = () => {
        setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
        setProgress(0);
    };

    const updateProgress = (time: number) => {
        if (audioRef.current) {
            audioRef.current.currentTime = time;
            setProgress(time);
        }
    };

    return (
        <MusicPlayerContext.Provider
            value={{
                currentTrackIndex,
                isPlaying,
                progress,
                duration,
                playTrack,
                pauseTrack,
                nextTrack,
                previousTrack,
                setProgress: updateProgress,
                setCurrentTrackIndex,
                tracks,
            }}
        >
            {children}
            <audio ref={audioRef} />
        </MusicPlayerContext.Provider>
    );
};
