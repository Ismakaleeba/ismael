import { 
  Code, 
  Zap, 
  Shield, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Brain, 
  Database, 
  Cloud, 
  Layers, 
  Cpu, 
  Network, 
  Boxes,
  Activity,
  GitBranch,
  Server,
  BarChart3,
  CircuitBoard,
  LucideIcon
} from "lucide-react";
import Tagline from "./Tagline";

interface TechStackItemProps {
  icon: LucideIcon;
  name: string;
  color: "primary" | "secondary" | "accent";
  description: string;
}

const TechStackItem = ({ icon: Icon, name, color, description }: TechStackItemProps) => {
  const colorClasses = {
    primary: {
      bg: "from-primary/20 to-primary/10",
      border: "border-primary/40",
      text: "text-primary",
      shadow: "group-hover:shadow-primary/40"
    },
    secondary: {
      bg: "from-secondary/20 to-secondary/10",
      border: "border-secondary/40",
      text: "text-secondary",
      shadow: "group-hover:shadow-secondary/40"
    },
    accent: {
      bg: "from-accent/20 to-accent/10",
      border: "border-accent/40",
      text: "text-accent",
      shadow: "group-hover:shadow-accent/40"
    }
  };

  const colors = colorClasses[color];

  return (
    <div className="group flex flex-col items-center space-y-2 cursor-pointer">
      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${colors.bg} border-2 ${colors.border} flex items-center justify-center shadow-lg ${colors.shadow} group-hover:scale-110 transition-all duration-300 relative`}>
        <Icon className={`h-6 w-6 md:h-7 md:w-7 ${colors.text}`} />
        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10`} />
      </div>
      <div className="text-center">
        <div className={`text-xs md:text-sm font-semibold ${colors.text} mb-0.5`}>
          {name}
        </div>
        <div className="text-[10px] md:text-xs text-muted-foreground">
          {description}
        </div>
      </div>
    </div>
  );
};

const Manifesto = () => {
  return (
    <section id="manifesto" className="py-24 md:py-32 relative overflow-hidden">
      {/* Atmospheric Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/10 via-secondary/8 to-primary/10 rounded-full blur-[200px] opacity-60" />
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Title - Varied alignment */}
        <div className="mb-12 max-w-4xl">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                <span className="text-primary">
                  The God of Time
                </span>
              </h2>
            </div>
            {/* Side image */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden shadow-lg border border-primary/20 flex-shrink-0">
              <img 
                src="/hero-bg.jpg" 
                alt="Temporal Engineering" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          </div>
          <div className="h-0.5 w-20 bg-primary/40 rounded-full mt-4" />
        </div>

        {/* Manifesto Content */}
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
          {/* Opening Statement - Left aligned with image */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1 text-base md:text-lg text-foreground/85 leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              <p>
                History is full of disasters we couldn't stop — crises, conflicts, accidents that caught us off guard. 
                It made me realize: <span className="text-primary font-semibold">time is the real power here</span>, and we're still learning how to work with it.
              </p>
            </div>
            {/* Side image */}
            <div className="w-40 h-32 md:w-48 md:h-36 rounded-xl overflow-hidden shadow-lg border border-primary/20 flex-shrink-0">
              <img 
                src="/hero-bg.jpg" 
                alt="History and time" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Mission Statement - Right aligned with image */}
          <div className="relative bg-card/50 backdrop-blur-sm border border-primary/15 rounded-xl p-6 md:p-8 shadow-md">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Image on left */}
              <div className="w-full md:w-48 h-32 md:h-40 rounded-lg overflow-hidden border border-primary/10 flex-shrink-0">
                <img 
                  src="/hero-bg.jpg" 
                  alt="Building temporal intelligence" 
                  className="w-full h-full object-cover opacity-70"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <div className="flex-1 space-y-4 text-base md:text-lg text-foreground/85 leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                <p>
                  <span className="font-semibold text-primary text-lg">I'm not waiting around.</span> I want to get ahead of time. 
                  That's why I'm building <span className="font-medium text-secondary">temporal intelligence</span> — systems that simulate, 
                  predict, and help shape what happens next.
                </p>
                <p>
                  The goal? <span className="font-medium">Stop preventable disasters</span>, test different scenarios safely, 
                  and create spaces where we can learn and experiment without real-world consequences.
                </p>
              </div>
            </div>
          </div>

          {/* Work Description */}
          <div className="space-y-4 text-base md:text-lg text-foreground/85 leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            <p>
              Right now, I'm working on <span className="font-medium text-primary">digital replicas</span> of real places, 
              building <span className="font-medium text-secondary">AI systems</span> that can simulate what happened in history, 
              and creating <span className="font-medium text-accent">smart agents</span> that can interact with these simulated 
              worlds — testing ideas before they hit reality.
            </p>
          </div>

          {/* Guardian Statement */}
          <div className="relative bg-card/40 backdrop-blur-sm border border-secondary/20 rounded-xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-secondary/60" />
            </div>
            <p className="text-lg md:text-xl font-medium text-center text-foreground leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              The real guardians don't just protect — they{" "}
              <span className="text-primary font-semibold">learn from the future</span>,{" "}
              <span className="text-secondary font-semibold">understand the past</span>, and{" "}
              <span className="text-accent font-semibold">act in the present</span>.
              <br />
              <span className="text-xl md:text-2xl mt-3 block font-semibold">That's what I'm aiming for.</span>
            </p>
          </div>

          {/* Closing Statement */}
          <div className="text-center py-6 space-y-5">
            <p className="text-xl md:text-2xl font-semibold text-primary leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              Time isn't just something that happens to us —{" "}
              <span className="text-secondary">
                we can learn to work with it.
              </span>
            </p>
            
            {/* Branded Tagline */}
            <div className="pt-5 border-t border-primary/15">
              <Tagline variant="default" />
            </div>
          </div>

          {/* Animated Timeline */}
          <div className="mt-16 md:mt-20">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary transform -translate-y-1/2 opacity-30" />
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary transform -translate-y-1/2 opacity-60 animate-timeline-flow" />
              
              {/* Timeline Points */}
              <div className="relative flex justify-between items-center py-12">
                {/* Past */}
                <div className="flex flex-col items-center space-y-4 animate-slide-up" style={{ animationDelay: "0s" }}>
                  <div className="relative">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/50 flex items-center justify-center shadow-lg shadow-primary/30">
                      <Clock className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                  </div>
                  <div className="text-center">
                    <div className="text-sm md:text-base font-bold text-primary uppercase tracking-wider">Past</div>
                    <div className="text-xs md:text-sm text-muted-foreground mt-1">Understanding</div>
                  </div>
                </div>

                {/* Arrow */}
                <ArrowRight className="h-8 w-8 md:h-12 md:w-12 text-secondary/60 animate-pulse" />

                {/* Present */}
                <div className="flex flex-col items-center space-y-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                  <div className="relative">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-secondary/30 to-secondary/15 border-2 border-secondary/60 flex items-center justify-center shadow-lg shadow-secondary/40">
                      <Zap className="h-10 w-10 md:h-12 md:w-12 text-secondary" />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-secondary/30 animate-ping" style={{ animationDelay: "0.5s" }} />
                  </div>
                  <div className="text-center">
                    <div className="text-sm md:text-base font-bold text-secondary uppercase tracking-wider">Present</div>
                    <div className="text-xs md:text-sm text-muted-foreground mt-1">Acting</div>
                  </div>
                </div>

                {/* Arrow */}
                <ArrowRight className="h-8 w-8 md:h-12 md:w-12 text-accent/60 animate-pulse" style={{ animationDelay: "0.3s" }} />

                {/* Future */}
                <div className="flex flex-col items-center space-y-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
                  <div className="relative">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 border-2 border-accent/50 flex items-center justify-center shadow-lg shadow-accent/30">
                      <Sparkles className="h-8 w-8 md:h-10 md:w-10 text-accent" />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping" style={{ animationDelay: "1s" }} />
                  </div>
                  <div className="text-center">
                    <div className="text-sm md:text-base font-bold text-accent uppercase tracking-wider">Future</div>
                    <div className="text-xs md:text-sm text-muted-foreground mt-1">Shaping</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="mt-16 md:mt-20 pt-12 border-t border-primary/20">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  Building Temporal Intelligence With
                </span>
              </h3>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                A comprehensive stack of technologies for simulation, prediction, and temporal analysis
              </p>
            </div>

            {/* Tech Stack Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
              {/* Python */}
              <TechStackItem 
                icon={Code} 
                name="Python" 
                color="primary"
                description="Core language"
              />
              
              {/* PyTorch */}
              <TechStackItem 
                icon={Brain} 
                name="PyTorch" 
                color="primary"
                description="Deep learning"
              />
              
              {/* TensorFlow */}
              <TechStackItem 
                icon={CircuitBoard} 
                name="TensorFlow" 
                color="primary"
                description="ML framework"
              />
              
              {/* Unity */}
              <TechStackItem 
                icon={Zap} 
                name="Unity" 
                color="secondary"
                description="3D simulation"
              />
              
              {/* Unreal Engine */}
              <TechStackItem 
                icon={Sparkles} 
                name="Unreal" 
                color="accent"
                description="Game engine"
              />
              
              {/* NumPy/Pandas */}
              <TechStackItem 
                icon={BarChart3} 
                name="NumPy/Pandas" 
                color="primary"
                description="Data analysis"
              />
              
              {/* PostgreSQL */}
              <TechStackItem 
                icon={Database} 
                name="PostgreSQL" 
                color="secondary"
                description="Time-series DB"
              />
              
              {/* MongoDB */}
              <TechStackItem 
                icon={Boxes} 
                name="MongoDB" 
                color="secondary"
                description="Document store"
              />
              
              {/* InfluxDB */}
              <TechStackItem 
                icon={Activity} 
                name="InfluxDB" 
                color="accent"
                description="Time-series"
              />
              
              {/* AWS */}
              <TechStackItem 
                icon={Cloud} 
                name="AWS" 
                color="primary"
                description="Cloud compute"
              />
              
              {/* Docker */}
              <TechStackItem 
                icon={Server} 
                name="Docker" 
                color="secondary"
                description="Containers"
              />
              
              {/* Kubernetes */}
              <TechStackItem 
                icon={Layers} 
                name="Kubernetes" 
                color="accent"
                description="Orchestration"
              />
              
              {/* LangChain */}
              <TechStackItem 
                icon={GitBranch} 
                name="LangChain" 
                color="primary"
                description="AI agents"
              />
              
              {/* Redis */}
              <TechStackItem 
                icon={Network} 
                name="Redis" 
                color="secondary"
                description="Real-time cache"
              />
              
              {/* Kafka */}
              <TechStackItem 
                icon={Cpu} 
                name="Kafka" 
                color="accent"
                description="Streaming"
              />
              
              {/* Qiskit */}
              <TechStackItem 
                icon={Sparkles} 
                name="Qiskit" 
                color="primary"
                description="Quantum"
              />
            </div>

            {/* Additional Tech Note */}
            <div className="mt-12 text-center">
              <p className="text-xs md:text-sm text-muted-foreground italic">
                Continuously expanding the stack as temporal engineering evolves
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;

