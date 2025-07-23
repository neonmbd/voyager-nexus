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
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Beautiful travel destination" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 h-full">
        <div className="grid lg:grid-cols-2 gap-12 min-h-screen items-center py-20">
          
          {/* Left Side - Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white">
              Your Dream Journey is
              <span className="block bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">
                Waiting for You
              </span>
            </h1>
            
            

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" className="group bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20">
                Explore Trips
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg" className="group bg-black/20 backdrop-blur-md border border-white/20 hover:bg-black/30">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Video
              </Button>
            </div>

            {/* Feature Tags */}
            <div className="space-y-4 pt-8">
              <div className="flex items-start space-x-4 p-4 bg-black/20 backdrop-blur-md rounded-xl border border-white/20 hover:bg-black/30 transition-all duration-300">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Award className="h-5 w-5 text-primary-glow" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Excellence</h3>
                  <p className="text-gray-300 text-sm">Striving for exceptional quality in every aspect of our service.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-black/20 backdrop-blur-md rounded-xl border border-white/20 hover:bg-black/30 transition-all duration-300">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Leaf className="h-5 w-5 text-primary-glow" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Sustainable</h3>
                  <p className="text-gray-300 text-sm">Promoting responsible travel practices for a greener future.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Destination Cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {destinations.map((destination, index) => <div key={destination.name} className={`relative group cursor-pointer transform hover:scale-105 transition-all duration-300 ${index % 2 === 1 ? 'mt-8' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-glow">
                    <img src={destination.image} alt={destination.name} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                        <div className="flex items-center justify-between">
                          <h3 className="text-white font-semibold text-lg">{destination.name}</h3>
                          <div className="flex items-center space-x-1 bg-black/30 rounded-full px-2 py-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-white text-sm font-medium">{destination.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>)}
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
    </section>;
};
export default HeroSection;