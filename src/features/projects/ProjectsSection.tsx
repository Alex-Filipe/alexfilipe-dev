import { SectionHeading } from "../../components/ui/SectionHeading";
import { projects } from "../../data/projects";
import { ProjectCard } from "./components/ProjectCard";

export function ProjectsSection() {
  return (
    <section className="page-section section-contrast" id="projects">
      <SectionHeading
        eyebrow="Projetos"
        title="Trabalhos que contam minha evolucao"
        description="Cards preparados para receber projetos reais, repositorios e deploys."
      />

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
