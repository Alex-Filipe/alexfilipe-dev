import { SectionHeading } from "../../components/ui/SectionHeading";
import { skillGroups } from "../../data/skills";

export function SkillsSection() {
  return (
    <section className="page-section" id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Tecnologias e praticas"
        description="Uma visao objetiva das ferramentas e bases que sustentam meu trabalho."
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
