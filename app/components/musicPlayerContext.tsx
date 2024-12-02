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
    const [tracks] = useState<Track[]>([
        { title: 'Heal Me (Studio)', url: 'https://res.cloudinary.com/dsttos37f/video/upload/v1733157362/Chandigarh/LANDR-HealMe-Distro-Open-Medium_xlvbab.wav' },
        { title: 'Get Me Out (Studio)', url: 'https://res.cloudinary.com/dsttos37f/video/upload/v1733157356/Chandigarh/LANDR-GetMeOut-Distro-2024-Balanced-Low_deuuss.wav' },
        // { title: 'Heal Me (Live)', url: '/audio/LANDR-01-Chan-Heal-Me-Open-High.mp3' },
        // { title: 'Get Me Out (Live)', url: '/audio/LANDR-02-Chan-get-me-out-Open-High.mp3' },
        { title: 'Untouchable Blood (Live)', url: 'https://res.cloudinary.com/dsttos37f/video/upload/v1733157348/Chandigarh/LANDR-03-Chan-Untouchable-Blood-Open-High_c78n8s.mp3' },
        { title: 'The Ghost I have Become (Live)', url: 'https://res.cloudinary.com/dsttos37f/video/upload/v1733157349/Chandigarh/LANDR-04-Chan-Dont-want-you-to-die-Balanced-Medium_m55d0f.mp3' },
        { title: 'Second Wave (Live)', url: 'https://res.cloudinary.com/dsttos37f/video/upload/v1733157348/Chandigarh/LANDR-06-Chan-Second-Wave-Open-High_xn8vb3.mp3' },
        { title: 'The End of Time (Live)', url: 'https://res.cloudinary.com/dsttos37f/video/upload/v1733157352/Chandigarh/LANDR-07-Chan-End-of-time-Open-High_bebtnm.mp3' },
        { title: 'The Neighbours (Live)', url: 'https://res.cloudinary.com/dsttos37f/video/upload/v1733157350/Chandigarh/LANDR-08-Chan-The-neighbours-Open-Medium_npun8n.mp3' },
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

    // Effect to handle track changes
    useEffect(() => {
        if (audioRef.current && tracks.length > 0) {
            audioRef.current.src = tracks[currentTrackIndex].url;
            audioRef.current.load();
            if (isPlaying) {
                audioRef.current.play();
            }
        }
    }, [currentTrackIndex, tracks]);

    // Effect to handle play/pause without resetting the track
    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    const playTrack = () => {
        setIsPlaying(true);
    };

    const pauseTrack = () => {
        setIsPlaying(false);
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
