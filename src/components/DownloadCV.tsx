
import { Download } from 'lucide-react';

const DownloadCV = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    
    // Set the href to your CV file (you should add this file to your public folder)
    link.href = '/Morris_Kashingi_CV.pdf';
    
    // Set download attribute for the file name
    link.download = 'Morris_Kashingi_CV.pdf';
    
    // Append to the document
    document.body.appendChild(link);
    
    // Trigger the download
    link.click();
    
    // Clean up
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} className="btn-primary">
      <Download size={18} />
      Download CV
    </button>
  );
};

export default DownloadCV;
