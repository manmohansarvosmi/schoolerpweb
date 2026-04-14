import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StaffManagementSection from "@/components/StaffManagementSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";

const StaffManagementPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-10">
        <div className="container mt-8 mb-4">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <StaffManagementSection />

        <section className="container mt-12 mb-24 max-w-4xl">
          <div className="rounded-3xl bg-primary/5 border border-primary/20 p-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to empower your staff?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join hundreds of institutions using our platform to streamline their HR and workforce management.
            </p>
            <Link to="/register">
              <Button size="lg" className="px-8 text-lg gradient-hero border-0 text-white shadow-lg hover:shadow-xl hover:opacity-90 transition-all">
                Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StaffManagementPage;
