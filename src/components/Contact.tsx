const Contact = () => {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">
          Kontakt
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-5">
          Projekt im Kopf?
        </h2>
        <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
          Ob eine schnelle Landingpage oder eine individuelle Web-App — ich freue mich
          von dir zu hören. Schreib mir einfach auf Instagram!
        </p>

        <div className="flex justify-center">
          <a
            href="https://instagram.com/roman.dev.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:glow transition-all duration-300 text-sm font-medium"
          >
            <span className="text-xl">📸</span>
            <span className="text-foreground font-mono">@roman.dev.tech</span>
            <span className="text-muted-foreground group-hover:text-primary transition-colors">
              → Instagram
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
