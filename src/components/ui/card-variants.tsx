import { cva } from "class-variance-authority";

export const cardVariants = cva(
  "rounded-xl border bg-card text-card-foreground transition-all duration-300",
  {
    variants: {
      variant: {
        default: "shadow-sm",
        elevated: "shadow-md hover:shadow-lg",
        floating: "shadow-lg hover:shadow-xl transform hover:-translate-y-1",
        glass: "glass-card shadow-lg",
        gradient: "surface-gradient shadow-md border-0",
        emotional: "border-2 border-primary/20 shadow-md hover:shadow-lg hover:border-primary/40",
        support: "border-l-4 border-l-support bg-support/5 shadow-sm",
        calm: "border-l-4 border-l-calm bg-calm/5 shadow-sm",
        growth: "border-l-4 border-l-growth bg-growth/5 shadow-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);