
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["Angular Ts", "React Js", "Bootstrap", "HTML/CSS", "JavaScript"],
    },
    {
      title: "Backend Development",
      skills: ["Java Spring Boot", "Laravel", "Node.js", "Express", "REST API"],
    },
    {
      title: "Mobile Development",
      skills: ["Dart", "Flutter", "Swift"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Figma", "Canva", "Swagger UI", "Git", "Postman", "VS Code", "IntelliJ IDEA"],
    },
    {
      title: "Hands-On Skills",
      skills: ["Computer Software Installation", "Hardware Maintenance", "Soft Skills Training"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
