import { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const contactLinks = [
  { icon: Mail, label: "Email", value: "lindokuhlenduli81@gmail.com", href: "mailto:lindokuhlenduli81@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/lindokuhle-nduli", href: "https://linkedin.com/in/lindokuhle-nduli-261625291" },
  { icon: Github, label: "GitHub", value: "github.com/Lindokuhlenduli", href: "https://github.com/Lindokuhlenduli" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.open(`mailto:lindokuhlenduli81@gmail.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30 relative overflow-hidden" ref={ref} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(40px)', transition: 'opacity 0.7s ease-out, transform 0.7s ease-out' }}>
      <div className="absolute -top-16 -right-16 w-56 h-56 blob-shape opacity-10" style={{ background: "hsl(var(--pink))" }} />
      <div className="absolute bottom-10 left-10 w-32 h-32 blob-shape opacity-8" style={{ background: "hsl(var(--gold))" }} />

      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2 text-center">
          <span className="text-primary font-mono text-lg">04.</span> Get In Touch
        </h2>
        <div className="w-20 h-1 bg-primary/40 rounded mx-auto mb-4" />
        <p className="text-muted-foreground text-center max-w-lg mx-auto mb-10">
          I'm always open to new opportunities, collaborations, and meaningful discussions. Feel free to connect and reach out!
        </p>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-8">
          <div className="space-y-4">
            {contactLinks.map((link) => (
              <a key={link.label} href={link.href} target={link.label !== "Email" ? "_blank" : undefined} rel="noopener noreferrer" className="card-elevated p-4 flex items-center gap-4 hover:border-primary/30 transition-colors group block">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <link.icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground">{link.label}</p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">{link.value}</p>
                </div>
              </a>
            ))}
          </div>

          {submitted ? (
            <div className="card-elevated p-8 flex flex-col items-center justify-center">
              <p className="text-primary text-lg font-medium font-heading">Thanks for reaching out!</p>
              <p className="text-muted-foreground mt-2">I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card-elevated p-6 space-y-4">
              <div>
                <label className="block text-sm font-mono text-muted-foreground mb-2">Your Name</label>
                <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors" placeholder="Lindokuhle" />
              </div>
              <div>
                <label className="block text-sm font-mono text-muted-foreground mb-2">Your Email</label>
                <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-mono text-muted-foreground mb-2">Your Message</label>
                <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Your message..." />
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity">
                <Send size={18} />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
