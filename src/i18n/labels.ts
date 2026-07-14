import type { Language } from "../types/portfolio";

type UiLabels = {
  home: string;
  primaryNav: string;
  languageSwitcher: string;
  themeSwitcher: string;
  themeDark: string;
  themeLight: string;
  contactLinks: string;
  projectTech: string;
  footerLinks: string;
};

/** Localized labels for aria-* attributes so screen readers match the UI language. */
export const uiLabels: Record<Language, UiLabels> = {
  "pt-BR": {
    home: "Ir para o início",
    primaryNav: "Navegação principal",
    languageSwitcher: "Selecionar idioma",
    themeSwitcher: "Selecionar tema",
    themeDark: "Tema escuro",
    themeLight: "Tema claro",
    contactLinks: "Links de contato",
    projectTech: "Tecnologias usadas",
    footerLinks: "Redes",
  },
  "en-US": {
    home: "Go to top",
    primaryNav: "Main navigation",
    languageSwitcher: "Select language",
    themeSwitcher: "Select theme",
    themeDark: "Dark theme",
    themeLight: "Light theme",
    contactLinks: "Contact links",
    projectTech: "Technologies used",
    footerLinks: "Social links",
  },
};
