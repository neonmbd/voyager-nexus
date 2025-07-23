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
  return <div className="min-h-screen">
      <HeroSection />

      {/* Featured Destinations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured 
              <span className="bg-gradient-primary bg-clip-text text-transparent ml-3">
                Destinations
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular travel experiences, carefully curated for unforgettable adventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredDestinations.map((destination, index) => <div key={destination.id} className="animate-fade-in" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <DestinationCard {...destination} />
              </div>)}
          </div>

          <div className="text-center">
            <Button variant="premium" size="lg" className="group">
              View All Destinations
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose 
              <span className="bg-gradient-primary bg-clip-text text-transparent ml-3">
                Voyager Nexus
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing exceptional travel experiences with unmatched service and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => <div key={feature.title} className="text-center group animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our 
              <span className="bg-gradient-primary bg-clip-text text-transparent ml-3">
                Travelers Say
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from real adventurers who have experienced the magic of travel with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <div key={testimonial.name} className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 group animate-fade-in" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />)}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white text-xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 opacity-20" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Join thousands of satisfied travelers who have discovered the world with Voyager Nexus. 
            Your dream destination is just a click away.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button variant="glass" size="lg" className="group">
              Start Planning
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
              <Button variant="outline" size="lg" className="border-white hover:bg-white text-red-600">
                Get Free Quote
              </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;