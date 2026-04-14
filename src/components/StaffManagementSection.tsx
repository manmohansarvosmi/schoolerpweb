import staff1 from "@/assets/staff-1.png";
import staff2 from "@/assets/staff-2.png";
import staff3 from "@/assets/staff-3.png";
import staff4 from "@/assets/staff-4.png";
import staff5 from "@/assets/staff-5.png";

const features = [
  { 
    img: staff1, 
    title: "Staff Profile View", 
    description: "Access complete staff records natively, including personal details, academic history, and comprehensive documentation in one unified place."
  },
  { 
    img: staff5, 
    title: "Staff Listing", 
    description: "Effortlessly manage your entire workforce with an intuitive directory listing, advanced search capabilities, and precise attribute filtering."
  },
  { 
    img: staff4, 
    title: "Department & Designations", 
    description: "Organize your school's structural hierarchy by flexibly managing human resources departments, specialized roles, and administrative designations."
  },
  { 
    img: staff3, 
    title: "Roles of Staff", 
    description: "Create and assign custom roles to specific staff members to exactly match your educational institution's administrative and teaching structure."
  },
  { 
    img: staff2, 
    title: "Staff Permissions", 
    description: "Maintain absolute data security by accurately assigning and revoking granular access controls and module permissions for every single role."
  },
];

const StaffManagementSection = () => (
  <section className="relative bg-background py-20 lg:py-28 overflow-hidden z-10">
    <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
    <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -z-10" />
    
    <div className="container relative">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
          Core Feature Highlight
        </div>
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
          Complete <span className="gradient-text">Staff Management</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Empower your HR department with completely redesigned, smart interfaces tailored for seamless workforce administration.
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
                  "Optimized for speed and usability"
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

export default StaffManagementSection;
