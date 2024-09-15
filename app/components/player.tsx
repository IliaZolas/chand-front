import React from 'react';
import { useMusicPlayer } from './musicPlayerContext';
import { FiPlay, FiPause, FiSkipForward, FiSkipBack } from 'react-icons/fi';

const Player: React.FC = () => {
    const {
        currentTrackIndex,
        isPlaying,
        progress,
        duration,
        playTrack,
        pauseTrack,
        nextTrack,
        previousTrack,
        tracks,
        setProgress,
    } = useMusicPlayer();

    const togglePlay = () => {
        if (isPlaying) {
            pauseTrack();
        } else {
            playTrack();
        }
    };

    const handleProgressClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!duration) return;

        // Get the bounding box of the progress bar element
        const boundingRect = event.currentTarget.getBoundingClientRect();
        // Calculate the position clicked as a percentage of the total width
        const clickPosition = event.clientX - boundingRect.left;
        const clickPositionPercentage = clickPosition / boundingRect.width;

        // Set the progress based on the percentage clicked
        const newTime = clickPositionPercentage * duration;
        setProgress(newTime);  // Update the audio element's current time
    };

    return (
        <div className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-black to-purple-700 text-white flex justify-center items-center py-4 px-6 shadow-lg z-50">
            {tracks.length > 0 && (
                <>
                    <div className="flex items-center space-x-4">
                        <button onClick={previousTrack} aria-label="Previous">
                            <FiSkipBack size={24} />
                        </button>
                        <button onClick={togglePlay} aria-label={isPlaying ? 'Pause' : 'Play'}>
                            {isPlaying ? <FiPause size={24} /> : <FiPlay size={24} />}
                        </button>
                        <button onClick={nextTrack} aria-label="Next">
                            <FiSkipForward size={24} />
                        </button>
                    </div>
                    <div className="flex-grow mx-4">
                        <div className="text-center">{tracks[currentTrackIndex]?.title}</div>

                        {/* Progress Bar with Click Handler */}
                        <div
                            className="w-full bg-gray-700 rounded h-1 my-2 relative cursor-pointer"
                            onClick={handleProgressClick} // Handle click on the progress bar
                        >
                            <div
                                className="bg-blue-500 h-1 rounded"
                                style={{ width: `${(progress / duration) * 100}%` }}
                            />
                        </div>

                        {/* Time Display */}
                        <div className="flex justify-between text-sm">
                            <span>{Math.floor(progress / 60)}:{Math.floor(progress % 60).toString().padStart(2, '0')}</span>
                            <span>{Math.floor((duration - progress) / 60)}:{Math.floor((duration - progress) % 60).toString().padStart(2, '0')}</span>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Player;
