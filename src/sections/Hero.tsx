import React, { useEffect, useState } from "react";
import { personalInfo } from "../constants/data";
import Button from "../components/Button";
import { ArrowDownCircle } from "lucide-react";
import profileImage from "../assets/Kashingi.jpg";

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = [
    "Software Developer",
    "Frontend Developer",
    "Angular Developer",
    "React Developer",
    "Database Designer",
  ];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && typedText === currentRole) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const timeout = setTimeout(() => {
        setTypedText((prev) => {
          if (isDeleting) {
            return prev.slice(0, -1);
          } else {
            return currentRole.slice(0, prev.length + 1);
          }
        });
      }, typeSpeed);

      return () => clearTimeout(timeout);
    }
  }, [typedText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-blue-900 to-gray-900"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-blue-500 rounded-full blur-[120px]"></div>
        <div className="absolute top-[60%] -left-[5%] w-[30%] h-[30%] bg-purple-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 mt-20 md:mt-15">
        {/* Title and Subtitle - Centered */}
        <div className="text-center mb-8 animated fadeIn">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white animated fadeInUp">
            Hi, I'm {personalInfo.name}
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Content Section - Left Side */}
          <div className="lg:col-span-8 text-center lg:text-center">
            <div className="h-8 md:h-12 mb-6">
              <h2 className="text-xl md:text-3xl text-gray-300 font-light min-h-8 typed-text animated fadeIn delay-500">
                {typedText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 animated fadeIn delay-700 lg:text-end">
              {personalInfo.description}
            </p>
            <div className="space-x-4 animated fadeInUp delay-1000">
              <Button
                variant="primary"
                size="sm"
                href="#contact"
                as="a"
                className="animated pulseEffect"
              >
                Let's Work Together
              </Button>
              <Button variant="outline" size="sm" href="#projects" as="a">
                View My Work
              </Button>
            </div>
          </div>

          {/* Profile Photo Section - Right Side */}
          <div className="lg:col-span-4 flex flex-col items-center animated fadeIn delay-300">
            <div className="relative mb-4">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl">
                <img
                  src="https://id-preview--194e2209-3e0e-4058-bfad-3adcab9537fc.lovable.app/lovable-uploads/ce5d6a8a-0d25-4cc2-9394-fad3f702c1fb.png"
                  alt="Morris Kashingi"
                  className="w-4/3 h-4/3 object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-2 rounded-full border-2 border-blue-400 opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animated bounce delay-1500">
          <a
            href="#projects"
            className="text-white opacity-80 hover:opacity-100 transition-all duration-300"
            aria-label="Scroll down"
          >
            <ArrowDownCircle size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
