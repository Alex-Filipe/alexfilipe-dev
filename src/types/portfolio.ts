export type SocialLink = {
  label: string;
  href: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  links?: SocialLink[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Education = {
  title: string;
  institution: string;
  status: string;
  description: string;
  highlights: string[];
};

export type Language = "pt-BR" | "en-US";

export type Theme = "dark" | "light";

export type SectionCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

export type NavigationItem = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  headline: string;
  summary: string;
  shortIntro: string;
};

export type HeroMetric = {
  label: string;
  value: string;
};

export type PortfolioContent = {
  language: Language;
  navigation: NavigationItem[];
  profile: Profile;
  heroMetrics: HeroMetric[];
  socialLinks: SocialLink[];
  sections: {
    experience: SectionCopy;
    projects: SectionCopy;
    skills: SectionCopy;
    education: SectionCopy;
    contact: SectionCopy;
  };
  experiences: Experience[];
  projects: Project[];
  skillGroups: SkillGroup[];
  education: Education[];
};
