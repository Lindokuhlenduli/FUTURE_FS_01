import { User, Mail, MapPin, GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const infoItems = [
  { icon: User, label: "Name", value: "Lindokuhle Nduli" },
  { icon: Mail, label: "Email", value: "lindokuhlenduli81@gmail.com" },
  { icon: MapPin, label: "Location", value: "South Africa" },
  { icon: GraduationCap, label: "Focus", value: "Full Stack Development" },
];

const codeSnippet = `class LindokuhleNduli:
    def __init__(self):
        self.name = "Lindokuhle Nduli"
        self.role = "Full Stack Developer"
        self.languages = [
            "C#", "Java", "Python",
            "JavaScript", "SQL", "Kotlin"
        ]
        self.passion = "Building scalable systems"

    def get_goal(self):
        return "Solve real-world problems
        with clean, efficient code"`;

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(40px)', transition: 'opacity 0.7s ease-out, transform 0.7s ease-out' }}>
      <div className="absolute top-10 right-10 w-40 h-40 blob-shape opacity-8" style={{ background: "hsl(var(--gold))" }} />

      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">
          <span className="text-primary font-mono text-lg">01.</span> About Me
        </h2>
        <div className="w-20 h-1 bg-primary/40 rounded mb-10" />

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
               I'm a Software Development graduate and driven developer with a passion for building efficient,
                scalable backend systems and full-stack applications. My experience
                spans C#, Java, Python, and JavaScript, with strong skills in REST API
                development, database design, and cloud-based solutions.
              </p>
              <p>
                I've worked with technologies like ASP.NET, Firebase, and Azure DevOps
                to deliver real-world projects — from backend application systems to
                cloud platforms supporting nonprofit operations.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {infoItems.map((item) => (
                <div key={item.label} className="card-elevated p-3 flex items-start gap-3">
                  <item.icon size={16} className="text-primary mt-1 shrink-0" />
                  <div>
                    <p className="text-xs font-mono text-muted-foreground">{item.label}</p>
                    <p className="text-sm text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-elevated rounded-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <span className="w-3 h-3 rounded-full" style={{ background: "hsl(var(--pink))" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "hsl(var(--gold))" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "hsl(var(--green))" }} />
              <span className="ml-2 text-xs font-mono text-muted-foreground">lindokuhle.py</span>
            </div>
            <pre className="p-5 text-sm font-mono text-muted-foreground overflow-x-auto leading-relaxed">
              <code>
                {codeSnippet.split('\n').map((line, i) => (
                  <div key={i}>
                    <span className="text-muted-foreground/40 mr-4 select-none">{String(i + 1).padStart(2, ' ')}</span>
                    {line.includes('class ') ? (
                      <><span className="text-accent">class </span><span className="text-primary">{line.replace('class ', '').replace(':', '')}:</span></>
                    ) : line.includes('def ') ? (
                      <><span className="text-accent">    def </span><span className="text-primary">{line.trim().replace('def ', '').replace(':', '')}:</span></>
                    ) : line.includes('self.') && line.includes('=') ? (
                      <><span className="text-foreground">{line.split('=')[0]}</span><span className="text-muted-foreground">= </span><span style={{ color: "hsl(var(--green))" }}>{line.split('= ')[1]}</span></>
                    ) : line.includes('return') ? (
                      <><span className="text-accent">        return </span><span style={{ color: "hsl(var(--green))" }}>{line.replace('        return ', '')}</span></>
                    ) : (
                      <span className="text-foreground">{line}</span>
                    )}
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
