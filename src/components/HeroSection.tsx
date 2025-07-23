import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Calendar, Users } from 'lucide-react';
import heroImage from '@/assets/hero-travel.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Beautiful travel destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Discover Your Next
            <span className="block bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">
              Adventure
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Embark on extraordinary journeys to breathtaking destinations around the world. 
            Create memories that last a lifetime with our curated travel experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="lg" className="group">
              Explore Destinations
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="lg">
              Watch Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <div className="flex flex-col items-center space-y-2 group">
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-full group-hover:bg-white/20 transition-all duration-300">
                <MapPin className="h-8 w-8 text-primary-glow" />
              </div>
              <h3 className="text-3xl font-bold">150+</h3>
              <p className="text-gray-300">Destinations</p>
            </div>
            
            <div className="flex flex-col items-center space-y-2 group">
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-full group-hover:bg-white/20 transition-all duration-300">
                <Users className="h-8 w-8 text-primary-glow" />
              </div>
              <h3 className="text-3xl font-bold">50K+</h3>
              <p className="text-gray-300">Happy Travelers</p>
            </div>
            
            <div className="flex flex-col items-center space-y-2 group">
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-full group-hover:bg-white/20 transition-all duration-300">
                <Calendar className="h-8 w-8 text-primary-glow" />
              </div>
              <h3 className="text-3xl font-bold">15</h3>
              <p className="text-gray-300">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;