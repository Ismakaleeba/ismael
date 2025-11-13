import { GraduationCap, Code, Lightbulb, Heart, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                My Mission
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A high school student's journey to eliminate risk through temporal engineering
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>
          
          <div className="space-y-8 text-lg leading-relaxed text-foreground/90">
            <div className="bg-card/40 backdrop-blur-sm border border-border rounded-2xl p-8 space-y-6">
              <p className="text-xl font-semibold text-primary mb-4">
                Why I Dedicate My Life to Temporal Engineering
              </p>
              <p>
                Every day, we see preventable disasters unfold — natural disasters, accidents, conflicts, 
                and crises that could have been avoided. As a high school student, I asked myself:{" "}
                <span className="text-primary font-semibold">What if we could see these events coming?</span>{" "}
                What if we could test solutions in simulated worlds before implementing them in reality?
              </p>
              
              <p>
                This question led me to <span className="text-secondary font-semibold">Temporal Engineering</span> — 
                the practice of building AI systems that simulate time, predict outcomes, and explore alternate futures. 
                By creating digital twins of real environments and training AI agents to model complex scenarios, 
                we can identify risks before they become disasters.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card/40 backdrop-blur-sm border border-primary/30 rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">My Goal</h3>
                </div>
                <p className="text-foreground/80">
                  To eliminate preventable risks from our world through research and development. 
                  Every simulation I build, every AI system I train, brings us closer to a future 
                  where disasters are prevented before they happen.
                </p>
              </div>
              
              <div className="bg-card/40 backdrop-blur-sm border border-secondary/30 rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-secondary/20 rounded-lg">
                    <Lightbulb className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary">My Approach</h3>
                </div>
                <p className="text-foreground/80">
                  I combine game engines (Unity, Unreal), AI/ML frameworks, and simulation theory 
                  to create living digital worlds. These environments let us test "what-if" scenarios 
                  safely, learning from virtual experiences before facing real consequences.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 backdrop-blur-sm border border-primary/30 rounded-2xl p-8 my-8">
              <p className="text-xl text-center italic text-primary/90 font-medium leading-relaxed">
                "I may be a high school student, but I believe age doesn't limit impact. 
                Every breakthrough starts with someone who refused to wait for permission to change the world."
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
                  <p className="text-muted-foreground">High School Student • Temporal Engineering Researcher</p>
                </div>
              </div>
              
              <p className="text-foreground/90 leading-relaxed text-lg">
                Currently balancing high school studies with independent research in temporal intelligence. 
                I spend my evenings and weekends building AI simulations, learning from failures, and 
                iterating on systems that could one day save lives. My work focuses on digital twins, 
                predictive modeling, and scenario testing — all in service of a risk-free future.
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
