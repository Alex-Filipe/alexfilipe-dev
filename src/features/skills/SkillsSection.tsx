import { SectionHeading } from "../../components/ui/SectionHeading";
import { skillGroups } from "../../data/skills";

export function SkillsSection() {
  return (
    <section className="page-section" id="skills">
      <SectionHeading
        eyebrow="Tech stack"
        title="Tecnologias que uso para construir e integrar sistemas"
        description="Uma visão organizada das linguagens, frameworks, bancos, ferramentas e práticas citadas no meu perfil profissional."
      />

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
