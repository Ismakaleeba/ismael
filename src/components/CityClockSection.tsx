import FutureClock from "./FutureClock";

const CityClockSection = () => {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Urban Skyline Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      {/* Atmospheric lighting effects */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[150px] opacity-50" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/8 rounded-full blur-[180px] opacity-50" />
      
      {/* Subtle grid pattern for urban feel */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Temporal Horizon
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the future, displayed on the city's central temporal clock.
            <br className="hidden md:block" />
            Five years ahead, counting every second.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* City Clock Display */}
        <div className="flex justify-center items-center">
          <FutureClock yearsAhead={5} />
        </div>

        {/* Additional context text */}
        <div className="mt-12 text-center">
          <p className="text-xs md:text-sm text-muted-foreground italic max-w-2xl mx-auto">
            Hover over the clock to explore alternative timelines and future scenarios.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CityClockSection;

