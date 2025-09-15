import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-card hover:shadow-glow hover:scale-[1.02] transition-all duration-300",
        destructive: "bg-destructive text-destructive-foreground shadow-card hover:shadow-glow hover:scale-[1.02]",
        outline: "border border-border bg-background shadow-card hover:bg-muted/50 hover:shadow-glow",
        secondary: "bg-secondary text-secondary-foreground shadow-card hover:bg-secondary/80 hover:shadow-glow",
        ghost: "hover:bg-muted/50 hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-hero text-white shadow-glow hover:shadow-float hover:scale-[1.02] border-0 font-semibold",
        glass: "bg-white/10 backdrop-blur-glass border border-white/20 text-white hover:bg-white/20 transition-all duration-300",
        accent: "bg-gradient-accent text-white shadow-card hover:shadow-glow hover:scale-[1.02]",
        highlight: "bg-gradient-highlight text-white shadow-card hover:shadow-glow hover:scale-[1.02]",
        fresh: "bg-gradient-fresh text-white shadow-card hover:shadow-glow hover:scale-[1.02]",
        minimal: "bg-card border border-border hover:shadow-card hover:-translate-y-0.5 text-foreground"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-xl px-3",
        lg: "h-12 rounded-2xl px-8 text-base",
        xl: "h-14 rounded-3xl px-10 text-lg font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
