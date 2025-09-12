import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  Calendar, 
  BookOpen, 
  Users, 
  BarChart3, 
  Shield,
  Heart,
  Brain,
  Headphones,
  Globe
} from "lucide-react";
import { cardVariants } from "@/components/ui/card-variants";
import { cn } from "@/lib/utils";

const Features = () => {
  const mainFeatures = [
    {
      icon: MessageCircle,
      title: "AI Emotional Twin",
      description: "Advanced AI that learns your emotional patterns and provides personalized, empathetic support tailored to your unique needs.",
      variant: "support" as const,
      action: "Chat Now"
    },
    {
      icon: Calendar,
      title: "Confidential Booking",
      description: "Schedule appointments with campus counselors or mental health professionals with complete privacy and anonymity.",
      variant: "calm" as const,
      action: "Book Session"
    },
    {
      icon: BookOpen,
      title: "Wellness Resource Hub",
      description: "Access guided meditations, wellness videos, mental health guides, and relaxation audio in multiple regional languages.",
      variant: "growth" as const,
      action: "Explore Resources"
    },
    {
      icon: Users,
      title: "Peer Support Network",
      description: "Connect with trained student volunteers and peers in moderated, safe spaces for shared experiences and mutual support.",
      variant: "emotional" as const,
      action: "Join Community"
    }
  ];

  const additionalFeatures = [
    { icon: Shield, title: "Zero-Trace Architecture", desc: "Complete privacy protection" },
    { icon: Heart, title: "Narrative Therapy", desc: "AI-powered story healing" },
    { icon: Brain, title: "Emotional Intelligence", desc: "Cultural context awareness" },
    { icon: Headphones, title: "Voice & Video Support", desc: "Character-based personas" },
    { icon: Globe, title: "Multilingual Support", desc: "Hindi, English, and regional languages" },
    { icon: BarChart3, title: "Analytics Dashboard", desc: "Anonymous trend insights for institutions" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Comprehensive Mental Health Support
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            SoulMitra combines AI technology with human empathy to provide a complete mental wellness ecosystem for students.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <Card 
              key={feature.title}
              className={cn(
                cardVariants({ variant: feature.variant }),
                "hover-lift animate-slide-up group"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-heading">{feature.title}</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="soft" 
                  className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300"
                >
                  {feature.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {additionalFeatures.map((feature, index) => (
            <Card 
              key={feature.title}
              className={cn(
                cardVariants({ variant: "floating" }),
                "text-center hover-lift animate-slide-up"
              )}
              style={{ animationDelay: `${(index + 4) * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <feature.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-sm">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className={cn(cardVariants({ variant: "gradient" }), "max-w-2xl mx-auto")}>
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-heading font-bold mb-4">Ready to begin your wellness journey?</h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of students who have found support, healing, and growth with SoulMitra.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Get Started Today
                </Button>
                <Button variant="outline" size="lg">
                  Schedule a Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;