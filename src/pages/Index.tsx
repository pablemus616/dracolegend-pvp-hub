import Hero from "@/components/Hero";
import Gamemodes from "@/components/Gamemodes";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import LanguageToggle from "@/components/LanguageToggle";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <LanguageToggle />
      <Hero />
      <Gamemodes />
      <Gallery />
      <Footer />
    </main>
  );
};

export default Index;
