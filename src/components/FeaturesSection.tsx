import { Users, CreditCard, CalendarCheck, FileText, UserCog, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { 
    icon: Users, 
    title: "Student Management", 
    description: "Complete student lifecycle management from admission to graduation with digital records.", 
    color: "from-primary to-accent",
    link: "/features/student-management"
  },
  { 
    icon: CreditCard, 
    title: "Fee Management", 
    description: "Automate fee collection, generate receipts, track dues, and send payment reminders.", 
    color: "from-accent to-primary",
    link: "/features/fee-management"
  },
  { 
    icon: CalendarCheck, 
    title: "Attendance Tracking", 
    description: "Digital attendance with biometric integration, real-time reports, and parent notifications.", 
    color: "from-primary to-accent" 
  },
  { 
    icon: FileText, 
    title: "Exam & Results", 
    description: "Create exam schedules, manage marks entry, generate report cards and analytics.", 
    color: "from-accent to-primary" 
  },
  { 
    icon: UserCog, 
    title: "Staff Management", 
    description: "Manage staff records, payroll, leave management, and performance tracking.", 
    color: "from-primary to-accent",
    link: "/features/staff-management"
  },
  { 
    icon: Zap, 
    title: "Smart Analytics", 
    description: "Real-time dashboards, performance insights, and data-driven decision making for administrators.", 
    color: "from-accent to-primary" 
  },
];

const FeaturesSection = () => (
  <section id="features" className="relative py-20 lg:py-28 overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
    <div className="container relative">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
          Powerful Modules
        </div>
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
          Everything You Need to <span className="gradient-text">Run Your School</span>
        </h2>
        <p className="text-lg text-muted-foreground">Comprehensive modules designed for every aspect of school administration.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => {
          const Content = (
            <>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${f.color} text-primary-foreground shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:shadow-lg`}>
                  <f.icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            </>
          );

          if (f.link) {
            return (
              <Link
                key={f.title}
                to={f.link}
                className="group relative rounded-2xl border border-border/50 bg-card p-8 shadow-card transition-all duration-500 hover:shadow-card-hover hover:-translate-y-2 block"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {Content}
              </Link>
            );
          }

          return (
            <div
              key={f.title}
              className="group relative rounded-2xl border border-border/50 bg-card p-8 shadow-card transition-all duration-500 hover:shadow-card-hover hover:-translate-y-2"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {Content}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
