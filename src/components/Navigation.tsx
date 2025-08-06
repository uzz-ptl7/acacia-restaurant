import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-sm shadow-card" : "bg-transparent"
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-warm rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div className="text-xl font-serif font-semibold text-acacia-green">
              Acacia Restaurant
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-acacia-green transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
            <Button
              variant="default"
              size="sm"
              className="bg-acacia-green hover:bg-acacia-green-light btn-glow"
              onClick={() => window.open("tel:+250782721772")}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-background/98 backdrop-blur-sm border-t border-border shadow-warm">
            <div className="container-custom py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-foreground hover:text-acacia-green transition-colors duration-200 font-medium py-2"
                  >
                    {item.name}
                  </button>
                ))}
                <Button
                  variant="default"
                  size="sm"
                  className="bg-acacia-green hover:bg-acacia-green-light btn-glow self-start mt-4"
                  onClick={() => window.open("tel:+250782721772")}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;