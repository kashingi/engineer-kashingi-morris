
import { Download } from 'lucide-react';

const DownloadCV = () => {
  // Note: In a real scenario, you would have an actual PDF file to download
  // For demo purposes, we'll just create a function that could be connected to a real file
  const handleDownload = () => {
    // In a real implementation, this would be:
    // window.open('/Morris_Kashingi_CV.pdf', '_blank');
    
    // For the demo, we'll just show an alert
    alert('CV download would start here in a real implementation');
  };

  return (
    <button onClick={handleDownload} className="btn-primary">
      <Download size={18} />
      Download CV
    </button>
  );
};

export default DownloadCV;
