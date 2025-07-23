import { useState } from 'react';
import DestinationCard from '@/components/DestinationCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, MapPin, SlidersHorizontal } from 'lucide-react';
import santoriniImage from '@/assets/santorini.jpg';
import tokyoImage from '@/assets/tokyo.jpg';
import swissAlpsImage from '@/assets/swiss-alps.jpg';
import dubaiImage from '@/assets/dubai.jpg';
import destinationsCollage from '@/assets/destinations-collage.jpg';

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [priceRange, setPriceRange] = useState('All');

  const destinations = [
    {
      id: '1',
      name: 'Santorini',
      country: 'Greece',
      region: 'Europe',
      image: santoriniImage,
      price: 1299,
      rating: 4.9,
      duration: '7 days',
      groupSize: '2-8 people',
      description: 'Experience the breathtaking sunsets and iconic blue-domed churches of this Greek island paradise with authentic local experiences.',
      featured: true
    },
    {
      id: '2',
      name: 'Tokyo',
      country: 'Japan',
      region: 'Asia',
      image: tokyoImage,
      price: 1899,
      rating: 4.8,
      duration: '10 days',
      groupSize: '2-12 people',
      description: 'Immerse yourself in the perfect blend of ancient traditions and cutting-edge modernity in Japan\'s vibrant capital city.',
      featured: true
    },
    {
      id: '3',
      name: 'Swiss Alps',
      country: 'Switzerland',
      region: 'Europe',
      image: swissAlpsImage,
      price: 2199,
      rating: 4.9,
      duration: '8 days',
      groupSize: '2-6 people',
      description: 'Adventure through pristine mountain landscapes and charming alpine villages with world-class hiking and skiing.',
      featured: true
    },
    {
      id: '4',
      name: 'Dubai',
      country: 'UAE',
      region: 'Middle East',
      image: dubaiImage,
      price: 1599,
      rating: 4.7,
      duration: '6 days',
      groupSize: '2-10 people',
      description: 'Discover the futuristic skyline, luxury shopping, and rich cultural heritage of this Middle Eastern jewel.',
      featured: false
    },
    {
      id: '5',
      name: 'Bali',
      country: 'Indonesia',
      region: 'Asia',
      image: santoriniImage, // Placeholder - you can generate a Bali image
      price: 999,
      rating: 4.6,
      duration: '9 days',
      groupSize: '2-8 people',
      description: 'Relax on pristine beaches, explore ancient temples, and experience the spiritual heart of Indonesia.',
      featured: false
    },
    {
      id: '6',
      name: 'Patagonia',
      country: 'Chile & Argentina',
      region: 'South America',
      image: swissAlpsImage, // Placeholder
      price: 2499,
      rating: 4.8,
      duration: '12 days',
      groupSize: '2-6 people',
      description: 'Trek through dramatic landscapes of glaciers, mountains, and pristine wilderness at the end of the world.',
      featured: false
    }
  ];

  const regions = ['All', 'Europe', 'Asia', 'South America', 'Middle East', 'Africa', 'North America'];
  const priceRanges = ['All', 'Under $1000', '$1000-$1500', '$1500-$2000', 'Over $2000'];

  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === 'All' || destination.region === selectedRegion;
    
    let matchesPrice = true;
    if (priceRange !== 'All') {
      switch (priceRange) {
        case 'Under $1000':
          matchesPrice = destination.price < 1000;
          break;
        case '$1000-$1500':
          matchesPrice = destination.price >= 1000 && destination.price <= 1500;
          break;
        case '$1500-$2000':
          matchesPrice = destination.price >= 1500 && destination.price <= 2000;
          break;
        case 'Over $2000':
          matchesPrice = destination.price > 2000;
          break;
      }
    }
    
    return matchesSearch && matchesRegion && matchesPrice;
  });

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={destinationsCollage}
            alt="Travel destinations collage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Explore 
            <span className="bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent ml-3">
              Destinations
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 animate-fade-in">
            Discover breathtaking places around the world, each offering unique experiences and unforgettable memories.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Region:</span>
                <div className="flex flex-wrap gap-2">
                  {regions.map((region) => (
                    <Badge
                      key={region}
                      variant={selectedRegion === region ? "default" : "outline"}
                      className={`cursor-pointer transition-all duration-200 ${
                        selectedRegion === region 
                          ? 'bg-gradient-primary text-white hover:shadow-glow' 
                          : 'hover:bg-accent'
                      }`}
                      onClick={() => setSelectedRegion(region)}
                    >
                      {region}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Price:</span>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map((range) => (
                    <Badge
                      key={range}
                      variant={priceRange === range ? "default" : "outline"}
                      className={`cursor-pointer transition-all duration-200 ${
                        priceRange === range 
                          ? 'bg-gradient-primary text-white hover:shadow-glow' 
                          : 'hover:bg-accent'
                      }`}
                      onClick={() => setPriceRange(range)}
                    >
                      {range}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              {filteredDestinations.length} Destinations Found
            </h2>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Showing results for your search</span>
            </div>
          </div>

          {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map((destination, index) => (
                <div key={destination.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <DestinationCard {...destination} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">No destinations found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search criteria or browse all our amazing destinations.
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedRegion('All');
                    setPriceRange('All');
                  }}
                  variant="premium"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our travel experts can create a custom itinerary tailored to your dreams and preferences.
          </p>
          <Button variant="hero" size="lg">
            Plan My Custom Trip
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Destinations;