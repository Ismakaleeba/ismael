import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Twitter, MessageCircle, Handshake, Rocket } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Let's Build the Future Together
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always looking to connect with mentors, collaborators, and fellow researchers 
            who share the vision of eliminating risk through technology.
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main CTA Card */}
          <Card className="bg-card/60 backdrop-blur-md border-border p-8 md:p-10">
            <div className="text-center space-y-6">
              <div className="inline-block p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl border border-primary/30">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Interested in Collaborating?
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Whether you're a researcher, mentor, potential collaborator, or just curious about 
                  temporal engineering — I'd love to hear from you. Every conversation brings new perspectives 
                  and moves us closer to a risk-free future.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-lg shadow-primary/30"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Send an Email
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary/50 hover:bg-primary/10 px-8 py-6 text-lg font-semibold"
                >
                  <Handshake className="h-5 w-5 mr-2" />
                  Discuss Collaboration
                </Button>
              </div>
            </div>
          </Card>
          
          {/* Social Links */}
          <Card className="bg-card/60 backdrop-blur-md border-border p-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground text-center">
                Connect on Social Media
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button
                  variant="outline"
                  className="border-primary/30 hover:border-primary hover:bg-primary/10 flex flex-col gap-3 h-auto py-6 group transition-all"
                >
                  <Github className="h-7 w-7 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">GitHub</span>
                  <span className="text-xs text-muted-foreground">Code & Projects</span>
                </Button>
                <Button
                  variant="outline"
                  className="border-primary/30 hover:border-primary hover:bg-primary/10 flex flex-col gap-3 h-auto py-6 group transition-all"
                >
                  <Linkedin className="h-7 w-7 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">LinkedIn</span>
                  <span className="text-xs text-muted-foreground">Professional</span>
                </Button>
                <Button
                  variant="outline"
                  className="border-secondary/30 hover:border-secondary hover:bg-secondary/10 flex flex-col gap-3 h-auto py-6 group transition-all"
                >
                  <Twitter className="h-7 w-7 text-secondary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">Twitter</span>
                  <span className="text-xs text-muted-foreground">Updates</span>
                </Button>
                <Button
                  variant="outline"
                  className="border-secondary/30 hover:border-secondary hover:bg-secondary/10 flex flex-col gap-3 h-auto py-6 group transition-all"
                >
                  <Mail className="h-7 w-7 text-secondary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">Email</span>
                  <span className="text-xs text-muted-foreground">Direct Contact</span>
                </Button>
              </div>
            </div>
          </Card>
          
          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 backdrop-blur-sm border border-primary/30 rounded-2xl p-8 text-center">
            <div className="inline-block p-3 bg-primary/20 rounded-lg mb-4">
              <Rocket className="h-6 w-6 text-primary" />
            </div>
            <p className="text-lg text-foreground/90 leading-relaxed max-w-2xl mx-auto">
              <span className="font-semibold text-primary">My mission is clear:</span> To eliminate preventable risks 
              from our world through research and development. If you share this vision or want to help a passionate 
              student researcher, let's connect. Together, we can build a safer future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
