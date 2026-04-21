import { profile } from "../../data/profile";

const navigationItems = [
  { label: "Sobre", href: "#about" },
  { label: "Experiência", href: "#experience" },
  { label: "Projetos", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Formação", href: "#education" },
  { label: "Contato", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#about" aria-label="Ir para o início">
        {profile.name}
      </a>

      <nav className="site-nav" aria-label="Navegação principal">
        {navigationItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
