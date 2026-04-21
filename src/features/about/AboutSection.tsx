import type { Profile, SocialLink } from "../../types/portfolio";

type AboutSectionProps = {
  profile: Profile;
  socialLinks: SocialLink[];
};

export function AboutSection({ profile, socialLinks }: AboutSectionProps) {
  return (
    <section className="hero-section" id="about">
      <div className="hero-content">
        <p className="eyebrow">{profile.role}</p>
        <h1>{profile.name}</h1>
        <p className="hero-headline">{profile.headline}</p>
        <p className="hero-summary">{profile.summary}</p>
        <p className="hero-summary">{profile.shortIntro}</p>

        <div className="hero-actions" aria-label="Links de contato">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
