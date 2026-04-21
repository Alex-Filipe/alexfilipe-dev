import type { Language, NavigationItem, Profile, Theme } from "../../types/portfolio";

type SiteHeaderProps = {
  language: Language;
  navigationItems: NavigationItem[];
  onLanguageChange: (language: Language) => void;
  onThemeChange: (theme: Theme) => void;
  profile: Profile;
  theme: Theme;
};

const languageOptions: Array<{ label: string; language: Language; flag: string }> = [
  { label: "Português do Brasil", language: "pt-BR", flag: "🇧🇷" },
  { label: "English", language: "en-US", flag: "🇺🇸" },
];

const themeOptions: Array<{ icon: string; label: string; theme: Theme }> = [
  { icon: "☾", label: "Tema escuro", theme: "dark" },
  { icon: "☼", label: "Tema claro", theme: "light" },
];

export function SiteHeader({
  language,
  navigationItems,
  onLanguageChange,
  onThemeChange,
  profile,
  theme,
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

        <div className="theme-switcher" aria-label="Selecionar tema">
          {themeOptions.map((option) => (
            <button
              aria-label={option.label}
              aria-pressed={theme === option.theme}
              className={theme === option.theme ? "is-active" : ""}
              key={option.theme}
              onClick={() => onThemeChange(option.theme)}
              type="button"
            >
              {option.icon}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
