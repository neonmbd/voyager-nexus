import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Star, MapPin, Calendar, Filter, ThumbsUp, Heart, Camera } from 'lucide-react';

const Reviews = () => {
  const [selectedRating, setSelectedRating] = useState('All');
  const [selectedDestination, setSelectedDestination] = useState('All');

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'New York, USA',
      avatar: '👩‍💼',
      destination: 'Santorini, Greece',
      rating: 5,
      date: '2 weeks ago',
      title: 'Absolutely Magical Experience!',
      content: 'The sunsets in Santorini were beyond breathtaking. Our guide Maria was incredibly knowledgeable and showed us hidden gems that we never would have discovered on our own. The accommodation was perfect and the entire trip was seamlessly organized.',
      helpful: 23,
      verified: true
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Toronto, Canada',
      avatar: '👨‍💻',
      destination: 'Tokyo, Japan',
      rating: 5,
      date: '1 month ago',
      title: 'Perfect Blend of Traditional and Modern',
      content: 'Tokyo exceeded all expectations! From the bustling streets of Shibuya to the serene temples, every moment was carefully curated. The food tours were incredible - we discovered authentic ramen shops and sushi bars that only locals know about.',
      helpful: 31,
      verified: true
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      location: 'Barcelona, Spain',
      avatar: '👩‍🎨',
      destination: 'Swiss Alps, Switzerland',
      rating: 5,
      date: '3 weeks ago',
      title: 'Adventure of a Lifetime',
      content: 'The hiking trails through the Alps were spectacular. Our group was small and intimate, which made the experience even more special. The mountain lodges were cozy and the views from our rooms were like something from a postcard.',
      helpful: 18,
      verified: true
    }
  ];

  const destinations = ['All', 'Santorini', 'Tokyo', 'Swiss Alps', 'Dubai', 'Bali'];
  const ratings = ['All', '5 Stars', '4 Stars', '3 Stars'];

  const filteredReviews = reviews.filter(review => {
    const matchesDestination = selectedDestination === 'All' || review.destination.includes(selectedDestination);
    const matchesRating = selectedRating === 'All' || review.rating === parseInt(selectedRating.charAt(0));
    return matchesDestination && matchesRating;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-fresh rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 animate-fade-in leading-tight">
            Traveler 
            <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              Reviews
            </span>
          </h1>
          <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed animate-fade-in mb-12">
            Real stories from real adventurers who have experienced the magic of travel with Magic World.
          </p>
          
          <div className="flex items-center justify-center gap-8 animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-3xl font-bold">4.9</span>
            </div>
            <div className="text-center">
              <p className="text-xl opacity-90">200+ verified reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filteredReviews.map((review, index) => (
              <Card key={review.id} className="p-8 shadow-card hover:shadow-float transition-all duration-500 group animate-fade-in hover:-translate-y-1 rounded-3xl border-0">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-fresh flex items-center justify-center text-2xl">
                      {review.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg text-foreground">{review.name}</h3>
                        <Badge className="bg-gradient-highlight text-white px-2 py-1 text-xs rounded-lg">
                          Verified
                        </Badge>
                      </div>
                      <p className="text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {review.location}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <Badge variant="outline" className="bg-muted/50 text-muted-foreground px-3 py-1 rounded-xl">
                    {review.destination}
                  </Badge>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {review.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {review.content}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    Helpful ({review.helpful})
                  </Button>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero text-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Ready to Create Your Own 
            <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              Amazing Story?
            </span>
          </h2>
          <p className="text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
            Join thousands of satisfied travelers and discover why Magic World creates the most memorable experiences.
          </p>
          <Button variant="glass" size="lg">
            Start Your Journey
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Reviews;