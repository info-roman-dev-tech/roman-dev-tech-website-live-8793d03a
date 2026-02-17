import { Link } from "react-router-dom";

const Datenschutz = () => (
  <div className="min-h-screen bg-background text-foreground px-6 py-20">
    <div className="max-w-3xl mx-auto">
      <Link to="/" className="text-primary font-mono text-sm hover:opacity-80 transition-opacity mb-8 inline-block">
        ← Zurück
      </Link>
      <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>
      <div className="text-muted-foreground leading-relaxed space-y-4">
        <p><strong className="text-foreground">1. Datenschutz auf einen Blick</strong></p>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
          personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
        </p>
        <p><strong className="text-foreground">2. Hosting</strong></p>
        <p>Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.</p>
        <p><strong className="text-foreground">3. Allgemeine Hinweise und Pflichtinformationen</strong></p>
        <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
        <p><strong className="text-foreground">4. Datenerfassung auf dieser Website</strong></p>
        <p>Diese Website verwendet keine Cookies und erhebt keine personenbezogenen Daten über Formulare.</p>
        <p className="text-xs text-muted-foreground/60 mt-8">
          Platzhaltertext — bitte mit einer vollständigen Datenschutzerklärung ersetzen.
        </p>
      </div>
    </div>
  </div>
);

export default Datenschutz;
