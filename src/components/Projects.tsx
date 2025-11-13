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
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              My Research Projects
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Building systems to eliminate risk, one simulation at a time. 
            These projects represent my journey as a student researcher in temporal engineering.
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground italic">
            Every project is a step toward understanding how to prevent disasters before they happen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
