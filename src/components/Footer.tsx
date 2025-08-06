import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Heart
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-acacia-green text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <div className="text-xl font-serif font-semibold">
                  Acacia Restaurant & Cafe
                </div>
              </div>
              
              <p className="text-white/80 mb-6 max-w-md leading-relaxed">
                Experience the warmth of African hospitality with exceptional cuisine, 
                great coffee, and a cozy atmosphere in the heart of Remera, Kigali. 
                Your home away from home.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-white/80">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>Remera, Kigali, Rwanda</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <a href="tel:+250782721772" className="hover:text-white transition-colors">
                    +250 782 721 772
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a href="mailto:info@acaciarestaurant.rw" className="hover:text-white transition-colors">
                    info@acaciarestaurant.rw
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <span>Daily: 7:00 AM - 11:00 PM</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/80 hover:text-white transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services & Features */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-3 text-white/80">
                <li>✅ Fresh Quality Food</li>
                <li>♿ Wheelchair Accessible</li>
                <li>🌱 Vegan & Vegetarian</li>
                <li>🚚 Delivery & Takeaway</li>
                <li>🌿 Outdoor Seating</li>
                <li>☕ Premium Coffee</li>
                <li>🍸 Cocktails & Spirits</li>
                <li>👨‍👩‍👧‍👦 Family Friendly</li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="text-center">
            <div className="text-white/80 text-sm space-y-2">
              <p className="flex items-center justify-center">
                © {currentYear} Acacia Restaurant & Cafe. Made with 
                <Heart className="w-4 h-4 mx-1 text-red-400" fill="currentColor" />
                in Kigali, Rwanda
              </p>
              <p>
                Made with ❤️ in Rwanda by the{" "}
                <a 
                  href="https://www.sitecraftersz.co/" 
                  className="underline hover:text-white transition-colors duration-500" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Sitecrafters Team
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;