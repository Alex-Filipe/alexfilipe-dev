---
name: react-project-architecture
description: Use this skill when creating or evolving the React front-end architecture for this portfolio project. It defines the default folder structure, file placement rules, separation of concerns, and consistency guidelines for React components, pages, hooks, services, data, assets, styles, and features. Apply it during initial project setup and whenever adding new front-end code, unless there is a valid technical reason to place something outside the structure.
---

# React Project Architecture

Use this skill to create and maintain a clean, professional, scalable, and practical React architecture for a front-end portfolio/resume project.

The goal is to avoid two extremes:

- an overly simple structure where everything is mixed together;
- an overly complex architecture with unnecessary layers for a portfolio.

## Principles

- Keep responsibilities separated.
- Organize by purpose before introducing abstractions.
- Prefer clear and direct names.
- Avoid empty folders or speculative "future-proof" layers.
- Shared components live in `components/`.
- Components specific to a section or page live close to the feature/page that uses them.
- Reusable hooks live in `hooks/`.
- External calls, APIs, and integrations live in `services/`.
- Editable static portfolio content lives in `data/`.
- Shared types live in `types/`.
- Pure utilities live in `utils/`.
- Global styles live in `styles/`.
- Assets imported by the code live in `assets/`.

## Default Structure

When creating the React project, use this structure as the default baseline:

```text
src/
  app/
    App.tsx
    routes.tsx
  assets/
    images/
    icons/
  components/
    ui/
    layout/
  data/
  features/
    about/
    contact/
    experience/
    projects/
    skills/
  hooks/
  lib/
  pages/
  services/
  styles/
    globals.css
  types/
  utils/
  main.tsx
```

If the project does not need routes at first, `routes.tsx` can be omitted until it becomes necessary.

## Folder Responsibilities

### `src/app/`

Main application composition files.

- `App.tsx`: main application structure.
- `routes.tsx`: route configuration when the project has more than one page.

Do not place generic visual components here.

### `src/pages/`

Top-level pages.

Examples:

- `HomePage.tsx`
- `ResumePage.tsx`
- `NotFoundPage.tsx`

Pages should compose sections, features, and components. Avoid concentrating too much visual logic or content data directly inside pages.

### `src/features/`

Functional areas of the portfolio. Use this for sections with their own identity.

Example:

```text
features/
  projects/
    components/
      ProjectCard.tsx
      ProjectsGrid.tsx
    projects.types.ts
    projects.utils.ts
    ProjectsSection.tsx
```

Use `features/` when an area has its own components, types, derived data, or logic. For very simple sections, a single component can live directly inside the feature folder.

### `src/components/`

Reusable components that are independent from a specific domain area.

- `components/ui/`: buttons, inputs, badges, base cards, tabs, tooltips, and small reusable UI elements.
- `components/layout/`: header, footer, containers, navigation, and layout structures.

Do not place project-specific, experience-specific, or contact-specific components here if they only serve one feature.

### `src/data/`

Static portfolio data.

Examples:

- `profile.ts`
- `projects.ts`
- `experience.ts`
- `skills.ts`
- `socialLinks.ts`

Use this when content should be easy to edit without touching component implementation.

### `src/hooks/`

Reusable React hooks.

Examples:

- `useMediaQuery.ts`
- `useScrollSpy.ts`
- `useTheme.ts`

Feature-specific hooks can live inside the feature if they are not reused elsewhere.

### `src/services/`

External integrations and infrastructure-level side effects.

Examples:

- form submission;
- HTTP clients;
- analytics;
- CMS or API integrations.

Do not place pure transformations here; use `utils/` or feature-local files instead.

### `src/lib/`

External library configuration or instances.

Examples:

- analytics client;
- animation configuration;
- library wrappers.

Use this sparingly. If there is no real need, do not create files here.

### `src/types/`

TypeScript types shared across multiple parts of the project.

Types used by only one feature should stay inside that feature.

### `src/utils/`

Reusable pure functions with no React dependency.

Examples:

- formatters;
- validators;
- sorting helpers;
- simple string/date manipulation.

### `src/styles/`

Global styles, CSS tokens, and base style configuration.

Avoid turning this folder into a place for component-specific styles.

### `src/assets/`

Images, icons, and resources imported by the code.

Public files that need a stable URL can live in `public/`, outside `src/`.

## Rules For New Files

Before creating a file, decide:

1. Is it reusable across multiple areas?
2. Does it belong to a specific feature?
3. Is it a page, component, hook, service, type, data file, or utility?

Use these rules:

- Component used by one feature only: place it inside that feature.
- Generic component used in more than one place: place it in `components/ui/` or `components/layout/`.
- Routable page: place it in `pages/`.
- Main portfolio section: place it in `features/{name}/`.
- Editable static content: place it in `data/`.
- Reusable hook: place it in `hooks/`.
- Feature-specific hook: place it inside the feature.
- External integration: place it in `services/` or `lib/`.
- Shared type: place it in `types/`.
- Feature-specific type: place it inside the feature.
- Shared pure function: place it in `utils/`.
- Feature-specific pure function: place it inside the feature.

## Naming Conventions

- React components: `PascalCase.tsx`.
- Hooks: `useHookName.ts`.
- Feature-specific types: `{feature}.types.ts`.
- Feature-specific utilities: `{feature}.utils.ts`.
- Static data: descriptive `camelCase.ts` names, such as `projects.ts`.
- Avoid generic names like `helpers.ts`, `misc.ts`, `common.ts`, or `utils.ts` when a more specific name is possible.

## Complexity Guardrails

Create a new folder only when it organizes at least two related files or when its role is very clear.

Do not create these at the beginning:

- `store/`, unless there is real global state;
- `contexts/`, unless there is real React context usage;
- `api/`, if `services/` already solves the need;
- `models/`, if `types/` and feature-local types already solve the need;
- `constants/`, if the data belongs better in `data/` or inside a feature.

## Portfolio Default

For this project, treat these areas as natural features:

- `about`: personal presentation and professional narrative;
- `experience`: professional experience and history;
- `projects`: projects, cards, filters, and links;
- `skills`: technologies, tools, and competencies;
- `contact`: social links, contact form, and contact call to action.

If an area grows, organize it internally with:

```text
feature-name/
  components/
  hooks/
  feature-name.types.ts
  feature-name.utils.ts
  FeatureNameSection.tsx
```

Only create internal subfolders when there are real files to place in them.

## Exceptions

Something may live outside the default structure only when there is a clear technical reason, such as a framework requirement, plugin requirement, build tool requirement, library convention, or Vite/React convention.

When using an exception, briefly explain the reason before or together with the change.
