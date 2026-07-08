# alexfilipe.dev — Portfolio

Personal portfolio and CV of **Alex Filipe**, a software engineer focused on
backend development, APIs, system integrations, and scalable applications
(C#/.NET), with research in efficient AI (knowledge distillation).

🔗 **Live:** https://alex-filipe.github.io/alexfilipe-dev/

## Tech stack

- **React 19** + **TypeScript** (strict)
- **Vite** for build/dev
- **CSS** design tokens with light/dark themes
- **ESLint** for linting
- **GitHub Actions** for CI/CD + **Lighthouse** audits + **Dependabot**

## Features

- Bilingual content (PT-BR / EN-US) with a language switcher
- Light/dark theme with system-preference detection and persistence
- Accessible: skip link, `aria-current`, reduced-motion support, no FOUC
- SEO: Open Graph / Twitter cards, JSON-LD, per-language metadata
- Animated hero terminal that cycles through tech profiles

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build
npm run lint     # run ESLint
npm run preview  # preview the production build
```

## CI/CD

Every push and pull request runs lint + build. Merges to `main` deploy to
GitHub Pages automatically. Pull requests also get a Lighthouse audit, and
Dependabot keeps dependencies up to date weekly. See
[`.github/workflows`](.github/workflows).

## License

[MIT](LICENSE) © Alex Filipe
