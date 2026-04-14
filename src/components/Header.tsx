import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 glass-strong">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-hero">
            <Sparkles size={16} className="text-primary-foreground" />
          </div>
          <span className="gradient-text">Helixion</span>
          <span className="text-foreground">School ERP</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Features</a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Pricing</a>
          <a href="#testimonials" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Testimonials</a>
          <Link to="/register">
            <Button className="gradient-hero border-0 text-primary-foreground shadow-md hover:shadow-lg hover:opacity-90 transition-all">
              Get Started
            </Button>
          </Link>
        </nav>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/50 glass p-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <a href="#features" className="text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Features</a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Pricing</a>
            <a href="#testimonials" className="text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Testimonials</a>
            <Link to="/register" onClick={() => setMobileOpen(false)}>
              <Button className="w-full gradient-hero border-0 text-primary-foreground">Get Started</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
