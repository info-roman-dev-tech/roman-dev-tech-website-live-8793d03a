import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "hello@romandevtech.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">
          Get in touch
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-5">
          Have a project in mind?
        </h2>
        <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
          Whether it's a quick landing page or a custom web app — I'd love to hear about it.
          Drop me a message and I'll get back to you within a day.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={copyEmail}
            className="group flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:glow transition-all duration-300 font-mono text-sm"
          >
            <span className="text-primary">📧</span>
            <span className="text-foreground">{email}</span>
            <span className="text-muted-foreground group-hover:text-primary transition-colors">
              {copied ? "✓ Copied!" : "Copy"}
            </span>
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs font-mono text-muted-foreground">or find me on</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="flex justify-center gap-4">
          {[
            { name: "GitHub", icon: "⌨️", url: "#" },
            { name: "LinkedIn", icon: "💼", url: "#" },
            { name: "Twitter / X", icon: "✦", url: "#" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200"
            >
              <span>{link.icon}</span>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
