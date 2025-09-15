import { Button } from '@/components/ui/button';
import { Users, Award, MapPin, Calendar, Heart, Shield, Star, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    {
      label: 'Years of Experience',
      value: '15+',
      icon: Calendar
    },
    {
      label: 'Countries Covered',
      value: '150+',
      icon: Globe
    },
    {
      label: 'Happy Travelers',
      value: '50K+',
      icon: Users
    },
    {
      label: 'Awards Won',
      value: '25+',
      icon: Award
    }
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
    {
      year: '2023',
      title: 'Best Travel Agency - Global Tourism Awards'
    },
    {
      year: '2022',
      title: 'Excellence in Customer Service - Travel Weekly'
    },
    {
      year: '2021',
      title: 'Sustainable Tourism Leader - Green Travel Awards'
    },
    {
      year: '2020',
      title: 'Innovation in Travel Technology - TravelTech Summit'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-fresh rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-10 animate-fade-in leading-tight">
            About 
            <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              Magic World
            </span>
          </h1>
          <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            For over 15 years, we've been crafting extraordinary travel experiences that connect people 
            with the world's most incredible destinations and create memories that last a lifetime.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center group animate-fade-in" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                <div className="mx-auto w-20 h-20 bg-gradient-accent rounded-3xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-primary mb-3">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-12 leading-tight">
              Our 
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Story
              </span>
            </h2>
            
            <div className="space-y-10 text-xl text-muted-foreground leading-relaxed">
              <p className="animate-fade-in">
                Magic World was born from a simple belief: travel has the power to transform lives, 
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
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Meet Our 
              <span className="bg-gradient-highlight bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The passionate individuals behind every extraordinary journey we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <div key={member.name} className="text-center group animate-fade-in bg-card rounded-3xl p-10 shadow-card hover:shadow-float transition-all duration-500 hover:-translate-y-2" style={{
                animationDelay: `${index * 0.2}s`
              }}>
                <div className="w-24 h-24 rounded-3xl bg-gradient-fresh flex items-center justify-center text-4xl mx-auto mb-8 group-hover:scale-105 transition-all duration-300">
                  {member.avatar}
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{member.name}</h3>
                <p className="text-primary font-semibold mb-4">{member.role}</p>
                <p className="text-muted-foreground mb-4">{member.specialty}</p>
                <p className="text-muted-foreground leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Our 
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do and every journey we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => (
              <div key={value.title} className="text-center group animate-fade-in" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                <div className="mx-auto w-20 h-20 bg-gradient-hero rounded-3xl flex items-center justify-center mb-8 group-hover:shadow-glow transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Awards & 
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Recognition
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence has been recognized by industry leaders worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {awards.map((award, index) => (
              <div key={award.year} className="flex items-center p-8 bg-card rounded-3xl shadow-card hover:shadow-float transition-all duration-500 group animate-fade-in hover:-translate-y-1" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                <div className="w-20 h-20 rounded-2xl bg-gradient-highlight flex items-center justify-center text-white font-bold text-xl mr-8 group-hover:shadow-glow transition-all duration-300">
                  {award.year}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-lg">
                    {award.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
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
            Ready to Start Your 
            <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              Journey?
            </span>
          </h2>
          <p className="text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
            Let our experienced team create an unforgettable travel experience tailored just for you.
          </p>
          <Button variant="glass" size="xl">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;