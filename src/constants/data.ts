import { GithubIcon, CodeIcon, DatabaseIcon, ServerIcon, BrainCircuitIcon, BookIcon, PencilRulerIcon, LinkedinIcon, PhoneIcon , TabletSmartphoneIcon } from 'lucide-react';

export const personalInfo = {
  name: "Morris Kashingi",
  title: "Software Developer",
  email: "moriskashing74@gmail.com",
  phone: "+254790487504",
  location: "Mariakani, Kenya",
  description: "Highly skilled Software Developer with a Bachelor's degree in Computer Science and extensive experience in software development. Proficient in multiple programming languages and frameworks, including Laravel, Angular Ts, Node.js with Express, Bootstrap and Java Spring Boot. Known for creating user-centric solutions and collaborating with cross-functional teams to develop, test, and deploy scalable applications.",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/kashingi",
      icon: GithubIcon,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kashingi-morris-930a77234/",
      icon: LinkedinIcon,
    },
  ]
};

export const navigationLinks = [
  { label: "Home", path: "#home" },
  { label: "Projects", path: "#projects" },
  { label: "Skills", path: "#skills" },
  { label: "Experience", path: "#experience" },
  { label: "Testimonials", path: "#testimonials" },
  { label: "Contact", path: "#contact" },
];

export const skills = [
  {
    category: "Frontend",
    icon: CodeIcon,
    technologies: [
      { name: "Angular", level: 90 },
      { name: "React", level: 85 },
      { name: "Bootstrap", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript/TypeScript", level: 88 },
    ]
  },
  {
    category: "Backend",
    icon: ServerIcon,
    technologies: [
      { name: "Java Spring Boot", level: 90 },
      { name: "Laravel", level: 88 },
      { name: "Node.js/Express", level: 85 },
      { name: "PHP Laravel", level: 85 },
    ]
  },
  {
    category: "Mobile Development",
    icon: PhoneIcon,
    technologies: [
      { name: "Flutter/Dart", level: 85 },
      { name: "Swift", level: 80 },
      { name: "React Native", level: 75 },
    ]
  },
  {
    category: "Database",
    icon: DatabaseIcon,
    technologies: [
      { name: "MySQL", level: 90 },
      { name: "MongoDB", level: 85 },
    ]
  },
  {
    category: "Tools & Platforms",
    icon: BrainCircuitIcon,
    technologies: [
      { name: "Git", level: 90 },
      { name: "Figma", level: 85 },
      { name: "Swagger UI", level: 85 },
      { name: "Postman", level: 88 },
      { name: "Canva", level: 85 },
    ]
  }
];

export const projects = [
  {
    title: "Teller Automation System",
    category: "Banking",
    description: "A bank solution to improve teller efficiency, reduce customer waiting time, and enhance access to banking services. Achieved 80% improvement in operational efficiency.",
    image: "https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg",
    technologies: ["Angular", "Java Spring Boot", "MySQL", "REST APIs"],
    link: "https://github.com/emtech-repo/Teller-Automation.git",
    featured: true
  },
  {
    title: "Kanisa App",
    category: "Church Management",
    description: "A comprehensive church management system enabling efficient member management, financial tracking, and service organization. Includes reporting and analytics features.",
    image: "https://images.pexels.com/photos/236339/pexels-photo-236339.jpeg",
    technologies: ["Angular", "Spring Boot", "Bootstrap", "MySQL"],
    link: "https://caritas-kanisa.emtechhouse.co.ke:8907",
    featured: true
  },
  {
    title: "AniTrack",
    category: "Agriculture",
    description: "Animal tracking solution for pastoralist communities in Kenya, providing livestock management information and government oversight capabilities.",
    image: "https://images.pexels.com/photos/735968/pexels-photo-735968.jpeg",
    technologies: ["React", "Node.js", "MongoDB", "GPS Integration"],
    link: "https://github.com/kashingi/AnimalTracking.git",
    featured: true
  },
  {
    title: "MSME Banking Solution",
    category: "Banking",
    description: "A robust banking services solution for bank's MSME clients, improving access to financial services for small businesses.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    technologies: ["Angular", "Java Spring Boot", "PostgreSQL", "REST APIs"],
    link: "https://ecosystem.emtechhouse.co.ke:4015",
    featured: true
  },
  {
    title: "Cafe Management System",
    category: "Hospitality",
    description: "A comprehensive cafe management system for streamlining operations, order management, and inventory control.",
    image: "https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg",
    technologies: ["Java Spring Boot", "Angular", "Bootstrap", "Angular Material"],
    link: "https://cafe-frontend-eljb.vercel.app/",
    featured: false
  },
  {
    title: "E-commerce Platform",
    category: "Retail",
    description: "Full-featured e-commerce platform with product management, shopping cart, and secure payment integration.",
    image: "https://images.pexels.com/photos/34577/pexels-photo.jpg",
    technologies: ["Java Spring Boot", "Angular", "Bootstrap", "Angular Material"],
    link: "https://ecommerce-lake-delta.vercel.app/",
    featured: false
  },
  {
    title: "Article Hub",
    category: "Content Management",
    description: "A platform for creating, managing, and sharing articles with user authentication and rich text editing.",
    image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg",
    technologies: ["Node.js", "Express", "Angular", "Bootstrap", "Angular Material"],
    link: "https://github.com/kashingi/Article-Hub-Node.git",
    featured: false
  }
];

export const testimonials = [
  {
    name: "Kalama Antomy",
    role: "HR Assistant, Equity Group Holdings PLC",
    content: "Morris demonstrated exceptional skills in digital banking implementation and customer service. His technical expertise and ability to explain complex systems to customers made him an invaluable team member.",
    avatar: "https://id-preview--194e2209-3e0e-4058-bfad-3adcab9537fc.lovable.app/lovable-uploads/182dd3d0-17dd-41b3-a37c-92f9e45b9961.png"
  },
  {
    name: "Susan Kamau",
    role: "Assistant Principal, PLP Academy",
    content: "Morris excelled as a software development trainer, effectively teaching complex concepts and inspiring students. His practical approach to teaching the MERN stack and integration of real-world applications like M-Pesa made the content highly relevant.",
    avatar: "https://ci3.googleusercontent.com/mail-sig/AIorK4yhsrqNQUzdumMnLi8Cxcy3bRnnbdvjZ6dKfcO30W2ayFT2cBexbLOzfZVI1o5uoD0mdtUDhaCeOvWm"
  }
];

export const services = [
  {
    title: "Full-Stack Development",
    description: "End-to-end development using Angular, React, Boostrap, Java spring Boot, Node.js with express framework and PHP Laravel with focus on scalable and maintainable solutions.",
    icon: CodeIcon
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile application development using Flutter/Dart and Swift.",
    icon: TabletSmartphoneIcon
  },
  {
    title: "Technical Training",
    description: "Comprehensive software development training and mentorship in web technologies and MERN stack and digital skills.",
    icon: BookIcon
  },
  {
    title: "Database Design",
    description: "Efficient database design and implementation using MySQL and MongoDB.",
    icon: DatabaseIcon
  },
  {
    title: "UI/UX Implementation",
    description: "Creating responsive and user-friendly interfaces using modern frameworks and design tools.",
    icon: PencilRulerIcon
  },
  {
    title: "Digital Banking Solutions",
    description: "Implementation and training for digital banking systems and financial technology solutions.",
    icon: ServerIcon
  }
];

export const experience = [
  {
    role: "Software Developer",
    company: "E&M Technology House",
    period: "Jan 2023 - Dec 2024",
    description: "Dynamic and responsive UI / UX design and implementation, developing and maintaining robust back-end services and APIs, and database design and implementation",
    technologies: ["Angular", "Bootstrap", "TypeScript", "Bootstrap", "Angular Material", "Java Spring Boot", "MySQL", "REST APIs", "MongoDB"]
  },
  {
    role: "Software Development Trainer",
    company: "PLP Academy",
    period: "Oct 2023 - Feb 2024",
    description: "Trained leaners on web technologies, full stack web developmemnt with MERN (MongoDB, Express, React, and Node.js), and Lipa na M-Pesa integration", 
    technologies: ["HTML", "CSS", "JavaScript", "Node.js","Express framework","MongoDB", " React Js", "Node.js", "Daraja API", "Git"]
  },
  {
    role: "Digital Banking Officer",
    company: "Equity Bank",
    period: "October 20202 - May 2023",
    description: "Promoted digitization and digital banking channels. Onboarded customers on digital banking products. Educated customers on how to use digital banking products to prevent fraud.",
    technologies: ["Equitel", "*247#", "Equity Mobile", "Equity Online"]
  }
];