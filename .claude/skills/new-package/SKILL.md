---
name: new-package
description: "Set up a new @vue-interface/* package in packages/ by copying badge's file structure, renaming it, leaving the component, CSS, demo and docs files blank, and running pnpm install. Use when the user asks to add, create, scaffold, set up or start a new component, package, field, directive or composable package. Not for adding a component or feature to an existing package."
---

# New Package

A new package starts as a copy of `packages/badge`'s **file structure**, not its
content. Three kinds of file:

- **Copied unchanged**: config that is identical across packages
- **Renamed**: files whose shape is shared but which mention the package name
- **Blank**: everything that is specific to the component

The default job is the scaffold: stop at step 5 and tell the user it's ready.
Only write the component, CSS, demo or docs when the user asks for them.

## 1. Names

Confirm these with the user if they're unclear:

| Name | Example | Used for |
|---|---|---|
| `<dir>` (kebab-case) | `progress-bar` | directory, `@vue-interface/<dir>`, `dist/<dir>.*`, CSS file name, docs URL, commit scope |
| `<Component>` (PascalCase) | `ProgressBar` | `.vue` file name, `index.ts` export |
| Dependencies | `sizeable`, `@heroicons/vue` | `peerDependencies`. Third-party deps need the user's OK |

Run `npm view @vue-interface/<dir> version`. If the name is already published
(an older version of the library), tell the user and start from that version.
Otherwise use `"version": "0.0.0"`.

## 2. Copy unchanged

Copy these from `packages/badge` byte for byte:

- `tsconfig.json`
- `vite.config.ts`
- `LICENSE`
- `.gitignore`

They're identical in most packages, and `vite.config.ts` reads the file name
from `package.json`, so it needs no edits.

**Never copy** `node_modules/`, `dist/`, `.turbo/` or `CHANGELOG.md`.
`pnpm install` creates `node_modules`, the build creates `dist`, and
changesets creates the changelog on the first release.

## 3. Rename

Copy each of these, then change only the names:

- **`package.json`**:
  - `name` → `@vue-interface/<dir>`, and `version` from step 1
  - `main`, `module`, and the `import`/`require` paths in `exports` → `dist/<dir>.*`
  - `homepage` → `https://vue-interface.github.io/packages/<dir>`
  - `description` and `keywords` → describe the new component
  - `peerDependencies` → `vue` plus the dependencies from step 1. Internal ones use `workspace:*`.
    Keep `@vue-interface/sizeable` if the component will have sizes, which most do.
  - Everything else stays as in badge: `exports` shape, `./css`, scripts, `files`, author, repository and bugs.
- **`index.ts`**: the same three statements with `<Component>`:

  ```ts
  import ProgressBar from './src/ProgressBar.vue';

  export * from './src/ProgressBar.vue';

  export {
      ProgressBar
  };
  ```

- **`index.css`**: the same imports, with `badge.css` renamed to `<dir>.css`:

  ```css
  @import 'tailwindcss';

  @import './src/css/sizes.css';
  @import './src/css/colors.css';

  @import './src/css/<dir>.css';
  ```

- **`demo.css`**: it contains no names, so copy it as is. Sibling CSS imports
  are added later if the demo needs them.

## 4. Blank

Create these files empty:

- `src/<Component>.vue`
- `src/css/<dir>.css`
- `src/css/colors.css`
- `src/css/sizes.css`
- `index.html`
- `docs/index.md`
- `README.md`

Don't carry over any of badge's markup, styles, examples or text. The user
writes these for the new component.

The resulting tree:

```
packages/<dir>/
  .gitignore  LICENSE  tsconfig.json  vite.config.ts   # copied
  package.json  index.ts  index.css  demo.css          # renamed
  README.md  index.html  docs/index.md                 # blank
  src/<Component>.vue                                  # blank
  src/css/<dir>.css  src/css/colors.css  src/css/sizes.css   # blank
```

## 5. Install

Run `pnpm install` from the repo root once `package.json` is in place. It links
the new workspace package, creates its `node_modules`, and updates
`pnpm-lock.yaml`.

Don't run the build yet. It fails until the `.vue` file has a `<script>` or
`<template>` block, and that's expected.

Report the tree and the `package.json` peer dependencies to the user, and stop
here unless they asked for more.

## Building it out (when asked)

When the user asks to write the package, follow:

- `.claude/rules/vue.md` for the component
- the `tailwindcss-development` skill and `.claude/rules/packages.md` for the CSS
- the "Demo and docs" section of `packages.md` for the demo and docs

In short:

1. **Component and CSS**: an exported `<Component>Props` type with `withDefaults`,
   and sizes from `@vue-interface/sizeable`. Use `@theme` variables, an `@utility <dir>`
   class, and functional `<dir>-*` color and size modifiers with dark mode.
2. **Demo**: `index.html` mounts the component from `./index.ts`. Copy the
   `<head>`, `<body>` classes and `<script type="module">` shape from badge's.
   Start it with `pnpm --filter @vue-interface/<dir> dev`, or with the `demo`
   entry in `.claude/launch.json` after changing its package name.
3. **Docs**: build `docs/index.md` from the finished `index.html`. Add the page to
   `docs/.vitepress/theme/sidebar.ts` and `docs/packages.md`, in alphabetical order.
   `README.md` follows badge's shape: title, description, install commands, basic
   usage, and a link to the docs.
4. **Verify**:
   - `pnpm --filter @vue-interface/<dir> build` passes
   - `npx eslint 'packages/<dir>/**/*.{ts,vue}'` reports no problems
   - the page renders in `pnpm docs:dev`, in light and dark mode
5. **Commit**: commit as `feat(<dir>): add <component> component` if the user
   asks. Ask before adding a changeset. When they're ready, use the `changeset`
   skill with `"@vue-interface/<dir>": major`, so the first release is `1.0.0`.

## Other kinds of package

Badge is the template for Vue components. For other kinds, take the copied and
renamed files from the closest sibling instead:

| Kind | Copy from | Differences from badge |
|---|---|---|
| CSS only | `btn` | `vite.config.ts` has the peer externals commented out. `main`/`module` are `./index.css`, with no `exports`, `index.ts` or build script |
| Form field | `input-field` | depends on `form-control`. Its `tsconfig.json` also includes `vite.config.js` |
| Floating UI | `tooltip`, `popover` | depends on `@floating-ui/vue` |
| Directive | `autogrow` | no `index.css` or `src/css/` |
