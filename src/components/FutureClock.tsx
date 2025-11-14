import { useEffect, useState } from "react";

interface FutureClockProps {
  yearsAhead?: number;
}

// Alternative future scenarios
const alternativeTimelines = [
  "Timeline Alpha: AI Singularity Achieved",
  "Timeline Beta: Quantum Computing Revolution",
  "Timeline Gamma: Climate Crisis Resolved",
  "Timeline Delta: Interstellar Travel Begins",
  "Timeline Epsilon: Universal Basic Intelligence",
  "Timeline Zeta: Temporal Engineering Mastery",
];

const FutureClock = ({ yearsAhead = 5 }: FutureClockProps) => {
  const [futureDate, setFutureDate] = useState<Date>(() => {
    const now = new Date();
    now.setFullYear(now.getFullYear() + yearsAhead);
    return now;
  });

  const [hovered, setHovered] = useState(false);
  const [alternativeTimeline, setAlternativeTimeline] = useState<string>("");

  useEffect(() => {
    // Initialize future date
    const now = new Date();
    const future = new Date(now);
    future.setFullYear(future.getFullYear() + yearsAhead);
    setFutureDate(future);

    // Update every second
    const interval = setInterval(() => {
      const now = new Date();
      const future = new Date(now);
      future.setFullYear(future.getFullYear() + yearsAhead);
      setFutureDate(future);
    }, 1000);

    return () => clearInterval(interval);
  }, [yearsAhead]);

  useEffect(() => {
    if (hovered) {
      // Cycle through alternative timelines
      let index = 0;
      const timelineInterval = setInterval(() => {
        setAlternativeTimeline(alternativeTimelines[index]);
        index = (index + 1) % alternativeTimelines.length;
      }, 2000);

      return () => clearInterval(timelineInterval);
    } else {
      setAlternativeTimeline("");
    }
  }, [hovered]);

  const formatDate = (date: Date): string => {
    const months = [
      "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
      "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
    ];
    
    const day = date.getDate().toString().padStart(2, "0");
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    
    return `${day} ${month} ${year}`;
  };

  const formatTime = (date: Date): string => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div
      className="relative group w-full max-w-2xl mx-auto"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Dark backdrop for contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/15 via-foreground/20 to-foreground/15 rounded-2xl blur-xl -z-20" />
      <div className="absolute inset-0 bg-foreground/10 rounded-2xl -z-10" />
      
      {/* Architectural Building Frame - Top Section */}
      <div className="relative">
        {/* Top architectural crown */}
        <div className="h-6 md:h-8 bg-gradient-to-b from-foreground/25 via-foreground/15 to-transparent border-b-2 border-primary/40 relative rounded-t-2xl">
          {/* Decorative architectural elements */}
          <div className="absolute top-0 left-1/4 w-1 h-full bg-primary/40" />
          <div className="absolute top-0 left-1/2 w-1 h-full bg-primary/40" />
          <div className="absolute top-0 left-3/4 w-1 h-full bg-primary/40" />
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary/40" />
          <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-primary/40" />
        </div>

        {/* Main Clock Display - Digital Billboard Style */}
        <div className="relative bg-gradient-to-b from-foreground/20 via-foreground/25 to-foreground/20 border-x-2 border-primary/50 backdrop-blur-sm">
          {/* Darker overlay for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/30 via-foreground/25 to-foreground/30" />
          
          {/* Side architectural columns */}
          <div className="absolute left-0 top-0 bottom-0 w-3 md:w-4 bg-gradient-to-r from-foreground/20 to-transparent border-r border-primary/40 z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-3 md:w-4 bg-gradient-to-l from-foreground/20 to-transparent border-l border-primary/40 z-10" />
          
          {/* Glow effect behind display */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-primary/30 opacity-70 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10" />
          
          {/* Main Display Content */}
          <div className="relative px-6 md:px-10 py-8 md:py-12 z-10">
            {/* Grid pattern overlay for digital display effect */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `
                linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }} />
            
            {/* Date Section */}
            <div className="text-center mb-6 md:mb-8 relative z-10">
              <div className="text-xs font-bold text-primary/70 uppercase tracking-[0.2em] mb-3 md:mb-4">
                Future Date
              </div>
              <div className="font-mono text-2xl md:text-3xl lg:text-4xl font-black text-primary city-clock-text leading-none">
                {formatDate(futureDate)}
              </div>
            </div>

            {/* Separator line */}
            <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-6 md:mb-8" />

            {/* Time Section */}
            <div className="text-center relative z-10">
              <div className="text-xs font-bold text-secondary/70 uppercase tracking-[0.2em] mb-3 md:mb-4">
                Time
              </div>
              <div className="font-mono text-3xl md:text-4xl lg:text-5xl font-black text-secondary city-clock-text leading-none">
                {formatTime(futureDate)}
              </div>
            </div>

            {/* Alternative Timeline Display (on hover) */}
            {hovered && alternativeTimeline && (
              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-primary/40 animate-fade-in relative z-10">
                <div className="text-center">
                  <div className="text-xs font-bold text-accent/70 uppercase tracking-[0.15em] mb-2">
                    Alternative Timeline Detected
                  </div>
                  <div className="font-mono text-sm md:text-base font-bold text-accent city-clock-text-subtle">
                    {alternativeTimeline}
                  </div>
                </div>
              </div>
            )}

            {/* Status indicators - corner lights */}
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
            </div>
            <div className="absolute top-4 right-4 flex gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "1.5s" }} />
            </div>
          </div>
        </div>

        {/* Bottom architectural base */}
        <div className="h-5 md:h-7 bg-gradient-to-t from-foreground/25 via-foreground/15 to-transparent border-t-2 border-primary/40 relative rounded-b-2xl">
          {/* Decorative architectural elements */}
          <div className="absolute bottom-0 left-1/4 w-1 h-full bg-primary/40" />
          <div className="absolute bottom-0 left-1/2 w-1 h-full bg-primary/40" />
          <div className="absolute bottom-0 left-3/4 w-1 h-full bg-primary/40" />
          {/* Corner accents */}
          <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-primary/40" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary/40" />
        </div>

        {/* Building foundation shadow */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[90%] h-3 bg-gradient-to-t from-foreground/25 to-transparent blur-md rounded-full" />
      </div>
    </div>
  );
};

export default FutureClock;
