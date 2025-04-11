
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from 'emailjs-com';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type FormValues = z.infer<typeof formSchema>;

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_ycq9xus'; 
const EMAILJS_TEMPLATE_ID = 'template_4scm4jm'; 
const EMAILJS_PUBLIC_KEY = 'prkc4iYp-N_e8njWG'; 

// Recipient email
const RECIPIENT_EMAIL = 'moriskashing74@gmail.com';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      console.log('Form data submitted:', data);
      
      // Prepare template parameters for EmailJS based on the template format
      const templateParams = {
        // Match these exactly to your EmailJS template variables
        title: data.subject,
        name: data.name,
        email: data.email,
        message: data.message,
        to_email: RECIPIENT_EMAIL,
        reply_to: data.email,
      };
      
      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      console.log('EmailJS response:', response);
      
      toast.success('Message sent successfully! Morris will get back to you soon.');
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Provide a fallback option in case the form submission fails
      toast.error(
        <div>
          Failed to send message. Please email directly at: 
          <a 
            href={`mailto:${RECIPIENT_EMAIL}`} 
            className="font-medium text-primary hover:underline ml-1"
          >
            {RECIPIENT_EMAIL}
          </a>
        </div>
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="max-w-md mx-auto">
          <div className="mb-8 text-center">
            <div className="flex justify-center mb-4">
              <Mail size={36} className="text-primary" />
            </div>
            <p className="text-muted-foreground">
              Fill out the form below to send Morris a message directly.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Or email directly at: <a href={`mailto:${RECIPIENT_EMAIL}`} className="text-primary hover:underline">{RECIPIENT_EMAIL}</a>
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email address" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Message subject" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Write your message here..." 
                        className="min-h-32"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
