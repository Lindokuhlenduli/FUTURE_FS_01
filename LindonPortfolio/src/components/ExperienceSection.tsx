import { Briefcase, Calendar, ExternalLink, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    title: "FNB App Academy – Full Stack Development",
    type: "Certificate Program",
    year: "2025",
    certificate: "/certificates/FNB_certificate.pdf",
    highlights: [
      "Completed a full-stack development program focused on building end-to-end applications in a banking and real-world context.",
      "Developed applications using frontend (HTML, CSS, JavaScript) and backend technologies.",
      "Gained experience in API development, database integration, and application logic design.",
      "Applied software development best practices, including clean code, testing, and version control.",
      "Strengthened understanding of user-focused application development and real-world system design.",
    ],
  },
  {
    title: "WeThinkCode – Generative AI Certificate",
    type: "Certificate Program",
    year: "2025",
    certificate: "/certificates/WeThinkCode_GenAI_certificate.pdf",
    highlights: [
      "Completed a specialised programme in Generative AI concepts and applications.",
      "Explored practical use cases of AI in software development workflows.",
      "Gained foundational knowledge in prompt engineering and AI-assisted development.",
    ],
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="experience" className="section-padding relative overflow-hidden" ref={ref} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(40px)', transition: 'opacity 0.7s ease-out, transform 0.7s ease-out' }}>
      <div className="absolute top-20 right-0 w-36 h-36 blob-shape opacity-8" style={{ background: "hsl(var(--teal))" }} />

      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">
          <span className="text-primary font-mono text-lg">04.</span> Experience & Certifications
        </h2>
        <div className="w-20 h-1 bg-primary/40 rounded mb-10" />

        <div className="relative space-y-8">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-primary/20 hidden md:block" />

          {experiences.map((exp, idx) => (
            <div key={idx} className="card-elevated rounded-2xl p-6 md:p-8 md:ml-14 relative">
              <div className="absolute -left-[2.55rem] top-8 w-3 h-3 rounded-full bg-primary hidden md:block ring-4 ring-background" />

              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-lg font-bold font-heading text-foreground flex items-center gap-2">
                    <Briefcase size={20} className="text-primary" />
                    {exp.title}
                  </h3>
                  <p className="text-accent font-mono text-sm mt-1">{exp.type}</p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">
                  <Calendar size={14} />
                  {exp.year}
                </span>
              </div>

              <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed mb-5">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-primary mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <a href={exp.certificate} download className="inline-flex items-center gap-2 text-sm font-mono text-primary hover:underline">
                <ExternalLink size={14} />
                Download Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
