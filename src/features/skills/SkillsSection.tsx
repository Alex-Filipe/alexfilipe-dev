import { SectionHeading } from "../../components/ui/SectionHeading";
import type { SectionCopy, SkillGroup } from "../../types/portfolio";

type SkillsSectionProps = {
  copy: SectionCopy;
  skillGroups: SkillGroup[];
};

export function SkillsSection({ copy, skillGroups }: SkillsSectionProps) {
  return (
    <section className="page-section" id="skills">
      <SectionHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />

      <div className="skills-grid" data-reveal>
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
