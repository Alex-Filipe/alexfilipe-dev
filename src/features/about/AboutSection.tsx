import type { HeroMetric, Profile, SocialLink } from "../../types/portfolio";

type AboutSectionProps = {
  heroMetrics: HeroMetric[];
  profile: Profile;
  socialLinks: SocialLink[];
};

export function AboutSection({
  heroMetrics,
  profile,
  socialLinks,
}: AboutSectionProps) {
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

      <aside className="hero-panel" aria-label="Professional profile highlights">
        <div className="terminal-bar">
          <span />
          <span />
          <span />
        </div>
        <div className="terminal-body">
          <p className="terminal-command">alex.profile --stack</p>
          <div className="terminal-grid">
            {heroMetrics.map((metric) => (
              <div key={metric.label}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </div>
            ))}
          </div>
          <pre>{`const engineer = {
  backend: "C# / .NET",
  databases: ["PostgreSQL", "SQL Server"],
  integrations: true,
  research: "AI"
};`}</pre>
        </div>
      </aside>
    </section>
  );
}
