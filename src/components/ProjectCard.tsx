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
    <Card className="group relative overflow-hidden bg-card/40 backdrop-blur-sm border border-primary/15 hover:border-primary/30 transition-all duration-200 hover:shadow-md h-full flex flex-col rounded-xl">
      <div className="p-5 space-y-4 relative z-10 flex flex-col flex-1">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            {Icon && (
              <div className="p-2 bg-primary/8 border border-primary/20 rounded-lg">
                <Icon className="h-4 w-4 text-primary" />
              </div>
            )}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                {title}
              </h3>
              {status && (
                <Badge variant="outline" className="text-xs border-primary/20 text-primary mt-1.5 font-normal">
                  {status}
                </Badge>
              )}
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed text-sm" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            {description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-1.5 pt-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-muted/40 border border-border/50 rounded-full text-xs text-muted-foreground hover:border-primary/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-2 pt-3 mt-auto">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/40 text-xs rounded-lg"
          >
            <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
            View
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-secondary/30 text-secondary hover:bg-secondary/10 hover:border-secondary/40 text-xs rounded-lg"
          >
            <Github className="h-3.5 w-3.5 mr-1.5" />
            Code
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
