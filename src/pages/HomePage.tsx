import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";
import { AboutSection } from "../features/about/AboutSection";
import { ContactSection } from "../features/contact/ContactSection";
import { EducationSection } from "../features/education/EducationSection";
import { ExperienceSection } from "../features/experience/ExperienceSection";
import { ProjectsSection } from "../features/projects/ProjectsSection";
import { SkillsSection } from "../features/skills/SkillsSection";

export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
