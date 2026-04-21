import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";
import { AboutSection } from "../features/about/AboutSection";
import { ContactSection } from "../features/contact/ContactSection";
import { EducationSection } from "../features/education/EducationSection";
import { ExperienceSection } from "../features/experience/ExperienceSection";
import { ProjectsSection } from "../features/projects/ProjectsSection";
import { SkillsSection } from "../features/skills/SkillsSection";
import type { Language, PortfolioContent } from "../types/portfolio";

type HomePageProps = {
  content: PortfolioContent;
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export function HomePage({
  content,
  language,
  onLanguageChange,
}: HomePageProps) {
  return (
    <>
      <SiteHeader
        language={language}
        navigationItems={content.navigation}
        onLanguageChange={onLanguageChange}
        profile={content.profile}
      />
      <main>
        <AboutSection
          profile={content.profile}
          socialLinks={content.socialLinks}
        />
        <ExperienceSection
          copy={content.sections.experience}
          experiences={content.experiences}
        />
        <ProjectsSection copy={content.sections.projects} projects={content.projects} />
        <SkillsSection copy={content.sections.skills} skillGroups={content.skillGroups} />
        <EducationSection copy={content.sections.education} education={content.education} />
        <ContactSection
          copy={content.sections.contact}
          socialLinks={content.socialLinks}
        />
      </main>
      <SiteFooter profile={content.profile} />
    </>
  );
}
