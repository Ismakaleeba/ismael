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
        {/* Varied alignment - left aligned */}
        <div className="space-y-4 mb-12 max-w-4xl">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-semibold mb-3" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                <span className="text-primary">
                  Let's Connect
                </span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Always happy to chat with mentors, collaborators, or anyone curious about this work.
              </p>
            </div>
            {/* Side image */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden shadow-lg border border-primary/20 flex-shrink-0">
              <img 
                src="/hero-bg.jpg" 
                alt="Contact" 
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
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main CTA Card */}
          <Card className="bg-card/40 backdrop-blur-sm border border-primary/15 p-6 md:p-8 shadow-sm">
            <div className="text-center space-y-5">
              <MessageCircle className="h-6 w-6 text-primary mx-auto" />
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  Want to collaborate?
                </h3>
                <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  If you're working on similar stuff, or just want to chat about temporal engineering, 
                  I'd love to hear from you. Always open to new ideas and perspectives.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-3">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-4 text-base shadow-md rounded-xl"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border border-primary/40 hover:bg-primary/10 px-6 py-4 text-base font-medium rounded-xl"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  <Handshake className="h-4 w-4 mr-2" />
                  Let's Talk
                </Button>
              </div>
            </div>
          </Card>
          
          {/* Social Links */}
          <Card className="bg-card/40 backdrop-blur-sm border border-primary/15 p-6 shadow-sm">
            <div className="space-y-5">
              <h3 className="text-lg font-medium text-foreground text-center" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                Find me online
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
          <div className="bg-card/30 backdrop-blur-sm border border-primary/15 rounded-xl p-6 text-center">
            <Rocket className="h-5 w-5 text-primary mx-auto mb-3" />
            <p className="text-base text-foreground/85 leading-relaxed max-w-xl mx-auto" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              <span className="font-medium text-primary">The goal is simple:</span> Stop preventable disasters before they happen. 
              If that sounds interesting to you, or you want to help out, let's talk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
