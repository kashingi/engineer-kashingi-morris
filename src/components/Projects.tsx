
const Projects = () => {
  const projects = [
    {
      title: "TellerAutomation",
      description: "Bank solution aiming to improve the efficiency of tellers, reducing customer waiting time in banks and providing easier access to banking services.",
      role: "Participated in the development",
      technologies: ["Angular", "Java Spring Boot", "MySQL", "RESTful APIs"]
    },
    {
      title: "Kanisa App",
      description: "Church management application enabling churches to easily manage members, finances, and providing members with easy access to church services.",
      role: "Participated in the development",
      technologies: ["Angular", "Bootstrap", "Java Spring Boot", "MySQL"]
    },
    {
      title: "AniTrack",
      description: "Animal tracking solution providing information on livestock in pastoralist communities in Kenya, enabling easier government management.",
      role: "Lead developer",
      technologies: ["React.js", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "MSME Solution",
      description: "Banking solution developed for ABSA bank to provide banking services to its various clients, focusing on Micro, Small, and Medium Enterprises.",
      role: "Participated in the development",
      technologies: ["Angular", "Java Spring Boot", "RESTful APIs", "Oracle"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30 dark:bg-secondary/10">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
                <p className="mb-4 text-muted-foreground">{project.description}</p>
                <p className="mb-4"><span className="font-medium">Role:</span> {project.role}</p>
                <div>
                  <h4 className="font-medium mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
