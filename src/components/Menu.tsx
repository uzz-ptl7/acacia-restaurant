import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Coffee, Utensils, Clock, Star } from "lucide-react";
import foodImage from "@/assets/acacia-food.jpg";
import coffeeImage from "@/assets/acacia-coffee.jpg";

const Menu = () => {
  const menuCategories = [
    {
      title: "Breakfast",
      icon: Coffee,
      time: "7:00 AM - 11:00 AM",
      items: [
        { name: "Acacia Breakfast Special", price: "8,500 RWF", description: "Traditional eggs, plantains, beans, and fresh bread", badges: ["Popular"] },
        { name: "Avocado Toast Deluxe", price: "6,500 RWF", description: "Artisan bread, fresh avocado, tomatoes, feta cheese", badges: ["Vegetarian"] },
        { name: "Rwandan Coffee & Pastry", price: "4,500 RWF", description: "Premium local coffee with fresh croissant", badges: ["Coffee"] }
      ]
    },
    {
      title: "Lunch & Dinner",
      icon: Utensils,
      time: "11:00 AM - 10:00 PM",
      items: [
        { name: "Grilled Tilapia Special", price: "12,500 RWF", description: "Fresh Lake Kivu tilapia with ugali and vegetables", badges: ["Popular"] },
        { name: "Vegetarian Curry Bowl", price: "9,500 RWF", description: "Mixed vegetables in coconut curry with jasmine rice", badges: ["Vegan", "Spicy"] },
        { name: "Acacia Beef Platter", price: "15,000 RWF", description: "Tender beef with traditional sides and soup", badges: ["Chef's Choice"] },
        { name: "Mediterranean Mezze", price: "11,000 RWF", description: "Hummus, falafel, pita, olives, and fresh salad", badges: ["Vegetarian"] }
      ]
    },
    {
      title: "Beverages",
      icon: Coffee,
      time: "All Day",
      items: [
        { name: "Signature Acacia Latte", price: "3,500 RWF", description: "House blend coffee with steamed milk and cinnamon", badges: ["Popular"] },
        { name: "Fresh Fruit Smoothies", price: "4,000 RWF", description: "Mango, passion fruit, or mixed berry", badges: ["Fresh", "Healthy"] },
        { name: "Traditional Cocktails", price: "6,500 RWF", description: "Local and international spirits, perfectly mixed", badges: ["Evening"] },
        { name: "Herbal Tea Selection", price: "2,500 RWF", description: "Chamomile, ginger, or mint - locally sourced", badges: ["Caffeine-Free"] }
      ]
    }
  ];

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case "Vegetarian": case "Vegan": return "secondary";
      case "Popular": case "Chef's Choice": return "destructive";
      case "Spicy": return "outline";
      default: return "outline";
    }
  };

  return (
    <section id="menu" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-acacia-green/10 rounded-full px-4 py-2 mb-6">
            <span className="text-acacia-green font-semibold text-sm">Our Menu</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Taste the Best of Africa & Beyond
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            From traditional Rwandan dishes to international favorites, every meal at Acacia 
            is prepared with fresh, high-quality ingredients and served with love.
          </p>

          {/* Featured Images */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <div className="relative overflow-hidden rounded-xl shadow-card card-hover">
              <img src={foodImage} alt="Acacia Food" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="font-serif font-bold text-xl mb-2">Signature Dishes</h3>
                  <p className="text-white/90">Authentic flavors crafted with care</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-card card-hover">
              <img src={coffeeImage} alt="Acacia Coffee" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="font-serif font-bold text-xl mb-2">Premium Coffee</h3>
                  <p className="text-white/90">Locally sourced, expertly brewed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Categories */}
        <div className="space-y-12">
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-slide-in" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
              <Card className="border-0 shadow-card bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-acacia-green/10 rounded-lg flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-acacia-green" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-serif text-foreground">{category.title}</CardTitle>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{category.time}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="hidden sm:flex">
                      View Full Menu
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="group p-4 rounded-lg hover:bg-accent/30 transition-all duration-200">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-foreground group-hover:text-acacia-green transition-colors">
                            {item.name}
                          </h4>
                          <span className="font-bold text-acacia-green">{item.price}</span>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {item.badges.map((badge, badgeIndex) => (
                            <Badge 
                              key={badgeIndex} 
                              variant={getBadgeVariant(badge)}
                              className="text-xs"
                            >
                              {badge === "Popular" && <Star className="w-3 h-3 mr-1" fill="currentColor" />}
                              {badge}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-warm rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-serif font-bold mb-4">Ready to Experience Acacia?</h3>
            <p className="text-white/90 mb-6 max-w-md mx-auto">
              Make a reservation or order for delivery. We're here to serve you exceptional food and drinks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.open("tel:+250782721772")}
              >
                Call for Reservation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
              >
                Order Delivery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;