import React, { useState, useEffect } from 'react';
import GlitchEffect from './GlitchEffect';

const LoadingSpinner: React.FC = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let total = 0;
    let loaded = 0;

    const updateLoadingProgress = () => {
      const progress = Math.min(Math.round((loaded / total) * 100), 100);
      setLoadingProgress(progress);
    };

    const trackPerformance = () => {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntriesByType('resource') as PerformanceResourceTiming[];
        total = entries.length;

        entries.forEach((entry) => {
          if (entry.responseEnd) {
            loaded += 1;
            updateLoadingProgress();
          }
        });
      });

      observer.observe({ entryTypes: ['resource'] });

      return observer;
    };

    const observer = trackPerformance();

    // Check if the page is already loaded to ensure we don't miss the event
    if (document.readyState === 'complete') {
      setLoadingProgress(100);
      setFadeOut(true);
    } else {
      // Track page load completion to set progress to 100%
      const handleLoad = () => {
        setLoadingProgress(100);
        setFadeOut(true);
      };
      window.addEventListener('load', handleLoad);

      return () => {
        observer.disconnect();
        window.removeEventListener('load', handleLoad);
      };
    }
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black z-50 transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      } pointer-events-none`}
      style={{ visibility: fadeOut ? 'hidden' : 'visible' }}
    >
      <div className="text-white text-4xl mb-4">
        Loading {loadingProgress}%
      </div>
      <GlitchEffect />
    </div>
  );
};

export default LoadingSpinner;
