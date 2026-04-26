import { SectionHeading } from "../../components/ui/SectionHeading";
import type { Project, SectionCopy } from "../../types/portfolio";
import { ProjectCard } from "./components/ProjectCard";

type ProjectsSectionProps = {
  copy: SectionCopy;
  projects: Project[];
};

export function ProjectsSection({ copy, projects }: ProjectsSectionProps) {
  return (
    <section className="page-section" id="projects">
      <SectionHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
