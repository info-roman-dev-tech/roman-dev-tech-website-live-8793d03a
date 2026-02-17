const About = () => {
  return (
    <section id="about" className="py-28 px-6 bg-card/30 border-y border-border">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <div>
          <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">
            Who I am
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
            One developer,<br />
            <span className="text-gradient">full focus.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Hi, I'm Roman — a solo developer passionate about turning ideas into working
            software. I work with individuals, startups, and small businesses who need
            a reliable dev partner without the overhead of an agency.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            When you work with me, you work with me directly. No hand-offs, no
            middlemen — just clear communication, honest timelines, and code that
            actually works.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Projects shipped", value: "20+" },
              { label: "Happy clients", value: "15+" },
              { label: "Years coding", value: "5+" },
              { label: "Response time", value: "<24h" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-lg border border-border bg-card"
              >
                <div className="text-2xl font-bold text-primary font-mono">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
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
