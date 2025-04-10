
import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Volunteering from '../components/Volunteering';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  useEffect(() => {
    // Check user's preferred color scheme
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply dark mode if preferred
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
    
    // Set the title
    document.title = "Morris Kashingi | Software Developer";
    
    // Preload profile image for faster rendering
    const img = new Image();
    img.src = "/lovable-uploads/b604ee67-9972-4236-85ca-500076c2294c.png";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Certifications />
        <Volunteering />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
