
import { Download } from 'lucide-react';
import { useToast } from "@/components/ui/toast";

const DownloadCV = () => {
  const { toast } = useToast();
  
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    
    // Set the href to your CV file
    link.href = '/Morris_Kashingi_CV.pdf';
    
    // Set download attribute for the file name
    link.download = 'Morris_Kashingi_CV.pdf';
    
    // Append to the document
    document.body.appendChild(link);
    
    // Trigger the download
    link.click();
    
    // Clean up
    document.body.removeChild(link);
    
    // Show toast notification
    toast({
      title: "CV Download Started",
      description: "Your download should begin shortly.",
    });
  };

  return (
    <button onClick={handleDownload} className="btn-primary">
      <Download size={18} />
      Download CV
    </button>
  );
};

export default DownloadCV;
