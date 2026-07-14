import { uiLabels } from "../../../i18n/labels";
import type { Language, Project } from "../../../types/portfolio";
import { externalLinkProps } from "../../../utils/links";

type ProjectCardProps = {
  language: Language;
  project: Project;
};

export function ProjectCard({ language, project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="tag-list" aria-label={uiLabels[language].projectTech}>
        {project.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      {project.links?.length ? (
        <div className="project-links">
          {project.links.map((link) => (
            <a key={link.label} href={link.href} {...externalLinkProps(link.href)}>
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
