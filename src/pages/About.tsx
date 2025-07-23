import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Award, MapPin, Calendar, Heart, Shield, Star, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years of Experience', value: '15+', icon: Calendar },
    { label: 'Countries Covered', value: '150+', icon: Globe },
    { label: 'Happy Travelers', value: '50K+', icon: Users },
    { label: 'Awards Won', value: '25+', icon: Award }
  ];

  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'Founder & CEO',
      experience: '20+ years in travel',
      specialty: 'Adventure & Cultural Tours',
      avatar: '👩‍💼',
      description: 'Passionate about connecting people with authentic travel experiences around the world.'
    },
    {
      name: 'Marcus Chen',
      role: 'Head of Operations',
      experience: '15+ years in hospitality',
      specialty: 'Luxury & Business Travel',
      avatar: '👨‍💻',
      description: 'Ensures seamless operations and exceptional service delivery for every journey.'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Travel Experience Designer',
      experience: '12+ years in tourism',
      specialty: 'Custom Itineraries',
      avatar: '👩‍🎨',
      description: 'Creates personalized travel experiences that exceed expectations and create lasting memories.'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Travel',
      description: 'We live and breathe travel, bringing genuine enthusiasm to every journey we plan.'
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'Your safety and peace of mind are our top priorities in every destination we visit.'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for perfection in every detail, ensuring exceptional experiences every time.'
    },
    {
      icon: Users,
      title: 'Personal Touch',
      description: 'Every traveler is unique, and we craft personalized experiences that match your dreams.'
    }
  ];

  const awards = [
    { year: '2023', title: 'Best Travel Agency - Global Tourism Awards' },
    { year: '2022', title: 'Excellence in Customer Service - Travel Weekly' },
    { year: '2021', title: 'Sustainable Tourism Leader - Green Travel Awards' },
    { year: '2020', title: 'Innovation in Travel Technology - TravelTech Summit' }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 opacity-20" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            About 
            <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              Voyager Nexus
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            For over 15 years, we've been crafting extraordinary travel experiences that connect people 
            with the world's most incredible destinations.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our 
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Story
              </span>
            </h2>
            
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
              <p className="animate-fade-in">
                Voyager Nexus was born from a simple belief: travel has the power to transform lives, 
                broaden perspectives, and create connections that transcend borders. Founded in 2008 by 
                a team of passionate travelers, we set out to share the world's most extraordinary 
                destinations with fellow adventure seekers.
              </p>
              
              <p className="animate-fade-in">
                What started as a small boutique agency has grown into a globally recognized brand, 
                but our core mission remains unchanged. We believe every journey should be more than 
                just a vacation—it should be a transformative experience that creates lasting memories 
                and deeper understanding of our beautiful world.
              </p>
              
              <p className="animate-fade-in">
                Today, we're proud to have facilitated over 50,000 journeys across 150+ countries, 
                earning the trust of travelers worldwide and numerous industry awards for excellence 
                in service and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our 
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate professionals behind your perfect travel experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={member.name}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 group animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center text-4xl text-white mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                  {member.avatar}
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                
                <Badge variant="outline" className="mb-4">
                  {member.role}
                </Badge>
                
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Experience:</strong> {member.experience}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Specialty:</strong> {member.specialty}
                  </p>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed italic">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our 
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and every journey we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Awards & 
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Recognition
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {awards.map((award, index) => (
              <div 
                key={award.year}
                className="flex items-center p-6 bg-card rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg mr-6 group-hover:shadow-glow transition-all duration-300">
                  {award.year}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {award.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our experienced team create an unforgettable travel experience tailored just for you.
          </p>
          <Button variant="glass" size="lg">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;