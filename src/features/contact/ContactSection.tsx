import { SectionHeading } from "../../components/ui/SectionHeading";
import { socialLinks } from "../../data/socialLinks";

export function ContactSection() {
  return (
    <section className="page-section contact-section" id="contact">
      <SectionHeading
        eyebrow="Contato"
        title="Vamos conversar"
        description="Links iniciais para facilitar conexoes profissionais, oportunidades e conversas sobre projetos."
      />

      <div className="contact-links">
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
