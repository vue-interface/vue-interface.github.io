---
title: Searchable Select Field
---

<script setup>
import '../demo.css'
import { ref } from 'vue'
import SearchableSelectField from '../src/SearchableSelectField.vue';
import { CalendarDaysIcon } from '@heroicons/vue/24/outline';

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

const languages = [
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
    <SearchableSelectField v-model="selected" :options="languages"></SearchableSelectField>
    <!-- #endregion basicUsage -->
</div>

<<< ./index.md#basicUsage{vue}

## Variations and States

<div class="flex flex-col gap-4">
    <!-- #region variations -->
    <SearchableSelectField :options="options" placeholder="Type to search..." label="Placeholder"></SearchableSelectField>
    <SearchableSelectField :options="options" label="Descriptive Text Field" help-text="Some helpful text goes here."></SearchableSelectField>
    <SearchableSelectField :options="options" label="Readonly" placeholder="Type something here..." readonly></SearchableSelectField>
    <SearchableSelectField :options="options" label="Disabled" disabled></SearchableSelectField>
    <SearchableSelectField :options="options" placeholder="Disabled" label="Disabled (Placeholder)" disabled></SearchableSelectField>
    <!-- #endregion variations -->
</div>

::: details Show Code
<<< ./index.md#variations{vue}
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
    <SearchableSelectField :options="options" label="2xl" size="form-control-2xl"></SearchableSelectField>
    <SearchableSelectField :options="options" label="3xl" size="form-control-3xl"></SearchableSelectField>
    <SearchableSelectField :options="options" label="4xl" size="form-control-4xl"></SearchableSelectField>
    <SearchableSelectField :options="options" label="5xl" size="form-control-5xl"></SearchableSelectField>
    <!-- #endregion predeterminedSizes -->
</div>

::: details Show Code
<<< ./index.md#predeterminedSizes{vue}
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
<<< ./index.md#tailwindSizes{vue}
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
<<< ./index.md#arbitrarySizes{vue}
:::

## Icons

The following `searchable-select-field` components combine the an input field with a [heroicon](https://heroicons.com/). Customize the size of searchable-select-field/icon combinations using the same [sizing prop values](#sizes) described above. 

```ts
import { CalendarDaysIcon } from '@heroicons/vue/24/outline';
```

<div class="flex flex-col gap-4">
    <!-- #region basicIcons -->
    <SearchableSelectField :options="options">
        <template #icon>
            <CalendarDaysIcon />
        </template>
    </SearchableSelectField>
    <!-- #endregion basicIcons -->
</div>

<<< ./index.md#basicIcons{vue}

<div class="flex flex-col gap-4">
    <!-- #region iconSizes -->
    <SearchableSelectField :options="options" size="form-control-xs" placeholder="XS Icon">
        <template #icon>
            <CalendarDaysIcon />
        </template>
    </SearchableSelectField>
    <SearchableSelectField :options="options" size="form-control-sm" placeholder="SM Icon">
        <template #icon>
            <CalendarDaysIcon />
        </template>
    </SearchableSelectField>
    <SearchableSelectField :options="options" size="form-control-lg" placeholder="Large Icon">
        <template #icon>
            <CalendarDaysIcon />
        </template>
    </SearchableSelectField>
    <SearchableSelectField :options="options" size="form-control-xl" placeholder="XL Icon">
        <template #icon>
            <CalendarDaysIcon />
        </template>
    </SearchableSelectField>
    <SearchableSelectField :options="options" size="form-control-2xl" placeholder="2xl Icon">
        <template #icon>
            <CalendarDaysIcon />
        </template>
    </SearchableSelectField>
    <SearchableSelectField :options="options" size="form-control-3xl" placeholder="3xl Icon">
        <template #icon>
            <CalendarDaysIcon />
        </template>
    </SearchableSelectField>
    <SearchableSelectField :options="options" size="form-control-4xl" placeholder="4xl Icon">
        <template #icon>
            <CalendarDaysIcon />
        </template>
    </SearchableSelectField>
    <SearchableSelectField :options="options" size="form-control-5xl" placeholder="5xl Icon">
        <template #icon>
            <CalendarDaysIcon />
        </template>
    </SearchableSelectField>
    <SearchableSelectField :options="options" size="form-control-4" placeholder="form-control-4">
        <template #icon>
            <CalendarDaysIcon />
        </template>
    </SearchableSelectField>
    <SearchableSelectField :options="options" size="form-control-4.5" placeholder="form-control-4.5">
        <template #icon>
            <CalendarDaysIcon />
        </template>
    </SearchableSelectField>
    <SearchableSelectField :options="options" size="form-control-[16px]" placeholder="form-control-[16px]">
        <template #icon>
            <CalendarDaysIcon />
        </template>
    </SearchableSelectField>
    <SearchableSelectField :options="options" size="form-control-[1.5rem]" placeholder="form-control-[1.5rem]">
        <template #icon>
            <CalendarDaysIcon />
        </template>
    </SearchableSelectField>
    <!-- #endregion iconSizes -->
</div>

::: details Show Code
<<< ./index.md#iconSizes{vue}
:::

## Validation

Validation classes provide error-checking styling. The `invalid-feedback` and `valid-feedback` classes provide the styling for invalid and valid elements, respectively.

<div class="flex flex-col gap-3">
    <!-- #region validation -->
    <SearchableSelectField :options="options" label="Empty Array of Errors" :errors="[]"></SearchableSelectField>
    <SearchableSelectField :options="options" invalid label="Single Inline Error" error="This is an inline error."></SearchableSelectField>
    <SearchableSelectField :options="options" invalid label="Array of Errors" :errors="['First Error', 'Second Error']"></SearchableSelectField>
    <SearchableSelectField :options="options" invalid label="Multiple Errors From Object" :errors="['This is an inline error #1.', 'This is an inline error #2.']"></SearchableSelectField>
    <SearchableSelectField :options="options" valid label="Valid Field"></SearchableSelectField>
    <SearchableSelectField :options="options" valid label="Valid Field with Feedback" feedback="This is some success message."></SearchableSelectField>
    <SearchableSelectField :options="options" valid label="Valid Field with Array of Feedback" :feedback="['This is some success message.', 'This is some success message.']"></SearchableSelectField>
    <!-- #endregion validation -->
</div>

::: details Show Code
<<< ./index.md#validation{vue}
:::

## Custom Colors

Customize the color of a searchable-select-field component with the [Tailwind color palette](https://tailwindcss.com/docs/colors) by using the `color` prop: `form-control-[color]`.

<div class="flex flex-col gap-3">
    <!-- #region customColors -->
    <SearchableSelectField :options="options" color="form-control-amber-500" placeholder="form-control-amber-500"></SearchableSelectField>
    <SearchableSelectField :options="options" color="form-control-green-500" placeholder="form-control-green-500"></SearchableSelectField>
    <SearchableSelectField :options="options" color="form-control-purple-500" placeholder="form-control-purple-500"></SearchableSelectField>
    <SearchableSelectField :options="options" color="form-control-neutral-500" placeholder="form-control-neutral-500"></SearchableSelectField>
    <!-- #endregion customColors -->
</div>

::: details Show Code
<<< ./index.md#customColors{vue}
:::

## Animated

The `searchable-select-field` animated component combines the tailwind `form-control-animated` classes to provide a custom animated component. Customize the size of animated searchable-select-field/icon combinations using the same [sizing prop values](#sizes) described above. 

<div class="flex flex-col gap-3">
    <!-- #region animated -->
    <SearchableSelectField 
        :options="options" 
        label="Animated" 
        placeholder="Some placeholder" 
        size="form-control-sm" 
        class="form-control-animated-sm">
    </SearchableSelectField>
    <SearchableSelectField 
        :options="options" 
        label="Animated" 
        placeholder="Some placeholder" 
        size="form-control-md" 
        class="form-control-animated-md">
    </SearchableSelectField>
    <SearchableSelectField 
        :options="options" 
        label="Animated" 
        placeholder="Some placeholder" 
        size="form-control-lg" 
        class="form-control-animated-lg">
    </SearchableSelectField>
    <!-- #endregion animated -->
</div>

::: details Show Code
<<< ./index.md#animated{html}
:::

### With Icons

Add an [icon](#icons) to the animated searchable-select-fields using the steps described above.

<div class="flex flex-col gap-3">
    <!-- #region animatedIcons -->
    <SearchableSelectField 
        :options="options" 
        label="Animated with Icon" 
        placeholder="Some placeholder" 
        size="form-control-sm" 
        class="form-control-animated-sm">
        <template #icon>
            <CalendarDaysIcon />
        </template>
    </SearchableSelectField>
    <SearchableSelectField 
        :options="options" 
        label="Animated with Icon" 
        placeholder="Some placeholder" 
        size="form-control-md" 
        class="form-control-animated-md">
        <template #icon>
            <CalendarDaysIcon />
        </template>
    </SearchableSelectField>
    <SearchableSelectField 
        :options="options" 
        label="Animated with Icon" 
        placeholder="Some placeholder" 
        size="form-control-lg" 
        class="form-control-animated-lg">
        <template #icon>
            <CalendarDaysIcon />
        </template>
    </SearchableSelectField>
    <!-- #endregion animatedIcons -->
</div>

::: details Show Code
<<< ./index.md#animatedIcons{html}
:::