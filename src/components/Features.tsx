import { Swords, Users, Shield, Zap, Trophy, Clock } from "lucide-react";

const features = [
  {
    icon: Swords,
    title: "PVP Intenso",
    description: "Combates épicos con sistema de kits y arenas personalizadas"
  },
  {
    icon: Users,
    title: "Comunidad Activa",
    description: "Miles de jugadores online esperándote para competir"
  },
  {
    icon: Shield,
    title: "Anti-Cheat",
    description: "Sistema avanzado de protección contra hackers"
  },
  {
    icon: Zap,
    title: "Sin Lag",
    description: "Servidores de alto rendimiento para una experiencia fluida"
  },
  {
    icon: Trophy,
    title: "Rankings",
    description: "Sistema de clasificación y recompensas exclusivas"
  },
  {
    icon: Clock,
    title: "24/7 Online",
    description: "Servidor disponible las 24 horas, los 7 días de la semana"
  }
];

const Features = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary text-glow-sm">¿Por qué</span>{" "}
            <span className="text-foreground">elegirnos?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            DracoLegend ofrece la mejor experiencia de PVP en Minecraft con servidores optimizados y una comunidad increíble
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 rounded-xl p-6 transition-all duration-300 hover:box-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
