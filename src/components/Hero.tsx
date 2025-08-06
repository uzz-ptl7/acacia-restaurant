import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star } from "lucide-react";
import heroImage from "@/assets/acacia-hero.jpg";

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.querySelector("#menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Acacia Restaurant Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-acacia-gold" fill="currentColor" />
            <span className="text-sm font-medium">Authentic African Cuisine</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
            Welcome to{" "}
            <span className="text-acacia-gold">Acacia</span>
            <br />
            Restaurant & Cafe
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the warmth of African hospitality with exceptional cuisine, 
            great coffee, and a cozy atmosphere in the heart of Remera, Kigali.
          </p>

          {/* Location & Hours */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-10 text-white/80">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Remera, Kigali, Rwanda</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Open Daily 7:00 AM - 11:00 PM</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToMenu}
              className="bg-acacia-green hover:bg-acacia-green-light text-white font-semibold px-8 py-4 text-lg btn-glow"
            >
              Explore Menu
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-white text-white hover:bg-white hover:text-acacia-green font-semibold px-8 py-4 text-lg"
            >
              Make Reservation
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-acacia-gold">100%</div>
              <div className="text-sm text-white/80">Halal Food</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-acacia-gold">♿</div>
              <div className="text-sm text-white/80">Accessible</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-acacia-gold">🌱</div>
              <div className="text-sm text-white/80">Vegan Options</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-acacia-gold">☕</div>
              <div className="text-sm text-white/80">Great Coffee</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;