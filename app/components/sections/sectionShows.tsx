// components/SectionShows.tsx

import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';

export interface Show {
    id: number;
    date: string;
    venue: string;
    location: string;
    ticketLink: string;
    }

const SectionShows: React.FC = () => {
    const backgroundColor = '#222020';

    const shows: Show[] = [
    {
        id: 1,
        date: '2023-12-15',
        venue: 'The Punk Rock Club',
        location: 'New York, NY',
        ticketLink: 'https://tickets.example.com/show1',
    },
    {
        id: 2,
        date: '2024-01-10',
        venue: 'The Underground Stage',
        location: 'Los Angeles, CA',
        ticketLink: 'https://tickets.example.com/show2',
    },
    {
        id: 3,
        date: '2024-02-05',
        venue: 'The Electric Factory',
        location: 'Chicago, IL',
        ticketLink: 'https://tickets.example.com/show3',
    },
    ];

    return (
    <section
        className="py-10 px-4"
        style={{ backgroundColor: backgroundColor }}
    >
        <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Upcoming Shows</h2>
        {shows.length > 0 ? (
            <ul>
            {shows.map((show: Show) => (
                <li
                key={show.id}
                className="flex flex-col md:flex-row justify-between items-start md:items-center bg-[#1a1919] rounded-md p-4 mb-4"
                >
                <div className="mb-4 md:mb-0">
                    <p className="text-white text-xl font-semibold">
                    {format(new Date(show.date), 'MMMM d, yyyy')}
                    </p>
                    <p className="text-gray-300">
                    {show.venue} - {show.location}
                    </p>
                </div>
                <Link 
                    href={show.ticketLink}
                    className="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Buy Tickets
                </Link>
                </li>
            ))}
            </ul>
        ) : (
            <p className="text-white text-center">No upcoming shows at the moment. Check back soon!</p>
        )}
        </div>
    </section>
    );
};

export default SectionShows;
