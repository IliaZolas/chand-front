import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-blue-500 text-white w-full fixed top-0 left-0 z-50 shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="text-2xl font-bold">
                    CHANDIGARH
                </div>
                <ul className="flex space-x-8">
                    <li className="hover:text-gray-300 cursor-pointer">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:text-gray-300 cursor-pointer">
                    <Link href="/about">About</Link>
                        </li>
                    <li className="hover:text-gray-300 cursor-pointer">Contact</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
