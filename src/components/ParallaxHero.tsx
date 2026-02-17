import { useEffect, useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const ParallaxHero = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrollY = window.scrollY;
        bgRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <div
        ref={bgRef}
        className="absolute inset-0 -top-20 -bottom-20 will-change-transform"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div
          className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 animate-fade-up"
          style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-mono text-primary tracking-widest uppercase">
            Verfügbar für Projekte
          </span>
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6 animate-fade-up"
          style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}
        >
           <span className="text-foreground">Ein Entwickler.</span>
            <br />
            <span className="text-gradient">Große Ergebnisse.</span>
          </h1>

          <p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.35s", opacity: 0, animationFillMode: "forwards" }}
          >
            Ich bin Roman — ein Solo-Entwickler, der saubere, funktionale Apps und Websites
            baut für Menschen, die Qualität über Komplexität stellen.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          style={{ animationDelay: "0.5s", opacity: 0, animationFillMode: "forwards" }}
        >
          <button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="px-7 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all duration-200 glow animate-pulse-glow"
          >
            Was ich mache
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-7 py-3.5 rounded-md border border-border bg-surface text-foreground font-semibold hover:border-primary/50 hover:bg-surface-raised transition-all duration-200"
          >
            Kontakt
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs font-mono text-muted-foreground tracking-widest">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-muted-foreground to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default ParallaxHero;
