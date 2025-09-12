import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { 
  Calendar, 
  Clock, 
  Shield, 
  CheckCircle, 
  User, 
  Phone, 
  Video,
  MessageSquare,
  Lock
} from "lucide-react";
import { cardVariants } from "@/components/ui/card-variants";
import { cn } from "@/lib/utils";

const BookingSystem = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const sessionTypes = [
    { 
      id: "video", 
      icon: Video, 
      title: "Video Session", 
      desc: "Face-to-face online counseling",
      duration: "50 minutes"
    },
    { 
      id: "phone", 
      icon: Phone, 
      title: "Phone Call", 
      desc: "Voice-only support session",
      duration: "50 minutes"
    },
    { 
      id: "chat", 
      icon: MessageSquare, 
      title: "Text Chat", 
      desc: "Written conversation support",
      duration: "45 minutes"
    }
  ];

  const counselors = [
    {
      name: "Dr. Sarah Chen",
      specialties: ["Anxiety", "Depression", "Academic Stress"],
      rating: 4.9,
      available: true
    },
    {
      name: "Dr. Rajesh Kumar",
      specialties: ["Relationship Issues", "Self-Esteem", "Life Transitions"],
      rating: 4.8,
      available: true
    },
    {
      name: "Dr. Priya Sharma",
      specialties: ["Trauma", "PTSD", "Mindfulness"],
      rating: 4.9,
      available: false
    }
  ];

  const handleBooking = () => {
    if (selectedDate && selectedTime && selectedType) {
      setIsBooked(true);
    }
  };

  if (isBooked) {
    return (
      <section id="booking" className="py-20 bg-gradient-to-b from-background to-muted-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className={cn(cardVariants({ variant: "gradient" }), "text-center")}>
            <CardContent className="pt-12 pb-12">
              <CheckCircle className="w-16 h-16 text-growth mx-auto mb-6" />
              <h2 className="text-3xl font-heading font-bold mb-4">Session Booked Successfully!</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Your confidential session has been scheduled. You'll receive a secure link 15 minutes before your appointment.
              </p>
              
              <div className="bg-white/50 rounded-lg p-6 mb-6 text-left max-w-md mx-auto">
                <h3 className="font-semibold mb-3">Session Details:</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span className="font-medium">{selectedDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time:</span>
                    <span className="font-medium">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Type:</span>
                    <span className="font-medium">{sessionTypes.find(t => t.id === selectedType)?.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium">50 minutes</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero">
                  Add to Calendar
                </Button>
                <Button variant="outline" onClick={() => setIsBooked(false)}>
                  Book Another Session
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-background to-muted-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Confidential Booking System
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Schedule a private session with a qualified counselor. All appointments are completely confidential and secure.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Session Type Selection */}
          <Card className={cn(cardVariants({ variant: "emotional" }))}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Session Type
              </CardTitle>
              <CardDescription>
                Choose how you'd like to connect with your counselor.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {sessionTypes.map((type) => (
                <Button
                  key={type.id}
                  variant={selectedType === type.id ? "hero" : "soft"}
                  className="w-full h-auto p-4 flex flex-col items-start gap-2"
                  onClick={() => setSelectedType(type.id)}
                >
                  <div className="flex items-center gap-2 w-full">
                    <type.icon className="w-5 h-5" />
                    <span className="font-semibold">{type.title}</span>
                  </div>
                  <span className="text-sm opacity-80">{type.desc}</span>
                  <Badge variant="secondary" className="self-start">
                    {type.duration}
                  </Badge>
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* Date and Time Selection */}
          <Card className={cn(cardVariants({ variant: "elevated" }))}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Schedule
              </CardTitle>
              <CardDescription>
                Select your preferred date and time.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label>Available Time Slots</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "hero" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="notes">Additional Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  placeholder="Any specific topics you'd like to discuss or preferences for your session..."
                  className="mt-1"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Counselor Selection */}
          <Card className={cn(cardVariants({ variant: "calm" }))}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Available Counselors
              </CardTitle>
              <CardDescription>
                Professional counselors ready to support you.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {counselors.map((counselor, index) => (
                <div
                  key={index}
                  className={cn(
                    "p-4 rounded-lg border transition-all",
                    counselor.available 
                      ? "border-primary/20 bg-primary/5 hover:border-primary/40 cursor-pointer" 
                      : "border-muted bg-muted/20 opacity-60"
                  )}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-sm">{counselor.name}</h3>
                    <Badge variant={counselor.available ? "default" : "secondary"}>
                      {counselor.available ? "Available" : "Busy"}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-2">
                    {counselor.specialties.map((specialty) => (
                      <Badge key={specialty} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    Rating: ⭐ {counselor.rating}/5.0
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Privacy Notice & Booking */}
        <div className="mt-8 space-y-6">
          {/* Privacy Notice */}
          <Card className={cn(cardVariants({ variant: "support" }))}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-support mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Complete Privacy & Confidentiality</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Your sessions are completely private and confidential. We use end-to-end encryption and follow strict HIPAA guidelines. No personal information is shared without your explicit consent.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      <Lock className="w-3 h-3 mr-1" />
                      End-to-End Encrypted
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      HIPAA Compliant
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Zero Data Tracking
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Booking Button */}
          <div className="text-center">
            <Button
              variant="hero"
              size="xl"
              onClick={handleBooking}
              disabled={!selectedDate || !selectedTime || !selectedType}
              className="min-w-[300px]"
            >
              Book Confidential Session
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              Free consultation available • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSystem;