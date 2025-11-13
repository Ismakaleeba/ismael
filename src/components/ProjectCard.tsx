import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  gradient: string;
  icon?: LucideIcon;
  status?: string;
}

const ProjectCard = ({ title, description, techStack, gradient, icon: Icon, status }: ProjectCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-card/60 backdrop-blur-md border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] hover:scale-[1.02] h-full flex flex-col">
      {/* Gradient Background */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-300 ${gradient}`} />
      
      <div className="p-6 space-y-5 relative z-10 flex flex-col flex-1">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              {Icon && (
                <div className="p-2.5 bg-primary/10 border border-primary/30 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
              )}
              <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors flex-1">
                {title}
              </h3>
            </div>
          </div>
          {status && (
            <Badge variant="outline" className="text-xs border-primary/30 text-primary">
              {status}
            </Badge>
          )}
          <p className="text-muted-foreground leading-relaxed text-sm">
            {description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-muted/60 border border-border rounded-full text-xs text-muted-foreground hover:border-primary/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 pt-4 mt-auto">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            View
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-secondary/30 text-secondary hover:bg-secondary/10 hover:border-secondary/50"
          >
            <Github className="h-4 w-4 mr-2" />
            Code
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
