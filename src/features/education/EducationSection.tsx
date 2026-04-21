import { SectionHeading } from "../../components/ui/SectionHeading";
import { education } from "../../data/education";

export function EducationSection() {
  return (
    <section className="page-section" id="education">
      <SectionHeading
        eyebrow="Formação"
        title="Base acadêmica e pesquisa"
        description="Minha formação atual conecta engenharia de software com pesquisa aplicada em Inteligência Artificial."
      />

      <div className="timeline">
        {education.map((item) => (
          <article className="timeline-item" key={item.title}>
            <div>
              <p>{item.status}</p>
              <h3>{item.title}</h3>
              <span>{item.institution}</span>
            </div>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
