import { SectionHeading } from "../../components/ui/SectionHeading";
import { TimelineCard } from "../../components/ui/TimelineCard";
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

      <div className="timeline" data-reveal>
        {education.map((item) => (
          <TimelineCard
            description={item.description}
            highlights={item.highlights}
            key={item.title}
            meta={[item.status, item.institution]}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
}
