import dashboard from "@/assets/fee-management/dashboard.png";
import studentFee from "@/assets/fee-management/student-fee.png";
import financialReports from "@/assets/fee-management/financial-reports.png";
import feeStructures from "@/assets/fee-management/fee-structures.png";

const features = [
  { 
    img: dashboard, 
    title: "Insightful Accounts Dashboard", 
    description: "Get a bird's-eye view of your school's financial health. Track collections, expenses, net profits, and P&L statements in real-time with beautiful charts and indicators."
  },
  { 
    img: studentFee, 
    title: "Seamless Student Fee Management", 
    description: "Manage individual student fee records, track installments, and handle collections with ease. Stay on top of dues and payment history for every student."
  },
  { 
    img: feeStructures, 
    title: "Flexible Fee Structures", 
    description: "Define comprehensive fee heads, group them into structures, and assign them to classes or individual students with just a few clicks."
  },
  { 
    img: financialReports, 
    title: "Comprehensive Financial Reporting", 
    description: "Generate detailed reports for every financial aspect. From daily collection reports to annual audits, our system provides all the data you need for informed decision-making."
  },
];

const FeeManagementSection = () => (
  <section className="relative bg-background py-20 lg:py-28 overflow-hidden z-10">
    <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -z-10" />
    
    <div className="container relative">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
          Financial Control Center
        </div>
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
          Automated <span className="gradient-text">Fee & Finance</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Streamline your school's revenue cycle with automated fee collection, detailed financial tracking, and transparent reporting.
        </p>
      </div>

      <div className="space-y-24">
        {features.map((f, i) => (
          <div key={f.title} className={`flex flex-col gap-12 lg:gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
            <div className="w-full lg:w-1/2 space-y-6 flex flex-col justify-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary shadow-sm">
                <span className="text-xl font-bold">{i + 1}</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground sm:text-3xl">{f.title}</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {f.description}
              </p>
              <ul className="space-y-3 mt-4">
                {[
                  "Real-time data synchronization",
                  "Automated receipt generation",
                  "Customizable fee categories"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl opacity-0 blur-2xl group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative overflow-hidden rounded-2xl border border-border/50 shadow-2xl glass hover:-translate-y-2 transition-transform duration-700">
                <img src={f.img} alt={f.title} className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeeManagementSection;
