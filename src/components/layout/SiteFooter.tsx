import { uiLabels } from "../../i18n/labels";
import type { Language, Profile, SocialLink } from "../../types/portfolio";
import { externalLinkProps } from "../../utils/links";

type SiteFooterProps = {
  language: Language;
  profile: Profile;
  socialLinks: SocialLink[];
};

const footerCopy: Record<Language, { rights: string; built: string }> = {
  "pt-BR": {
    rights: "Todos os direitos reservados.",
    built: "Feito com React, TypeScript e Vite.",
  },
  "en-US": {
    rights: "All rights reserved.",
    built: "Built with React, TypeScript, and Vite.",
  },
};

export function SiteFooter({ language, profile, socialLinks }: SiteFooterProps) {
  const year = new Date().getFullYear();
  const copy = footerCopy[language];

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <p className="footer-name">{profile.name}</p>
          <p className="footer-meta">
            {profile.role} · {profile.location}
          </p>
        </div>

        <nav className="footer-links" aria-label={uiLabels[language].footerLinks}>
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} {...externalLinkProps(link.href)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="footer-bottom">
        <p>
          © {year} {profile.name}. {copy.rights}
        </p>
        <p>{copy.built}</p>
      </div>
    </footer>
  );
}
