import React from 'react';
import { useMusicPlayer } from './musicPlayerContext';
import { FaPlay, FaPause } from 'react-icons/fa'; // Import play and pause icons

const Playlist: React.FC = () => {
    const { tracks, currentTrackIndex, isPlaying, setCurrentTrackIndex, playTrack, pauseTrack } = useMusicPlayer();

    const handleTrackClick = (index: number) => {
        if (currentTrackIndex === index && isPlaying) {
            pauseTrack(); // Pause the track if it's already playing
        } else {
            setCurrentTrackIndex(index);  // Set the track index in the player
            playTrack();  // Play the track
        }
    };

    return (
        <div className="container mx-auto my-4 p-4">
            <h2 className="text-2xl font-bold mb-4">Playlist</h2>
            <table className="min-w-full table-auto text-white">
                <tbody>
                    {tracks.map((track, index) => (
                        <tr
                            key={index}
                            className="cursor-pointer hover:bg-purple-500"
                            onClick={() => handleTrackClick(index)}  // Play or pause the clicked track
                        >
                            <td className="py-2 flex justify-between items-center">
                                <span>{track.title}</span>
                                {currentTrackIndex === index && isPlaying ? (
                                    <FaPause className="text-white" /> // Pause icon when the track is playing
                                ) : (
                                    <FaPlay className="text-white" /> // Play icon when the track is not playing
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Playlist;
