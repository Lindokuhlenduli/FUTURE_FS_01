import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import profileImg from "@/assets/profile.jpg";

const roles = [
  "Full Stack Developer",
  "Software Developer",
  "Backend Engineer",
  "Problem Solver",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < current.length) {
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-32 relative overflow-hidden">
      {/* Decorative organic blobs */}
      <div className="absolute top-20 -right-20 w-72 h-72 blob-shape opacity-15 animate-float" style={{ background: "hsl(340, 60%, 70%)" }} />
      <div className="absolute bottom-20 -left-16 w-56 h-56 blob-shape opacity-12 animate-float" style={{ background: "hsl(175, 50%, 42%)", animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-1/4 w-40 h-40 blob-shape opacity-10 animate-float" style={{ background: "hsl(290, 35%, 60%)", animationDelay: "2s" }} />
      <div className="absolute bottom-40 right-10 w-24 h-24 rounded-full opacity-15 animate-float" style={{ background: "hsl(42, 70%, 55%)", animationDelay: "1.5s" }} />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in-up">
            <p className="text-primary font-mono text-sm mb-4 tracking-widest uppercase">✦ Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 tracking-wide">
              LINDOKUHLE <span className="text-gradient">NDULI</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-heading mb-6 h-8">
              I'm a{" "}
              <span className="text-primary">
                {roles[roleIndex].substring(0, charIndex)}
              </span>
              <span className="animate-pulse text-primary">|</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-lg mb-8">
              Software Development Graduate and aspiring Full Stack Developer with a strong
              foundation in backend development, databases, and cloud technologies. Passionate
              about building scalable systems and solving real-world problems.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-2xl font-medium hover:opacity-90 transition-opacity shadow-lg"
                style={{ boxShadow: "0 4px 20px -4px hsl(175 50% 42% / 0.4)" }}
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-accent/40 text-accent px-6 py-3 rounded-2xl font-medium hover:bg-accent/10 transition-colors"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex items-center gap-5">
              <a href="https://github.com/Lindokuhlenduli" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github size={22} />
              </a>
              <a href="https://linkedin.com/in/lindokuhle-nduli-261625291" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={22} />
              </a>
              <a href="mailto:lindokuhlenduli81@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                <Mail size={22} />
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden glow-border">
                <img
                  src={profileImg}
                  alt="Lindokuhle Nduli"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-64 h-64 md:w-80 md:h-80 rounded-[2rem] border-2 border-accent/20 -z-10" />
              {/* Decorative blobs */}
              <div className="absolute -top-8 -left-8 w-24 h-24 blob-shape opacity-30 blur-2xl" style={{ background: "hsl(175, 50%, 42%)" }} />
              <div className="absolute -bottom-6 -right-10 w-20 h-20 blob-shape opacity-25 blur-2xl" style={{ background: "hsl(340, 60%, 70%)" }} />
              {/* Gold sparkle */}
              <div className="absolute top-4 -right-4 w-8 h-8 rounded-full opacity-40 blur-sm" style={{ background: "hsl(42, 70%, 55%)" }} />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-16">
          <p className="text-muted-foreground text-xs font-mono mb-2 tracking-widest">Scroll Down</p>
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors animate-bounce">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
