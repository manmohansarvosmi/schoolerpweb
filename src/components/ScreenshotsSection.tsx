import { Link } from "react-router-dom";
import screenshotExams from "@/assets/screenshot-exams.jpg";
import dashboard from "@/assets/fee-management/dashboard.png";
import sm1 from "@/assets/sm-1.png";
import staff1 from "@/assets/staff-1.png";

const screenshots = [
  { src: sm1, alt: "Student Management", label: "Student Management", link: "/features/student-management" },
  { src: staff1, alt: "Staff Management", label: "Staff Management", link: "/features/staff-management" },
  { src: dashboard, alt: "Fee Management", label: "Fee Management", link: "/features/fee-management" },
  { src: screenshotExams, alt: "Exam Results", label: "Exam & Results" },
];

const ScreenshotsSection = () => (
  <section className="relative bg-gradient-to-b from-secondary/50 to-background py-20 lg:py-28 overflow-hidden">
    <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
    <div className="container relative">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
          Product Preview
        </div>
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
          See It in <span className="gradient-text">Action</span>
        </h2>
        <p className="text-lg text-muted-foreground">Explore our intuitive interface designed for ease of use.</p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {screenshots.map((s, i) => {
          const CardContent = (
            <div
              className={`group overflow-hidden rounded-2xl border border-border/50 bg-card shadow-card transition-all duration-500 hover:shadow-card-hover hover:-translate-y-2 ${s.link ? 'cursor-pointer' : ''}`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="overflow-hidden">
                <img src={s.src} alt={s.alt} className="w-full transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5 text-center">
                <span className="font-semibold text-foreground">{s.label}</span>
              </div>
            </div>
          );

          return s.link ? (
            <Link key={s.label} to={s.link} className="block">
              {CardContent}
            </Link>
          ) : (
            <div key={s.label}>
              {CardContent}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ScreenshotsSection;
