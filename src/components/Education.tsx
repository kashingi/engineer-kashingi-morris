
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, Book } from "lucide-react";

const Education = () => {
  const educations = [
    {
      degree: "BSc. Computer Science",
      institution: "Moi University",
      location: "Eldoret, Kenya",
      period: "September 2019 - December 2024",
      skills: [
        "Multiple programming languages",
        "Software development principles and practices and software law",
        "Computer hardware, system software, computer systems architecture and organization",
        "Mathematics for computer science",
        "Data structures and algorithms",
        "Procedural programming, Object Oriented Programming and Distributed Systems",
        "Electronics, Semiconductors, electronic Circuits and Microprocessors",
        "Database design and management",
        "Neural networks and Artificial Intelligence",
        "Data communication, Antennas and Propagation and computer networking",
        "Human Factors in Computer and Information Systems and Human-Computer Interface Design"
      ]
    },
    {
      degree: "Kenya Certificate of Secondary Education (KCSE)",
      institution: "AKoelel Secondary School",
      location: "Gilgil, Kenya",
      period: "February 2015 - November 2018",
      skills: [
        "Strong foundation in effective communication",
        "Discipline, teamwork, and time management",
        "Critical thinking and problem-solving skills"
      ]
    }
  ];

  const trainings = [
    {
      degree: "Certificate in Software Development",
      institution: "PLP Academy",
      location: "Nairobi, Kenya",
      period: "November 2023 - February 2024",
      skills: [
        "Computing Essentials",
        "Entrepreneurship and personal development",
        "Database management Systems",
        "Python for data analysis and python for web development",
        "Dart with flutter for mobile development",
        "Full stack development - MERN"
      ]
    },
    {
      degree: "Certificate in Software Engineering",
      institution: "Alx, Africa",
      location: "Remote",
      period: "September 2023 - December 2023",
      skills: [
        "Interactive system UI development using JavaScript",
        "Responsive UI development using framework - React Js",
        "Backend development using node js with express framework",
        "Database system design using MySQL workbench"
      ]
    },
    {
      degree: "Certificate in Web Development",
      institution: "PLP Academy",
      location: "Nairobi, Kenya",
      period: "February 2022 - April 2022",
      skills: [
        "Responsive web development using bootstrap as frontend framework",
        "Backend development using php",
        "User friendly and user centered UI development"
      ]
    }
  ];

  const renderTimeline = (items) => {
    return items.map((item, index) => (
      <div key={index} className="timeline-item">
        <div className="mb-1 flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <h3 className="text-xl font-bold text-primary">{item.degree}</h3>
          <span className="text-sm font-medium text-muted-foreground">{item.period}</span>
        </div>
        <p className="mb-2 font-medium">{item.institution} | {item.location}</p>
        <div className="mt-2">
          <h4 className="font-medium mb-1">Key Skills Gained:</h4>
          <ul className="space-y-1 list-disc list-inside text-muted-foreground">
            {item.skills.map((skill, sIndex) => (
              <li key={sIndex}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    ));
  };

  return (
    <section id="education" className="py-20">
      <div className="container">
        <h2 className="section-title">Education & Training</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Education Card */}
          <Card className="shadow-lg">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                <CardTitle>Education</CardTitle>
              </div>
              <Separator className="my-2" />
            </CardHeader>
            <CardContent className="space-y-6">
              {renderTimeline(educations)}
            </CardContent>
          </Card>

          {/* Training Card */}
          <Card className="shadow-lg">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Book className="h-6 w-6 text-primary" />
                <CardTitle>Professional Trainings</CardTitle>
              </div>
              <Separator className="my-2" />
            </CardHeader>
            <CardContent className="space-y-6">
              {renderTimeline(trainings)}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
