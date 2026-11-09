# Repository guidance

## Project overview

Procurement AI Workbench is a small React and TypeScript application built with
Vite. It models a procurement request workflow while keeping the implementation
approachable for learning and experimentation.

## Project structure

- `src/components/` contains reusable React components and their colocated CSS
  Modules.
- `src/data/` contains demonstration data.
- `src/domain/` contains shared domain types.
- `src/App.tsx` composes the application page.
- `src/styles.css` contains global defaults and shared design tokens only.
- `.agents/skills/` contains repository-local Codex skills.

## Development commands

```sh
npm install
npm run dev
npm run typecheck
npm run build
```

Run `npm run typecheck` after TypeScript changes. Run `npm run build` before
handing off changes that affect application code, styles, or build configuration.

## Code conventions

- Keep TypeScript strict and give component props explicit interfaces.
- Keep domain types independent from React components.
- Prefer small components with data passed through props over components that
  import demonstration data directly.
- Use stable, domain-derived React keys.
- Preserve accessible labels, keyboard focus states, and support for a 320 px
  viewport.
- Avoid adding dependencies when the platform or current toolchain already
  provides the needed capability.

## Styling conventions

- Use CSS Modules for page and component styles.
- Colocate a component's stylesheet as `<ComponentName>.module.css`.
- Keep only resets, document defaults, and shared design tokens in
  `src/styles.css`.
- Use the shared custom properties from `src/styles.css` instead of repeating
  colors, radii, or shadows.
- Add a global selector only when its behavior is intentionally application-wide.

## Repository skills

Store each repeatable workflow in `.agents/skills/<skill-name>/SKILL.md`.
Skills should have a narrow purpose and a description that clearly states both
what the skill does and when it should be used. Put deterministic helpers in a
skill's optional `scripts/` directory and supporting material in `references/`
or `assets/`.

The `_template` directory is scaffolding only. Copy it to a clearly named skill
directory, rename `SKILL.example.md` to `SKILL.md`, and replace every placeholder
before using the skill.
