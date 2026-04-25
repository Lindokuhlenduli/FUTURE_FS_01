import { Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "Backend Application System",
    description: "Developed backend services using C# and ASP.NET, implementing REST APIs to enable communication between applications. Designed and optimized SQL databases for efficient data management and system performance.",
    tech: ["C#", "ASP.NET", "SQL Server", "REST APIs"],
    highlights: ["Built RESTful APIs for seamless application communication", "Designed and optimized SQL databases for performance", "Implemented clean architecture patterns with MVC"],
    gradientFrom: "hsl(175, 50%, 42%)",
    gradientTo: "hsl(150, 35%, 60%)",
  },
  {
    title: "Cloud-Based Platform – Little Light Foundation",
    description: "Contributed to the development of a cloud-based platform supporting volunteer and donation management. Implemented Firebase database for scalable data storage and real-time data handling.",
    tech: ["Firebase", "Cloud Architecture", "NoSQL", "Real-time Data"],
    highlights: ["Implemented Firebase for scalable cloud data storage", "Built real-time data synchronization features", "Supported nonprofit volunteer and donation workflows"],
    gradientFrom: "hsl(290, 35%, 60%)",
    gradientTo: "hsl(340, 60%, 70%)",
  },
  {
    title: "DevOps CI/CD Pipeline Project",
    description: "Built CI/CD pipelines using Azure DevOps to automate application builds and deployments. Implemented version control and testing workflows to ensure code quality and system reliability.",
    tech: ["Azure DevOps", "CI/CD", "Git", "Automated Testing"],
    highlights: ["Automated build and deployment pipelines with Azure DevOps", "Implemented version control and code review workflows", "Set up automated testing for code quality assurance"],
    gradientFrom: "hsl(42, 70%, 55%)",
    gradientTo: "hsl(175, 50%, 42%)",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="projects" className="section-padding relative overflow-hidden" ref={ref} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(40px)', transition: 'opacity 0.7s ease-out, transform 0.7s ease-out' }}>
      <div className="absolute bottom-0 left-0 w-48 h-48 blob-shape opacity-8" style={{ background: "hsl(var(--pink))" }} />

      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">
          <span className="text-primary font-mono text-lg">05.</span> Featured Projects
        </h2>
        <div className="w-20 h-1.5 rounded mb-10" style={{ background: "linear-gradient(90deg, hsl(175, 50%, 42%), hsl(340, 60%, 70%), hsl(42, 70%, 55%))" }} />

        <div className="space-y-8">
          {projects.map((project, i) => (
            <div key={project.title} className="card-elevated p-6 md:p-8 hover:border-primary/40 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-60 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(90deg, ${project.gradientFrom}, ${project.gradientTo})` }} />
              <div className="absolute -top-10 -right-10 w-32 h-32 blob-shape opacity-0 group-hover:opacity-15 transition-opacity duration-500 blur-2xl" style={{ background: project.gradientFrom }} />

              <div className="relative z-10 grid md:grid-cols-[auto_1fr] gap-6">
                <div className="flex items-start">
                  <span className="text-5xl md:text-6xl font-bold font-heading transition-colors" style={{ color: `${project.gradientFrom}20` }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold font-heading text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                    <a href="https://github.com/Lindokuhlenduli" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors shrink-0 ml-4" aria-label="GitHub">
                      <Github size={20} />
                    </a>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                  <ul className="space-y-2 mb-5">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5">✦</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-full border border-border bg-secondary text-secondary-foreground">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
