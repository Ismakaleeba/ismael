import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, BookOpen, FlaskConical, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Research = () => {
  const research = [
    {
      title: "Digital Twin Safety Analysis",
      type: "Independent Study",
      abstract: "My ongoing research into how digital replicas of real environments can help identify safety risks. Using my school as a test case, I'm learning how AI agents can model human behavior to predict potential accidents before they occur.",
      tags: ["Digital Twins", "Safety Analysis", "AI Agents"],
      icon: FlaskConical,
      status: "Active",
    },
    {
      title: "Temporal Risk Modeling",
      type: "Learning Project",
      abstract: "Exploring how historical data patterns can inform future risk prediction. This is my introduction to temporal analysis — understanding how past events can help us prevent future disasters through simulation.",
      tags: ["Risk Modeling", "Temporal Analysis", "Data Science"],
      icon: TrendingUp,
      status: "In Progress",
    },
    {
      title: "Scenario-Based Learning Systems",
      type: "Research Interest",
      abstract: "Investigating how simulated environments can be used for education and training. The goal: create safe spaces where people can learn from mistakes without real-world consequences.",
      tags: ["Simulation", "Education", "Risk-Free Learning"],
      icon: BookOpen,
      status: "Conceptual",
    },
  ];

  return (
    <section id="research" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">
              My Research Journey
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            As a student researcher, I'm exploring how temporal engineering can eliminate risk. 
            These are my active areas of study and experimentation.
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {research.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="bg-card/60 backdrop-blur-md border-border hover:border-secondary/50 transition-all duration-300 p-6 space-y-5 group animate-slide-up hover:shadow-[0_0_30px_rgba(217,70,239,0.3)] hover:scale-[1.02] flex flex-col"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-secondary/10 rounded-lg border border-secondary/30 group-hover:bg-secondary/20 transition-colors">
                      <Icon className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <Badge variant="outline" className="text-xs mb-2 border-secondary/30 text-secondary">
                        {item.type}
                      </Badge>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-secondary transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {item.abstract}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-secondary/10 border border-secondary/30 rounded-full text-xs text-secondary hover:bg-secondary/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">Status: <span className="text-secondary font-semibold">{item.status}</span></span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-secondary/30 text-secondary hover:bg-secondary/10"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Details
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground italic max-w-2xl mx-auto">
            Research is a journey of continuous learning. Each experiment teaches me something new 
            about how we can use technology to create a safer world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Research;
