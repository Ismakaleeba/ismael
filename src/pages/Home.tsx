import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CityClockSection from "@/components/CityClockSection";
import Tagline from "@/components/Tagline";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <CityClockSection />
      
      {/* Footer */}
      <footer className="border-t border-primary/15 bg-card/30 backdrop-blur-sm py-10 mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-5">
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-primary" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                Ismael Kaleeba
              </h3>
              <p className="text-xs text-muted-foreground">
                Temporal Engineering Researcher • AI Systems Developer
              </p>
              
              {/* Branded Tagline in Footer */}
              <div className="py-3">
                <Tagline variant="small" />
              </div>
            </div>
            <p className="text-xs text-foreground/70 max-w-xl mx-auto leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              Working on preventing disasters before they happen. One project at a time.
            </p>
            <div className="pt-4 border-t border-border/30">
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} Ismael Kaleeba
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

