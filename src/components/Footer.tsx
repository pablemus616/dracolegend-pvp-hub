import logo from "@/assets/logo.png";
import discordIcon from "@/assets/discord.png";
import { ShoppingCart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Info */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="DracoLegend" className="w-12 h-12" />
            <div>
              <h3 className="font-display text-xl font-bold">
                <span className="text-primary">DRACO</span>
                <span className="text-foreground">LEGEND</span>
              </h3>
              <p className="text-muted-foreground text-sm">
                Servidor PVP Minecraft 1.16+
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://discord.com/invite/pKpMSd4yka"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <img src={discordIcon} alt="Discord" className="w-5 h-5" />
              <span className="text-sm">Discord</span>
            </a>
            <a
              href="https://store.dracolegend.net"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="text-sm">Tienda</span>
            </a>
          </div>

          {/* IP */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">
              IP del Servidor
            </p>
            <p className="font-mono text-primary font-bold">dracolegend.net</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} DracoLegend. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
