import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import Tagline from "./Tagline";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Manifesto", path: "/manifesto" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Research", path: "/research" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-border/60 shadow-xl shadow-primary/10"
            : "bg-background/85 backdrop-blur-lg border-b border-border/30"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link
              to="/"
              className="flex flex-col items-start gap-0.5 group"
            >
              <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent hover:opacity-90 transition-all duration-300 flex items-center gap-2" style={{
                textShadow: '0 0 15px hsl(var(--primary) / 0.4), 0 2px 6px rgba(0, 0, 0, 0.3), 0 0 25px hsl(var(--primary) / 0.3)'
              }}>
                <Sparkles className="h-5 w-5 text-primary group-hover:animate-twinkle" style={{
                  filter: 'drop-shadow(0 0 8px hsl(var(--primary) / 1)) drop-shadow(0 0 15px hsl(var(--primary) / 0.8))'
                }} />
                <span>Ismael Kaleeba</span>
              </div>
              {isScrolled && (
                <Tagline variant="minimal" showIcon={false} className="hidden md:flex" />
              )}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      isActive
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                    style={isActive ? {
                      textShadow: '0 0 15px hsl(var(--primary) / 1), 0 0 25px hsl(var(--primary) / 0.8), 0 2px 8px rgba(0, 0, 0, 0.5)'
                    } : {
                      textShadow: '0 2px 8px rgba(0, 0, 0, 0.6), 0 0 10px rgba(0, 0, 0, 0.4)'
                    }}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-glow-pulse" />
                    )}
                  </Link>
                );
              })}
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
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-primary scale-110"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </Link>
              );
            })}
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
