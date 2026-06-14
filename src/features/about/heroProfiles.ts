import type { Language } from "../../types/portfolio";

export type HeroMetricItem = {
  label: string;
  value: string;
};

export type HeroProfile = {
  command: string;
  metrics: HeroMetricItem[];
  code: string;
};

const labels = {
  "pt-BR": {
    focus: "Foco",
    stack: "Stack",
    research: "Pesquisa",
    language: "Linguagem",
    platform: "Plataforma",
    ai: "IA",
    integrations: "Integrações",
  },
  "en-US": {
    focus: "Focus",
    stack: "Stack",
    research: "Research",
    language: "Language",
    platform: "Platform",
    ai: "AI",
    integrations: "Integrations",
  },
} as const;

/**
 * The animated terminal cycles through these profiles, "typing" each code
 * snippet while the metric tiles update to match. Snippets are kept at six
 * lines so the panel height never jumps between profiles.
 */
export function getHeroProfiles(language: Language): HeroProfile[] {
  const t = labels[language];

  return [
    {
      command: "alex.profile --research",
      metrics: [
        { label: t.focus, value: "Backend" },
        { label: t.stack, value: "Python" },
        { label: t.research, value: t.ai },
      ],
      code: `engineer = {
    "backend": "Python",
    "research": "AI",
    "systems": "intelligent",
    "focus": True,
}`,
    },
    {
      command: "alex.profile --backend",
      metrics: [
        { label: t.focus, value: "Backend" },
        { label: t.stack, value: ".NET / C#" },
        { label: t.research, value: t.ai },
      ],
      code: `var engineer = new Engineer {
    Backend = "C# / .NET",
    Databases = ["PostgreSQL", "SQL Server"],
    Integrations = true,
    Research = "AI",
};`,
    },
    {
      command: "alex.profile --frontend",
      metrics: [
        { label: t.focus, value: "Front-end" },
        { label: t.stack, value: "React / Vue" },
        { label: t.language, value: "TypeScript" },
      ],
      code: `const engineer = {
  frontend: ["React", "Vue.js"],
  language: "TypeScript",
  styling: ["CSS", "HTML"],
  ssr: true,
};`,
    },
    {
      command: "alex.profile --integrations",
      metrics: [
        { label: t.focus, value: t.integrations },
        { label: t.stack, value: "Service Bus" },
        { label: t.platform, value: "iPaaS" },
      ],
      code: `engineer.integrations = [
  "ERP Senior",
  "HubSpot CRM",
  "Digibee iPaaS",
  "Service Bus",
];`,
    },
  ];
}
