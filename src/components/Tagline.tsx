import { ArrowRightLeft, Sparkles } from "lucide-react";

interface TaglineProps {
  variant?: "default" | "large" | "small" | "minimal";
  showIcon?: boolean;
  className?: string;
}

const Tagline = ({ variant = "default", showIcon = true, className = "" }: TaglineProps) => {
  const variants = {
    large: "text-2xl md:text-4xl lg:text-5xl",
    default: "text-lg md:text-xl lg:text-2xl",
    small: "text-sm md:text-base",
    minimal: "text-xs md:text-sm"
  };

  const iconSizes = {
    large: "h-8 w-8 md:h-10 md:w-10",
    default: "h-5 w-5 md:h-6 md:w-6",
    small: "h-4 w-4",
    minimal: "h-3 w-3"
  };

  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      {showIcon && (
        <Sparkles className={`${iconSizes[variant]} text-primary animate-pulse`} />
      )}
      <div className={`font-bold tracking-tight ${variants[variant]} flex items-center gap-2 md:gap-3`}>
        <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
          Learn from the future
        </span>
        {variant !== "minimal" ? (
          <ArrowRightLeft className={`${iconSizes[variant]} text-secondary/60 flex-shrink-0`} />
        ) : (
          <span className="text-muted-foreground">•</span>
        )}
        <span className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
          Improve the past
        </span>
      </div>
    </div>
  );
};

export default Tagline;

