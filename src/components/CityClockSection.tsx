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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            <span className="text-primary">
              A Look Ahead
            </span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            Here's what the clock shows — five years from now, ticking forward in real time.
          </p>
          <div className="h-0.5 w-16 bg-primary/40 mx-auto rounded-full" />
        </div>

        {/* City Clock Display */}
        <div className="flex justify-center items-center">
          <FutureClock yearsAhead={5} />
        </div>

        {/* Additional context text */}
        <div className="mt-10 text-center">
          <p className="text-xs text-muted-foreground max-w-xl mx-auto" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            Hover to see different timelines
          </p>
        </div>
      </div>
    </section>
  );
};

export default CityClockSection;

