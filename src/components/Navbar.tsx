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
          {["services", "about", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              className="capitalize hover:text-primary transition-colors duration-200"
            >
              {section}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo("contact")}
          className="text-sm font-semibold px-4 py-2 rounded-md border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 glow"
        >
          Let's talk
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
