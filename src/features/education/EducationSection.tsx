import { SectionHeading } from "../../components/ui/SectionHeading";
import type { Education, SectionCopy } from "../../types/portfolio";

type EducationSectionProps = {
  copy: SectionCopy;
  education: Education[];
};

export function EducationSection({ copy, education }: EducationSectionProps) {
  return (
    <section className="page-section" id="education">
      <SectionHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
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
