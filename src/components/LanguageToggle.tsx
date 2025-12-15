import { useLanguage } from "@/context/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center bg-card/90 backdrop-blur-sm border border-border rounded-lg overflow-hidden">
        <button
          onClick={() => setLanguage("es")}
          className={`px-3 py-2 text-sm font-semibold transition-all duration-300 ${
            language === "es"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          ES
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`px-3 py-2 text-sm font-semibold transition-all duration-300 ${
            language === "en"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default LanguageToggle;
