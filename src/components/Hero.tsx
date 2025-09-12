import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Users, Brain } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-calm/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-support/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-growth/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-hope/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-8 shadow-lg">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Mental Health Support for Students</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 text-white">
            <span className="block">Soul</span>
            <span className="block bg-gradient-to-r from-primary-light to-secondary bg-clip-text text-transparent">
              Mitra
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your AI-powered companion for mental wellness. Confidential, empathetic, and always here to support your emotional journey.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="group">
              Start Your Wellness Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="floating" size="xl">
              Learn More About SoulMitra
            </Button>
          </div>

          {/* Feature Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Brain, title: "AI Support", desc: "24/7 emotional guidance" },
              { icon: Shield, title: "Private & Safe", desc: "Zero-trace architecture" },
              { icon: Users, title: "Peer Community", desc: "Connect with others" },
              { icon: Heart, title: "Wellness Hub", desc: "Resources & tools" }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover-lift"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <feature.icon className="w-8 h-8 text-white mb-3 mx-auto" />
                <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                <p className="text-sm text-white/70">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;