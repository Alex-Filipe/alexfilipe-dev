import { profile } from "../../data/profile";

const navigationItems = [
  { label: "Sobre", href: "#about" },
  { label: "Experiencia", href: "#experience" },
  { label: "Projetos", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contato", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#about" aria-label="Ir para o inicio">
        {profile.name}
      </a>

      <nav className="site-nav" aria-label="Navegacao principal">
        {navigationItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
