import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";
import { AboutSection } from "../features/about/AboutSection";
import { ContactSection } from "../features/contact/ContactSection";
import { EducationSection } from "../features/education/EducationSection";
import { ExperienceSection } from "../features/experience/ExperienceSection";
import { ProjectsSection } from "../features/projects/ProjectsSection";
import { SkillsSection } from "../features/skills/SkillsSection";
import type { Language, PortfolioContent, Theme } from "../types/portfolio";

type HomePageProps = {
  content: PortfolioContent;
  language: Language;
  onLanguageChange: (language: Language) => void;
  onThemeChange: (theme: Theme) => void;
  theme: Theme;
};

export function HomePage({
  content,
  language,
  onLanguageChange,
  onThemeChange,
  theme,
}: HomePageProps) {
  return (
    <div className="app-shell" data-theme={theme}>
      <SiteHeader
        language={language}
        navigationItems={content.navigation}
        onLanguageChange={onLanguageChange}
        onThemeChange={onThemeChange}
        profile={content.profile}
        theme={theme}
      />
      <main>
        <AboutSection
          heroMetrics={content.heroMetrics}
          profile={content.profile}
          socialLinks={content.socialLinks}
        />
        <SkillsSection copy={content.sections.skills} skillGroups={content.skillGroups} />
        <ExperienceSection
          copy={content.sections.experience}
          experiences={content.experiences}
        />
        <ProjectsSection copy={content.sections.projects} projects={content.projects} />
        <EducationSection copy={content.sections.education} education={content.education} />
        <ContactSection
          copy={content.sections.contact}
          socialLinks={content.socialLinks}
        />
      </main>
      <SiteFooter profile={content.profile} />
    </div>
  );
}
