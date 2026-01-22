---
title: Searchable Input Field
---

<script setup>
import '../demo.css'
import { ref } from 'vue'
import SearchableInputField from '../src/SearchableInputField.vue';

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

function onChange(newValue) {
    console.log('change', newValue)
}
</script>

# Searchable Input Field

The `searchable-input-field` component provides a searchable dropdown input with customizable sizes, states, and styling.

### Installation

::: code-group
```bash [pnpm]
pnpm i @vue-interface/searchable-input-field
```

```bash [yarn]
yarn add @vue-interface/searchable-input-field
```

```bash [npm]
npm i @vue-interface/searchable-input-field
```

```bash [bun]
bun i @vue-interface/searchable-input-field
```
:::

### Tailwind Setup

```css
@import '@vue-interface/searchable-input-field/index.css';
```

## Basic Usage

The `searchable-input-field` requires an `options` prop array.

<div class="flex flex-col gap-4">
    <!-- #region basicUsage -->
    <SearchableInputField v-model="selected" :options="options"></SearchableInputField>
    <SearchableInputField :options="options" label="With Label" placeholder="Placeholder"></SearchableInputField>
    <SearchableInputField :options="options" label="Disabled" disabled></SearchableInputField>
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
    <SearchableInputField :options="options" label="xs" size="form-control-xs"></SearchableInputField>
    <SearchableInputField :options="options" label="sm" size="form-control-sm"></SearchableInputField>
    <SearchableInputField :options="options" label="md" size="form-control-md"></SearchableInputField>
    <SearchableInputField :options="options" label="lg" size="form-control-lg"></SearchableInputField>
    <SearchableInputField :options="options" label="xl" size="form-control-xl"></SearchableInputField>
    <SearchableInputField :options="options" label="xl" size="form-control-2xl"></SearchableInputField>
    <SearchableInputField :options="options" label="xl" size="form-control-3xl"></SearchableInputField>
    <SearchableInputField :options="options" label="xl" size="form-control-4xl"></SearchableInputField>
    <SearchableInputField :options="options" label="xl" size="form-control-5xl"></SearchableInputField>
    <!-- #endregion predeterminedSizes -->
</div>

::: details Show Code
<<< ./index.md#predeterminedSizes{html}
:::

### Tailwind Sizes

For more granular control over sizes, use Tailwind's numeric sizing scale classes: `form-control-1` - `form-control-96`

<div class="flex flex-col gap-3">
    <!-- #region tailwindSizes -->
    <SearchableInputField :options="options" label="form-control-3" size="form-control-3"></SearchableInputField>
    <SearchableInputField :options="options" label="form-control-3.5" size="form-control-3.5"></SearchableInputField>
    <SearchableInputField :options="options" label="form-control-4" size="form-control-4"></SearchableInputField>
    <SearchableInputField :options="options" label="form-control-5" size="form-control-5"></SearchableInputField>
    <!-- #endregion tailwindSizes -->
</div>

::: details Show Code
<<< ./index.md#tailwindSizes{html}
:::

### Arbitrary Sizes

For precise sizing, specify exact pixel values using the syntax `form-control-[Npx]` or any other CSS length units (`rem`, `em`, `mm`, etc.).

<div class="flex flex-col gap-3">
    <!-- #region arbitrarySizes -->
    <SearchableInputField :options="options" label="form-control-[16px]" size="form-control-[16px]"></SearchableInputField>
    <SearchableInputField :options="options" label="form-control-[1.5rem]" size="form-control-[1.5rem]"></SearchableInputField>
    <!-- #endregion arbitrarySizes -->
</div>

::: details Show Code
<<< ./index.md#arbitrarySizes{html}
:::

## Validation

Validation classes provide error-checking styling. The `invalid-feedback` and `valid-feedback` classes provide the styling for invalid and valid elements, respectively.

<div class="flex flex-col gap-3">
    <!-- #region validation -->
    <SearchableInputField :options="options" label="Empty Array of Errors" :errors="[]"></SearchableInputField>
    <SearchableInputField :options="options" invalid label="Single Inline Error" error="This is an inline error." class="invalid-feedback"></SearchableInputField>
    <SearchableInputField :options="options" invalid label="Array of Errors" :errors="['First Error', 'Second Error']" class="invalid-feedback"></SearchableInputField>
    <SearchableInputField :options="options" valid label="Valid Field" class="valid-feedback"></SearchableInputField>
    <SearchableInputField :options="options" valid label="Valid Field with Feedback" feedback="This is some success message." class="valid-feedback"></SearchableInputField>
    <!-- #endregion validation -->
</div>

::: details Show Code
<<< ./index.md#validation{html}
:::

## Custom Colors

You can apply custom colors using the `form-control-*` utility classes (e.g., `form-control-amber-500`). This colors the border and focus ring.

<div class="flex flex-col gap-3">
    <!-- #region customColors -->
    <SearchableInputField :options="options" class="form-control-amber-500" placeholder="form-control-amber-500"></SearchableInputField>
    <SearchableInputField :options="options" class="form-control-green-500" placeholder="form-control-green-500"></SearchableInputField>
    <SearchableInputField :options="options" class="form-control-purple-500" placeholder="form-control-purple-500"></SearchableInputField>
    <SearchableInputField :options="options" class="form-control-neutral-500" placeholder="form-control-neutral-500"></SearchableInputField>
    <!-- #endregion customColors -->
</div>

::: details Show Code
<<< ./index.md#customColors{html}
:::