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
          <div className="text-center space-y-6">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
              <span className="time-gradient-text">
                The Mission
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
              Conquering time through research and engineering to eliminate preventable risks
            </p>
            <div className="h-1.5 w-40 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full shadow-lg shadow-primary/30" />
          </div>
          
          {/* Professional Role Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 backdrop-blur-md border border-primary/30 rounded-full text-sm text-primary font-medium shadow-lg shadow-primary/10">
              <Clock className="h-4 w-4 animate-pulse" />
              <span>Temporal Engineering Researcher • AI Systems Developer</span>
            </div>
          </div>
          
          {/* Professional Image Section - Large & Integrated */}
          <div className="flex justify-center -my-8">
            <div className="relative group">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 -z-10 scale-150" />
              
              {/* Large Image Container - No background, blends with page */}
              <div className="relative">
                <div className="w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden shadow-2xl shadow-primary/30 group-hover:shadow-primary/50 transition-all duration-500 group-hover:scale-105 remove-white-bg">
                  <img 
                    src="/profile.jpg" 
                    alt="Ismael Kaleeba - Temporal Engineering Researcher" 
                    className="w-full h-full object-cover"
                    style={{
                      filter: 'brightness(0.98) contrast(1.1) saturate(1.05)',
                    }}
                    onError={(e) => {
                      // Show placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const placeholder = target.parentElement?.nextElementSibling as HTMLElement;
                      if (placeholder) placeholder.style.display = 'flex';
                    }}
                  />
                </div>
                {/* Fallback placeholder */}
                <div className="w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center relative hidden shadow-2xl">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.2),transparent)] rounded-full" />
                  <div className="relative z-10 text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 border-4 border-primary/50 flex items-center justify-center shadow-lg">
                      <GraduationCap className="h-16 w-16 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 font-medium">
                      Add profile.jpg to public folder
                    </p>
                  </div>
                </div>
                
                {/* Subtle border glow */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-500 pointer-events-none" />
                
                {/* Decorative glow elements */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/15 rounded-full blur-2xl animate-pulse" />
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-secondary/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
              </div>
            </div>
          </div>
          
          <div className="space-y-10 text-lg md:text-xl leading-relaxed text-foreground/90">
            <div className="relative bg-card/60 backdrop-blur-xl border border-primary/20 rounded-3xl p-10 md:p-12 space-y-8 shadow-2xl shadow-primary/5 hover:border-primary/40 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <p className="text-2xl md:text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                  <Target className="h-7 w-7" />
                  Why I Dedicate My Life to Temporal Engineering
                </p>
                <div className="space-y-5">
                  <p>
                    Every day, we witness preventable disasters — natural catastrophes, accidents, conflicts, 
                    and crises that could have been avoided. As a researcher, I asked:{" "}
                    <span className="text-primary font-bold">What if we could see these events coming?</span>{" "}
                    What if we could test solutions in simulated worlds before implementing them in reality?
                  </p>
                  
                  <p>
                    This question led me to <span className="text-secondary font-bold">Temporal Engineering</span> — 
                    the discipline of building AI systems that simulate time, predict outcomes, and explore alternate futures. 
                    By creating digital twins of real environments and training AI agents to model complex scenarios, 
                    we can identify and eliminate risks before they materialize.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group relative bg-card/60 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 space-y-5 hover:border-primary/50 hover:shadow-[0_0_40px_hsl(200_100%_45%_/_0.25)] transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl border border-primary/30 group-hover:scale-110 transition-transform">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">The Goal</h3>
                  </div>
                  <p className="text-foreground/85 leading-relaxed">
                    To eliminate preventable risks from our world through rigorous research and development. 
                    Every simulation I build, every AI system I train, brings us closer to a future 
                    where disasters are prevented before they happen.
                  </p>
                </div>
              </div>
              
              <div className="group relative bg-card/60 backdrop-blur-xl border border-secondary/20 rounded-2xl p-8 space-y-5 hover:border-secondary/50 hover:shadow-[0_0_40px_hsl(195_100%_60%_/_0.25)] transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl border border-secondary/30 group-hover:scale-110 transition-transform">
                      <Lightbulb className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary">The Approach</h3>
                  </div>
                  <p className="text-foreground/85 leading-relaxed">
                    Combining game engines (Unity, Unreal), AI/ML frameworks, and simulation theory 
                    to create living digital worlds. These environments enable us to test "what-if" scenarios 
                    safely, learning from virtual experiences before facing real consequences.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 backdrop-blur-sm border border-primary/30 rounded-2xl p-8 my-8">
              <p className="text-xl text-center italic text-primary/90 font-medium leading-relaxed">
                "Every breakthrough starts with someone who refused to wait for permission to change the world. 
                Through temporal engineering, we can master time and eliminate risk before it materializes."
              </p>
            </div>
          </div>
          
          {/* Enhanced Bio Box */}
          <div className="bg-card/60 backdrop-blur-md border border-border rounded-2xl p-8 mt-12 shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl border border-primary/30">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground">Ismael Kaleeba</h3>
                  <p className="text-muted-foreground">Temporal Engineering Researcher • AI Systems Developer</p>
                </div>
              </div>
              
              <p className="text-foreground/90 leading-relaxed text-lg">
                A dedicated researcher focused on temporal intelligence and AI systems development. 
                I build AI simulations, digital twins, and predictive models that could one day save lives. 
                My work centers on eliminating preventable risks through rigorous research, continuous learning, 
                and innovative approaches to temporal engineering — all in service of a risk-free future.
              </p>
              
              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-4 font-semibold">Technologies I'm Learning & Using:</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Python", "Unity", "Unreal Engine", "AI/ML", 
                    "Temporal Modeling", "Digital Twins", "Reinforcement Learning",
                    "Simulation Theory", "Game Development", "Data Science"
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary hover:bg-primary/20 transition-colors"
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
