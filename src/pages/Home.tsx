import HeroSection from '@/components/HeroSection';
import DestinationCard from '@/components/DestinationCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, MapPin, Calendar, Shield, Award, Users, Heart } from 'lucide-react';
import santoriniImage from '@/assets/santorini.jpg';
import tokyoImage from '@/assets/tokyo.jpg';
import swissAlpsImage from '@/assets/swiss-alps.jpg';
import dubaiImage from '@/assets/dubai.jpg';
const Home = () => {
  const featuredDestinations = [{
    id: '1',
    name: 'Santorini',
    country: 'Greece',
    image: santoriniImage,
    price: 1299,
    rating: 4.9,
    duration: '7 days',
    groupSize: '2-8 people',
    description: 'Experience the breathtaking sunsets and iconic blue-domed churches of this Greek island paradise.',
    featured: true
  }, {
    id: '2',
    name: 'Tokyo',
    country: 'Japan',
    image: tokyoImage,
    price: 1899,
    rating: 4.8,
    duration: '10 days',
    groupSize: '2-12 people',
    description: 'Immerse yourself in the perfect blend of ancient traditions and cutting-edge modernity.',
    featured: true
  }, {
    id: '3',
    name: 'Swiss Alps',
    country: 'Switzerland',
    image: swissAlpsImage,
    price: 2199,
    rating: 4.9,
    duration: '8 days',
    groupSize: '2-6 people',
    description: 'Adventure through pristine mountain landscapes and charming alpine villages.',
    featured: true
  }];
  const testimonials = [{
    name: 'Sarah Johnson',
    location: 'New York, USA',
    rating: 5,
    text: 'Absolutely incredible experience! The team at Voyager Nexus made our dream vacation a reality. Every detail was perfect.',
    avatar: '👩‍💼'
  }, {
    name: 'Michael Chen',
    location: 'Toronto, Canada',
    rating: 5,
    text: 'Professional, reliable, and passionate about travel. They helped us discover hidden gems we never would have found on our own.',
    avatar: '👨‍💻'
  }, {
    name: 'Emma Rodriguez',
    location: 'Barcelona, Spain',
    rating: 5,
    text: 'Outstanding service from start to finish. The personalized itinerary exceeded all our expectations. Highly recommended!',
    avatar: '👩‍🎨'
  }];
  const features = [{
    icon: Shield,
    title: 'Travel Insurance',
    description: 'Comprehensive coverage for peace of mind on every journey'
  }, {
    icon: Award,
    title: 'Expert Guides',
    description: 'Local professionals with deep knowledge and passion for their regions'
  }, {
    icon: Users,
    title: '24/7 Support',
    description: 'Round-the-clock assistance whenever and wherever you need it'
  }, {
    icon: Heart,
    title: 'Personalized',
    description: 'Tailored experiences crafted specifically for your interests and preferences'
  }];
  return <div className="min-h-screen pt-20">
      <HeroSection />

      {/* Featured Destinations */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Featured 
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Destinations
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our most popular travel experiences, carefully curated for unforgettable adventures that will transform your perspective on the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {featuredDestinations.map((destination, index) => (
              <div key={destination.id} className="animate-fade-in" style={{
                animationDelay: `${index * 0.2}s`
              }}>
                <DestinationCard {...destination} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="xl" className="group">
              View All Destinations
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Why Choose 
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Magic World
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're committed to providing exceptional travel experiences with unmatched service and attention to detail that exceeds your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center group animate-fade-in" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                <div className="mx-auto w-20 h-20 bg-gradient-accent rounded-3xl flex items-center justify-center mb-8 group-hover:shadow-glow transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              What Our 
              <span className="bg-gradient-highlight bg-clip-text text-transparent">
                Travelers Say
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real stories from real adventurers who have experienced the magic of travel with us and discovered the world in a whole new way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="bg-card rounded-3xl p-10 shadow-card hover:shadow-float transition-all duration-500 group animate-fade-in hover:-translate-y-2" style={{
                animationDelay: `${index * 0.2}s`
              }}>
                <div className="flex items-center mb-8">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-gradient-highlight fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-fresh flex items-center justify-center text-white text-2xl mr-6">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">{testimonial.name}</h4>
                    <p className="text-muted-foreground flex items-center mt-1">
                      <MapPin className="h-4 w-4 mr-2" />
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-highlight rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-fresh rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl md:text-7xl font-bold mb-10 animate-fade-in leading-tight">
            Ready for Your Next
            <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              Adventure?
            </span>
          </h2>
          <p className="text-2xl mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in opacity-90">
            Join thousands of satisfied travelers who have discovered the world with Magic World. 
            Your dream destination is just a click away.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in">
            <Button variant="glass" size="xl" className="group">
              Start Planning
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button variant="outline" size="xl" className="border-white/30 hover:bg-white/10 text-white hover:text-white backdrop-blur-glass">
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;