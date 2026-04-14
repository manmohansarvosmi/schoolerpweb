import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Priya Sharma", role: "Principal, DPS Indore", text: "School ERP has transformed our administrative workflow. Fee management is now seamless and parents love the transparency." },
  { name: "Rajesh Gupta", role: "Director, Sunrise Academy", text: "The attendance tracking and exam management modules saved us countless hours every month. Highly recommended!" },
  { name: "Anita Deshmukh", role: "Admin Head, Vidya Mandir", text: "Best investment we made for our school. The support team is incredibly responsive and the product keeps getting better." },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="relative bg-gradient-to-b from-background to-secondary/50 py-20 lg:py-28 overflow-hidden">
    <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
    <div className="container relative">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
          Testimonials
        </div>
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
          Loved by <span className="gradient-text">Schools Everywhere</span>
        </h2>
      </div>
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className="group relative rounded-2xl border border-border/50 bg-card p-8 shadow-card transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="absolute top-6 right-6 text-primary/10 transition-colors group-hover:text-primary/20">
              <Quote size={32} />
            </div>
            <div className="mb-4 flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-hero text-sm font-bold text-primary-foreground">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
