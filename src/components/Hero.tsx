
import DownloadCV from './DownloadCV';

const Hero = () => {
  return (
    <section id="home" className="py-20 md:py-32 flex items-center min-h-[calc(100vh-4rem)]">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="text-primary">Morris Kashingi</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Software Developer specializing in building exceptional digital experiences
          </p>
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
