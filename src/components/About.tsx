import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, Coffee } from "lucide-react";
import outdoorImage from "@/assets/acacia-outdoor.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Authentic Hospitality",
      description: "We welcome every guest with the warmth and care of traditional African hospitality."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Creating a space where families, friends, and solo diners feel at home in Kigali."
    },
    {
      icon: Award,
      title: "Quality Cuisine",
      description: "Fresh, high-quality ingredients prepared with passion and attention to detail."
    },
    {
      icon: Coffee,
      title: "Perfect Atmosphere",
      description: "A cozy, accessible environment perfect for any occasion, from business meetings to family gatherings."
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-cream">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in">
            <div className="inline-block bg-acacia-green/10 rounded-full px-4 py-2 mb-6">
              <span className="text-acacia-green font-semibold text-sm">About Acacia</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Where African Flavors Meet Modern Comfort
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Named after the iconic acacia trees that dot the Rwandan landscape, our restaurant 
              embodies the spirit of growth, resilience, and natural beauty. Since opening our doors 
              in Remera, we've been committed to serving exceptional cuisine that celebrates both 
              local traditions and international flavors.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Acacia, we believe dining is about more than just food – it's about creating 
              connections, celebrating moments, and providing a welcoming space for everyone. 
              Our fully accessible restaurant offers halal options, vegetarian delights, and 
              the perfect cup of coffee to accompany any meal.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <Card key={index} className="border-0 bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300 card-hover">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-acacia-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-5 h-5 text-acacia-green" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="relative overflow-hidden rounded-2xl shadow-warm">
              <img
                src={outdoorImage}
                alt="Acacia Restaurant Outdoor Seating"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-card p-6 animate-float">
              <div className="text-center">
                <div className="text-2xl font-bold text-acacia-green">5+</div>
                <div className="text-sm text-muted-foreground">Years Serving</div>
                <div className="text-sm text-muted-foreground">Kigali</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-acacia-green rounded-xl shadow-card p-6 text-white animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Halal</div>
                <div className="text-sm">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;