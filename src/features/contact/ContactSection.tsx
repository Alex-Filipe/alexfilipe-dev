import { SectionHeading } from "../../components/ui/SectionHeading";
import type { SectionCopy, SocialLink } from "../../types/portfolio";
import { externalLinkProps } from "../../utils/links";

type ContactSectionProps = {
  copy: SectionCopy;
  socialLinks: SocialLink[];
};

export function ContactSection({ copy, socialLinks }: ContactSectionProps) {
  return (
    <section className="page-section contact-section" id="contact">
      <SectionHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />

      <div className="contact-links" data-reveal>
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href} {...externalLinkProps(link.href)}>
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
