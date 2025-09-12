import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import EmotionalSupport from "@/components/EmotionalSupport";
import BookingSystem from "@/components/BookingSystem";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <EmotionalSupport />
      <BookingSystem />
      <Toaster />
    </div>
  );
};

export default Index;