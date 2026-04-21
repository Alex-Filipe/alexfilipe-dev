import { SectionHeading } from "../../components/ui/SectionHeading";
import { socialLinks } from "../../data/socialLinks";

export function ContactSection() {
  return (
    <section className="page-section contact-section" id="contact">
      <SectionHeading
        eyebrow="Contato"
        title="Vamos conversar sobre tecnologia, produto e carreira"
        description="Estou aberto a conexões profissionais, oportunidades e conversas sobre desenvolvimento de software, backend, integrações e aplicações de IA."
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
