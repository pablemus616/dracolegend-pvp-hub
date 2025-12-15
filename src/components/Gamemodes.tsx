import { Swords, Target, Cloud, Coins, TreePine } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Gamemodes = () => {
  const { t } = useLanguage();

  const gamemodes = [
    { icon: Swords, ...t.gamemodes.ffa },
    { icon: Target, ...t.gamemodes.practice },
    { icon: Cloud, ...t.gamemodes.skywars },
    { icon: Coins, ...t.gamemodes.pillars },
    { icon: TreePine, ...t.gamemodes.survival },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">{t.gamemodes.title1}</span>{" "}
            <span className="text-primary text-glow-sm">{t.gamemodes.title2}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.gamemodes.subtitle}
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
