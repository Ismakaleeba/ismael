import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CityClockSection from "@/components/CityClockSection";
import Manifesto from "@/components/Manifesto";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <CityClockSection />
      <Manifesto />
      <About />
      <Projects />
      <Research />
      <Blog />
      <Contact />
      
      {/* Footer */}
      <footer className="border-t border-primary/20 bg-gradient-to-br from-primary/20 via-secondary/15 to-primary/20 backdrop-blur-sm py-12 mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Ismael Kaleeba
              </h3>
              <p className="text-sm text-muted-foreground">
                Temporal Engineering Researcher • AI Systems Developer
              </p>
            </div>
            <p className="text-sm text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Dedicated to eliminating preventable risks through research and development. 
              Building the future, one simulation at a time.
            </p>
            <div className="pt-4 border-t border-border/50">
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} Ismael Kaleeba. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-2 italic">
                "The future belongs to those who can master time."
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
