import Hero from "@/components/Hero";
import Gamemodes from "@/components/Gamemodes";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Gamemodes />
      <Gallery />
      <Footer />
    </main>
  );
};

export default Index;
