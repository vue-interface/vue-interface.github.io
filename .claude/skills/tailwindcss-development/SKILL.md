---
name: tailwindcss-development
description: "Use when writing or changing Tailwind CSS in this repo: a package's index.css or src/*.css (@theme variables, @utility classes, functional utilities with --value(), @variant dark), Tailwind classes in .vue templates, index.html demos or docs pages, dark mode, sizes or color variants, or anything mentioning 'tailwind'. Skip for TypeScript-only logic, package.json, build config, and changesets."
license: MIT
metadata:
  author: laravel (adapted for vue-interface)
---

# Tailwind CSS Development (v4)

vue-interface ships Tailwind v4 CSS as part of each package. Consumers add
`@import '@vue-interface/<pkg>';` to their own Tailwind entry, so a package's
CSS runs inside *their* build. Read the CSS section of
`.claude/rules/packages.md`, then open the closest sibling's `index.css` and
`src/` CSS (`btn`, `badge`, `form-control` are the fullest examples) before
writing anything.

## Where styles go

- Components are styled by the package's own utilities. Templates mostly carry
  one or two package classes (`class="btn"`, `:class="[size, variant]"`), not
  long Tailwind class lists. Tailwind v4 doesn't scan `node_modules`, so
  utilities defined in the package CSS are what reliably reach consumer apps.
  (`Popover`'s content panel is the one component styled with template classes.)
- Template utility classes are normal in `index.html` demos and docs pages,
  which are built inside this repo.
- Every themeable value is a `@theme` variable named after the component.
  Colors fall back through a semantic token to a Tailwind color:

  ```css
  @theme {
      --btn-primary: var(--color-primary, var(--color-blue-600));
      --btn-primary-text: var(--color-white);
      --btn-font-size-md: --spacing(4);
  }
  ```

## Modifiers are functional utilities

Color and size modifiers are one `@utility <name>-*` that resolves its value
with `--value()`, so a single rule covers theme names, any Tailwind color,
numbers and arbitrary values:

```css
@utility btn-* {
    background-color: --value(--btn-*, --color-*, [color]);
    color: --value(--text-for-*, --btn-*-text);
    font-size: --value(--btn-font-size-*, [length]);
    font-size: --spacing(--value(number));

    &:hover {
        background-color: color-mix(in oklch, --value(--btn-*, --color-*) 90%, black);
    }
}
```

That gives `btn-primary`, `btn-blue-500`, `btn-[#123456]`, `btn-md`, `btn-4` and
`btn-[1.25rem]`, which is what `ComponentSize<'btn'>` in
`@vue-interface/sizeable` types. Readable text on a colored background comes
from the `--text-for-<color>-<shade>` variables in `colors.css`. Use `--alpha()`
and `color-mix(in oklch, ...)` for derived shades, as the siblings do.

## Dark mode

Components support dark mode with `@variant dark { ... }` inside the utility,
reading dark-specific variables. Demos and docs switch it with
`@custom-variant dark (&:where(.dark, .dark *));` in `demo.css`.

## v4 syntax

- `@import "tailwindcss";`, never `@tailwind base/components/utilities`.
- Configuration is CSS-first with `@theme`. There is no `tailwind.config.js`
  and no `corePlugins`.
- Custom classes use `@utility`, not `@layer components`. `@apply` works with
  package utilities (`@apply btn-primary;` in `modal.css`).
- Removed v3 utilities and their replacements:

  | v3 | v4 |
  |---|---|
  | `bg-opacity-*`, `text-opacity-*`, `border-opacity-*`, `ring-opacity-*` | `bg-black/50`, etc. |
  | `flex-shrink-*` / `flex-grow-*` | `shrink-*` / `grow-*` |
  | `overflow-ellipsis` | `text-ellipsis` |
  | `decoration-slice` / `decoration-clone` | `box-decoration-slice` / `box-decoration-clone` |
  | `shadow-sm` / `shadow` | `shadow-xs` / `shadow-sm` |
  | `rounded-sm` / `rounded` | `rounded-xs` / `rounded-sm` |
  | `outline-none` | `outline-hidden` |
  | `ring` (3px) | `ring-3` |

## Breaking changes

Renaming or removing a `--<component>-*` variable, a utility class, or a
size/color modifier breaks consumers and needs a `major` changeset. Adding one
is `minor`.

## Pitfalls

- A new themeable value hard-coded instead of exposed as a `@theme` variable.
- A separate utility per color or size instead of one functional `<name>-*` utility.
- Missing the `@variant dark` block.
- Forgetting to import a dependency's CSS in `index.css` or in the demo's `demo.css`.
- Using v3 utilities or directives.
