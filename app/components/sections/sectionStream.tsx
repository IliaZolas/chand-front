"use client";

import React from 'react';
import Link from 'next/link';
import { FaSpotify, FaYoutube, FaApple, FaDeezer } from 'react-icons/fa';

const SectionStreaming: React.FC = () => {
  // Background and button colors
    const pageBackgroundColor = '#222020';
    const buttonBackgroundColor = '#1a1919'; // Slightly darker than page background
    const buttonHoverColor = '#000000'; // Darken more on hover

    const streamingServices = [
    {
        text: "Spotify",
        link: "https://open.spotify.com/artist/48ipXdgE5kpu5MsdJGadse?si=5_LijLQjR-GJXY3KmSwmSA",
    },
    {
        text: "YouTube Music",
        link: "https://music.youtube.com/channel/UCa1_ZQhSbNUUVkWlrq9tD8A",
    },
    {
        text: "Apple Music",
        link: "https://music.apple.com/ch/artist/chandigarh/1609865149?l=en-GB",
    },
    {
        text: "Deezer",
        link: "https://www.deezer.com/us/artist/15342119",
    },
    ];

    // Map service text to icons
    const serviceIcons: { [key: string]: JSX.Element } = {
    Spotify: <FaSpotify size={24} />,
    'YouTube Music': <FaYoutube size={24} />,
    'Apple Music': <FaApple size={24} />,
    Deezer: <FaDeezer size={24} />,
    };

    return (
    <div
        className="flex items-center justify-center"
        style={{ backgroundColor: pageBackgroundColor }}
    >
        <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap justify-center gap-4">
            {streamingServices.map((service, index) => (
            <Link 
                href={service.link} 
                key={index}
                className="flex items-center space-x-2 px-6 py-3 rounded-md transition duration-300"
                style={{ backgroundColor: buttonBackgroundColor, color: '#ffffff' }}
                target="_blank"
                >            
                {serviceIcons[service.text]}
                <span>{service.text}</span>
            </Link>
            ))}
        </div>
        </div>
        <style jsx>{`
        a:hover {
            background-color: ${buttonHoverColor};
        }
        `}</style>
    </div>
    );
};

export default SectionStreaming;
