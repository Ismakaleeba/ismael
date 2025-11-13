import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Target, Zap, Brain } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
      {/* Professional Space-Time Grid */}
      <div className="absolute inset-0 space-grid opacity-[0.15]" />
      
      {/* Time-Continuum Nebula Clouds */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-primary/15 via-transparent to-transparent rounded-full blur-[200px] animate-nebula-drift" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-secondary/15 via-transparent to-transparent rounded-full blur-[180px] animate-nebula-drift" style={{ animationDelay: "-5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,hsl(var(--accent)/0.1),transparent)] rounded-full blur-[150px] animate-temporal-pulse" />
      
      {/* Orbital Time Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary/10 rounded-full animate-orbit" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-secondary/8 rounded-full animate-orbit-reverse" style={{ animationDuration: "35s" }} />
      
      {/* Professional Starfield */}
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
              opacity: Math.random() * 0.5 + 0.3,
            }}
          />
        ))}
      </div>
      
      {/* Time Flow Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-20 bg-gradient-to-b from-primary/30 via-primary/60 to-transparent animate-time-flow"
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.3}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center space-y-10 animate-slide-up">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-none text-primary">
              Ismael Kaleeba
            </h1>
            
            <div className="space-y-4">
              <p className="text-3xl md:text-5xl lg:text-6xl text-foreground font-bold tracking-tight">
                Conquering Time Through
              </p>
              <p className="text-3xl md:text-5xl lg:text-6xl font-bold">
                <span className="time-gradient-text">Temporal Engineering</span>
              </p>
              <p className="text-xl md:text-2xl text-primary/80 italic font-light mt-4">
                Eliminating Risk • Mastering the Continuum • Shaping the Future
              </p>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-foreground/85 max-w-4xl mx-auto leading-relaxed font-light px-4">
            A dedicated researcher building AI systems that simulate time, predict outcomes, 
            and explore alternate futures. Through temporal engineering, I'm working toward 
            a world where preventable disasters are eliminated before they occur.
          </p>
          
          {/* Professional Research Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-20">
            <div className="group relative bg-card/70 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 hover:border-primary/50 hover:shadow-[0_0_50px_hsl(200_100%_45%_/_0.3)] transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl border border-primary/30 group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <div className="text-5xl font-bold text-primary mb-1">Mission</div>
                <div className="text-sm text-muted-foreground font-medium">Eliminating Risk Through R&D</div>
              </div>
            </div>
            
            <div className="group relative bg-card/70 backdrop-blur-xl border border-secondary/20 rounded-2xl p-8 hover:border-secondary/50 hover:shadow-[0_0_50px_hsl(195_100%_60%_/_0.3)] transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl border border-secondary/30 group-hover:scale-110 transition-transform">
                  <Brain className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-5xl font-bold text-secondary mb-1">Research</div>
                <div className="text-sm text-muted-foreground font-medium">Temporal Intelligence Systems</div>
              </div>
            </div>
            
            <div className="group relative bg-card/70 backdrop-blur-xl border border-accent/20 rounded-2xl p-8 hover:border-accent/50 hover:shadow-[0_0_50px_hsl(195_100%_70%_/_0.3)] transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl border border-accent/30 group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <div className="text-5xl font-bold text-accent mb-1">Innovation</div>
                <div className="text-sm text-muted-foreground font-medium">Continuous Learning & Development</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-20">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-primary via-secondary to-primary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-bold px-12 py-7 text-lg group shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
              Explore Research
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-primary/50 hover:bg-primary/10 hover:border-primary px-12 py-7 text-lg font-bold backdrop-blur-sm"
            >
              Connect
            </Button>
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
