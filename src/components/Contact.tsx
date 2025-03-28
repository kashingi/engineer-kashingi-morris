
const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="max-w-md mx-auto">
          <div className="grid gap-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <p className="flex flex-col">
                  <span className="font-medium">Email:</span>
                  <a href="mailto:moriskashing74@gmail.com" className="text-primary hover:underline">
                    moriskashing74@gmail.com
                  </a>
                </p>
                <p className="flex flex-col">
                  <span className="font-medium">Phone:</span>
                  <a href="tel:+254790487504" className="text-primary hover:underline">
                    +254 790 487 504
                  </a>
                </p>
                <p className="flex flex-col">
                  <span className="font-medium">Address:</span>
                  <span>P.O Box 55 - 80113, Mariakani</span>
                </p>
              </div>
            </div>

            <div className="text-center mt-6">
              <h3 className="text-xl font-semibold mb-4">Social Media</h3>
              <div className="flex justify-center gap-4">
                <a 
                  href="https://linkedin.com/in/kashingi-morris930a77234" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/kashingi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
