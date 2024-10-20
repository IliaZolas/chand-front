import React, { useState, useEffect } from 'react';
import GlitchEffect from './GlitchEffect';

const LoadingSpinner: React.FC = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [dots, setDots] = useState('.'); // Start with one dot for an immediate effect

  useEffect(() => {
    // Interval to update dots for blinking effect
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + '.' : '.')); // Add a dot, reset after 3
    }, 250);

    const handlePageLoad = () => {
      setTimeout(() => {
        setFadeOut(true);
      }, 500); // Delay fade out to allow the loading indicator to be visible briefly
    };

    // Check if the page is already loaded
    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      window.addEventListener('load', handlePageLoad);
    }

    return () => {
      clearInterval(dotsInterval);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black z-50 transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      } pointer-events-none`}
      style={{ visibility: fadeOut ? 'hidden' : 'visible' }}
    >
      <div className="text-white text-4xl mb-4">
        Loading{dots}
      </div>
      <GlitchEffect />
    </div>
  );
};

export default LoadingSpinner;
