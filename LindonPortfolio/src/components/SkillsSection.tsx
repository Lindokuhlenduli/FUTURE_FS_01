const programmingLanguages = [
  { name: "C#", level: 85 },
  { name: "Java", level: 80 },
  { name: "Python", level: 75 },
  { name: "JavaScript", level: 70 },
  { name: "SQL", level: 85 },
  { name: "Kotlin", level: 60 },
];

const techSkills = ["ASP.NET (.NET)", "REST APIs", "Node.js", "React", "HTML & CSS", "Firebase"];
const tools = ["Azure DevOps", "CI/CD Pipelines", "Git & GitHub", "SQL Server", "MySQL", "VS Code"];

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="skills" className="section-padding bg-secondary/40 relative overflow-hidden" ref={ref} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(40px)', transition: 'opacity 0.7s ease-out, transform 0.7s ease-out' }}>
      {/* Decorative blob */}
      <div className="absolute -top-20 -right-20 w-60 h-60 blob-shape opacity-10" style={{ background: "hsl(var(--teal))" }} />

      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">
          <span className="text-primary font-mono text-lg">02.</span> My Skills
        </h2>
        <div className="w-20 h-1.5 rounded mb-10" style={{ background: "linear-gradient(90deg, hsl(175, 50%, 42%), hsl(290, 35%, 60%))" }} />

        <div className="grid md:grid-cols-2 gap-10">
          <div className="card-elevated p-6">
            <h3 className="text-primary font-mono text-sm mb-6">Programming Languages</h3>
            <div className="space-y-5">
              {programmingLanguages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-foreground font-medium">{lang.name}</span>
                    <span className="text-primary font-mono">{lang.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${lang.level}%`,
                        background: "linear-gradient(90deg, hsl(175, 50%, 42%), hsl(290, 35%, 60%))",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="card-elevated p-6">
              <h3 className="text-primary font-mono text-sm mb-4">Frameworks & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {techSkills.map((skill) => (
                  <span key={skill} className="text-xs font-mono px-3 py-2 rounded-xl bg-secondary text-secondary-foreground border border-border hover:border-primary/40 hover:text-primary transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="card-elevated p-6">
              <h3 className="text-primary font-mono text-sm mb-4">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span key={tool} className="text-xs font-mono px-3 py-2 rounded-xl bg-secondary text-secondary-foreground border border-border hover:border-primary/40 hover:text-primary transition-colors cursor-default">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
