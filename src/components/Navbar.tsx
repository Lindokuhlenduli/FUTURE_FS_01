import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#home" className="text-xl font-bold font-heading text-gradient">LN.</a>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">{item.label}</a>
            </li>
          ))}
        </ul>

        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
