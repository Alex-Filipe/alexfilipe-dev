import type { Profile } from "../../types/portfolio";

type SiteFooterProps = {
  profile: Profile;
};

export function SiteFooter({ profile }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <p>{profile.name}</p>
      <p>Brasil</p>
    </footer>
  );
}
