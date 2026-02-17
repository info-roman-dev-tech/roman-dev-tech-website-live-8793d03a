const About = () => {
  return (
    <section id="about" className="py-28 px-6 bg-card/30 border-y border-border">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <div>
          <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">
            Über mich
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
            Ein Entwickler,<br />
            <span className="text-gradient">voller Fokus.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Hi, ich bin Roman — ein Solo-Entwickler mit Leidenschaft dafür, Ideen in
            funktionierende Software zu verwandeln. Ich arbeite mit Einzelpersonen,
            Startups und kleinen Unternehmen, die einen zuverlässigen Entwickler ohne
            den Overhead einer Agentur brauchen.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Wenn du mit mir arbeitest, arbeitest du direkt mit mir. Keine
            Weitergabe, keine Zwischenhändler — nur klare Kommunikation,
            ehrliche Zeitpläne und Code, der tatsächlich funktioniert.
          </p>
        </div>

        {/* Right: visual card */}
        <div className="relative">
          <div className="p-7 rounded-xl border border-border/60 bg-card card-shadow">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-3 h-3 rounded-full bg-destructive/70" />
              <div className="w-3 h-3 rounded-full bg-warning/70" />
              <div className="w-3 h-3 rounded-full bg-primary/70" />
              <span className="ml-2 text-xs font-mono text-muted-foreground">
                roman@devtech ~ about.ts
              </span>
            </div>
            <pre className="text-sm font-mono text-muted-foreground leading-relaxed overflow-x-auto">
{`const developer = {
  name: "Roman",
  role: "Solo Dev",
  stack: [
    "React",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
  ],
  available: true,
  passion: "Clean code",
};`}
            </pre>
          </div>
          {/* Glow decoration */}
          <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-primary/10 to-transparent opacity-50 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default About;
