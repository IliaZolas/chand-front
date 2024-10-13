    // pages/social-media.tsx or components/SocialMediaPage.tsx

    "use client";

    import React from 'react';
    import Link from 'next/link';
    import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
    
    const SectionSocialMedia: React.FC = () => {
        // Background and button colors
        const pageBackgroundColor = '#222020';
        const buttonBackgroundColor = '#1a1919'; // Slightly darker than page background
        const buttonHoverColor = '#000000'; // Darken more on hover
    
        const socialMediaPlatforms = [
        {
            text: "Facebook",
            link: "https://www.facebook.com/chandigarh.punk",
        },
        {
            text: "Instagram",
            link: "https://www.instagram.com/chandigarh.music/",
        },
        {
            text: "TikTok",
            link: "https://www.tiktok.com/@chandigarh.band",
        },
        {
            text: "YouTube",
            link: "https://www.youtube.com/@ChandigarhPunks",
        },
        ];
    
        // Map platform text to icons
        const platformIcons: { [key: string]: JSX.Element } = {
        Facebook: <FaFacebookF size={24} />,
        Instagram: <FaInstagram size={24} />,
        TikTok: <FaTiktok size={24} />,
        YouTube: <FaYoutube size={24} />,
        };
    
        return (
        <div
            className="flex items-center justify-center"
            style={{ backgroundColor: pageBackgroundColor }}
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-4">
                    {socialMediaPlatforms.map((platform, index) => (
                    <Link 
                        href={platform.link} 
                        key={index}
                        className="flex items-center space-x-2 px-6 py-3 rounded-md transition duration-300"
                        style={{ backgroundColor: buttonBackgroundColor, color: '#ffffff' }}
                        target="_blank"
                        >
                        {platformIcons[platform.text]}
                        <span>{platform.text}</span>
                        
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
    
    export default SectionSocialMedia;
    