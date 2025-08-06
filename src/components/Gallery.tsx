import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/acacia-hero.jpg";
import foodImage from "@/assets/acacia-food.jpg";
import coffeeImage from "@/assets/acacia-coffee.jpg";
import outdoorImage from "@/assets/acacia-outdoor.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      image: heroImage,
      title: "Restaurant Interior",
      description: "Warm, inviting dining space with African-inspired decor",
      category: "Interior"
    },
    {
      image: foodImage,
      title: "Signature Dishes",
      description: "Authentic African cuisine with international flair",
      category: "Food"
    },
    {
      image: coffeeImage,
      title: "Premium Coffee",
      description: "Locally sourced beans, expertly crafted",
      category: "Beverages"
    },
    {
      image: outdoorImage,
      title: "Outdoor Seating",
      description: "Beautiful terrace dining under acacia trees",
      category: "Outdoor"
    },
    {
      image: heroImage,
      title: "Cozy Atmosphere",
      description: "Perfect for intimate dinners and casual meetings",
      category: "Interior"
    },
    {
      image: foodImage,
      title: "Fresh Ingredients",
      description: "Quality ingredients sourced from local markets",
      category: "Food"
    }
  ];

  const categories = ["All", "Interior", "Food", "Beverages", "Outdoor"];

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-acacia-green/10 rounded-full px-4 py-2 mb-6">
            <span className="text-acacia-green font-semibold text-sm">Gallery</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            A Visual Journey Through Acacia
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            From our cozy interior to our delicious dishes, take a peek at what makes 
            Acacia Restaurant & Cafe a special place in Kigali.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Badge 
                key={index}
                variant={index === 0 ? "default" : "secondary"}
                className={`px-4 py-2 cursor-pointer transition-all duration-200 ${
                  index === 0 
                    ? "bg-acacia-green text-white hover:bg-acacia-green-light" 
                    : "bg-acacia-green/10 text-acacia-green hover:bg-acacia-green/20"
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-0 bg-card/50 backdrop-blur-sm card-hover cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <Badge 
                  className="absolute top-4 left-4 bg-acacia-green/90 text-white"
                >
                  {item.category}
                </Badge>

                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-lg font-serif font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/90">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-warm rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold mb-4">Experience Acacia Yourself</h3>
            <p className="text-white/90 mb-6">
              These photos only tell part of our story. Come visit us and experience 
              the full warmth of African hospitality, delicious food, and cozy atmosphere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-4 py-2 rounded-lg bg-white hover:bg-acacia-green hover:text-white text-acacia-green duration-700 border-[2px] hover:border-white border-acacia-green"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Make a Reservation
              </button>
              <button 
                className="border duration-700 border-white text-white hover:bg-white hover:text-acacia-green font-semibold px-6 py-3 rounded-lg transition-colors"
                onClick={() => window.open("https://maps.app.goo.gl/mpJKT8m7iafURKLu7", '_blank')}
              >
                Visit Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;