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
      image: santoriniImage, // Placeholder
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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-accent opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-fresh opacity-20 rounded-full blur-3xl" />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 animate-fade-in leading-tight">
            Explore 
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Destinations
            </span>
          </h1>
          <p className="text-2xl text-muted-foreground animate-fade-in max-w-3xl mx-auto leading-relaxed">
            Discover breathtaking places around the world, each offering unique experiences and unforgettable memories that will transform your perspective.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-muted/10 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-14 rounded-2xl border-0 bg-card shadow-card text-lg"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center space-x-3">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium text-muted-foreground">Region:</span>
                <div className="flex flex-wrap gap-2">
                  {regions.map((region) => (
                    <Badge
                      key={region}
                      variant={selectedRegion === region ? "default" : "outline"}
                      className={`cursor-pointer transition-all duration-300 px-4 py-2 rounded-xl ${
                        selectedRegion === region 
                          ? 'bg-gradient-hero text-white hover:shadow-glow' 
                          : 'hover:bg-muted/50'
                      }`}
                      onClick={() => setSelectedRegion(region)}
                    >
                      {region}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <SlidersHorizontal className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium text-muted-foreground">Price:</span>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map((range) => (
                    <Badge
                      key={range}
                      variant={priceRange === range ? "default" : "outline"}
                      className={`cursor-pointer transition-all duration-300 px-4 py-2 rounded-xl ${
                        priceRange === range 
                          ? 'bg-gradient-accent text-white hover:shadow-glow' 
                          : 'hover:bg-muted/50'
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              {filteredDestinations.length} Destinations Found
            </h2>
            <div className="flex items-center space-x-3 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>Showing results for your search</span>
            </div>
          </div>

          {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredDestinations.map((destination, index) => (
                <div key={destination.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <DestinationCard {...destination} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="max-w-lg mx-auto">
                <div className="w-32 h-32 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-8">
                  <MapPin className="h-16 w-16 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-6">No destinations found</h3>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  Try adjusting your search criteria or browse all our amazing destinations.
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedRegion('All');
                    setPriceRange('All');
                  }}
                  variant="hero"
                  size="lg"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-highlight rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-fresh rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Can't Find What You're 
            <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              Looking For?
            </span>
          </h2>
          <p className="text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
            Our travel experts can create a custom itinerary tailored to your dreams and preferences, crafting the perfect journey just for you.
          </p>
          <Button variant="glass" size="xl">
            Plan My Custom Trip
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Destinations;