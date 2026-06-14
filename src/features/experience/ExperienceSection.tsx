import { SectionHeading } from "../../components/ui/SectionHeading";
import { TimelineCard } from "../../components/ui/TimelineCard";
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

      <div className="timeline" data-reveal>
        {experiences.map((experience) => (
          <TimelineCard
            description={experience.description}
            highlights={experience.highlights}
            key={`${experience.company}-${experience.period}`}
            meta={[experience.period, experience.company, experience.location]}
            title={experience.role}
          />
        ))}
      </div>
    </section>
  );
}
