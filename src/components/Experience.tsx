
const Experience = () => {
  const experiences = [
    {
      title: "Software Development Trainer",
      company: "PLP Academy",
      location: "Nairobi, Kenya",
      period: "October 2024 - February 2025",
      responsibilities: [
        "Delivered content to students for the web development module, covering languages such as HTML, CSS, JavaScript, and Node.js with the Express framework.",
        "Delivered content to learners specializing in the MERN stack, enabling them to apply their knowledge to develop effective solutions for real-world problems.",
        "Taught learners how to integrate Lipa na M-Pesa into their solutions using Daraja."
      ]
    },
    {
      title: "Software Developer - Intern",
      company: "E&M Technology House",
      location: "Tatu City, Kenya",
      period: "January 2024 - December 2024",
      responsibilities: [
        "Developed dynamic and modern web applications using Angular, leveraging Bootstrap and Angular Material for UI component design and implementation.",
        "Developed and maintained robust back-end services and APIs for our dynamic web and mobile applications using Java and Spring Framework.",
        "Managed and maintained databases to store data, transactions, and other relevant information for easier retrieval by the developed applications.",
        "Participated in development of a teller automation solution to help banks reduce customer waiting time, improve tellers' working processes, and enhance efficiency by 80%.",
        "Participated in development of Kanisa app which enable churches to manage members, services, finances and be able to generate reports.",
        "Consumed developed application APIs to ensure communication between the front-end and back-end, producing responsive and user-friendly applications."
      ]
    },
    {
      title: "Digital Banking Officer",
      company: "Equity Bank (KE) - Malindi",
      location: "Malindi, Kenya",
      period: "September 2020 - May 2023",
      responsibilities: [
        "Promoted digitization and digital banking channels such as Equitel, Equity Mobile, Equity Online, and *247# to ensure customers can access banking services anytime.",
        "Onboarded customers on digital banking products to enable easy access to their bank accounts and smooth transaction processes.",
        "Educated customers on how to use digital banking products to prevent fraud and facilitate easy access and use of funds in their bank accounts."
      ]
    },
    {
      title: "Computer Science Attachment",
      company: "TechBiz Africa Ltd",
      location: "Mombasa, Kenya",
      period: "September 2022 - November 2022",
      responsibilities: [
        "Designed modern system user interfaces using PHP Laravel framework and Bootstrap to make the developed UIs interactive and user friendly.",
        "Provided technical support, troubleshooting hardware/software issues on IT endpoints including desktops and laptops.",
        "Deployed systems to clients and provided training on their operation to enhance customer satisfaction and gather feedback.",
        "Installed and upgraded operating systems and antivirus software, resolving hardware and software issues."
      ]
    },
    {
      title: "Relationship Officer",
      company: "Equity Bank (KE) - Kilifi",
      location: "Kilifi, Kenya",
      period: "February 2019 - August 2019",
      responsibilities: [
        "Processed deposits, withdrawals, and fund transfers accurately while handling check deposits, bill payments, and currency exchange.",
        "Maintained accurate transaction records and reconciled daily balances while verifying customer identities and ensuring compliance with banking regulations.",
        "Built and maintained strong relationships with customers to understand their banking needs while educating clients on banking products and services.",
        "Identified opportunities to sell financial products and services that suit customers' needs while addressing inquiries and resolving complaints."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30 dark:bg-secondary/10">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="mb-1 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                <span className="text-sm font-medium text-muted-foreground">{exp.period}</span>
              </div>
              <p className="mb-2 font-medium">{exp.company} | {exp.location}</p>
              <ul className="mt-2 space-y-2 list-disc list-inside text-muted-foreground">
                {exp.responsibilities.map((resp, rIndex) => (
                  <li key={rIndex}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
