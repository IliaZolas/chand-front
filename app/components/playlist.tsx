import React from 'react';
import { useMusicPlayer } from './musicPlayerContext';

const Playlist: React.FC = () => {
    const { tracks, setCurrentTrackIndex, playTrack } = useMusicPlayer();

    const handleTrackClick = (index: number) => {
        setCurrentTrackIndex(index);  // Set the track index in the player
        playTrack();  // Play the track
    };

    return (
        <div className="container mx-auto my-4 p-4">
            <h2 className="text-2xl font-bold mb-4">Playlist</h2>
            <table className="min-w-full table-auto bg-gray-100">
                <thead>
                    <tr>
                        <th className="px-4 py-2">#</th>
                        <th className="px-4 py-2">Title</th>
                    </tr>
                </thead>
                <tbody>
                    {tracks.map((track, index) => (
                        <tr
                            key={index}
                            className="cursor-pointer hover:bg-gray-200"
                            onClick={() => handleTrackClick(index)}  // Play the clicked track
                        >
                            <td className="border px-4 py-2">{index + 1}</td>
                            <td className="border px-4 py-2">{track.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Playlist;
