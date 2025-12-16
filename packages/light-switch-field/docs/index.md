---
title: Light Switch Field
---

<script setup>
import '../index.css'
import { ref } from 'vue'
import LightSwitchField from '../src/LightSwitchField.vue'

const value = ref(true)
const value2 = ref('true')
const value3 = ref('1')
</script>

# Light Switch Field

The `light-switch-field` component provides flexible and customizable input fields with customizable sizes, states, and colors.

### Installation

::: code-group
```bash [pnpm]
pnpm i @vue-interface/light-switch-field
```

```bash [yarn]
yarn add @vue-interface/light-switch-field
```

```bash [npm]
npm i @vue-interface/light-switch-field
```

```bash [bun]
bun i @vue-interface/light-switch-field
```
:::

## Variations and States

<!-- #region variations -->
<LightSwitchField v-model="value" :on-value="true" :off-value="false" label="Default" id="default" name="default"></LightSwitchField>
<LightSwitchField label="Off"></LightSwitchField>
<LightSwitchField checked label="On"></LightSwitchField>
<LightSwitchField disabled label="Disabled"></LightSwitchField>
<LightSwitchField disabled checked label="Disabled (Checked)"></LightSwitchField>
<LightSwitchField disabled readonly label="Disabled (Readonly)"></LightSwitchField>
<LightSwitchField disabled checked readonly label="Disabled (Checked & Readonly)"></LightSwitchField>
<LightSwitchField readonly label="Readonly"></LightSwitchField>
<LightSwitchField readonly checked label="Readonly (Checked)"></LightSwitchField>
<!-- #endregion variations -->

::: details Show Code
<<< ./index.md#variations{html}
:::

## Alternative On/Off Values

<!-- #region altValues -->
<LightSwitchField
    v-model="value2"
    label="Using True/False String"
    on-value="true"
    off-value="false"
    :help-text="`Current Value: ${value2}`">
</LightSwitchField>

<LightSwitchField
    v-model="value3"
    label="Using Numerical String"
    on-value="1"
    off-value="0"
    class="mb-3"
    :help-text="`Current Value: ${value3}`">
</LightSwitchField>
<!-- #endregion altValues -->

::: details Show Code
<<< ./index.md#altValues{html}
:::

## Sizes

Customize the size of a `light-switch-field` component using a [predetermined size](#predetermined-sizes), [tailwind's numeric sizing classes](#tailwind-sizes), or an [arbitrary](#arbitrary-sizes) CSS length unit.

### Predetermind Sizes

The size can be customized using predetermined `size prop` values: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`. Use the syntax: `form-switch-[size]`.

<div class="flex flex-col gap-2">
    <!-- #region predeterminedSizes -->
    <LightSwitchField label="xs" size="form-switch-xs"></LightSwitchField>
    <LightSwitchField label="sm" size="form-switch-sm"></LightSwitchField>
    <LightSwitchField label="md" size="form-switch-md"></LightSwitchField>
    <LightSwitchField label="lg" size="form-switch-lg"></LightSwitchField>
    <LightSwitchField label="xl" size="form-switch-xl"></LightSwitchField>
    <LightSwitchField label="2xl" size="form-switch-2xl"></LightSwitchField>
    <LightSwitchField label="3xl" size="form-switch-3xl"></LightSwitchField>
    <LightSwitchField label="4xl" size="form-switch-4xl"></LightSwitchField>
    <LightSwitchField label="5xl" size="form-switch-5xl"></LightSwitchField>
    <!-- #endregion predeterminedSizes -->
</div>

::: details Show Code
<<< ./index.md#predeterminedSizes{html}
:::

### Tailwind Sizes

For more granular control over sizes, use Tailwind's numeric sizing scale classes: `form-switch-1` - `form-switch-96`.

<div class="flex flex-col gap-2">
    <!-- #region tailwindSizes -->
    <LightSwitchField label="form-switch-4" size="form-switch-4"></LightSwitchField>
    <LightSwitchField label="form-switch-5" size="form-switch-5"></LightSwitchField>
    <LightSwitchField label="form-switch-6" size="form-switch-6"></LightSwitchField>
    <LightSwitchField label="form-switch-7" size="form-switch-7"></LightSwitchField>
    <!-- #endregion tailwindSizes -->
</div>

::: details Show Code
<<< ./index.md#tailwindSizes{html}
:::

### Arbitrary Sizes

For precise sizing, specify exact pixel values using the syntax `form-switch-[Npx]` or any other CSS length units (`rem`, `em`, `mm`, etc.).

<div class="flex flex-col gap-2">
    <!-- #region arbitrarySizes -->
    <LightSwitchField label="form-switch-[16px]" size="form-switch-[16px]"></LightSwitchField>
    <LightSwitchField label="form-switch-[1.5rem]" size="form-switch-[1.5rem]"></LightSwitchField>
    <!-- #endregion arbitrarySizes -->
</div>

::: details Show Code
<<< ./index.md#arbitrarySizes{html}
:::

## Custom Colors

Customize the color of a `light-switch-field` component with the [Tailwind color palette](https://tailwindcss.com/docs/colors) by using the class: `form-switch-[color]`.

<!-- #region customColors -->
<LightSwitchField label="form-switch-amber-500" color="form-switch-amber-500"></LightSwitchField>
<LightSwitchField label="form-switch-purple-500" color="form-switch-purple-500"></LightSwitchField>
<LightSwitchField label="form-switch-green-500" color="form-switch-green-500"></LightSwitchField>
<LightSwitchField label="form-switch-neutral-500" color="form-switch-neutral-500"></LightSwitchField>
<!-- #endregion customColors -->

::: details Show Code
<<< ./index.md#customColors{html}
:::

## Validation

Validation classes provides error-checking styling for the `light-switch-field` component. The `invalid-feedback` and `valid-feedback` classes provide the styling for invalid and valid elements, respectively. 

<!-- #region validation -->
<LightSwitchField label="Empty Array of Errors" :errors="[]" class="mb-3"></LightSwitchField>
<LightSwitchField label="Single Inline Error" error="This is an inline error." class="mb-3 invalid-feedback"></LightSwitchField>
<LightSwitchField label="Array of Errors" :errors="['First Error', 'Second Error']" class="mb-3 invalid-feedback"></LightSwitchField>
<LightSwitchField name="test" label="Multiple Errors From Object" :errors="{'test': ['This is an inline error #1.', 'This is an inline error #2.']}" class="mb-3 invalid-feedback"></LightSwitchField>

<LightSwitchField label="Valid Field" valid class="mb-3 valid-feedback"></LightSwitchField>
<LightSwitchField label="Valid Field with Feedback" valid feedback="This is some success message." class="mb-3 valid-feedback"></LightSwitchField>
<LightSwitchField label="Valid Field with Array of Feedback" valid :feedback="['This is some success message.', 'This is some success message.']" class="mb-3 valid-feedback"></LightSwitchField>
<!-- #endregion validatin -->

::: details Show Code
<<< ./index.md#validation{html}
:::