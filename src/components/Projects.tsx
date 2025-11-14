import ProjectCard from "./ProjectCard";
import { Beaker, Rocket, Code2, Brain } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Kagarama SS Digital Twin",
      description: "My first major project: a living simulation of my school environment with AI agents representing students and teachers. This digital twin helps me understand how small changes in daily routines can prevent accidents and improve safety protocols.",
      techStack: ["Unity", "Python", "AI Agents", "Digital Twin"],
      gradient: "bg-gradient-to-br from-primary/20 to-transparent",
      status: "In Development",
      icon: Brain,
    },
    {
      title: "Risk Prediction Simulator",
      description: "An AI system that models potential disaster scenarios by analyzing patterns from historical data. Currently learning to predict outcomes of different decision paths to identify risks before they materialize.",
      techStack: ["Python", "Machine Learning", "Data Analysis", "Simulation"],
      gradient: "bg-gradient-to-br from-secondary/20 to-transparent",
      status: "Active Research",
      icon: Beaker,
    },
    {
      title: "Historical \"What-If\" Explorer",
      description: "A learning project exploring alternate historical outcomes through simulation. By modeling past events, I'm developing skills in temporal analysis that will help predict future risks.",
      techStack: ["Python", "Game Engines", "Historical Data", "Scenario Modeling"],
      gradient: "bg-gradient-to-br from-accent/20 to-primary/20",
      status: "Learning Project",
      icon: Code2,
    },
    {
      title: "Temporal Intelligence Framework",
      description: "My ongoing research framework combining multiple simulation techniques. This is where I experiment with new ideas, test hypotheses, and build the foundation for future risk-elimination systems.",
      techStack: ["Python", "Unity", "AI/ML", "Research Tools"],
      gradient: "bg-gradient-to-br from-secondary/20 to-accent/20",
      status: "Research Platform",
      icon: Rocket,
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.1)_0%,transparent_70%)]" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Varied alignment - left aligned header */}
        <div className="space-y-4 mb-12 max-w-4xl">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-semibold mb-3" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                <span className="text-primary">
                  Projects I'm Working On
                </span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Here's what I've been building. Each one is a step toward better predictions and safer futures.
              </p>
            </div>
            {/* Side image */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden shadow-lg border border-primary/20 flex-shrink-0">
              <img 
                src="/hero-bg.jpg" 
                alt="Projects" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          </div>
          <div className="h-0.5 w-20 bg-primary/40 rounded-full" />
        </div>
        
        {/* Varied grid - not perfectly aligned */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <ProjectCard 
                {...project}
                icon={project.icon}
                status={project.status}
              />
            </div>
          ))}
        </div>
        
        {/* Varied alignment - right aligned */}
        <div className="mt-12 flex justify-end">
          <div className="max-w-md">
            <p className="text-sm text-muted-foreground text-right" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              Still learning, still building, still figuring things out.
            </p>
            {/* Small decorative image */}
            <div className="mt-4 w-24 h-16 rounded-lg overflow-hidden border border-primary/10 ml-auto">
              <img 
                src="/hero-bg.jpg" 
                alt="Work in progress" 
                className="w-full h-full object-cover opacity-50"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
