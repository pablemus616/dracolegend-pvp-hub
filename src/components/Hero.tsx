import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check, ShoppingCart } from "lucide-react";
import logo from "@/assets/logo.png";
import discordIcon from "@/assets/discord.png";
import carousel1 from "@/assets/carousel-1.png";

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const serverIP = "dracolegend.net";

  const copyIP = async () => {
    await navigator.clipboard.writeText(serverIP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${carousel1})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
      
      {/* Animated particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="animate-float mb-8">
          <img 
            src={logo} 
            alt="DracoLegend Logo" 
            className="w-32 h-32 md:w-40 md:h-40 mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Title */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-4 text-glow animate-slide-up">
          <span className="text-primary">DRACO</span>
          <span className="text-foreground">LEGEND</span>
        </h1>

        {/* Subtitle */}
        <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          El mejor servidor PVP para Minecraft 1.16+
          <br />
          <span className="text-primary font-semibold">¡Únete a la leyenda!</span>
        </p>

        {/* Server IP */}
        <div className="flex flex-col items-center gap-4 mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-muted-foreground text-sm uppercase tracking-widest font-display">
            IP del Servidor
          </p>
          <button
            onClick={copyIP}
            className="group flex items-center gap-4 bg-card/80 backdrop-blur-sm border-2 border-primary/50 hover:border-primary rounded-xl px-6 py-4 transition-all duration-300 hover:box-glow cursor-pointer"
          >
            <span className="font-mono text-2xl md:text-3xl text-foreground font-bold tracking-wider">
              {serverIP}
            </span>
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 group-hover:bg-primary transition-all duration-300">
              {copied ? (
                <Check className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
              ) : (
                <Copy className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
              )}
            </div>
          </button>
          <span className={`text-sm transition-all duration-300 ${copied ? 'text-primary' : 'text-muted-foreground'}`}>
            {copied ? '¡IP copiada!' : 'Haz clic para copiar'}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button
            variant="discord"
            size="xl"
            className="w-full sm:w-auto"
            onClick={() => window.open('https://discord.com/invite/pKpMSd4yka', '_blank')}
          >
            <img src={discordIcon} alt="Discord" className="w-6 h-6" />
            Únete al Discord
          </Button>
          <Button
            variant="hero"
            size="xl"
            className="w-full sm:w-auto"
            onClick={() => window.open('https://store.dracolegend.net', '_blank')}
          >
            <ShoppingCart className="w-5 h-5" />
            Tienda
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
