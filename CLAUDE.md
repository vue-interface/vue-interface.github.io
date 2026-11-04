# Vue Interface

A pnpm + Turborepo monorepo of Vue 3 UI components styled with Tailwind CSS v4.
Each package in `packages/*` is published independently to npm as
`@vue-interface/<dir-name>`. Documentation is a single VitePress site built from
`docs/` and each package's `docs/` folder, deployed to
https://vue-interface.github.io.

Stack: TypeScript (strict), Vue 3 `<script setup>`, Tailwind CSS v4, HTML5.
There is no test suite; the `verify` skill (build, lint changed files, check the docs page) is the check.

## Commands

Run from the repo root unless noted. Node >= 22, pnpm.

- `pnpm install` — after cloning, adding a package, or changing any package.json
- `pnpm --filter @vue-interface/<pkg> build` — **default way to build.** Runs
  `vue-tsc && vite build` for the package you changed; sibling packages resolve
  from source, so they don't need building first. Run it once per changed package.
- `pnpm build` — `turbo run build --affected` across the repo. Only when the
  user asks, or before a change that touches many packages.
- `pnpm --filter @vue-interface/<pkg> dev` — Vite demo server for one package (serves its `index.html`)
- `pnpm lint` / `pnpm lint:fix` — ESLint over `packages/**/*.{ts,vue}`; `npx eslint <files>`
  for just the files you changed. Existing problems: see `.claude/rules/vue.md`
- `pnpm docs:dev` — VitePress on http://localhost:5173 (`docs` in `.claude/launch.json`)
- `pnpm changeset` — interactive; write the `.changeset/*.md` file directly instead
  (`changeset` skill, `.claude/rules/versioning.md`)

Never run `pnpm version` or `pnpm release` — the Release workflow does that.

## Layout

```
packages/<pkg>/     # typical Vue component package; others omit some files
  index.ts          # public entry: re-exports components and types from src/
  index.css         # Tailwind entry: imports src/ CSS (@theme variables + @utility classes)
  src/              # .vue components, composables, src/css/*.css
  docs/index.md     # VitePress page, served at /packages/<pkg>/
  index.html        # local Vite demo (not published)
  demo.css          # styles for the demo and docs pages (most packages)
  vite.config.ts    # library build + vite-plugin-dts (identical across Vue packages)
  package.json      # exports map, peerDependencies
docs/
  .vitepress/config.mts        # srcDir is the repo root; rewrites packages/*/docs
  .vitepress/theme/sidebar.ts  # package sidebar — update when adding a page
  packages.md                  # package index — update when adding a page
.changeset/         # pending version bumps
```

Package kinds:
- **Vue component** (most): builds to `dist/`, exports `.` and usually `./css`.
- **CSS only** (`btn`, `breadcrumb`, `pagination`): `main` is `index.css`, no build.
- **Types only** (`sizeable`): the parent of all sizing. Its `index.d.ts` defines
  the size scale and the `ComponentSize<Prefix>` type that every package's sizes
  must use.

Packages depend on each other through `peerDependencies` with `workspace:*`.
Shared foundations: `sizeable`, `form-control` (base for all `*-field`
packages), `activity-indicator`, `btn`.

## Conventions

- The existing code is the standard. Match the sibling packages: before creating
  or changing a package, look at a similar existing one and follow its structure,
  naming and file layout. Don't refactor existing code to fit the rules unless asked.
- Don't add dependencies or new top-level folders without asking.
- Changesets are not added per commit. The user adds the version bump once a
  change is tested and they're satisfied with it, so ask before creating one.
- Every package with sizes uses `@vue-interface/sizeable`; see `.claude/rules/vue.md`.
- Detailed rules live in `.claude/rules/`: `git.md`, `versioning.md`, `vue.md`, `packages.md`.
