import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";

const ImpressumDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="hover:text-primary transition-colors">Impressum</button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] p-0">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className="text-2xl font-bold">Impressum</DialogTitle>
        </DialogHeader>
        <ScrollArea className="px-6 pb-6 max-h-[65vh]">
          <div className="text-muted-foreground leading-relaxed space-y-4 text-sm">
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
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ImpressumDialog;
