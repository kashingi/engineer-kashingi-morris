
import { Download } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const DownloadCV = () => {
  const { toast } = useToast();
  
  const handleDownload = () => {
    // This is a placeholder function
    // In a real application, you would link to an actual CV file
    
    // Show toast notification
    toast({
      title: "CV Download",
      description: "This feature is not implemented yet.",
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
