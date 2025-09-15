import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Plane, Home, MapPin, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Destinations', href: '/destinations', icon: MapPin },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Reviews', href: '/reviews', icon: Star },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-glass border-b border-border shadow-elegant">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-3 bg-gradient-hero rounded-2xl shadow-glow group-hover:shadow-float transition-all duration-500 group-hover:scale-105">
              <Plane className="h-7 w-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground">
              Magic World
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "relative flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300",
                    "hover:bg-muted/50 hover:text-primary",
                    isActive(item.href) ? "text-primary bg-gradient-hero/5 shadow-card" : "text-muted-foreground"
                  )}
                >
                  <IconComponent className="h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
            <Button variant="hero" size="default" className="ml-4">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-glass rounded-b-3xl shadow-float">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 text-base font-medium rounded-2xl transition-all duration-300",
                      isActive(item.href) 
                        ? "bg-gradient-hero/10 text-primary shadow-card" 
                        : "text-muted-foreground hover:bg-muted/50 hover:text-primary"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <IconComponent className="h-5 w-5" />
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-6 pb-2">
                <Button variant="hero" className="w-full" size="lg">
                  Book Now
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