import Navbar from "@/components/Navbar";
import ParallaxHero from "@/components/ParallaxHero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Roman Dev Tech",
  "description": "App- und Website Creator für Web Apps, kleine Websites und individuelle Lösungen.",
  "url": "https://romandevtech.com",
  "sameAs": ["https://instagram.com/roman.dev.tech"],
  "areaServed": "DE",
  "serviceType": ["Webentwicklung", "Web Apps", "Websites"],
};

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <ParallaxHero />
      <Services />
      <About />
      <Contact />

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <span className="font-mono">
            <span className="text-foreground font-bold">Roman</span>
            <span className="text-primary font-bold">Dev</span>
            <span>Tech</span>
          </span>
          <div className="flex items-center gap-4">
            <a href="/impressum" className="hover:text-primary transition-colors">Impressum</a>
            <span>·</span>
            <a href="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</a>
          </div>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </main>
  );
};

export default Index;
