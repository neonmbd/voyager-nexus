import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star, Award, Leaf } from 'lucide-react';
import heroImage from '@/assets/hero-travel.jpg';
import santoriniImage from '@/assets/santorini.jpg';
import tokyoImage from '@/assets/tokyo.jpg';
import swissAlpsImage from '@/assets/swiss-alps.jpg';
import dubaiImage from '@/assets/dubai.jpg';
const HeroSection = () => {
  const destinations = [{
    name: 'Santorini',
    image: santoriniImage,
    rating: '4.9'
  }, {
    name: 'Tokyo',
    image: tokyoImage,
    rating: '4.8'
  }, {
    name: 'Swiss Alps',
    image: swissAlpsImage,
    rating: '4.7'
  }, {
    name: 'Dubai',
    image: dubaiImage,
    rating: '4.6'
  }];

  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-grid-white/10" />
      </div>
      
      {/* Hero Gradient Background */}
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-hero opacity-10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-fresh opacity-10 blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 min-h-screen items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] text-foreground">
                Your Dream
                <span className="block bg-gradient-hero bg-clip-text text-transparent">
                  Journey
                </span>
                <span className="block text-muted-foreground text-5xl lg:text-6xl xl:text-7xl font-light">
                  awaits you
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Discover extraordinary destinations with our curated travel experiences designed for the modern explorer.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group bg-gradient-hero hover:shadow-glow border-0 text-white font-medium px-8 py-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                Explore Trips
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="group border-border hover:bg-muted/50 font-medium px-8 py-6 rounded-2xl transition-all duration-300 hover:shadow-card"
              >
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                Watch Video
              </Button>
            </div>

            {/* Feature Tags */}
            <div className="space-y-4 pt-8">
              <div className="group p-6 rounded-3xl bg-card border border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-accent rounded-2xl shadow-card">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold text-lg mb-2">Excellence</h3>
                    <p className="text-muted-foreground leading-relaxed">Striving for exceptional quality in every aspect of our service.</p>
                  </div>
                </div>
              </div>
              
              <div className="group p-6 rounded-3xl bg-card border border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-fresh rounded-2xl shadow-card">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold text-lg mb-2">Sustainable</h3>
                    <p className="text-muted-foreground leading-relaxed">Promoting responsible travel practices for a greener future.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Destination Cards */}
          <div className="relative animate-scale-in">
            <div className="grid grid-cols-2 gap-6">
              {destinations.map((destination, index) => (
                <div 
                  key={destination.name} 
                  className={`relative group cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] ${
                    index % 2 === 1 ? 'mt-12' : ''
                  }`}
                >
                  <div className="relative overflow-hidden rounded-3xl bg-card border border-border shadow-card hover:shadow-float group-hover:shadow-glow transition-all duration-500">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img 
                        src={destination.image} 
                        alt={destination.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-60" />
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="bg-white/90 backdrop-blur-glass rounded-2xl p-4 border border-white/20 shadow-card">
                        <div className="flex items-center justify-between">
                          <h3 className="text-foreground font-semibold text-lg">{destination.name}</h3>
                          <div className="flex items-center space-x-1 bg-gradient-highlight rounded-xl px-3 py-1.5">
                            <Star className="h-4 w-4 text-white fill-current" />
                            <span className="text-white text-sm font-medium">{destination.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full animate-pulse" />
      </div>
    </section>
  );
};
export default HeroSection;