import type { Language, NavigationItem, Profile } from "../../types/portfolio";

type SiteHeaderProps = {
  language: Language;
  navigationItems: NavigationItem[];
  onLanguageChange: (language: Language) => void;
  profile: Profile;
};

const languageOptions: Array<{ label: string; language: Language; flag: string }> = [
  { label: "Português do Brasil", language: "pt-BR", flag: "🇧🇷" },
  { label: "English", language: "en-US", flag: "🇺🇸" },
];

export function SiteHeader({
  language,
  navigationItems,
  onLanguageChange,
  profile,
}: SiteHeaderProps) {
  return (
    <header className="site-header">
      <a className="brand" href="#about" aria-label="Ir para o início">
        {profile.name}
      </a>

      <div className="header-actions">
        <nav className="site-nav" aria-label="Navegação principal">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="language-switcher" aria-label="Selecionar idioma">
          {languageOptions.map((option) => (
            <button
              aria-label={option.label}
              aria-pressed={language === option.language}
              className={language === option.language ? "is-active" : ""}
              key={option.language}
              onClick={() => onLanguageChange(option.language)}
              type="button"
            >
              <span aria-hidden="true">{option.flag}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
