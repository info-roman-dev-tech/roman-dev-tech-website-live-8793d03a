import { useEffect, useRef } from "react";

const services = [
  {
    icon: "⚡",
    title: "Web Apps",
    description:
      "Leichtgewichtige, schnelle und voll funktionsfähige Webanwendungen mit modernen Frameworks. Von einfachen Tools bis hin zu kleinen SaaS-Produkten.",
    tags: ["React", "TypeScript", "HTML/CSS"],
  },
  {
    icon: "🌐",
    title: "Kleine Websites",
    description:
      "Landingpages, Portfolio-Seiten oder Firmenwebsites — sauber, responsiv und optimiert für einen starken ersten Eindruck.",
    tags: ["SEO", "Responsiv", "Performance"],
  },
  {
    icon: "🔧",
    title: "Individuelle Lösungen",
    description:
      "Du hast ein spezielles Problem? Ich entwickle maßgeschneiderte Tools, Automatisierungen oder Anpassungen, die zu deinem Workflow passen.",
    tags: ["Tools", "Automatisierung", "Anpassung"],
  },
];

const useRevealOnScroll = (ref: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            (entry.target as HTMLElement).style.opacity = "1";
          }
        });
      },
      { threshold: 0.1 }
    );

    const children = ref.current?.querySelectorAll("[data-reveal]");
    children?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ref]);
};

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useRevealOnScroll(sectionRef);

  return (
    <section id="services" ref={sectionRef} aria-label="Leistungen" className="py-28 px-6 max-w-6xl mx-auto">
      <div data-reveal style={{ opacity: 0 }} className="mb-16 text-center">
        <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">
          Was ich mache
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
          Leistungen
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <div
            key={service.title}
            data-reveal
            style={{ opacity: 0, animationDelay: `${i * 0.15}s` }}
            className="group p-7 rounded-xl border border-border bg-card card-shadow hover:border-primary/40 hover:glow transition-all duration-300"
          >
            <div className="text-3xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
