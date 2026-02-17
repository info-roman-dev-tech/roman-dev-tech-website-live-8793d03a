import Navbar from "@/components/Navbar";
import ParallaxHero from "@/components/ParallaxHero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
          <span>© {new Date().getFullYear()} · Built with precision</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
