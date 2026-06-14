import { useEffect, useState } from "react";
import { portfolioContent } from "../data/content";
import { HomePage } from "../pages/HomePage";
import type { Language, Theme } from "../types/portfolio";

const THEME_KEY = "theme";
const LANGUAGE_KEY = "language";

const documentTitle: Record<Language, string> = {
  "pt-BR": "Alex Filipe | Engenheiro de Software",
  "en-US": "Alex Filipe | Software Engineer",
};

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "pt-BR";
  }

  const stored = window.localStorage.getItem(LANGUAGE_KEY);
  if (stored === "pt-BR" || stored === "en-US") {
    return stored;
  }

  return navigator.language.toLowerCase().startsWith("pt") ? "pt-BR" : "en-US";
}

export function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const content = portfolioContent[language];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.removeProperty("background");
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = documentTitle[language];
    window.localStorage.setItem(LANGUAGE_KEY, language);
  }, [language]);

  return (
    <HomePage
      content={content}
      language={language}
      onLanguageChange={setLanguage}
      onThemeChange={setTheme}
      theme={theme}
    />
  );
}
