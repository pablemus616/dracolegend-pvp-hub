import { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en";

interface Translations {
  hero: {
    subtitle: string;
    joinLegend: string;
    serverIP: string;
    copied: string;
    clickToCopy: string;
    discord: string;
    store: string;
  };
  gamemodes: {
    title1: string;
    title2: string;
    subtitle: string;
    ffa: { title: string; description: string };
    practice: { title: string; description: string };
    skywars: { title: string; description: string };
    pillars: { title: string; description: string };
    survival: { title: string; description: string };
  };
  gallery: {
    title1: string;
    title2: string;
    subtitle: string;
  };
  footer: {
    serverIP: string;
    rights: string;
  };
}

const translations: Record<Language, Translations> = {
  es: {
    hero: {
      subtitle: "El mejor servidor PVP para Minecraft 1.16+",
      joinLegend: "¡Únete a la leyenda!",
      serverIP: "IP del Servidor",
      copied: "¡IP copiada!",
      clickToCopy: "Haz clic para copiar",
      discord: "Únete al Discord",
      store: "Tienda",
    },
    gamemodes: {
      title1: "Nuestras",
      title2: "Modalidades",
      subtitle: "Explora todas las formas de jugar en DracoLegend",
      ffa: { title: "FFA", description: "Free For All - Combate sin reglas, todos contra todos" },
      practice: { title: "Practice PVP", description: "Mejora tus habilidades con modos de práctica" },
      skywars: { title: "Skywars", description: "Islas flotantes, botín aleatorio, un solo ganador" },
      pillars: { title: "Pillars of Fortune", description: "Conquista los pilares y acumula riquezas" },
      survival: { title: "Survival", description: "Sobrevive, construye y domina el mundo" },
    },
    gallery: {
      title1: "Explora",
      title2: "el Servidor",
      subtitle: "Descubre nuestros mapas, arenas y zonas diseñadas para ofrecerte la mejor experiencia de PVP",
    },
    footer: {
      serverIP: "IP del Servidor",
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    hero: {
      subtitle: "The best PVP server for Minecraft 1.16+",
      joinLegend: "Join the legend!",
      serverIP: "Server IP",
      copied: "IP copied!",
      clickToCopy: "Click to copy",
      discord: "Join Discord",
      store: "Store",
    },
    gamemodes: {
      title1: "Our",
      title2: "Gamemodes",
      subtitle: "Explore all the ways to play on DracoLegend",
      ffa: { title: "FFA", description: "Free For All - No rules combat, everyone vs everyone" },
      practice: { title: "Practice PVP", description: "Improve your skills with practice modes" },
      skywars: { title: "Skywars", description: "Floating islands, random loot, only one winner" },
      pillars: { title: "Pillars of Fortune", description: "Conquer the pillars and accumulate riches" },
      survival: { title: "Survival", description: "Survive, build and dominate the world" },
    },
    gallery: {
      title1: "Explore",
      title2: "the Server",
      subtitle: "Discover our maps, arenas and zones designed to offer you the best PVP experience",
    },
    footer: {
      serverIP: "Server IP",
      rights: "All rights reserved.",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("es");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
