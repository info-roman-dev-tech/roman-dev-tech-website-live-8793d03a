import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="font-mono text-lg font-bold text-primary hover:opacity-80 transition-opacity"
        >
          <span className="text-foreground">Roman</span>
          <span className="text-primary">Dev</span>
          <span className="text-muted-foreground">Tech</span>
        </button>

        <div className="hidden sm:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {[
            { id: "services", label: "Leistungen" },
            { id: "about", label: "Über mich" },
            { id: "contact", label: "Kontakt" },
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className="hover:text-primary transition-colors duration-200"
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
