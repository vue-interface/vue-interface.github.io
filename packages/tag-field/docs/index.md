---
title: Tag Field
---

<script setup>
import '../demo.css'
import { ref } from 'vue'
import TagField from '../src/TagField.vue';
import { CalendarDaysIcon } from '@heroicons/vue/24/outline';
import { Dots, Pulse, Spinner } from '@vue-interface/activity-indicator';

const selected = ref();
const showActivity = ref(false);
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
</script>

# Tag Field

The `tag-field` component provides a searchable dropdown input with customizable sizes, states, and styling.

### Installation

::: code-group
```bash [pnpm]
pnpm i @vue-interface/tag-field
```

```bash [yarn]
yarn add @vue-interface/tag-field
```

```bash [npm]
npm i @vue-interface/tag-field
```

```bash [bun]
bun i @vue-interface/tag-field
```
:::

### Tailwind Setup

```css
@import '@vue-interface/tag-field/index.css';
```

## Basic Usage

<div class="flex flex-col gap-4">
    <!-- #region basicUsage -->
    <TagField v-model="selected" :options="languages"></TagField>
    <TagField :options="options" placeholder="Type to search..." label="Placeholder"></TagField>
    <TagField :options="options" label="Descriptive Text Field" help-text="Some helpful text goes here."></TagField>
    <TagField :options="options" label="Readonly" placeholder="Type something here..." readonly></TagField>
    <TagField :options="options" label="Disabled" disabled></TagField>
    <TagField :options="options" placeholder="Disabled" label="Disabled (Placeholder)" disabled></TagField>
    <TagField :options="options" label="Clearable" placeholder="Clearable" clearable></TagField>
    <!-- #endregion basicUsage -->
</div>

::: details Show Code
<<< ./index.md#basicUsage{vue}
:::

## Plaintext

Display a `tag-field` as plain text, removing the standard form styling.

<div class="flex flex-col gap-4">
    <!-- #region plaintext -->
    <TagField :options="options" placeholder="Click to search..." :model-value="['Tag']" label="Plaintext" plaintext></TagField>
    <TagField :options="options" label="Plaintext Readonly" :model-value="['Tag']" plaintext readonly></TagField>
    <TagField :options="options" label="Plaintext Disabled" :model-value="['Tag']" plaintext disabled></TagField>
    <!-- #endregion plaintext -->
</div>

::: details Show Code
<<< ./index.md#plaintext{vue}
:::

## Custom Tags

The `tag-field` can be further customized using the following utility classes and props:

| <div class="whitespace-nowrap min-w-35">Class</div> | Description |
| :--- | :--- |
| `allow-custom` | Allows custom tags to be added|
| `badge-size` | Customize tag size using any [badge-[size]](/packages/badge/docs/index.md#sizes) class |
| `badge-class` | Customize the tag color using any [badge-[variant/color]](/packages/badge/docs/index.md#color-variants) class |
| `active-badge-color` | Customize the active tag color using any [badge-[variant/color]](/packages/badge/docs/index.md#color-variants) class |
| `:badge-closeable` | Set to `:badge-closeable="false"` to remove the close button |
| `:badge-close-left` |  Set to `:badge-close-left="true"` to move the close button to the left side of the tag |

<div class="flex flex-col gap-4">
    <!-- #region customTags -->
    <TagField allow-custom :options="languages" label="Allow Custom (with options)" placeholder="Type and press enter..."></TagField>
    <TagField allow-custom label="Allow Custom (no options)" placeholder="Type anything and press enter..."></TagField>
    <TagField 
        :options="options" 
        badge-size="badge-xl" 
        badge-class="badge-danger dark:badge-indigo-400" 
        active-badge-color="badge-yellow-500 dark:badge-primary" 
        :badge-close-left="true" 
        label="Customized Tag" 
        placeholder="Customized Tag">
    </TagField>
    <!-- #endregion customTags -->
</div>

::: details Show Code
<<< ./index.md#customTags{vue}
:::

## Sizes

Customize the size using [predetermined size](#predetermined-sizes), [tailwind's numeric sizing classes](#tailwind-sizes), or an [arbitrary](#arbitrary-sizes) CSS length unit.

### Predetermined Sizes

The size can be customized using predetermined `size prop` values: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`. Use the syntax: `form-control-[size]`.

<div class="flex flex-col gap-3">
    <!-- #region predeterminedSizes -->
    <TagField :options="options" placeholder="form-control-xs" size="form-control-xs"></TagField>
    <TagField :options="options" placeholder="form-control-sm" size="form-control-sm"></TagField>
    <TagField :options="options" placeholder="form-control-md" size="form-control-md"></TagField>
    <TagField :options="options" placeholder="form-control-lg" size="form-control-lg"></TagField>
    <TagField :options="options" placeholder="form-control-xl" size="form-control-xl"></TagField>
    <TagField :options="options" placeholder="form-control-2xl" size="form-control-2xl"></TagField>
    <TagField :options="options" placeholder="form-control-3xl" size="form-control-3xl"></TagField>
    <TagField :options="options" placeholder="form-control-4xl" size="form-control-4xl"></TagField>
    <TagField :options="options" placeholder="form-control-5xl" size="form-control-5xl"></TagField>
    <!-- #endregion predeterminedSizes -->
</div>

::: details Show Code
<<< ./index.md#predeterminedSizes{vue}
:::

### Tailwind Sizes

For more granular control over sizes, use Tailwind's numeric sizing scale classes: `form-control-1` - `form-control-96`

<div class="flex flex-col gap-3">
    <!-- #region tailwindSizes -->
    <TagField :options="options" placeholder="form-control-3" size="form-control-3"></TagField>
    <TagField :options="options" placeholder="form-control-3.5" size="form-control-3.5"></TagField>
    <TagField :options="options" placeholder="form-control-4" size="form-control-4"></TagField>
    <TagField :options="options" placeholder="form-control-5" size="form-control-5"></TagField>
    <!-- #endregion tailwindSizes -->
</div>

::: details Show Code
<<< ./index.md#tailwindSizes{vue}
:::

### Arbitrary Sizes

For precise sizing, specify exact pixel values using the syntax `form-control-[Npx]` or any other CSS length units (`rem`, `em`, `mm`, etc.).

<div class="flex flex-col gap-3">
    <!-- #region arbitrarySizes -->
    <TagField :options="options" placeholder="form-control-[16px]" size="form-control-[16px]"></TagField>
    <TagField :options="options" placeholder="form-control-[1.5rem]" size="form-control-[1.5rem]"></TagField>
    <!-- #endregion arbitrarySizes -->
</div>

::: details Show Code
<<< ./index.md#arbitrarySizes{vue}
:::

## Validation

Validation classes provide error-checking styling. Use the `valid` and `invalid` props.

<div class="flex flex-col gap-3">
    <!-- #region validation -->
    <TagField v-model="selected" :options="options" label="Empty Array of Errors" :errors="[]"></TagField>
    <TagField :options="options" invalid label="Single Inline Error" error="This is an inline error."></TagField>
    <TagField :options="options" invalid label="Array of Errors" :errors="['First Error', 'Second Error']"></TagField>
    <TagField :options="options" invalid label="Multiple Errors From Object" :errors="['This is an inline error #1.', 'This is an inline error #2.']"></TagField>
    <TagField :options="options" valid label="Valid Field"></TagField>
    <TagField :options="options" valid label="Valid Field with Feedback" feedback="This is some success message."></TagField>
    <TagField :options="options" valid label="Valid Field with Array of Feedback" :feedback="['This is some success message.', 'This is some success message.']"></TagField>
    <!-- #endregion validation -->
</div>

::: details Show Code
<<< ./index.md#validation{vue}
:::

## Custom Colors

Customize the color of a `tag-field` component with the [Tailwind color palette](https://tailwindcss.com/docs/colors) by using the `color` prop.

<div class="flex flex-col gap-3">
    <!-- #region customColors -->
    <TagField :options="options" class="form-control-amber-500" placeholder="form-control-amber-500"></TagField>
    <TagField :options="options" class="form-control-green-500" placeholder="form-control-green-500"></TagField>
    <TagField :options="options" class="form-control-purple-500" placeholder="form-control-purple-500"></TagField>
    <TagField :options="options" class="form-control-neutral-500" placeholder="form-control-neutral-500"></TagField>
    <!-- #endregion customColors -->
</div>

::: details Show Code
<<< ./index.md#customColors{vue}
:::

## Icons

The following `tag-field` components combine an input field with a [heroicon](https://heroicons.com/). Customize the size of tag-field/icon combinations using the same [sizing prop values](#sizes) described above. 

```ts
import { CalendarDaysIcon } from '@heroicons/vue/24/outline';
```

<div class="flex flex-col gap-4">
    <!-- #region basicIcons -->
    <TagField :options="options">
        <template #icon>
            <CalendarDaysIcon />
        </template>
    </TagField>
    <!-- #endregion basicIcons -->
</div>

<<< ./index.md#basicIcons{vue}

<div class="flex flex-col gap-4">
    <!-- #region iconSizes -->
    <TagField :options="options" size="form-control-xs" placeholder="xs">
        <template #icon>
            <CalendarDaysIcon />
        </template>
    </TagField>
    <TagField :options="options" size="form-control-sm" placeholder="sm">
        <template #icon>
            <CalendarDaysIcon />
        </template>
    </TagField>
    <TagField :options="options" size="form-control-md" placeholder="md">
        <template #icon>
            <CalendarDaysIcon />
        </template>
    </TagField>
    <TagField :options="options" size="form-control-lg" placeholder="lg">
        <template #icon>
            <CalendarDaysIcon />
        </template>
    </TagField>
    <TagField :options="options" size="form-control-xl" placeholder="xl">
        <template #icon>
            <CalendarDaysIcon />
        </template>
    </TagField>
    <TagField :options="options" size="form-control-2xl" placeholder="2xl">
        <template #icon>
            <CalendarDaysIcon />
        </template>
    </TagField>
    <TagField :options="options" size="form-control-3xl" placeholder="3xl">
        <template #icon>
            <CalendarDaysIcon />
        </template>
    </TagField>
    <TagField :options="options" size="form-control-4xl" placeholder="4xl">
        <template #icon>
            <CalendarDaysIcon />
        </template>
    </TagField>
    <TagField :options="options" size="form-control-5xl" placeholder="5xl">
        <template #icon>
            <CalendarDaysIcon />
        </template>
    </TagField>
    <TagField :options="options" size="form-control-3" placeholder="form-control-3">
        <template #icon>
            <CalendarDaysIcon />
        </template>
    </TagField>
    <TagField :options="options" size="form-control-3.5" placeholder="form-control-3.5">
        <template #icon>
            <CalendarDaysIcon />
        </template>
    </TagField>
    <TagField :options="options" size="form-control-4" placeholder="form-control-4">
        <template #icon>
            <CalendarDaysIcon />
        </template>
    </TagField>
    <TagField :options="options" size="form-control-5" placeholder="form-control-5">
        <template #icon>
            <CalendarDaysIcon />
        </template>
    </TagField>
    <TagField :options="options" size="form-control-[16px]" placeholder="form-control-[16px]">
        <template #icon>
            <CalendarDaysIcon />
        </template>
    </TagField>
    <TagField :options="options" size="form-control-[1.5rem]" placeholder="form-control-[1.5rem]">
        <template #icon>
            <CalendarDaysIcon />
        </template>
    </TagField>
    <!-- #endregion iconSizes -->
</div>

::: details Show Code
<<< ./index.md#iconSizes{vue}
:::

## Activity Indicator

Display an [activity indicator](/packages/activity-indicator/) within the tag field to indicate loading or processing states.

<div class="flex flex-col gap-4">
    <!-- #region activityIndicator -->
    <TagField :options="options" label="Small" size="form-control-sm" :indicator="Dots" indicator-size="activity-indicator-sm" :activity="showActivity"></TagField>
    <TagField :options="options" label="Medium" size="form-control-md" :indicator="Pulse" indicator-size="activity-indicator-sm" :activity="showActivity"></TagField>
    <TagField :options="options" label="Large" size="form-control-lg" :indicator="Spinner" indicator-size="activity-indicator-sm" :activity="showActivity"></TagField>
    <!-- #endregion activityIndicator -->
    <button type="button" class="underline text-blue-600 self-start" @click="showActivity = !showActivity">
        <span v-if="!showActivity">Show</span><span v-else>Hide</span> Activity
    </button>
</div>

::: details Show Code
<<< ./index.md#activityIndicator{vue}
:::