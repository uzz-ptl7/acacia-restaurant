import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Accessibility, 
  Car, 
  DoorOpen, 
  Users, 
  Wifi, 
  Truck, 
  ShoppingBag, 
  UtensilsCrossed,
  MapPin,
  Clock,
  CreditCard,
  Baby,
  Volume2,
  TreePine
} from "lucide-react";

const Services = () => {
  const accessibilityFeatures = [
    { icon: Car, title: "Wheelchair-accessible parking", description: "Convenient parking spaces near entrance" },
    { icon: DoorOpen, title: "Wheelchair-accessible entrance", description: "Easy access with ramp and wide doors" },
    { icon: Users, title: "Wheelchair-accessible seating", description: "Comfortable seating throughout restaurant" },
    { icon: Accessibility, title: "Wheelchair-accessible toilet", description: "Fully equipped accessible restroom" }
  ];

  const serviceOptions = [
    { icon: TreePine, title: "Outdoor seating", description: "Beautiful terrace with acacia trees", popular: true },
    { icon: Truck, title: "No-contact delivery", description: "Safe delivery to your doorstep" },
    { icon: Truck, title: "Delivery", description: "Hot food delivered fresh" },
    { icon: ShoppingBag, title: "Takeaway", description: "Quick pickup service" },
    { icon: UtensilsCrossed, title: "Dine-in", description: "Full restaurant experience" }
  ];

  const diningOptions = [
    "Breakfast", "Lunch", "Dinner", "Dessert", "Catering", "Happy Hour"
  ];

  const offerings = [
    { icon: "☕", title: "Premium Coffee", description: "Locally sourced beans" },
    { icon: "🍸", title: "Cocktails & Spirits", description: "Creative drinks & classics" },
    { icon: "🥗", title: "Fresh Food", description: "Quality ingredients daily" },
    { icon: "🌱", title: "Vegan & Vegetarian", description: "Plant-based options" },
    { icon: "🍽️", title: "All-You-Can-Eat", description: "Special buffet offerings" },
    { icon: "🥘", title: "Small Plates", description: "Perfect for sharing" },
    { icon: "⚡", title: "Quick Bites", description: "Fast, fresh options" },
    { icon: "🌙", title: "Late-night Food", description: "Open until 11 PM" }
  ];

  const amenities = [
    { icon: Volume2, title: "Quiet Atmosphere", description: "Perfect for conversation" },
    { icon: Users, title: "Family-friendly", description: "Great for all ages" },
    { icon: Users, title: "Group-friendly", description: "Large table options" },
    { icon: UtensilsCrossed, title: "Accepts Reservations", description: "Book your table ahead" },
    { icon: Baby, title: "High Chairs Available", description: "Child-friendly seating" },
    { icon: CreditCard, title: "Multiple Payment Options", description: "Cards & mobile payments" }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-cream">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-acacia-green/10 rounded-full px-4 py-2 mb-6">
            <span className="text-acacia-green font-semibold text-sm">Our Services</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Accessible Dining for Everyone
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            At Acacia, we're committed to providing exceptional service and accessibility for all our guests. 
            From wheelchair accessibility to diverse dining options, we welcome everyone.
          </p>
        </div>

        <div className="space-y-16">
          {/* Accessibility Features */}
          <div className="animate-slide-in">
            <h3 className="text-2xl font-serif font-bold text-center mb-8 text-acacia-green">
              ♿ Accessibility Features
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {accessibilityFeatures.map((feature, index) => (
                <Card key={index} className="text-center border-0 bg-white/70 backdrop-blur-sm card-hover">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-acacia-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-acacia-green" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Service Options */}
          <div className="animate-slide-in">
            <h3 className="text-2xl font-serif font-bold text-center mb-8 text-acacia-green">
              🚀 Service Options
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {serviceOptions.map((service, index) => (
                <Card key={index} className="text-center border-0 bg-white/70 backdrop-blur-sm card-hover relative">
                  {service.popular && (
                    <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-acacia-green text-white">
                      Popular
                    </Badge>
                  )}
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-acacia-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-6 h-6 text-acacia-green" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{service.title}</h4>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Dining Options */}
          <div className="animate-slide-in">
            <h3 className="text-2xl font-serif font-bold text-center mb-8 text-acacia-green">
              🍽️ Dining Options
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {diningOptions.map((option, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm bg-acacia-green/10 text-acacia-green hover:bg-acacia-green/20"
                >
                  {option}
                </Badge>
              ))}
            </div>
          </div>

          {/* Offerings Grid */}
          <div className="animate-slide-in">
            <h3 className="text-2xl font-serif font-bold text-center mb-8 text-acacia-green">
              ✨ What We Offer
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {offerings.map((offering, index) => (
                <Card key={index} className="text-center border-0 bg-white/70 backdrop-blur-sm card-hover">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-4">{offering.icon}</div>
                    <h4 className="font-semibold text-foreground mb-2">{offering.title}</h4>
                    <p className="text-sm text-muted-foreground">{offering.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Amenities & Atmosphere */}
          <div className="animate-slide-in">
            <h3 className="text-2xl font-serif font-bold text-center mb-8 text-acacia-green">
              🏡 Amenities & Atmosphere
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {amenities.map((amenity, index) => (
                <Card key={index} className="border-0 bg-white/70 backdrop-blur-sm card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-acacia-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <amenity.icon className="w-5 h-5 text-acacia-green" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{amenity.title}</h4>
                        <p className="text-sm text-muted-foreground">{amenity.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Payment & Parking Info */}
          <div className="animate-fade-in">
            <div className="bg-gradient-warm rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-serif font-bold mb-4">Additional Information</h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div>
                  <CreditCard className="w-8 h-8 mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Payment Methods</h4>
                  <p className="text-sm text-white/90">Credit cards, Debit cards, NFC mobile payments accepted</p>
                </div>
                <div>
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Parking</h4>
                  <p className="text-sm text-white/90">Free street parking available nearby</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;