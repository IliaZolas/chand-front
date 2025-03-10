import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';
import Logo from '../../public/images/logo/Logo.png'
import LogoSVG from '../../public/svg/Logo-white.svg'

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar text-white w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between py-4 px-6 items-center">
        <div className="logo-container">
          <Image src={LogoSVG} alt="Logo" layout="responsive" />
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
            {/* <li className="hover:text-gray-300 cursor-pointer">
              <Link href="https://www.shopify.com/" target="_blank">Merch</Link>
            </li> */}
            <li className="hover:text-gray-300 cursor-pointer">
              <Link href="https://discord.gg/JS6MrbKw" target="_blank">Discord</Link>
            </li>
          </ul>
      </div>

      {/* Full-width side cart for mobile menu */}
      <div
        className={`fixed mobile-navbar inset-0 text-white z-40 transform ${
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
          <Link href="/stream">Stream</Link>
          </li>
          <li onClick={toggleMenu} className="text-2xl hover:text-gray-300">
          <Link href="https://www.shopify.com/" target="_blank">Merch</Link>
          </li>
          <li onClick={toggleMenu} className="text-2xl hover:text-gray-300">
          <Link href="/social">Social</Link>
          </li>
          <li onClick={toggleMenu} className="text-2xl hover:text-gray-300">
          <Link href="https://discord.gg/JS6MrbKw">Discord</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
