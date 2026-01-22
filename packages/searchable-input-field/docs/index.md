---
title: Searchable Select Field
---

<script setup>
import '../demo.css'
import { ref } from 'vue'
import SearchableSelectField from '../src/SearchableSelectField.vue';

const value = ref()
const selected = ref()
const options = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
    'Option 7',
    'Option 8',
    'Option 9',
    'Option 10'
];

const options1 = [
    'JavaScript',
    'Python',
    'Java',
    'TypeScript',
    'C#',
    'C++',
    'PHP',
    'Go',
    'Rust',
    'Swift'
];

function onChange(newValue) {
    console.log('change', newValue)
}
</script>

# Searchable Select Field

The `searchable-select-field` component provides a searchable dropdown input with customizable sizes, states, and styling.

### Installation

::: code-group
```bash [pnpm]
pnpm i @vue-interface/searchable-select-field
```

```bash [yarn]
yarn add @vue-interface/searchable-select-field
```

```bash [npm]
npm i @vue-interface/searchable-select-field
```

```bash [bun]
bun i @vue-interface/searchable-select-field
```
:::

### Tailwind Setup

```css
@import '@vue-interface/searchable-select-field/index.css';
```

## Basic Usage

The `searchable-select-field` requires an `options` prop array.

<div class="flex flex-col gap-4">
    <!-- #region basicUsage -->
    <SearchableSelectField v-model="selected" :options="options1"></SearchableSelectField>
    <SearchableSelectField :options="options" label="With Label" placeholder="Placeholder"></SearchableSelectField>
    <SearchableSelectField :options="options" label="Disabled" disabled></SearchableSelectField>
    <!-- #endregion basicUsage -->
</div>

::: details Show Code
<<< ./index.md#basicUsage{html}
:::

## Sizes

Customize the size using [predetermined size](#predetermined-sizes), [tailwind's numeric sizing classes](#tailwind-sizes), or an [arbitrary](#arbitrary-sizes) CSS length unit.

### Predetermined Sizes

The size can be customized using predetermined `size prop` values: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`. Use the syntax: `form-control-[size]`.

<div class="flex flex-col gap-3">
    <!-- #region predeterminedSizes -->
    <SearchableSelectField :options="options" label="xs" size="form-control-xs"></SearchableSelectField>
    <SearchableSelectField :options="options" label="sm" size="form-control-sm"></SearchableSelectField>
    <SearchableSelectField :options="options" label="md" size="form-control-md"></SearchableSelectField>
    <SearchableSelectField :options="options" label="lg" size="form-control-lg"></SearchableSelectField>
    <SearchableSelectField :options="options" label="xl" size="form-control-xl"></SearchableSelectField>
    <SearchableSelectField :options="options" label="xl" size="form-control-2xl"></SearchableSelectField>
    <SearchableSelectField :options="options" label="xl" size="form-control-3xl"></SearchableSelectField>
    <SearchableSelectField :options="options" label="xl" size="form-control-4xl"></SearchableSelectField>
    <SearchableSelectField :options="options" label="xl" size="form-control-5xl"></SearchableSelectField>
    <!-- #endregion predeterminedSizes -->
</div>

::: details Show Code
<<< ./index.md#predeterminedSizes{html}
:::

### Tailwind Sizes

For more granular control over sizes, use Tailwind's numeric sizing scale classes: `form-control-1` - `form-control-96`

<div class="flex flex-col gap-3">
    <!-- #region tailwindSizes -->
    <SearchableSelectField :options="options" label="form-control-3" size="form-control-3"></SearchableSelectField>
    <SearchableSelectField :options="options" label="form-control-3.5" size="form-control-3.5"></SearchableSelectField>
    <SearchableSelectField :options="options" label="form-control-4" size="form-control-4"></SearchableSelectField>
    <SearchableSelectField :options="options" label="form-control-5" size="form-control-5"></SearchableSelectField>
    <!-- #endregion tailwindSizes -->
</div>

::: details Show Code
<<< ./index.md#tailwindSizes{html}
:::

### Arbitrary Sizes

For precise sizing, specify exact pixel values using the syntax `form-control-[Npx]` or any other CSS length units (`rem`, `em`, `mm`, etc.).

<div class="flex flex-col gap-3">
    <!-- #region arbitrarySizes -->
    <SearchableSelectField :options="options" label="form-control-[16px]" size="form-control-[16px]"></SearchableSelectField>
    <SearchableSelectField :options="options" label="form-control-[1.5rem]" size="form-control-[1.5rem]"></SearchableSelectField>
    <!-- #endregion arbitrarySizes -->
</div>

::: details Show Code
<<< ./index.md#arbitrarySizes{html}
:::

## Validation

Validation classes provide error-checking styling. The `invalid-feedback` and `valid-feedback` classes provide the styling for invalid and valid elements, respectively.

<div class="flex flex-col gap-3">
    <!-- #region validation -->
    <SearchableSelectField :options="options" label="Empty Array of Errors" :errors="[]"></SearchableSelectField>
    <SearchableSelectField :options="options" invalid label="Single Inline Error" error="This is an inline error." class="invalid-feedback"></SearchableSelectField>
    <SearchableSelectField :options="options" invalid label="Array of Errors" :errors="['First Error', 'Second Error']" class="invalid-feedback"></SearchableSelectField>
    <SearchableSelectField :options="options" valid label="Valid Field" class="valid-feedback"></SearchableSelectField>
    <SearchableSelectField :options="options" valid label="Valid Field with Feedback" feedback="This is some success message." class="valid-feedback"></SearchableSelectField>
    <!-- #endregion validation -->
</div>

::: details Show Code
<<< ./index.md#validation{html}
:::

## Custom Colors

You can apply custom colors using the `form-control-*` utility classes (e.g., `form-control-amber-500`). This colors the border and focus ring.

<div class="flex flex-col gap-3">
    <!-- #region customColors -->
    <SearchableSelectField :options="options" class="form-control-amber-500" placeholder="form-control-amber-500"></SearchableSelectField>
    <SearchableSelectField :options="options" class="form-control-green-500" placeholder="form-control-green-500"></SearchableSelectField>
    <SearchableSelectField :options="options" class="form-control-purple-500" placeholder="form-control-purple-500"></SearchableSelectField>
    <SearchableSelectField :options="options" class="form-control-neutral-500" placeholder="form-control-neutral-500"></SearchableSelectField>
    <!-- #endregion customColors -->
</div>

::: details Show Code
<<< ./index.md#customColors{html}
:::