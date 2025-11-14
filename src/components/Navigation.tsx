import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import Tagline from "./Tagline";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["manifesto", "about", "projects", "research", "blog", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
    setActiveSection(id);
  };

  const navItems = [
    { label: "Manifesto", id: "manifesto" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Research", id: "research" },
    { label: "Blog", id: "blog" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-primary/5"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setActiveSection("");
              }}
              className="flex flex-col items-start gap-0.5 group"
            >
              <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent hover:opacity-80 transition-all duration-300 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary group-hover:animate-twinkle" />
                <span>Ismael Kaleeba</span>
              </div>
              {isScrolled && (
                <Tagline variant="minimal" showIcon={false} className="hidden md:flex" />
              )}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-primary"
                      : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-glow-pulse" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-primary/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl md:hidden animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full gap-6 px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                Ismael Kaleeba
              </h2>
              <p className="text-sm text-muted-foreground">Temporal Engineering Researcher</p>
            </div>
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-2xl font-semibold transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-primary scale-110"
                    : "text-foreground/80 hover:text-primary"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </button>
            ))}
            <div className="mt-8 pt-8 border-t border-border w-full max-w-xs text-center">
              <p className="text-xs text-muted-foreground">
                Building a risk-free future through temporal engineering
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
