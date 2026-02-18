import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";

const DatenschutzDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="hover:text-primary transition-colors">Datenschutz</button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] p-0">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className="text-2xl font-bold">Datenschutzerklärung</DialogTitle>
        </DialogHeader>
        <ScrollArea className="px-6 pb-6 max-h-[65vh]">
          <div className="text-muted-foreground leading-relaxed space-y-4 text-sm">
            <p><strong className="text-foreground">1. Datenschutz auf einen Blick</strong></p>
            <p>
              Der Betreiber dieser Website nimmt den Schutz Ihrer persönlichen Daten sehr ernst.
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den
              gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p>
              Die Nutzung dieser Website ist in der Regel ohne Angabe personenbezogener Daten
              möglich. Da wir auf dieser Website weder Kontaktformulare noch Analyse-Tools
              (wie Google Analytics) oder Social-Media-Plugins verwenden, werden über diese
              Funktionen keine Daten erhoben.
            </p>

            <p><strong className="text-foreground">2. Verantwortliche Stelle</strong></p>
            <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <p>
              Roman Philippi<br />
              c/o MDC Management#6106<br />
              Welserstraße 3<br />
              87463 Dietmannsried<br />
              E-Mail: <ObfuscatedEmail />
            </p>

            <p><strong className="text-foreground">3. Datenerfassung auf dieser Website (Server-Log-Files)</strong></p>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in
              sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt.
              Dies sind:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL (die zuvor besuchte Seite)</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p>
              Diese Daten sind technisch notwendig, um Ihnen die Website anzuzeigen und die
              Stabilität und Sicherheit zu gewährleisten. Eine Zusammenführung dieser Daten mit
              anderen Datenquellen wird nicht vorgenommen. Grundlage für die Datenverarbeitung
              ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse des Websitebetreibers).
            </p>

            <p><strong className="text-foreground">4. Ihre Rechte</strong></p>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger
              und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben
              außerdem ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu
              sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter
              der im Impressum angegebenen Adresse an uns wenden.
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default DatenschutzDialog;
