import { useEffect } from 'react';
import { gsap } from 'gsap';

const GlitchEffect: React.FC = () => {
  useEffect(() => {
    const runGlitchEffect = () => {
      const element = document.querySelector('.htg-glitch') as HTMLElement;
      if (!element) return;

      const originalText = 'CHANDIGARH';
      let currentText = originalText.split('');
      const totalDuration = 1.5;

      const getFontSizes = (): string[] => {
        const width = window.innerWidth;
        return width >= 992
          ? ['3.98vw', '3.99vw', '4vw', '4.01vw', '4.02vw']
          : ['5.48vw', '5.49vw', '5.5vw', '5.51vw', '5.52vw'];
      };

      let fontSizes = getFontSizes();
      let fontSizeInterval: NodeJS.Timeout;

      // Function to change font size randomly
      const changeFontSize = () => {
        element.style.fontSize = fontSizes[Math.floor(Math.random() * fontSizes.length)];
      };

      // Start the font size changing effect
      fontSizeInterval = setInterval(changeFontSize, 10);

      // Function to remove random characters from the text
      const removeRandomChar = () => {
        if (currentText.some((char) => char !== '\u00A0')) {
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
          // Reset text to original and restart glitch effect
          clearInterval(fontSizeInterval);
          element.innerHTML = originalText;

          // Wait for 1 second before restarting the glitch effect
          gsap.delayedCall(1, () => {
            currentText = originalText.split('');
            runGlitchEffect();
          });
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
    <div
      className="htg-glitch"
      style={{
        textAlign: 'center',
        marginTop: '50px',
        fontSize: '75px',
        fontFamily: 'Earthen Parasite',
        color: 'white',
        textShadow: '0 0 15px rgba(0,0,0,0.5)',
      }}
    >
      CHANDIGARH
    </div>
  );
};

export default GlitchEffect;
