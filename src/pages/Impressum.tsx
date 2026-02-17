import { Link } from "react-router-dom";

const Impressum = () => (
  <div className="min-h-screen bg-background text-foreground px-6 py-20">
    <div className="max-w-3xl mx-auto">
      <Link to="/" className="text-primary font-mono text-sm hover:opacity-80 transition-opacity mb-8 inline-block">
        ← Zurück
      </Link>
      <h1 className="text-4xl font-bold mb-8">Impressum</h1>
      <div className="text-muted-foreground leading-relaxed space-y-4">
        <p><strong className="text-foreground">Angaben gemäß § 5 TMG:</strong></p>
        <p>Roman [Nachname]<br />Musterstraße 1<br />12345 Musterstadt</p>
        <p><strong className="text-foreground">Kontakt:</strong></p>
        <p>Instagram: @roman.dev.tech</p>
        <p><strong className="text-foreground">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong></p>
        <p>Roman [Nachname]<br />Musterstraße 1<br />12345 Musterstadt</p>
        <p className="text-xs text-muted-foreground/60 mt-8">
          Platzhaltertext — bitte mit echten Angaben ersetzen.
        </p>
      </div>
    </div>
  </div>
);

export default Impressum;
