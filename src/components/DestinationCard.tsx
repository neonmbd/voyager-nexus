import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Clock, Users } from 'lucide-react';

interface DestinationCardProps {
  id: string;
  name: string;
  country: string;
  image: string;
  price: number;
  rating: number;
  duration: string;
  groupSize: string;
  description: string;
  featured?: boolean;
}

const DestinationCard = ({ 
  name, 
  country, 
  image, 
  price, 
  rating, 
  duration, 
  groupSize, 
  description,
  featured = false 
}: DestinationCardProps) => {
  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img 
          src={image}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Featured Badge */}
        {featured && (
          <Badge className="absolute top-4 left-4 bg-gradient-primary text-white border-0 font-semibold">
            Featured
          </Badge>
        )}

        {/* Rating */}
        <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
          <Star className="h-4 w-4 text-yellow-500 fill-current" />
          <span className="text-sm font-semibold text-gray-800">{rating}</span>
        </div>

        {/* Price */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
          <span className="text-2xl font-bold text-primary">${price}</span>
          <span className="text-sm text-gray-600 ml-1">per person</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{country}</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Details */}
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{groupSize}</span>
          </div>
        </div>

        {/* CTA */}
        <Button className="w-full group-hover:bg-gradient-primary group-hover:text-white transition-all duration-300">
          View Details
        </Button>
      </div>
    </div>
  );
};

export default DestinationCard;