
const Certifications = () => {
  const certifications = [
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM",
      link: "https://skills.yourlearning.ibm.com/credential/CREDLY-29bdaec3-af04-458e-a70e2e6fa78c5dd5"
    },
    {
      title: "Angular Ecosystems",
      issuer: "LinkedIn",
      link: "https://www.linkedin.com/learning/certificates/7d6602f15a14e18c96c079b630dbe2dcde0d1977226b71b9bbd00ef7732c4b76"
    },
    {
      title: "Java Essential Training: Objects and APIs",
      issuer: "LinkedIn",
      link: "https://www.linkedin.com/learning/certificates/a485e8ead0ada4cdb1c0e4fe5d39179e388e8bcce0ddcc713db6a94920abf9fb"
    },
    {
      title: "Succeeding in Web Development",
      issuer: "LinkedIn",
      link: "https://www.linkedin.com/learning/certificates/bf2f37de5fa378f17176a8459cc063a555759271b93936248a6a8f7e97218e8e"
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <a 
              key={index} 
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-2 text-primary">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">Issued by {cert.issuer}</p>
              <p className="mt-4 text-xs text-primary underline">View Certificate</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
