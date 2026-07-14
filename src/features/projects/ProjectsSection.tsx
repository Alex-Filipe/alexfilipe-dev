import { SectionHeading } from "../../components/ui/SectionHeading";
import type { Language, Project, SectionCopy } from "../../types/portfolio";
import { ProjectCard } from "./components/ProjectCard";

type ProjectsSectionProps = {
  copy: SectionCopy;
  language: Language;
  projects: Project[];
};

export function ProjectsSection({ copy, language, projects }: ProjectsSectionProps) {
  return (
    <section className="page-section" id="projects">
      <SectionHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />

      <div className="project-grid" data-reveal>
        {projects.map((project) => (
          <ProjectCard key={project.title} language={language} project={project} />
        ))}
      </div>
    </section>
  );
}
