import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

export const plans = [
  {
    id: 1,
    name: "Basic",
    price: "₹4,999",
    period: "/year",
    description: "For small schools up to 300 students",
    features: ["Student Management", "Fee Management", "Basic Reports", "Email Support"],
    popular: false,
  },
  {
    id: 2,
    name: "Standard",
    price: "₹9,999",
    period: "/year",
    description: "For medium schools up to 1000 students",
    features: ["Everything in Basic", "Attendance Tracking", "Exam & Results", "Staff Management", "Priority Support"],
    popular: true,
  },
  {
    id: 3,
    name: "Premium",
    price: "₹19,999",
    period: "/year",
    description: "For large schools with unlimited students",
    features: ["Everything in Standard", "Custom Reports", "API Access", "Multi-Branch", "Dedicated Account Manager"],
    popular: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="relative py-20 lg:py-28 overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    <div className="container relative">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
          Pricing Plans
        </div>
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
          Simple, Transparent <span className="gradient-text">Pricing</span>
        </h2>
        <p className="text-lg text-muted-foreground">Choose a plan that fits your school's needs.</p>
      </div>
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative flex flex-col rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${
              plan.popular
                ? "gradient-border bg-card shadow-xl glow-primary scale-[1.03]"
                : "border border-border/50 bg-card shadow-card hover:shadow-card-hover"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full gradient-hero px-5 py-1.5 text-xs font-semibold text-primary-foreground shadow-lg">
                <Star size={12} className="fill-current" /> Most Popular
              </div>
            )}
            <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
            <div className="mt-6 mb-6">
              <span className="text-4xl font-extrabold gradient-text">{plan.price}</span>
              <span className="text-muted-foreground">{plan.period}</span>
            </div>
            <ul className="mb-8 flex-1 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check size={12} className="text-primary" />
                  </div>
                  {f}
                </li>
              ))}
            </ul>
            <Link to={`/register?plan=${plan.id}`}>
              <Button
                variant={plan.popular ? "default" : "outline"}
                className={`w-full transition-all duration-300 ${plan.popular ? "gradient-hero border-0 text-primary-foreground shadow-md hover:shadow-lg hover:opacity-90" : "hover:bg-primary/5 border-2"}`}
                size="lg"
              >
                Get Started
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
