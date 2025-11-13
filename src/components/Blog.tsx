import { Card } from "@/components/ui/card";
import { Clock, Calendar, BookOpen, Lightbulb } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      date: "2024-12-15",
      title: "Why I Started This Journey",
      excerpt: "After seeing preventable accidents happen around me, I realized we need better ways to predict and prevent risks. This is how a high school student decided to dedicate his life to temporal engineering.",
      category: "Reflection",
      readTime: "4 min",
    },
    {
      date: "2024-12-10",
      title: "First Breakthrough: AI Agents Learning from Mistakes",
      excerpt: "My digital twin project reached a milestone today. The AI agents in my school simulation started identifying potential safety hazards I hadn't even considered. It's amazing what happens when you let AI learn from virtual mistakes.",
      category: "Progress",
      readTime: "5 min",
    },
    {
      date: "2024-12-05",
      title: "Balancing School and Research",
      excerpt: "Juggling homework, exams, and building AI systems isn't easy. But every late night coding session brings me closer to my goal. Here's how I manage my time and stay motivated.",
      category: "Student Life",
      readTime: "3 min",
    },
    {
      date: "2024-11-28",
      title: "What I Learned from My First Failed Simulation",
      excerpt: "Failure is the best teacher. My first attempt at temporal modeling crashed spectacularly, but it taught me more than any success could have. Here's what went wrong and what I'm doing differently.",
      category: "Learning",
      readTime: "6 min",
    },
    {
      date: "2024-11-20",
      title: "The Day I Realized This Could Save Lives",
      excerpt: "A conversation with a teacher about school safety protocols made everything click. If my simulations can identify risks in a school, they could work anywhere. This isn't just a project anymore — it's a mission.",
      category: "Mission",
      readTime: "4 min",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Reflection":
        return "text-primary border-primary/30 bg-primary/10";
      case "Progress":
        return "text-secondary border-secondary/30 bg-secondary/10";
      case "Student Life":
        return "text-accent border-accent/30 bg-accent/10";
      case "Learning":
        return "text-primary border-primary/30 bg-primary/10";
      case "Mission":
        return "text-secondary border-secondary/30 bg-secondary/10";
      default:
        return "text-muted-foreground border-border bg-muted/50";
    }
  };

  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(var(--primary)/0.1)_0%,transparent_50%)]" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">
              Learning Journal
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Documenting my journey as a student researcher. The failures, breakthroughs, 
            and moments that shape my mission to eliminate risk.
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="bg-card/60 backdrop-blur-md border-border hover:border-primary/50 transition-all duration-300 p-6 md:p-8 group cursor-pointer animate-slide-up hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] hover:scale-[1.01]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{post.date}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime} read</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {post.excerpt}
                  </p>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-primary/80 pt-2">
                  <BookOpen className="h-4 w-4" />
                  <span className="font-medium">Read more →</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground italic">
            Every entry is a step forward in understanding how to build a risk-free future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
