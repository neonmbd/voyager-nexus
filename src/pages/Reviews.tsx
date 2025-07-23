import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Calendar, User, ThumbsUp, Quote } from 'lucide-react';

const Reviews = () => {
  const [filter, setFilter] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  const reviews = [
    {
      id: '1',
      name: 'Sarah Johnson',
      location: 'New York, USA',
      destination: 'Santorini, Greece',
      rating: 5,
      date: '2024-01-15',
      verified: true,
      helpful: 24,
      review: 'Absolutely magical experience! The sunset views from our villa were breathtaking, and the local guide showed us hidden gems that made the trip unforgettable. Voyager Nexus attention to detail was phenomenal.',
      avatar: '👩‍💼',
      images: 3
    },
    {
      id: '2',
      name: 'Michael Chen',
      location: 'Toronto, Canada',
      destination: 'Tokyo, Japan',
      rating: 5,
      date: '2024-01-10',
      verified: true,
      helpful: 18,
      review: 'From the bustling streets of Shibuya to the serene temples, every moment was perfectly planned. The cultural immersion experiences were incredible, and our guide was knowledgeable and friendly.',
      avatar: '👨‍💻',
      images: 5
    },
    {
      id: '3',
      name: 'Emma Rodriguez',
      location: 'Barcelona, Spain',
      destination: 'Swiss Alps, Switzerland',
      rating: 5,
      date: '2024-01-08',
      verified: true,
      helpful: 31,
      review: 'The mountain lodge was cozy and the hiking trails were spectacular. The photography workshop included in our package helped us capture memories that will last a lifetime. Outstanding service!',
      avatar: '👩‍🎨',
      images: 8
    },
    {
      id: '4',
      name: 'David Thompson',
      location: 'London, UK',
      destination: 'Dubai, UAE',
      rating: 4,
      date: '2024-01-05',
      verified: true,
      helpful: 12,
      review: 'Luxurious accommodations and excellent organization. The desert safari was thrilling, and the city tour showcased the perfect blend of tradition and modernity. Minor delays with transfers.',
      avatar: '👨‍💼',
      images: 4
    },
    {
      id: '5',
      name: 'Lisa Park',
      location: 'Seoul, South Korea',
      destination: 'Bali, Indonesia',
      rating: 5,
      date: '2024-01-03',
      verified: true,
      helpful: 27,
      review: 'Paradise found! The beachfront resort was stunning, and the cultural experiences were authentic and enriching. The spa treatments and yoga sessions were the perfect way to unwind.',
      avatar: '👩‍🦱',
      images: 6
    },
    {
      id: '6',
      name: 'James Wilson',
      location: 'Sydney, Australia',
      destination: 'Patagonia, Chile',
      rating: 5,
      date: '2023-12-28',
      verified: true,
      helpful: 15,
      review: 'Adventure of a lifetime! The trekking routes were challenging but rewarding, and the glacial landscapes were otherworldly. Excellent gear provided and safety measures were top-notch.',
      avatar: '👨‍🦲',
      images: 7
    }
  ];

  const filterOptions = ['All', '5 Stars', '4 Stars', '3 Stars', 'Verified Only'];
  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'rating', label: 'Highest Rating' },
    { value: 'helpful', label: 'Most Helpful' }
  ];

  const filteredReviews = reviews.filter(review => {
    switch (filter) {
      case '5 Stars':
        return review.rating === 5;
      case '4 Stars':
        return review.rating === 4;
      case '3 Stars':
        return review.rating === 3;
      case 'Verified Only':
        return review.verified;
      default:
        return true;
    }
  });

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    switch (sortBy) {
      case 'oldest':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'rating':
        return b.rating - a.rating;
      case 'helpful':
        return b.helpful - a.helpful;
      default: // newest
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(review => review.rating === rating).length
  }));

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 opacity-20" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Traveler 
            <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              Reviews
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Real experiences from real travelers. Discover what makes our journeys extraordinary 
            through the eyes of our adventurous community.
          </p>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">{averageRating.toFixed(1)}</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < Math.floor(averageRating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">{totalReviews}</div>
              <p className="text-muted-foreground">Total Reviews</p>
            </div>
            
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">
                {Math.round((reviews.filter(r => r.verified).length / totalReviews) * 100)}%
              </div>
              <p className="text-muted-foreground">Verified Reviews</p>
            </div>
            
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">
                {Math.round((reviews.filter(r => r.rating >= 4).length / totalReviews) * 100)}%
              </div>
              <p className="text-muted-foreground">4+ Star Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rating Distribution */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Rating Distribution</h2>
            <div className="space-y-3">
              {ratingDistribution.map(({ rating, count }) => (
                <div key={rating} className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1 w-20">
                    <span className="text-sm font-medium">{rating}</span>
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(count / totalReviews) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-10">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-muted-foreground">Filter by:</span>
              <div className="flex flex-wrap gap-2">
                {filterOptions.map((option) => (
                  <Badge
                    key={option}
                    variant={filter === option ? "default" : "outline"}
                    className={`cursor-pointer transition-all duration-200 ${
                      filter === option 
                        ? 'bg-gradient-primary text-white hover:shadow-glow' 
                        : 'hover:bg-accent'
                    }`}
                    onClick={() => setFilter(option)}
                  >
                    {option}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-muted-foreground">Sort by:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-1 border border-border rounded-md bg-background text-foreground text-sm"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {sortedReviews.map((review, index) => (
              <div 
                key={review.id}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white text-xl">
                      {review.avatar}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-foreground">{review.name}</h3>
                        {review.verified && (
                          <Badge variant="outline" className="text-xs text-green-600 border-green-600">
                            Verified
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {review.location}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(review.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* Destination */}
                <div className="mb-4">
                  <Badge variant="outline" className="text-primary">
                    {review.destination}
                  </Badge>
                </div>

                {/* Review Content */}
                <div className="mb-6">
                  <Quote className="h-6 w-6 text-muted-foreground mb-2" />
                  <p className="text-muted-foreground leading-relaxed italic">
                    {review.review}
                  </p>
                </div>

                {/* Images */}
                {review.images > 0 && (
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground">
                      📷 {review.images} photos shared
                    </p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    Helpful ({review.helpful})
                  </Button>
                  
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                    Reply
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Write Review CTA */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Share Your Travel Story
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Have you traveled with us? We'd love to hear about your experience and help other travelers discover amazing destinations.
          </p>
          <Button variant="glass" size="lg">
            Write a Review
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Reviews;