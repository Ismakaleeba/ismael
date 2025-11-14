import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Target, Zap, Brain } from "lucide-react";
import Tagline from "./Tagline";

const Hero = () => {

  // Generate starfield
  const stars = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 3,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28">
      {/* Professional Space-Time Grid - Reduced opacity */}
      <div className="absolute inset-0 space-grid opacity-[0.05]" />
      
      {/* Time-Continuum Nebula Clouds - Reduced opacity */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-primary/8 via-transparent to-transparent rounded-full blur-[200px] animate-nebula-drift" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-secondary/8 via-transparent to-transparent rounded-full blur-[180px] animate-nebula-drift" style={{ animationDelay: "-5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,hsl(var(--accent)/0.05),transparent)] rounded-full blur-[150px] animate-temporal-pulse" />
      
      {/* Orbital Time Rings - Reduced opacity */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary/5 rounded-full animate-orbit" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-secondary/4 rounded-full animate-orbit-reverse" style={{ animationDuration: "35s" }} />
      
      {/* Professional Starfield - Reduced opacity */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-primary animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
              opacity: Math.random() * 0.2 + 0.1,
            }}
          />
        ))}
      </div>
      
      {/* Time Flow Particles - Reduced opacity */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-20 bg-gradient-to-b from-primary/15 via-primary/30 to-transparent animate-time-flow"
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.3}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
      
      {/* Background Image/Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Hero Background Image */}
        <img 
          src="/hero-bg.jpg" 
          alt="Temporal Engineering Background" 
          className="w-full h-full object-cover opacity-100"
          onError={(e) => {
            // Hide image if it fails to load, show fallback
            e.currentTarget.style.display = 'none';
          }}
        />
        
        {/* Fallback placeholder - shows if image fails to load */}
        <div className="w-full h-full bg-gradient-to-br from-primary/10 via-secondary/8 to-primary/10 flex items-center justify-center absolute inset-0" style={{ display: 'none' }}>
          <div className="text-center p-8 space-y-4 opacity-40">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl border-2 border-primary/30 flex items-center justify-center">
              <Sparkles className="h-10 w-10 text-primary/60" />
            </div>
            <p className="text-sm text-muted-foreground font-medium">
              Hero background image
            </p>
          </div>
        </div>
        
        {/* Very light overlay for text readability - minimal opacity */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/8 via-background/5 to-background/8" />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex items-center justify-center min-h-[80vh] animate-slide-up">
          <div className="text-center space-y-8 max-w-4xl">
            {/* Content Container with Enhanced Visibility - More Human Feel */}
            <div className="relative space-y-6 p-8 md:p-12 rounded-2xl backdrop-blur-md bg-background/60 border border-primary/20 shadow-lg" style={{ 
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)'
            }}>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-secondary/5 to-primary/8 rounded-2xl blur-xl -z-10" />
              
              <div className="space-y-6 relative z-10">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-normal leading-tight text-primary" style={{ 
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.2), 0 0 20px hsl(var(--primary) / 0.3)'
                }}>
                  Ismael Kaleeba
                </h1>
                
                <div className="space-y-3">
                  <p className="text-2xl md:text-4xl lg:text-5xl text-foreground font-semibold tracking-normal drop-shadow-[0_2px_15px_rgba(0,0,0,0.7)]" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                    Building systems that learn from the future
                  </p>
                  <p className="text-xl md:text-2xl lg:text-3xl text-foreground/80 font-normal italic mt-2">
                    to improve the past
                  </p>
                </div>
                
                {/* Branded Tagline - More Natural */}
                <div className="pt-6">
                  <Tagline variant="default" />
                </div>
              </div>
            </div>
            
                {/* Action Buttons with Enhanced Visibility */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 relative z-10">
                  <Link to="/projects">
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-5 text-base group shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] rounded-xl"
                      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                    >
                      <Sparkles className="mr-2 h-4 w-4" />
                      See My Work
                      <ArrowDown className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="border-2 border-primary/50 hover:bg-primary/10 hover:border-primary/70 bg-background/60 backdrop-blur-sm px-8 py-5 text-base font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] rounded-xl"
                      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                    >
                      Get in Touch
                    </Button>
                  </Link>
                </div>
          </div>
        </div>
      </div>
      
      {/* Professional Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-7 h-12 border-2 border-primary/40 rounded-full flex items-start justify-center p-2.5 backdrop-blur-md bg-card/30 shadow-lg">
          <div className="w-2 h-4 bg-gradient-to-b from-primary to-secondary rounded-full animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
