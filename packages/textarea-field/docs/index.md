---
title: Textarea Field
---

<script setup>
import '../demo.css'
import { ref, onMounted } from 'vue'
import TextareaField from '../src/TextareaField.vue';
import { Dots, Spinner, Pulse } from '@vue-interface/activity-indicator'
import { CalendarDaysIcon } from '@heroicons/vue/24/outline';

const value = ref('Testing...')
const showActivity = ref(false)

onMounted(() => {
    setTimeout(() => {
        value.value += '\n\n\n Adding some text for resize...'
    }, 1000)
})
</script>

# Textarea Field

The `textarea-field` component provides flexible and customizable textarea fields with customizable sizes and states.

### Installation

::: code-group
```bash [pnpm]
pnpm i @vue-interface/textarea-field
```

```bash [yarn]
yarn add @vue-interface/textarea-field
```

```bash [npm]
npm i @vue-interface/textarea-field
```

```bash [bun]
bun i @vue-interface/textarea-field
```
:::

### Tailwind Setup

```css
@import '@vue-interface/textarea-field/index.css';
```

## Variations and States

<!-- #region variations -->
<TextareaField v-model="value" label="Text Field" placeholder="Some placeholder" class="mb-3"></TextareaField>
<TextareaField label="Inner Text" class="mb-3" value="Some Inner Text Here"></TextareaField>
<TextareaField label="Descriptive Text Field" help-text="Some helpful text goes here." class="mb-3"></TextareaField>
<TextareaField label="Readonly" placeholder="Type something here..." class="mb-3" readonly></TextareaField>
<TextareaField label="Readonly (Disabled)" placeholder="Type something here..." class="mb-3" readonly disabled></TextareaField>
<TextareaField label="Disabled" placeholder="Type something here..." class="mb-3" disabled></TextareaField>
<!-- #endregion variations -->

::: details Show Code
<<< ./index.md#variations{html}
:::

## Plaintext

Display a textarea field as plain text, removing the standard form styling.

<!-- #region plaintext -->
<TextareaField label="Plaintext Field" model-value="Some value" plaintext class="mb-3"></TextareaField>
<TextareaField label="Plaintext Readonly" model-value="Some value" plaintext readonly class="mb-3"></TextareaField>
<TextareaField label="Plaintext Disabled" model-value="Some value" plaintext disabled class="mb-3"></TextareaField>
<!-- #endregion plaintext -->

::: details Show Code
<<< ./index.md#plaintext{html}
:::

## Sizes

Customize the `textarea-field` size using a [predetermined size](#predetermined-sizes), [tailwind's numeric sizing classes](#tailwind-sizes), or an [arbitrary](#arbitrary-sizes) CSS length unit.

### Predetermined Sizes

The size can be customized using predetermined `size prop` values: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`. Use the syntax: `form-control-[size]`.

<!-- #region predeterminedSizes -->
<TextareaField label="Extra Small" size="form-control-xs" class="mb-3"></TextareaField>
<TextareaField label="Small" size="form-control-sm" class="mb-3"></TextareaField>
<TextareaField label="Medium" size="form-control-md" class="mb-3"></TextareaField>
<TextareaField label="Large" size="form-control-lg" class="mb-3"></TextareaField>
<TextareaField label="XL" size="form-control-xl" class="mb-3"></TextareaField>
<TextareaField label="2xl" size="form-control-2xl" class="mb-3"></TextareaField>
<TextareaField label="3xl" size="form-control-3xl" class="mb-3"></TextareaField>
<TextareaField label="4xl" size="form-control-4xl" class="mb-3"></TextareaField>
<TextareaField label="5xl" size="form-control-5xl" class="mb-3"></TextareaField>
<!-- #endregion predeterminedSizes -->

::: details Show Code
<<< ./index.md#predeterminedSizes{html}
:::

### Tailwind Sizes

For more granular control over sizes, use Tailwind's numeric sizing scale classes: `form-control-1` - `form-control-96`.

<!-- #region tailwindSizes -->
<TextareaField label="form-control-3" size="form-control-3" class="mb-3"></TextareaField>
<TextareaField label="form-control-4" size="form-control-4" class="mb-3"></TextareaField>
<TextareaField label="form-control-5" size="form-control-5" class="mb-3"></TextareaField>
<!-- #endregion tailwindSizes -->

::: details Show Code
<<< ./index.md#tailwindSizes{html}
:::

### Arbitrary Sizes

For precise sizing, specify exact pixel values using the syntax `form-control-[Npx]` or any other CSS length units (`rem`, `em`, `mm`, etc.).

<!-- #region arbitrarySizes -->
<TextareaField label="form-control-[16px]" size="form-control-[16px]" class="mb-3"></TextareaField>
<TextareaField label="form-control-[1.5rem]" size="form-control-[1.5rem]" class="mb-3"></TextareaField>
<!-- #endregion arbitrarySizes -->

::: details Show Code
<<< ./index.md#arbitrarySizes{html}
:::

## Icons

The following `textarea-field` components combine a textarea field with a [heroicon](https://heroicons.com/). Customize the size of textarea-field/icon combinations using the same [sizing prop values](#sizes) described above.

```ts
import { CalendarDaysIcon } from '@heroicons/vue/24/outline';
```
```vue
<InputField label="Icon">
    <template #icon>
        <CalendarDaysIcon />                      
    </template>
</InputField>
```

<div class="flex flex-col gap-3">
<!-- #region icons -->
<TextareaField label="Extra Small Icon" size="form-control-xs">
    <template #icon>
        <CalendarDaysIcon />
    </template>
</TextareaField>

<TextareaField label="Small Icon" size="form-control-sm">
    <template #icon>
        <CalendarDaysIcon />
    </template>
</TextareaField>

<TextareaField label="Medium Icon" size="form-control-md">
    <template #icon>
        <CalendarDaysIcon />
    </template>
</TextareaField>

<TextareaField label="Large Icon" size="form-control-lg">
    <template #icon>
        <CalendarDaysIcon />
    </template>
</TextareaField>

<TextareaField label="XL Icon" size="form-control-xl">
    <template #icon>
        <CalendarDaysIcon />
    </template>
</TextareaField>

<TextareaField label="2xl Icon" size="form-control-2xl">
    <template #icon>
        <CalendarDaysIcon />
    </template>
</TextareaField>

<TextareaField label="3xl Icon" size="form-control-3xl">
    <template #icon>
        <CalendarDaysIcon />
    </template>
</TextareaField>

<TextareaField label="4xl Icon" size="form-control-4xl">
    <template #icon>
        <CalendarDaysIcon />
    </template>
</TextareaField>

<TextareaField label="5xl Icon" size="form-control-5xl">
    <template #icon>
        <CalendarDaysIcon />
    </template>
</TextareaField>

<TextareaField label="Icon-4" size="form-control-4">
    <template #icon>
        <CalendarDaysIcon />
    </template>
</TextareaField>

<TextareaField label="Icon-5" size="form-control-5">
    <template #icon>
        <CalendarDaysIcon />
    </template>
</TextareaField>

<TextareaField label="Icon-6" size="form-control-6">
    <template #icon>
        <CalendarDaysIcon />
    </template>
</TextareaField>

<TextareaField label="Icon-[16px]" size="form-control-[16px]">
    <template #icon>
        <CalendarDaysIcon />
    </template>
</TextareaField>

<TextareaField label="Icon-[21px]" size="form-control-[21px]" class="form-control-[21px] mb-3">
    <template #icon>
        <CalendarDaysIcon />
    </template>
</TextareaField>
<!-- #endregion icons -->
</div>

::: details Show Code
<<< ./index.md#icons{html}
:::

## With Activity

Combine [activity indicators](/packages/activity-indicator/) with `textarea-field` to show a loading icon.

<!-- #region withActivity -->
<TextareaField label="Small" size="form-control-sm" :indicator="Dots" indicator-size="xs" :activity="showActivity" class="mb-3"></TextareaField>
<TextareaField label="Medium" size="form-control-md" :indicator="Pulse" indicator-size="md" :activity="showActivity" class="mb-3"></TextareaField>
<TextareaField label="Large" size="form-control-lg" :indicator="Spinner" indicator-size="lg" :activity="showActivity" class="mb-3"></TextareaField>

<button type="button" class="underline text-blue-600" @click="showActivity = !showActivity">
    <span v-if="!showActivity">Show</span><span v-else>Hide</span> Activity
</button>
<!-- #endregion withActivity -->

::: details Show Code
<<< ./index.md#withActivity{html}
:::

## Autogrow

Enable automatic height adjustment as the user types by adding the `autogrow` prop. This is based on the [autogrow](/packages/autogrow/) component.

<!-- #region autogrow -->
<TextareaField autogrow label="Small" size="form-control-sm" class="mb-3"></TextareaField>
<TextareaField autogrow label="Medium" size="form-control-md" class="mb-3"></TextareaField>
<TextareaField autogrow label="Large" size="form-control-lg" class="mb-3"></TextareaField>
<!-- #endregion autogrow -->

::: details Show Code
<<< ./index.md#autogrow{html}
:::

## Validation

Validation classes provides error-checking styling for the textarea-field component. The `invalid-feedback` and `valid-feedback` classes provide the styling for invalid and valid elements, respectively.

<!-- #region validation -->
<TextareaField label="Empty Array of Errors" :errors="[]" class="mb-3"></TextareaField>
<TextareaField label="Single Inline Error" error="This is an inline error." class="mb-3" invalid></TextareaField>
<TextareaField label="Array of Errors" :errors="['First Error', 'Second Error']" class="mb-3" invalid></TextareaField>
<TextareaField name="test" label="Multiple Errors From Object" :errors="{'test': ['This is an inline error #1.', 'This is an inline error #2.']}" class="mb-3" invalid></TextareaField>

<TextareaField label="Valid Field" valid class="mb-3"></TextareaField>
<TextareaField label="Valid Field with Feedback" valid feedback="This is some success message." class="mb-3"></TextareaField>
<TextareaField label="Valid Field with Array of Feedback" valid :feedback="['This is some success message.', 'This is some success message.']" class="mb-3"></TextareaField>
<!-- #endregion validation -->

::: details Show Code
<<< ./index.md#validation{html}
:::

## Custom Colors

Customize the color of a textarea-field component with the [Tailwind color palette](https://tailwindcss.com/docs/colors) by adding the `color` prop: `form-control-[color]`.

<!-- #region customColors -->
<TextareaField label="form-control-red-500" color="form-control-red-500" class="mb-3"></TextareaField>
<TextareaField label="form-control-blue-500" color="form-control-blue-500" class="mb-3"></TextareaField>
<TextareaField label="form-control-green-500" color="form-control-green-500" class="mb-3"></TextareaField>
<TextareaField label="form-control-amber-500" color="form-control-amber-500" class="mb-3"></TextareaField>
<!-- #endregion customColors -->

::: details Show Code
<<< ./index.md#customColors{html}
:::

