import { useState } from "react";
import { portfolioContent } from "../data/content";
import { HomePage } from "../pages/HomePage";
import type { Language, Theme } from "../types/portfolio";

export function App() {
  const [language, setLanguage] = useState<Language>("pt-BR");
  const [theme, setTheme] = useState<Theme>("dark");
  const content = portfolioContent[language];

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
