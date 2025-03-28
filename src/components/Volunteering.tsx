
const Volunteering = () => {
  const volunteeringExperiences = [
    {
      title: "Academic Mentor",
      organization: "Equity Group Foundation",
      location: "Rift Valley Region, Kenya",
      period: "2020 - 2024",
      description: "Volunteered as a mentor for the Equity Group Foundation, supporting Wings to Fly and Elimu students in the Rift Valley region."
    },
    {
      title: "Academic Mentor",
      organization: "Viragoni Elites",
      location: "Mwanamwinga, Kenya",
      period: "December 2022",
      description: "Volunteered as a mentor with Viragoni Elites, encouraging students in the community to maintain academic focus and discipline."
    },
    {
      title: "Academic Mentor",
      organization: "Caris Foundation",
      location: "Malindi, Kenya",
      period: "November 2021",
      description: "Volunteered as a mentor with Caris Foundation-Malindi, encouraging students in surrounding schools to stay focused despite their challenges."
    },
    {
      title: "Data Clerk",
      organization: "Equity Bank KE",
      location: "Mtwapa, Kenya",
      period: "December 2019",
      description: "Volunteered as a data clerk, assisting in entering student information into the data management system and facilitating the transition of selected Wings to Fly and Elimu students to secondary school."
    }
  ];

  return (
    <section id="volunteering" className="py-20 bg-secondary/30 dark:bg-secondary/10">
      <div className="container">
        <h2 className="section-title">Volunteering</h2>
        <div className="max-w-4xl mx-auto">
          {volunteeringExperiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="mb-1 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                <span className="text-sm font-medium text-muted-foreground">{exp.period}</span>
              </div>
              <p className="mb-2 font-medium">{exp.organization} | {exp.location}</p>
              <p className="text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
