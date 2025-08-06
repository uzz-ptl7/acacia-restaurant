import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail,
  Send,
  ExternalLink
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting Acacia. We'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "Remera, Kigali, Rwanda",
      action: "View on Google Maps",
      link: "https://maps.app.goo.gl/mpJKT8m7iafURKLu7"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+250 782 721 772",
      action: "Call Now",
      link: "tel:+250782721772"
    },
    {
      icon: Clock,
      title: "Opening Hours",
      content: "Daily: 7:00 AM - 11:00 PM",
      action: "View Full Schedule"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@acaciarestaurant.rw",
      action: "Send Email",
      link: "mailto:info@acaciarestaurant.rw"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-acacia-green/10 rounded-full px-4 py-2 mb-6">
            <span className="text-acacia-green font-semibold text-sm">Contact Us</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Get in Touch with Acacia
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to make a reservation, have questions about our menu, or want to plan an event? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 bg-card/50 backdrop-blur-sm card-hover">
                  <CardContent className="lg:p-6 md:p-6 p-2">
                    <div className="flex items-start lg:space-x-4 md:space-x-4 space-x-2">
                      <div className="w-12 h-12 bg-acacia-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-acacia-green" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-muted-foreground mb-3">{info.content}</p>
                        {info.link ? (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-acacia-green hover:text-acacia-green-light p-0 h-auto"
                            onClick={() => window.open(info.link, '_blank')}
                          >
                            {info.action}
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        ) : (
                          <span className="text-sm text-acacia-green font-medium">{info.action}</span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-scale-in">
            <Card className="border-0 bg-card/70 backdrop-blur-sm shadow-warm">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-foreground">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="border-border focus:ring-acacia-green"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="border-border focus:ring-acacia-green"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your reservation request, questions, or feedback..."
                      rows={5}
                      required
                      className="border-border focus:ring-acacia-green resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-acacia-green hover:bg-acacia-green-light text-white font-semibold btn-glow"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("tel:+250782721772")}
                className="border-acacia-green text-acacia-green hover:bg-acacia-green hover:text-white"
              >
                <Phone className="w-4 h-4 mr-2" />
                Quick Call
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("https://maps.app.goo.gl/mpJKT8m7iafURKLu7", '_blank')}
                className="border-acacia-green text-acacia-green hover:bg-acacia-green hover:text-white"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Directions
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 container-custom animate-fade-in">
        {/* Map Embed */}
        <Card className="border-0 overflow-hidden">
          <CardContent className="p-0">
            <div className="w-full h-[350px] md:h-[250px] lg:h-[350px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5285515!2d30.1263!3d-1.9441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca681af000001%3A0x1!2sRemera%2C%20Kigali%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Acacia Restaurant Location"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>

    </section>
  );
};

export default Contact;