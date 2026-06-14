import { useMemo } from "react";
import { useTypewriter } from "../../../hooks/useTypewriter";
import type { Language } from "../../../types/portfolio";
import { getHeroProfiles } from "../heroProfiles";

type HeroTerminalProps = {
  language: Language;
};

const panelLabel: Record<Language, string> = {
  "pt-BR": "Resumo do perfil profissional",
  "en-US": "Professional profile summary",
};

export function HeroTerminal({ language }: HeroTerminalProps) {
  const profiles = useMemo(() => getHeroProfiles(language), [language]);
  const snippets = useMemo(() => profiles.map((profile) => profile.code), [profiles]);
  const { text, index, isReduced } = useTypewriter(snippets);
  const active = profiles[index] ?? profiles[0];

  return (
    <aside className="hero-panel" aria-label={panelLabel[language]} data-reveal>
      <div className="terminal-bar">
        <span />
        <span />
        <span />
      </div>
      <div className="terminal-body">
        <p className="terminal-command" key={`command-${index}`}>
          {active.command}
        </p>

        <div className="terminal-grid" key={`metrics-${index}`}>
          {active.metrics.map((metric) => (
            <div key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
            </div>
          ))}
        </div>

        <pre aria-live="off">
          <code>{text}</code>
          {isReduced ? null : <span className="terminal-cursor" aria-hidden="true" />}
        </pre>
      </div>
    </aside>
  );
}
