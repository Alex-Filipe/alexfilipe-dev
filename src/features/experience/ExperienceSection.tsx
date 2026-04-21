import { SectionHeading } from "../../components/ui/SectionHeading";
import type { Experience, SectionCopy } from "../../types/portfolio";

type ExperienceSectionProps = {
  copy: SectionCopy;
  experiences: Experience[];
};

export function ExperienceSection({ copy, experiences }: ExperienceSectionProps) {
  return (
    <section className="page-section" id="experience">
      <SectionHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />

      <div className="timeline">
        {experiences.map((experience) => (
          <article className="timeline-item" key={experience.company}>
            <div>
              <p>{experience.period}</p>
              <h3>{experience.role}</h3>
              <span>{experience.company}</span>
              <span>{experience.location}</span>
            </div>
            <p>{experience.description}</p>
            <ul>
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
