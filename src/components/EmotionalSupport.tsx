import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Send, 
  Mic, 
  Heart, 
  Smile, 
  Frown, 
  Meh,
  User,
  Bot
} from "lucide-react";
import { cardVariants } from "@/components/ui/card-variants";
import { cn } from "@/lib/utils";

const EmotionalSupport = () => {
  const [message, setMessage] = useState("");
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [chatMessages, setChatMessages] = useState<Array<{
    id: number;
    type: "bot" | "user";
    message: string;
    timestamp: string;
  }>>([
    {
      id: 1,
      type: "bot" as const,
      message: "Hello! I'm your AI companion. How are you feeling today? I'm here to listen and support you.",
      timestamp: "Just now"
    }
  ]);

  const moods = [
    { emoji: "😊", label: "Happy", color: "hope" },
    { emoji: "😔", label: "Sad", color: "calm" },
    { emoji: "😰", label: "Anxious", color: "warning" },
    { emoji: "😡", label: "Angry", color: "crisis" },
    { emoji: "😴", label: "Tired", color: "support" },
    { emoji: "🤔", label: "Confused", color: "growth" }
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    const newMessage = {
      id: chatMessages.length + 1,
      type: "user" as const,
      message: message,
      timestamp: "Now"
    };
    
    setChatMessages([...chatMessages, newMessage]);
    setMessage("");
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "I understand you're going through something difficult. It's completely normal to feel this way, and I want you to know that your feelings are valid.",
        "Thank you for sharing that with me. It takes courage to open up about how you're feeling. What would help you feel a little better right now?",
        "I hear you, and I'm here with you. Sometimes just acknowledging our feelings can be the first step toward healing. You're not alone in this.",
        "That sounds really challenging. Remember that it's okay to not be okay sometimes. What small step could we take together to help you through this?"
      ];
      
      const botResponse = {
        id: chatMessages.length + 2,
        type: "bot" as const,
        message: responses[Math.floor(Math.random() * responses.length)],
        timestamp: "Just now"
      };
      
      setChatMessages(prev => [...prev, botResponse]);
    }, 1500);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted-bg to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            AI Emotional Support
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with your AI companion for immediate emotional support, available 24/7 with complete privacy.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Mood Selector */}
          <Card className={cn(cardVariants({ variant: "emotional" }), "lg:col-span-1")}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                How are you feeling?
              </CardTitle>
              <CardDescription>
                Select your current mood to help me understand how to support you better.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {moods.map((mood) => (
                  <Button
                    key={mood.label}
                    variant={selectedMood === mood.label ? "hero" : "soft"}
                    className="h-auto p-4 flex flex-col gap-2"
                    onClick={() => setSelectedMood(mood.label)}
                  >
                    <span className="text-2xl">{mood.emoji}</span>
                    <span className="text-sm">{mood.label}</span>
                  </Button>
                ))}
              </div>
              
              {selectedMood && (
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium">
                    Thank you for sharing. I'm here to support you through this {selectedMood.toLowerCase()} moment.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Chat Interface */}
          <Card className={cn(cardVariants({ variant: "elevated" }), "lg:col-span-2")}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                AI Companion Chat
              </CardTitle>
              <CardDescription>
                Share your thoughts and feelings in a safe, judgment-free space.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Chat Messages */}
              <div className="h-80 overflow-y-auto space-y-4 p-4 bg-muted-bg/50 rounded-lg">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={cn(
                      "flex gap-3",
                      msg.type === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "flex gap-3 max-w-[80%]",
                        msg.type === "user" ? "flex-row-reverse" : "flex-row"
                      )}
                    >
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center",
                        msg.type === "user" ? "bg-primary" : "bg-support"
                      )}>
                        {msg.type === "user" ? (
                          <User className="w-4 h-4 text-white" />
                        ) : (
                          <Bot className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <div
                        className={cn(
                          "p-3 rounded-lg",
                          msg.type === "user"
                            ? "bg-primary text-white"
                            : "bg-white border"
                        )}
                      >
                        <p className="text-sm">{msg.message}</p>
                        <p className={cn(
                          "text-xs mt-1",
                          msg.type === "user" ? "text-white/70" : "text-muted-foreground"
                        )}>
                          {msg.timestamp}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="flex gap-2">
                <div className="flex-1">
                  <Textarea
                    placeholder="Share what's on your mind... I'm here to listen and support you."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="resize-none"
                    rows={2}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Button variant="soft" size="icon">
                    <Mic className="w-4 h-4" />
                  </Button>
                  <Button variant="hero" size="icon" onClick={handleSendMessage}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-2">
                {[
                  "I need someone to talk to",
                  "I'm feeling overwhelmed",
                  "I'm having trouble sleeping",
                  "I need coping strategies"
                ].map((action) => (
                  <Badge
                    key={action}
                    variant="secondary"
                    className="cursor-pointer hover:bg-primary hover:text-white transition-colors"
                    onClick={() => setMessage(action)}
                  >
                    {action}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Support */}
        <Card className={cn(cardVariants({ variant: "support" }), "mt-8 text-center")}>
          <CardContent className="py-6">
            <h3 className="text-lg font-semibold mb-2">Need immediate help?</h3>
            <p className="text-muted-foreground mb-4">
              If you're experiencing a crisis, please reach out to a professional immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="crisis" className="bg-crisis text-white hover:bg-crisis/90">
                Crisis Helpline: 1-800-HELP
              </Button>
              <Button variant="outline">
                Connect with Campus Counselor
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EmotionalSupport;