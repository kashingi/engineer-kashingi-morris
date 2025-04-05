
import { useState, useEffect } from 'react';
import DownloadCV from './DownloadCV';

const titles = [
  "Software Developer",
  "Frontend Developer",
  "Backend Developer",
  "Angular Developer",
  "React Developer",
  "Database Designer"
];

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;
    const currentTitle = titles[titleIndex];

    const typeText = () => {
      if (isDeleting) {
        // Deleting text
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((titleIndex + 1) % titles.length);
        }
      } else {
        // Typing text
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        
        if (displayText.length === currentTitle.length) {
          // Wait longer at the end of a complete title before deleting
          setTimeout(() => {
            setIsDeleting(true);
          }, 1500);
          return;
        }
      }
    };

    const timer = setTimeout(typeText, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section id="home" className="py-20 md:py-32 flex items-center min-h-[calc(100vh-4rem)]">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="text-primary">Morris Kashingi</span>
          </h1>
          <h4 className="text-xl md:text-2xl mb-8 text-muted-foreground font-bold animate-fade-in h-8 md:h-10" style={{ animationDelay: '0.2s' }}>
            <span>{displayText}</span>
            <span className="inline-block w-1 h-6 ml-1 bg-primary animate-pulse"></span>
          </h4>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <DownloadCV />
            <a href="#contact" className="btn-primary bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
