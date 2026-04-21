import { SectionHeading } from "../../components/ui/SectionHeading";
import { projects } from "../../data/projects";
import { ProjectCard } from "./components/ProjectCard";

export function ProjectsSection() {
  return (
    <section className="page-section section-contrast" id="projects">
      <SectionHeading
        eyebrow="Projetos"
        title="Espaço preparado para cases reais"
        description="A seção de projetos está pronta para receber estudos de caso, repositórios e entregas publicáveis sem criar informações fictícias."
      />

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
