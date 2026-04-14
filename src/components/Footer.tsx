import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = forwardRef<HTMLElement, React.ComponentPropsWithoutRef<"footer">>(({ className, ...props }, ref) => (
  <footer ref={ref} {...props} className={cn("relative overflow-hidden border-t border-border/50 bg-gradient-to-b from-card to-secondary/30 py-16", className)}>
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 rounded-full blur-3xl" />
    <div className="container relative">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-lg font-bold">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg gradient-hero">
              <Sparkles size={14} className="text-primary-foreground" />
            </div>
            <span className="gradient-text">Helixion</span> Innovation
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Empowering schools with smart technology solutions for modern education management.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Product</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#features" className="transition-colors hover:text-foreground">Features</a></li>
            <li><a href="#pricing" className="transition-colors hover:text-foreground">Pricing</a></li>
            <li><Link to="/register" className="transition-colors hover:text-foreground">Register</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="transition-colors hover:text-foreground">About Us</a></li>
            <li><a href="#" className="transition-colors hover:text-foreground">Contact</a></li>
            <li><a href="#" className="transition-colors hover:text-foreground">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="transition-colors hover:text-foreground">Privacy Policy</a></li>
            <li><a href="#" className="transition-colors hover:text-foreground">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Helixion Innovation. All rights reserved.
      </div>
    </div>
  </footer>
));

Footer.displayName = "Footer";

export default Footer;
