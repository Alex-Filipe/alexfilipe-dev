import { SectionHeading } from "../../components/ui/SectionHeading";
import { experiences } from "../../data/experience";

export function ExperienceSection() {
  return (
    <section className="page-section" id="experience">
      <SectionHeading
        eyebrow="Experiencia"
        title="Onde minha pratica vira produto"
        description="Uma base inicial para registrar empresas, desafios, entregas e impacto."
      />

      <div className="timeline">
        {experiences.map((experience) => (
          <article className="timeline-item" key={experience.company}>
            <div>
              <p>{experience.period}</p>
              <h3>{experience.role}</h3>
              <span>{experience.company}</span>
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
