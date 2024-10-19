// components/Footer.tsx

import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

const socialMediaPlatforms = [
  {
    text: 'Facebook',
    link: 'https://www.facebook.com/chandigarh.punk',
    icon: <FaFacebookF size={24} />,
  },
  {
    text: 'Instagram',
    link: 'https://www.instagram.com/chandigarh.music/',
    icon: <FaInstagram size={24} />,
  },
  {
    text: 'TikTok',
    link: 'https://www.tiktok.com/@chandigarh.band',
    icon: <FaTiktok size={24} />,
  },
  {
    text: 'YouTube',
    link: 'https://www.youtube.com/@ChandigarhPunks',
    icon: <FaYoutube size={24} />,
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-8">
      <div className="container mx-auto text-center">
        <p className="mb-4">Contact us at: <a href="mailto:chandigarhswiss@gmail.com" className="hover:underline">chandigarhswiss@gmail.com</a></p>

        <div className="flex justify-center space-x-6">
          {socialMediaPlatforms.map((platform, index) => (
            <Link 
                href={platform.link} 
                key={index}
                className="text-white hover:text-blue-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={platform.text}
                >
                {platform.icon}
            </Link>
          ))}
        </div>

        <p className="mt-6 text-sm text-gray-500 pb-20">© 2024 Chandigarh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
