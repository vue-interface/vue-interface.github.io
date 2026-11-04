---
paths:
  - "packages/**"
  - "docs/**"
---

# Package Rules

These describe the existing packages. Copy from the closest sibling rather
than from this list. To create a new package, use the `new-package` skill.

## package.json

- Name `@vue-interface/<dir-name>`, `"type": "module"`, MIT, author
  `Justin Kimbrell`, repository/bugs/homepage fields copied from a sibling.
- Vue component packages:
  - `main` → `./dist/<pkg>.umd.cjs`, `module` → `./dist/<pkg>.js`, `types` → `./dist/index.d.ts`.
  - `exports["."]` has `source` (`./index.ts`), `types`, `style` (`./index.css`),
    `import` and `require`. Packages whose CSS other packages import also
    export `"./css": "./index.css"`.
  - Scripts: `dev: vite`, `build: vue-tsc && vite build`, `preview: vite preview`.
  - `files`: `src`, `dist`, `index.ts`, `index.css`, `README.md`, `LICENSE`.
- CSS-only packages (`btn`, `breadcrumb`, `pagination`): `main`/`module` are
  `./index.css`, no `exports`, no `index.ts`, no build script.
- `vue`, third-party libraries and other `@vue-interface/*` packages go in
  `peerDependencies`; internal ones use `workspace:*`. Run `pnpm install` after
  changing them.
- `vite.config.ts` is identical across Vue packages (peer dependencies are
  external, so siblings aren't bundled). The `source` export condition lets
  the dev server, docs and `vue-tsc` use siblings' sources directly.

## CSS (Tailwind v4)

Each package's `index.css` is its Tailwind entry. Consumers add
`@import '@vue-interface/<pkg>';` to their own CSS.

- `index.css` starts with `@import "tailwindcss";`, then imports dependency CSS
  (`@import "@vue-interface/form-control/css";`, `@import "@vue-interface/btn";`)
  and the package's own files (`./src/css/*.css` or `./src/*.css`), usually split
  into `<pkg>.css`, `colors.css` and `sizes.css`.
- Themeable values are `@theme` variables prefixed with the component name.
  Colors fall back through a semantic token to a Tailwind color:
  `--btn-primary: var(--color-primary, var(--color-blue-600));`.
- Styling is exposed as `@utility` classes. Color and size modifiers are
  functional utilities that resolve with `--value()`:

  ```css
  @utility btn-* {
      background-color: --value(--btn-*, --color-*, [color]);  /* btn-primary, btn-blue-500, btn-[#123456] */
      font-size: --value(--btn-font-size-*, [length]);          /* btn-md, btn-[1.25rem] */
      font-size: --spacing(--value(number));                    /* btn-4 */
  }
  ```

  The size utility must accept every format `ComponentSize<Prefix>` from
  `@vue-interface/sizeable` allows: predetermined (`btn-md`, with a
  `--<pkg>-font-size-<size>` variable for each step from `xs` to `5xl` in `sizes.css`),
  numeric (`btn-4`) and arbitrary (`btn-[2rem]`). `sizeable` owns the size
  scale; packages don't invent their own size names.
- Text color on a colored background comes from the `--text-for-<color>-<shade>`
  variables in the package's `colors.css`.
- Dark mode is `@variant dark { ... }` inside the utility, using
  dark-specific variables (named `--popover-dark-bg` or `--dropdown-menu-bg-dark`;
  follow the package).
- Renaming or removing a CSS variable, utility or modifier is a breaking change.

## Demo and docs

- `index.html` is the local Vite playground (`pnpm --filter
  @vue-interface/<pkg> dev`). Most packages have a `demo.css` that imports
  `tailwindcss`, `./index.css`, any sibling CSS the demo uses, and the
  `@custom-variant dark` line. Keep the demo working when changing the component.
- **The docs page is built from `index.html`.** The demo is written first, while
  developing the component. The docs page then takes the demo's sections
  (its `<h2>`/`<h3>` headings) in the same order, with the same examples, and adds:
  - Installation and Tailwind Setup at the top
  - the region + `Show Code` wrapper around each example
  - Sizes split into Predetermined / Tailwind / Arbitrary when the demo has them
  - an `## API` section (`### Props`, `### Slots`, `### Events`) at the end, as
    `badge` and `progress-bar` have

  Compare `badge/index.html` with `badge/docs/index.md`. When a component
  changes, update the demo and carry the change over to the docs page.
- `docs/index.md` follows an existing page:
  1. Frontmatter `title`, then `<script setup>` importing `../demo.css` (or
     `../index.css` where there's no `demo.css`) and the components from `../src/`.
  2. Intro, `### Installation` code-group (pnpm, yarn, npm, bun),
     `### Tailwind Setup` with the `@import` lines, including dependencies'.
  3. `## Basic Usage`, then a section per feature. Common ones: `## Sizes` with
     `### Predetermined Sizes`, `### Tailwind Sizes`, `### Arbitrary Sizes`, and
     `## Custom Colors`.
  4. Each example is the live markup wrapped in a `<div class="flex ...">`, with
     `<!-- #region name -->` … `<!-- #endregion name -->` inside, followed by:

     ```md
     ::: details Show Code
     <<< ./index.md#name{html}
     :::
     ```

     Use `::: info` / `::: tip` for notes.
- Extra pages go in `docs/<page>.md` (served at `/packages/<pkg>/<page>`).
- New pages must be added to both `docs/.vitepress/theme/sidebar.ts` and
  `docs/packages.md`.
