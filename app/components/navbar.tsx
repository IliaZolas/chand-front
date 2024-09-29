import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';
import Logo from '../../public/images/logo/Logo.png'

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-black to-purple-700 text-white w-full fixed top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="">
          <Image src={Logo} alt="Logo" layout="responsive" width={100} height={100} />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <ul className="hidden md:flex space-x-8">
          <li className="hover:text-gray-300 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Full-width side cart for mobile menu */}
      <div
        className={`fixed inset-0 bg-gradient-to-r from-black to-purple-700 text-white z-40 transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* Close button inside the mobile menu */}
        <div className="flex justify-between items-center p-4">
          <div className="text-2xl font-bold">Menu</div>
          <button onClick={toggleMenu}>
            <FiX size={24} />
          </button>
        </div>

        <ul className="flex flex-col items-center space-y-6 mt-8">
          <li onClick={toggleMenu} className="text-2xl hover:text-gray-300">
            <Link href="/">Home</Link>
          </li>
          <li onClick={toggleMenu} className="text-2xl hover:text-gray-300">
            <Link href="/about">About</Link>
          </li>
          <li onClick={toggleMenu} className="text-2xl hover:text-gray-300">
          <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
