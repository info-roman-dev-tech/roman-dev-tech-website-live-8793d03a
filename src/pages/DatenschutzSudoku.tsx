import { Link } from "react-router-dom";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";

const DatenschutzSudoku = () => {
  return (
    <main className="min-h-screen bg-background text-foreground py-16 px-6">
      <div className="max-w-2xl mx-auto space-y-6">
        <Link
          to="/"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          ← Zurück zur Startseite
        </Link>

        <h1 className="text-3xl font-bold">Datenschutzerklärung Sudoku</h1>

        <div className="text-muted-foreground leading-relaxed space-y-4 text-sm">
          <p><strong className="text-foreground">1. Datenschutz auf einen Blick</strong></p>
          <p>
            Der Betreiber dieser App nimmt den Schutz Ihrer persönlichen Daten sehr ernst.
            Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den
            gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
          <p>
            Die Nutzung dieser App ist ohne Angabe personenbezogener Daten möglich. Die App
            erfordert keine Registrierung oder Anmeldung und verwendet weder Analyse-Tools
            noch Werbung oder Social-Media-Plugins.
          </p>

          <p><strong className="text-foreground">2. Verantwortliche Stelle</strong></p>
          <p>Die verantwortliche Stelle für die Datenverarbeitung in dieser App ist:</p>
          <p>
            Roman Philippi<br />
            c/o MDC Management#6106<br />
            Welserstraße 3<br />
            87463 Dietmannsried<br />
            E-Mail: <ObfuscatedEmail />
          </p>

          <p><strong className="text-foreground">3. Datenverarbeitung in der App</strong></p>
          <p>Diese App speichert folgende Daten ausschließlich lokal auf Ihrem Gerät:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Spielfortschritt und Einstellungen</li>
            <li>Gewählte Sprache</li>
          </ul>
          <p>
            Diese Daten werden nicht an Server übertragen und verbleiben vollständig auf Ihrem
            Gerät. Bei Deinstallation der App werden diese Daten automatisch gelöscht. Die
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung bzw.
            vorvertragliche Maßnahmen).
          </p>

          <p><strong className="text-foreground">4. Google Play Services</strong></p>
          <p>
            Diese App wird über den Google Play Store vertrieben. Google kann im Rahmen der
            Nutzung des Play Stores und der Google Play Services bestimmte Daten erheben,
            darunter Geräteinformationen, Absturzberichte und Nutzungsstatistiken. Diese
            Datenerhebung erfolgt durch Google und unterliegt der{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:opacity-80 transition-opacity"
            >
              Datenschutzerklärung von Google
            </a>.
          </p>
          <p>
            Wir als App-Betreiber haben keinen Einfluss auf diese Datenerhebung durch Google
            und erhalten lediglich anonymisierte, aggregierte Statistiken über die App-Nutzung.
          </p>

          <p><strong className="text-foreground">5. Ihre Rechte</strong></p>
          <p>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger
            und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben
            außerdem ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu
            sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter
            der im Impressum angegebenen Adresse an uns wenden.
          </p>
        </div>
      </div>
    </main>
  );
};

export default DatenschutzSudoku;
