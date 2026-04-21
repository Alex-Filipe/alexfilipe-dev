import { SectionHeading } from "../../components/ui/SectionHeading";
import { experiences } from "../../data/experience";

export function ExperienceSection() {
  return (
    <section className="page-section" id="experience">
      <SectionHeading
        eyebrow="Experiência"
        title="Sistemas, APIs e integrações em produção"
        description="Experiência em desenvolvimento backend, evolução de sistemas corporativos, integrações e sustentação de soluções empresariais."
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
