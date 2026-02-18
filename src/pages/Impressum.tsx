import { Link } from "react-router-dom";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";

const Impressum = () => (
  <div className="min-h-screen bg-background text-foreground px-6 py-20">
    <div className="max-w-3xl mx-auto">
      <Link to="/" className="text-primary font-mono text-sm hover:opacity-80 transition-opacity mb-8 inline-block">
        ← Zurück
      </Link>
      <h1 className="text-4xl font-bold mb-8">Impressum</h1>
      <div className="text-muted-foreground leading-relaxed space-y-4">
        <p><strong className="text-foreground">Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz):</strong></p>
        <p>
          Roman Philippi<br />
          c/o MDC Management#6106<br />
          Welserstraße 3<br />
          87463 Dietmannsried
        </p>
        <p><strong className="text-foreground">Kontakt:</strong></p>
        <p>E-Mail: <ObfuscatedEmail /></p>
        <p><strong className="text-foreground">Umsatzsteuer-Identifikationsnummer:</strong></p>
        <p>
          Keine Angabe der Umsatzsteuer-Identifikationsnummer, da die
          Kleinunternehmerregelung nach § 19 UStG angewandt wird.
        </p>
      </div>
    </div>
  </div>
);

export default Impressum;
