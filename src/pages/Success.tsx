import { useLocation, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Copy, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const Success = () => {
  const location = useLocation();
  const { schoolName, adminUsername, adminEmail } = location.state || {};

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <Header />
      <div className="container max-w-lg py-20">
        <div className="relative rounded-2xl border border-border/50 bg-card p-10 text-center shadow-xl">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 blur-xl -z-10" />
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full gradient-hero shadow-lg">
            <CheckCircle size={36} className="text-primary-foreground" />
          </div>
          <h1 className="mb-2 text-3xl font-bold text-foreground">Registration Successful 🎉</h1>
          <p className="mb-8 text-muted-foreground">
            {schoolName ? `${schoolName} has been registered successfully!` : "Your school has been registered!"}
          </p>

          {adminUsername && (
            <div className="mb-8 rounded-xl bg-secondary/50 p-5 text-left border border-border/30">
              <h3 className="mb-3 text-sm font-bold text-foreground">Login Credentials</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Username</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-medium text-foreground">{adminUsername}</span>
                    <button onClick={() => copyToClipboard(adminUsername)} className="text-muted-foreground hover:text-primary transition-colors">
                      <Copy size={14} />
                    </button>
                  </div>
                </div>
                {adminEmail && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Email</span>
                    <span className="font-mono font-medium text-foreground">{adminEmail}</span>
                  </div>
                )}
                <p className="mt-2 text-xs text-muted-foreground">
                  Use your password set during registration to login.
                </p>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-3">
            <Button size="lg" className="w-full py-6 text-base gradient-hero border-0 text-primary-foreground shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300 gap-2" asChild>
              <a href="http://localhost:8081" target="_blank" rel="noopener noreferrer">
                Go to Dashboard <ArrowRight size={18} />
              </a>
            </Button>
            <Link to="/">
              <Button variant="outline" size="lg" className="w-full border-2 hover:bg-primary/5 transition-all duration-300">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Success;
