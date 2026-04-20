export type SocialLink = {
  label: string;
  href: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  links: SocialLink[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};
