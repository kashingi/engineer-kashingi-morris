
import { Download } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const DownloadCV = () => {
  const { toast } = useToast();
  
  const handleDownload = () => {
    // CV file path from the uploaded GitHub repo
    const cvPath = '/Morris_Kashingi_CV.pdf';
    
    // Create a link element
    const link = document.createElement('a');
    
    // Set the href to your CV file
    link.href = cvPath;
    
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
    <Button 
      onClick={handleDownload} 
      className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
    >
      <Download size={18} />
      Download CV
    </Button>
  );
};

export default DownloadCV;
