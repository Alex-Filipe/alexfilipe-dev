import type { Language, Profile, SocialLink } from "../../types/portfolio";
import { HeroTerminal } from "./components/HeroTerminal";

type AboutSectionProps = {
  language: Language;
  profile: Profile;
  socialLinks: SocialLink[];
};

export function AboutSection({ language, profile, socialLinks }: AboutSectionProps) {
  return (
    <section className="hero-section" id="about">
      <div className="hero-content" data-reveal>
        <p className="eyebrow">{profile.role}</p>
        <p className="hero-headline">{profile.headline}</p>
        <p className="hero-summary">{profile.summary}</p>
        <p className="hero-summary">{profile.shortIntro}</p>

        <div className="hero-actions" aria-label="Links de contato">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <HeroTerminal language={language} />
    </section>
  );
}
