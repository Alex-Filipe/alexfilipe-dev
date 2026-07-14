import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";
import { AboutSection } from "../features/about/AboutSection";
import { ContactSection } from "../features/contact/ContactSection";
import { EducationSection } from "../features/education/EducationSection";
import { ExperienceSection } from "../features/experience/ExperienceSection";
import { ProjectsSection } from "../features/projects/ProjectsSection";
import { SkillsSection } from "../features/skills/SkillsSection";
import { useActiveSection } from "../hooks/useActiveSection";
import { useScrollReveal } from "../hooks/useScrollReveal";
import type { Language, PortfolioContent, Theme } from "../types/portfolio";

type HomePageProps = {
  content: PortfolioContent;
  language: Language;
  onLanguageChange: (language: Language) => void;
  onThemeChange: (theme: Theme) => void;
  theme: Theme;
};

const skipLinkLabel: Record<Language, string> = {
  "pt-BR": "Pular para o conteúdo",
  "en-US": "Skip to content",
};

export function HomePage({
  content,
  language,
  onLanguageChange,
  onThemeChange,
  theme,
}: HomePageProps) {
  const sectionIds = content.navigation.map((item) => item.href.replace("#", ""));
  const activeId = useActiveSection(sectionIds);
  useScrollReveal();

  return (
    <div className="app-shell" data-theme={theme}>
      <a className="skip-link" href="#main">
        {skipLinkLabel[language]}
      </a>
      <SiteHeader
        activeHref={activeId ? `#${activeId}` : ""}
        language={language}
        navigationItems={content.navigation}
        onLanguageChange={onLanguageChange}
        onThemeChange={onThemeChange}
        profile={content.profile}
        theme={theme}
      />
      <main id="main">
        <AboutSection
          language={language}
          profile={content.profile}
          socialLinks={content.socialLinks}
        />
        <SkillsSection copy={content.sections.skills} skillGroups={content.skillGroups} />
        <ExperienceSection
          copy={content.sections.experience}
          experiences={content.experiences}
        />
        <ProjectsSection
          copy={content.sections.projects}
          language={language}
          projects={content.projects}
        />
        <EducationSection copy={content.sections.education} education={content.education} />
        <ContactSection
          copy={content.sections.contact}
          socialLinks={content.socialLinks}
        />
      </main>
      <SiteFooter
        language={language}
        profile={content.profile}
        socialLinks={content.socialLinks}
      />
    </div>
  );
}
