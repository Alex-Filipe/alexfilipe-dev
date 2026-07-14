import { uiLabels } from "../../i18n/labels";
import type { Language, Profile, SocialLink } from "../../types/portfolio";
import { externalLinkProps } from "../../utils/links";
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
        <h1 className="hero-headline">{profile.headline}</h1>
        <p className="hero-summary">{profile.summary}</p>
        <p className="hero-summary">{profile.shortIntro}</p>

        <div className="hero-actions" aria-label={uiLabels[language].contactLinks}>
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} {...externalLinkProps(link.href)}>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <HeroTerminal language={language} />
    </section>
  );
}
