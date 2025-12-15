import { Swords, Target, Cloud, Coins, TreePine } from "lucide-react";

const gamemodes = [
  {
    icon: Swords,
    title: "FFA",
    description: "Free For All - Combate sin reglas, todos contra todos"
  },
  {
    icon: Target,
    title: "Practice PVP",
    description: "Mejora tus habilidades con modos de práctica"
  },
  {
    icon: Cloud,
    title: "Skywars",
    description: "Islas flotantes, botín aleatorio, un solo ganador"
  },
  {
    icon: Coins,
    title: "Pillars of Fortune",
    description: "Conquista los pilares y acumula riquezas"
  },
  {
    icon: TreePine,
    title: "Survival",
    description: "Sobrevive, construye y domina el mundo"
  }
];

const Gamemodes = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Nuestras</span>{" "}
            <span className="text-primary text-glow-sm">Modalidades</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explora todas las formas de jugar en DracoLegend
          </p>
        </div>

        {/* Gamemodes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {gamemodes.map((mode, index) => (
            <div
              key={mode.title}
              className="group relative bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 rounded-xl p-6 transition-all duration-300 hover:box-glow text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <mode.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {mode.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {mode.description}
              </p>

              {/* Hover decoration */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gamemodes;
