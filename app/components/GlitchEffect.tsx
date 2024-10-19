import { useEffect } from 'react';
import { gsap } from 'gsap';

const GlitchEffect: React.FC = () => {
  useEffect(() => {
    const runGlitchEffect = () => {
      const element = document.querySelector('.htg-glitch') as HTMLElement;
      if (!element) return;

      const originalText = element.textContent || '';
      let currentText = originalText.split('');
      const totalDuration = 1.5;

      const getFontSizes = (): string[] => {
        const width = window.innerWidth;
        return width >= 992 ? ['3.98vw', '3.99vw', '4vw', '4.01vw', '4.02vw'] : ['5.48vw', '5.49vw', '5.5vw', '5.51vw', '5.52vw'];
      };

      let fontSizes = getFontSizes();
      let fontSizeInterval: NodeJS.Timeout;

      const changeFontSize = () => {
        element.style.fontSize = fontSizes[Math.floor(Math.random() * fontSizes.length)];
      };

      fontSizeInterval = setInterval(changeFontSize, 10);

      const removeRandomChar = () => {
        if (currentText.some(char => char !== '\u00A0')) {
          let randomIndex: number;
          do {
            randomIndex = Math.floor(Math.random() * currentText.length);
          } while (currentText[randomIndex] === '\u00A0');

          currentText[randomIndex] = '\u00A0';
          element.innerHTML = currentText.join('');

          const averageTimePerChar = totalDuration / originalText.length;
          const randomFactor = gsap.utils.random(0.5, 1.5);
          const delay = averageTimePerChar * randomFactor;
          gsap.delayedCall(delay, removeRandomChar);
        } else {
          // Reset text and restart glitch effect
          currentText = originalText.split('');
          element.innerHTML = originalText;
          clearInterval(fontSizeInterval);
          gsap.delayedCall(1, runGlitchEffect); // Delay before restarting
        }
      };

      removeRandomChar();

      window.addEventListener('resize', () => {
        fontSizes = getFontSizes();
      });
    };

    runGlitchEffect();
  }, []);

  return (
    <div className="htg-glitch" style={{ textAlign: 'center', marginTop: '50px', fontSize:'75px', fontFamily: 'Earthen Parasite', color: "white" }}>
      CHANDIGARH
    </div>
  );
};

export default GlitchEffect;
