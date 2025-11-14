import { GraduationCap, Code, Lightbulb, Heart, Target, Clock } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Professional Space-Time Background */}
      <div className="absolute inset-0 space-grid opacity-[0.08]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      
      {/* Time-Continuum Visual Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-secondary/8 via-transparent to-transparent rounded-full blur-[200px] animate-nebula-drift" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary/8 via-transparent to-transparent rounded-full blur-[180px] animate-nebula-drift" style={{ animationDelay: "-7s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-20">
          <div className="space-y-6 max-w-4xl">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-normal mb-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  <span className="text-primary">
                    About Me
                  </span>
            </h2>
                <p className="text-lg md:text-xl text-muted-foreground font-normal leading-relaxed">
                  I'm building AI systems that help us understand what might happen before it does
                </p>
              </div>
              {/* Side image - more organic placement */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-lg border border-primary/20 flex-shrink-0">
                <img 
                  src="/profile.jpg" 
                  alt="Ismael" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </div>
            <div className="h-1 w-24 bg-primary/40 rounded-full" />
          </div>
          
          {/* Role Badge - More Natural */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/8 border border-primary/20 rounded-full text-sm text-primary font-normal">
              <Clock className="h-3.5 w-3.5" />
              <span>Temporal Engineering Researcher • AI Systems Developer</span>
            </div>
          </div>
          
          {/* Image Section - Varied alignment */}
          <div className="flex flex-col md:flex-row items-start gap-8 -my-8">
            {/* Main image - left aligned on desktop */}
            <div className="relative group flex-shrink-0">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl border border-primary/20 group-hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02]">
                <img 
                  src="/profile.jpg" 
                  alt="Ismael Kaleeba" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              {/* Decorative elements - organic placement */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-xl blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-xl blur-xl" />
            </div>
            
            {/* Side content - right aligned */}
            <div className="flex-1 pt-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
                  <p className="text-sm text-primary font-medium">Currently working on</p>
                </div>
                <p className="text-base text-foreground/80 leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  Building digital twins and AI simulations. Each project teaches me something new about how to predict and prevent disasters.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 text-base md:text-lg leading-relaxed text-foreground/85" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            {/* Varied alignment - left aligned */}
            <div className="relative bg-card/50 backdrop-blur-sm border border-primary/15 rounded-2xl p-8 md:p-10 space-y-6 shadow-md hover:border-primary/30 transition-all duration-300 max-w-3xl">
              <div className="relative">
                <p className="text-xl md:text-2xl font-semibold text-primary mb-5 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Why I do this
                </p>
                <div className="space-y-4">
                  <p>
                    I've always been bothered by preventable disasters — accidents, conflicts, crises that could have been avoided. 
                    So I started asking:{" "}
                    <span className="text-primary font-semibold">What if we could see these coming?</span>{" "}
                    What if we could test solutions in simulations before trying them in the real world?
                  </p>
                  
                  {/* Inline image */}
                  <div className="my-6 flex justify-end">
                    <div className="w-48 h-32 rounded-xl overflow-hidden shadow-lg border border-primary/20">
                      <img 
                        src="/hero-bg.jpg" 
                        alt="Working on simulations" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>
                  
                  <p>
                    That's how I got into <span className="text-secondary font-semibold">temporal engineering</span> — 
                    building AI systems that simulate time and explore different futures. 
                    I create digital replicas of real places and train AI agents to model what might happen. 
                    The idea is to spot problems before they become real problems.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Varied grid - not perfectly aligned */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group relative bg-card/40 backdrop-blur-sm border border-primary/15 rounded-xl p-6 space-y-4 hover:border-primary/30 transition-all duration-300">
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold text-primary">What I'm aiming for</h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed text-sm md:text-base mb-4">
                    To stop preventable disasters before they happen. Each simulation I build helps us understand 
                    what could go wrong, so we can fix it before it becomes real.
                  </p>
                  {/* Small image in card */}
                  <div className="w-full h-24 rounded-lg overflow-hidden border border-primary/10">
                    <img 
                      src="/hero-bg.jpg" 
                      alt="Simulation work" 
                      className="w-full h-full object-cover opacity-60"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              </div>
              
              <div className="group relative bg-card/40 backdrop-blur-sm border border-secondary/15 rounded-xl p-6 space-y-4 hover:border-secondary/30 transition-all duration-300 md:mt-8">
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <Lightbulb className="h-5 w-5 text-secondary" />
                    <h3 className="text-xl font-semibold text-secondary">How I'm doing it</h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
                    Using game engines like Unity and Unreal, plus AI frameworks, to build digital worlds 
                    where we can safely test ideas. It's like having a practice run before the real thing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bio Box - More Personal */}
          <div className="bg-card/40 backdrop-blur-sm border border-primary/15 rounded-xl p-6 md:p-8 mt-10 shadow-sm">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">A bit about me</h3>
                  <p className="text-sm text-muted-foreground">Temporal Engineering Researcher • AI Systems Developer</p>
                </div>
              </div>
              
              <p className="text-foreground/85 leading-relaxed text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                I'm building AI simulations and digital replicas that help us see what might happen before it does. 
                The goal is simple: prevent disasters by understanding them first. Right now, I'm working on projects 
                that combine game engines, AI, and simulation theory to create safe testing environments.
              </p>
              
              <div className="pt-3">
                <p className="text-sm text-muted-foreground mb-3 font-medium">Things I'm working with:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python", "Unity", "Unreal", "AI/ML", 
                    "Digital Twins", "Simulations", "Game Dev"
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-primary/8 border border-primary/20 rounded-full text-xs text-primary hover:bg-primary/15 transition-colors"
                    >
                      {tech}
                  </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Timeline Visualization */}
          <div className="py-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
              <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center shadow-lg shadow-primary/20">
                  <span className="text-sm font-bold text-primary">Past</span>
                </div>
                <p className="text-sm text-muted-foreground text-center max-w-[120px]">
                  Learning the foundations
                </p>
              </div>
              
              <div className="hidden md:block w-32 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full" />
              <div className="md:hidden w-1 h-16 bg-gradient-to-b from-primary via-secondary to-primary rounded-full" />
              
              <div className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 rounded-full bg-secondary/20 border-3 border-secondary flex items-center justify-center animate-glow-pulse shadow-lg shadow-secondary/30">
                  <span className="text-base font-bold text-secondary">Now</span>
            </div>
                <p className="text-sm text-muted-foreground text-center max-w-[120px] font-semibold">
                  Building & Researching
                </p>
              </div>
              
              <div className="hidden md:block w-32 h-1 bg-gradient-to-r from-secondary via-primary to-secondary rounded-full" />
              <div className="md:hidden w-1 h-16 bg-gradient-to-b from-secondary via-primary to-secondary rounded-full" />
              
              <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center shadow-lg shadow-primary/20">
                  <Heart className="h-5 w-5 text-primary" />
            </div>
                <p className="text-sm text-muted-foreground text-center max-w-[120px]">
                  Risk-free future
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
