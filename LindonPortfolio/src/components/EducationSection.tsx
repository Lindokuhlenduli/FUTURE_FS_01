import { GraduationCap, Calendar, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const EducationSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="education" className="section-padding bg-secondary/30 relative overflow-hidden" ref={ref} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(40px)', transition: 'opacity 0.7s ease-out, transform 0.7s ease-out' }}>
      <div className="absolute -bottom-16 -left-16 w-48 h-48 blob-shape opacity-10" style={{ background: "hsl(var(--purple))" }} />

      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">
          <span className="text-primary font-mono text-lg">03.</span> Education
        </h2>
        <div className="w-20 h-1 bg-primary/40 rounded mb-10" />

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-primary/20 hidden md:block" />

          <div className="card-elevated rounded-2xl p-6 md:p-8 md:ml-14 relative">
            <div className="absolute -left-[2.55rem] top-8 w-3 h-3 rounded-full bg-primary hidden md:block ring-4 ring-background" />

            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold font-heading text-foreground flex items-center gap-2">
                  <GraduationCap size={22} className="text-primary" />
                  Diploma in Software Development
                </h3>
                <p className="text-accent font-mono text-sm mt-1">Rosebank College</p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">
                <Calendar size={14} />
                2023 – 2025
              </span>
            </div>

            <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <Award size={14} className="text-primary mt-1 shrink-0" />
                Completed studies with an overall <span className="text-foreground font-medium">360 credits</span>
              </li>
              <li className="flex items-start gap-2">
                <Award size={14} className="text-primary mt-1 shrink-0" />
                Graduating in <span className="text-foreground font-medium">June 2026</span>
              </li>
              <li className="flex items-start gap-2">
                <Award size={14} className="text-primary mt-1 shrink-0" />
                Focused on full-stack development, databases, and software engineering principles
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
