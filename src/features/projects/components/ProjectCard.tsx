import type { Project } from "../../../types/portfolio";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="tag-list" aria-label="Tecnologias usadas">
        {project.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      {project.links?.length ? (
        <div className="project-links">
          {project.links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
