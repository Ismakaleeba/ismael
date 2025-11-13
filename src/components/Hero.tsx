import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Target, Zap } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      {/* Enhanced Gradient Orbs with more movement */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[150px] animate-float" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: "-6s" }} />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-8 animate-slide-up">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary font-medium mb-4">
              High School Student • Temporal Engineering Researcher
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-secondary via-accent to-primary bg-clip-text text-transparent animate-glow-pulse bg-[length:200%_auto]">
                Ismael Kaleeba
              </span>
            </h1>
            <div className="space-y-3">
              <p className="text-2xl md:text-4xl text-foreground font-semibold">
                Building the Future of Risk-Free Living
              </p>
              <p className="text-lg md:text-xl text-primary/90 italic font-light">
                Through Temporal Engineering & AI Research
              </p>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed font-light">
            I'm a high school student on a mission to eliminate preventable risks from our world. 
            By building AI systems that simulate time, predict outcomes, and explore alternate futures, 
            I'm working toward a future where disasters are prevented before they happen.
          </p>
          
          {/* Enhanced Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">
            <div className="group bg-card/60 backdrop-blur-md border border-border rounded-xl p-8 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-primary/20 rounded-lg border border-primary/30">
                  <Target className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="text-4xl font-bold text-primary mb-2">Mission-Driven</div>
              <div className="text-sm text-muted-foreground">Eliminating Risk Through R&D</div>
            </div>
            <div className="group bg-card/60 backdrop-blur-md border border-border rounded-xl p-8 hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(217,70,239,0.3)] transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-secondary/20 rounded-lg border border-secondary/30">
                  <Sparkles className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <div className="text-4xl font-bold text-secondary mb-2">Active Research</div>
              <div className="text-sm text-muted-foreground">Temporal Intelligence Projects</div>
            </div>
            <div className="group bg-card/60 backdrop-blur-md border border-border rounded-xl p-8 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-accent/20 rounded-lg border border-accent/30">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div className="text-4xl font-bold text-accent mb-2">Always Learning</div>
              <div className="text-sm text-muted-foreground">Building & Experimenting Daily</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold px-10 py-6 text-lg group shadow-lg shadow-primary/30"
            >
              Explore My Research
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-primary/50 hover:bg-primary/10 px-10 py-6 text-lg font-semibold"
            >
              Join the Mission
            </Button>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-card/20">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
