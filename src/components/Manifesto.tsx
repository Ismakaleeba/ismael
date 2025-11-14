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
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              The God of Time
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Manifesto Content */}
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
          {/* Opening Statement */}
          <div className="text-lg md:text-xl text-foreground/90 leading-relaxed space-y-4">
            <p className="font-semibold text-primary">
              Throughout history, humanity has faced events beyond its control — sudden crises, conflicts, and disasters. 
              These moments reveal a truth: <span className="text-secondary font-bold">time is the ultimate power</span>, and we have yet to master it.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="relative bg-gradient-to-br from-card/80 via-card/60 to-card/80 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="absolute top-4 right-4">
              <Sparkles className="h-8 w-8 text-primary/40" />
            </div>
            <div className="space-y-6 text-base md:text-lg text-foreground/85 leading-relaxed">
              <p>
                <span className="font-bold text-primary text-xl">I have decided not to wait for the future.</span> I will move ahead of time. 
                I aim to build <span className="font-semibold text-secondary">Temporal Intelligence</span> — the science of simulating, 
                predicting, and shaping events across time.
              </p>
              <p>
                My mission is to <span className="font-semibold">eliminate preventable risks</span>, test "what-if" scenarios, 
                and create worlds where people can explore, learn, and improve without suffering unnecessary consequences.
              </p>
            </div>
          </div>

          {/* Work Description */}
          <div className="space-y-6 text-base md:text-lg text-foreground/85 leading-relaxed">
            <p>
              I have begun by prototyping <span className="font-semibold text-primary">digital twins</span> of real environments, 
              building <span className="font-semibold text-secondary">AI systems</span> to simulate historical events, 
              and developing <span className="font-semibold text-accent">intelligent agents</span> that interact with living 
              simulations of people, places, and decisions.
            </p>
          </div>

          {/* Guardian Statement */}
          <div className="relative bg-gradient-to-br from-secondary/10 via-primary/10 to-secondary/10 backdrop-blur-xl border-2 border-secondary/30 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="absolute top-4 left-4">
              <Shield className="h-8 w-8 text-secondary/40" />
            </div>
            <p className="text-xl md:text-2xl font-bold text-center text-foreground leading-relaxed">
              The real guardians of the galaxy do not merely protect space. They{" "}
              <span className="text-primary">learn from the future</span>,{" "}
              <span className="text-secondary">understand the past</span>, and{" "}
              <span className="text-accent">act decisively in the present</span>.
              <br />
              <span className="text-2xl md:text-3xl mt-4 block">I am determined to be one of them.</span>
            </p>
          </div>

          {/* Closing Statement */}
          <div className="text-center py-8">
            <p className="text-2xl md:text-4xl font-black text-primary">
              Time is not just something we experience —{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                it is something we can master.
              </span>
            </p>
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

