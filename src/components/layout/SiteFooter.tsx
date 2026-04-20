import { profile } from "../../data/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>{profile.name}</p>
      <p>{profile.location}</p>
    </footer>
  );
}
