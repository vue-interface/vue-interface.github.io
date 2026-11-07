---
paths:
  - "packages/**/*.vue"
  - "packages/**/*.ts"
---

# Vue / TypeScript Rules

These describe the existing code. When a file you're editing does something
slightly differently, match the file.

## Components

- `<script setup lang="ts">` (a few files write `<script lang="ts" setup>`).
  Block order is script, template, style. Purely presentational components can
  be template-only (the `activity-indicator` types). `<style>` blocks are rare;
  styling lives in the package CSS.
- Props: an exported `<Name>Props` type plus
  `withDefaults(defineProps<<Name>Props>(), { ... })`. Optional props without a
  real default are listed as `undefined` in `withDefaults` (ESLint's
  `vue/require-default-prop`). Small internal components may use
  `defineProps<T>()` with no defaults.
- Emits: `defineEmits<{ click: [event: MouseEvent] }>()` with tuple syntax, or a
  shared events type (`defineEmits<FormControlEvents>()` in the field packages).
- `defineModel<T>()` for v-model, `defineSlots<{ ... }>()` for typed slots,
  `defineExpose({ ... })` for what a parent may call (`focus`, `open`, `close`,
  element refs).
- Template refs: most components use `useTemplateRef<T>('name')`; `popover` and
  `slide-panel` use `ref<HTMLElement | null>(null)`. Use `useTemplateRef` in new
  code, and match the file when editing.
- Components that forward attrs to an inner element use
  `defineOptions({ inheritAttrs: false })`.
- Generic components use `<script setup lang="ts" generic="ModelValue, Value">`.
  Types the generic script needs at module level go in a second plain
  `<script lang="ts">` block (see `input-field/src/InputField.vue`).
- **Sizes always come from `@vue-interface/sizeable`.** It's the parent package
  that defines the size scale (`2xs` … `5xl`, numeric, `[arbitrary]`) for every
  package. Never define a size union or size type locally. Declare a prefix
  type and use `ComponentSize`:

  ```ts
  import type { ComponentSize } from '@vue-interface/sizeable';

  export type BadgeSizePrefix = 'badge';
  export type BadgeSize = ComponentSize<BadgeSizePrefix>;
  ```

  The `size` prop defaults to `'<prefix>-md'` and is applied directly as a class
  (`:class="size"`). Packages using it list `@vue-interface/sizeable` as a
  `workspace:*` peer dependency. Field components get `size` through
  `FormControlProps`, which uses `sizeable` itself.
- Form fields build on `useFormControl`, `FormControlProps`, `FormControlEvents`
  and `FormControlSlots` from `@vue-interface/form-control`. Don't reimplement
  label, error, feedback or size handling.

## TypeScript

- `export type`, never `interface`.
- Strict mode with `noUnusedLocals` and `noUnusedParameters`. No `any` (ESLint
  errors on it): use `unknown` or a real type. The one exception is a
  commented `eslint-disable` in `autogrow/src/vAutogrow.ts`.
- Type-only imports use `import type { ... }` or inline `type` modifiers.
- Each package's `index.ts` imports its components, re-exports their types with
  `export *`, and exports the components by name:

  ```ts
  import Popover from './src/Popover.vue';

  export * from './src/Popover.vue';

  export {
      Popover
  };
  ```

## Style

`eslint.config.ts` describes the style, and every file passes it:

- 4-space indent in scripts and templates, single quotes, semicolons.
- No space after `if`, `for`, `while`: `if(open) {`.
- Multi-line tags close on the last attribute line: `class="relative">`.
- PascalCase component names in templates.

Run `pnpm lint`, or `npx eslint <files>` for just the files you changed. Lint
is clean (0 problems since November 2026), so any problem it reports in a file
you touched is yours to fix before committing.
