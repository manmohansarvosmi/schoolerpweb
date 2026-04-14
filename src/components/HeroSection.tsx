import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

const HeroSection = () => (
  <section className="relative overflow-hidden py-20 lg:py-32">
    {/* Animated gradient blobs */}
    <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
    <div className="absolute top-0 -right-4 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary/15 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

    <div className="container relative">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-medium text-primary backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Trusted by 500+ Schools
        </div>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl">
          Smart School ERP for{" "}
          <span className="gradient-text">Modern Education</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
          Manage admissions, fees, exams, and operations in one place. Streamline your school management with our comprehensive ERP solution.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/register">
            <Button size="lg" className="gap-2 px-10 py-6 text-base gradient-hero border-0 text-primary-foreground shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300 hover:-translate-y-0.5">
              Get Started <ArrowRight size={18} />
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="gap-2 px-10 py-6 text-base border-2 hover:bg-primary/5 transition-all duration-300">
            <Play size={18} /> Book Demo
          </Button>
        </div>
      </div>
      <div className="relative mt-20">
        <div className="absolute -inset-4 gradient-hero rounded-2xl opacity-10 blur-2xl" />
        <div className="relative overflow-hidden rounded-2xl border border-border/50 shadow-2xl glass">
          <img src={heroDashboard} alt="School ERP Dashboard" className="w-full" />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
