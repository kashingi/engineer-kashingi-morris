
import { useState, useEffect } from 'react';
import DownloadCV from './DownloadCV';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

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
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left w-full">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Hi, I'm <span className="text-primary">Morris Kashingi</span>
            </h3>
            <h4 className="text-lg sm:text-xl md:text-2xl mb-8 text-muted-foreground font-bold animate-fade-in h-8 md:h-10" style={{ animationDelay: '0.2s' }}>
              <span>{displayText}</span>
              <span className="inline-block w-1 h-6 ml-1 bg-primary animate-pulse"></span>
            </h4>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <DownloadCV />
              <a href="#contact" className="btn-primary bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Get in Touch
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Avatar className="h-36 w-36 sm:h-48 sm:w-48 border-4 border-primary shadow-xl">
              <AvatarImage src="/lovable-uploads/b604ee67-9972-4236-85ca-500076c2294c.png" alt="Morris Kashingi" />
              <AvatarFallback>MK</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
