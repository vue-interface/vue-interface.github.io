---
title: Input Field
---

<script setup>
import '../demo.css'
import { ref, onMounted } from 'vue'
import InputField from '../src/InputField.vue';
import { Dots, Spinner, Pulse } from '@vue-interface/activity-indicator'
import { CalendarDaysIcon } from '@heroicons/vue/24/outline';

const value = ref()
const showActivity = ref(false)

onMounted(() => {
  setTimeout(() => {
    value.value = 'testing...'
  }, 1000)
})

function onChange(newValue) {
  console.log('change', newValue)
}
</script>

# Input Field

The `input-field` component provides flexible and customizable input fields with customizable sizes and states.

### Installation

::: code-group
```bash [pnpm]
pnpm i @vue-interface/input-field
```

```bash [yarn]
yarn add @vue-interface/input-field
```

```bash [npm]
npm i @vue-interface/input-field
```

```bash [bun]
bun i @vue-interface/input-field
```
:::

### Tailwind Setup

```css
@import '@vue-interface/input-field/index.css';
```

## Variations and States

<!-- #region variations -->
<InputField v-model="value" label="Text Field" placeholder="Some placeholder" class="mb-3" @change="onChange"></InputField>
<InputField type="password" label="Password Field" class="mb-3"></InputField>
<InputField label="Descriptive Text Field" help-text="Some helpful text goes here." class="mb-3"></InputField>
<InputField type="email" label="Email Field" placeholder="you@example.com" class="mb-3"></InputField>
<InputField label="Plain Text" placeholder="Type something here..." class="mb-3" plaintext></InputField>
<InputField label="Readonly" placeholder="Type something here..." class="mb-3" readonly></InputField>
<InputField label="Readonly (Disabled)" placeholder="Type something here..." class="mb-3" readonly disabled></InputField>
<InputField label="Disabled" placeholder="Type something here..." class="mb-3" disabled></InputField>
<!-- #endregion variations -->

::: details Show Code
<<< ./index.md#variations{html}
:::

## Sizes

Customize the `input-fields` size using a [predetermined size](#predetermined-sizes), [tailwind's numeric sizing classes](#tailwind-sizes), or an [arbitrary](#arbitrary-sizes) CSS length unit.

### Predetermined Sizes

The size can be customized using predetermined `size prop` values: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`. Use the syntax: `form-control-[size]`.

<div class="flex flex-col gap-3">
<!-- #region predeterminedSizes -->
<InputField label="xs" size="form-control-xs"></InputField>
<InputField label="sm" size="form-control-sm"></InputField>
<InputField label="md" size="form-control-md"></InputField>
<InputField label="lg" size="form-control-lg"></InputField>
<InputField label="xl" size="form-control-xl"></InputField>
<InputField label="2xl" size="form-control-2xl"></InputField>
<InputField label="3xl" size="form-control-3xl"></InputField>
<InputField label="4xl" size="form-control-4xl"></InputField>
<InputField label="5xl" size="form-control-5xl"></InputField>
<!-- #endregion predeterminedSizes -->
</div>

::: details Show Code
<<< ./index.md#predeterminedSizes{html}
:::

### Tailwind Sizes

For more granular control over sizes, use Tailwind's numeric sizing scale classes: `form-control-1` - `form-control-96`.

<!-- #region tailwindSizes -->
<InputField label="form-control-3" size="form-control-3" class="mb-3"></InputField>
<InputField label="form-control-4" size="form-control-4" class="mb-3"></InputField>
<InputField label="form-control-5" size="form-control-5" class="mb-3"></InputField>
<!-- #endregion tailwindSizes -->

::: details Show Code
<<< ./index.md#tailwindSizes{html}
:::

### Arbitrary Sizes

For precise sizing, specify exact pixel values using the syntax `form-control-[Npx]` or any other CSS length units (`rem`, `em`, `mm`, etc.).

<!-- #region arbitrarySizes -->
<InputField label="form-control-[16px]" size="form-control-[16px]" class="mb-3"></InputField>
<InputField label="form-control-[1.5rem]" size="form-control-[1.5rem]" class="mb-3"></InputField>
<!-- #endregion arbitrarySizes -->

::: details Show Code
<<< ./index.md#arbitrarySizes{html}
:::

## Icons

The following `input-field` components combine the an input field with a [heroicon](https://heroicons.com/). Customize the size of input-field/icon combinations using the same [sizing prop values](#sizes) described above. 

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
<InputField label="xs Icon" size="form-control-xs">
    <template #icon>
       <CalendarDaysIcon />                     
    </template>
</InputField>

<InputField label="sm Icon" size="form-control-sm">
    <template #icon>
        <CalendarDaysIcon />                      
    </template>
</InputField>

<InputField label="md Icon" size="form-control-md">
    <template #icon>
        <CalendarDaysIcon />                      
    </template>
</InputField>

<InputField label="lg Icon" size="form-control-lg">
    <template #icon>
        <CalendarDaysIcon />                      
    </template>
</InputField>

<InputField label="xl Icon" size="form-control-xl">
    <template #icon>
        <CalendarDaysIcon />                      
    </template>
</InputField>

<InputField label="2xl Icon" size="form-control-2xl">
    <template #icon>
        <CalendarDaysIcon />                      
    </template>
</InputField>

<InputField label="3xl Icon" size="form-control-3xl">
    <template #icon>
        <CalendarDaysIcon />                      
    </template>
</InputField>

<InputField label="4xl Icon" size="form-control-4xl">
    <template #icon>
        <CalendarDaysIcon />                      
    </template>
</InputField>

<InputField label="5xl Icon" size="form-control-5xl">
    <template #icon>
        <CalendarDaysIcon />                      
    </template>
</InputField>

<InputField label="form-control-3 Icon" size="form-control-3">
    <template #icon>
        <CalendarDaysIcon />                      
    </template>
</InputField>

<InputField label="form-control-4 Icon" size="form-control-4">
    <template #icon>
        <CalendarDaysIcon />                      
    </template>
</InputField>

<InputField label="form-control-[16px] Icon" size="form-control-[16px]">
    <template #icon>
        <CalendarDaysIcon />                      
    </template>
</InputField>
<!-- #endregion icons -->
</div>

::: details Show Code
<<< ./index.md#icons{html}
:::

## With Activity

Combine [activity indicators](/packages/activity-indicator/) with `input-fields` to show a loading icon after input.

<!-- #region withActivity -->
<InputField label="Small" size="form-control-sm" :indicator="Dots" indicator-size="xs" :activity="showActivity" class="mb-3"></InputField>
<InputField label="Medium" size="form-control-md" :indicator="Pulse" indicator-size="md" :activity="showActivity" class="mb-3"></InputField>
<InputField label="Large" size="form-control-lg" :indicator="Spinner" indicator-size="lg" :activity="showActivity" class="mb-3"></InputField>

<button type="button" class="underline text-blue-600" @click="showActivity = !showActivity">
    <span v-if="!showActivity">Show</span><span v-else>Hide</span> Activity
</button>
<!-- #endregion withActivity -->

::: details Show Code
<<< ./index.md#withActivity{html}
:::

## Validation

Validation classes provides error-checking styling for the input-field component. The `invalid-feedback` and `valid-feedback` classes provide the styling for invalid and valid elements, respectively. 

<!-- #region validation -->
<InputField label="Empty Array of Errors" :errors="[]" class="mb-3"></InputField>

<InputField label="Single Inline Error" error="This is an inline error." class="mb-3 invalid-feedback"></InputField>
<InputField label="Array of Errors" :errors="['First Error', 'Second Error']" class="mb-3 invalid-feedback"></InputField>
<InputField name="test" label="Multiple Errors From Object" :errors="{'test': ['This is an inline error #1.', 'This is an inline error #2.']}" class="mb-3 invalid-feedback"></InputField>
        
<InputField label="Valid Field" valid class="mb-3 valid-feedback"></InputField>
<InputField label="Valid Field with Feedback" valid feedback="This is some success message." class="mb-3 valid-feedback"></InputField>
<InputField label="Valid Field with Array of Feedback" valid :feedback="['This is some success message.', 'This is some success message.']" class="mb-3 valid-feedback"></InputField>
<!-- #endregion validation -->

::: details Show Code
<<< ./index.md#validation{html}
:::

## Custom Colors

Customize the color of a input-field component with the [Tailwind color palette](https://tailwindcss.com/docs/colors) by using the `color` prop: `form-control-[color]`.

<!-- #region customColor -->
<input-field label="form-control-amber-500" color="form-control-amber-500" class="mb-3"></input-field>
<input-field label="form-control-green-500" color="form-control-green-500" class="mb-3"></input-field>
<input-field label="form-control-purple-500" color="form-control-purple-500" class="mb-3"></input-field>
<input-field label="form-control-neutral-500" color="form-control-neutral-500" class="mb-3"></input-field>
<!-- #endregion customColor -->

::: details Show Code
<<< ./index.md#customColor{html}
:::

## Animated

The `input-field` animated component combines the tailwind `form-control-animated` classes to provide a custom animated component. Customize the size of animated input-field/icon combinations using the same [sizing prop values](#sizes) described above. 

<!-- #region animated -->
<InputField v-model="value" label="Text Field" placeholder="Some placeholder" class="mb-3 form-control-animated"></InputField>
<InputField label="Text Field" placeholder="Some placeholder" class="mb-3 form-control-animated"></InputField>
<InputField label="Text Field" placeholder="Some placeholder" size="form-control-lg" class="mb-3 form-control-animated-lg"></InputField>
<!-- #endregion animated -->

::: details Show Code
<<< ./index.md#animated{html}
:::

### With Icons

Add an [icon](#icons) to the animated input-fields using the steps described above.

<div class="flex flex-col gap-3">
<!-- #region animatedIcons -->
<InputField label="xs Icon" placeholder="Some placeholder" size="form-control-xs" class="form-control-animated-xs">
    <template #icon>
         <CalendarDaysIcon />                      
    </template>
</InputField>

<InputField label="Small Icon" placeholder="Some placeholder" size="form-control-sm" class="form-control-animated-sm">
    <template #icon>
        <CalendarDaysIcon />                      
    </template> 
</InputField>

<InputField label="Medium Icon" placeholder="Some placeholder" size="form-control-md" class="form-control-animated-md">
    <template #icon>
        <CalendarDaysIcon />                      
    </template>
</InputField>
            
<InputField label="Large Icon" placeholder="Some placeholder" size="form-control-lg" class="form-control-animated-lg">
    <template #icon>
        <CalendarDaysIcon />                      
    </template>
</InputField>

<InputField label="xl Icon" placeholder="Some placeholder" size="form-control-xl" class="form-control-animated-xl">
    <template #icon>
        <CalendarDaysIcon />                       
    </template>
</InputField>
            
<InputField label="2xl Icon" placeholder="Some placeholder" size="form-control-2xl" class="form-control-animated-2xl">
    <template #icon>
         <CalendarDaysIcon />                      
    </template>
</InputField>

<InputField label="3xl Icon" placeholder="Some placeholder" size="form-control-3xl" class="form-control-animated-3xl">
    <template #icon>
         <CalendarDaysIcon />                      
    </template>
</InputField>

<InputField label="4xl Icon" placeholder="Some placeholder" size="form-control-4xl" class="form-control-animated-4xl">
    <template #icon>
         <CalendarDaysIcon />                      
    </template>
</InputField>

<InputField label="5xl Icon" placeholder="Some placeholder" size="form-control-5xl" class="form-control-animated-5xl">
    <template #icon>
        <CalendarDaysIcon />                       
    </template>
</InputField>
            
<InputField label="Icon-4" placeholder="Some placeholder" size="form-control-4" class="form-control-animated-4">
    <template #icon>
        <CalendarDaysIcon />                    
    </template>
</InputField>
            
<InputField label="Icon-5" placeholder="Some placeholder" size="form-control-5" class="form-control-animated-5">
    <template #icon>
        <CalendarDaysIcon />                    
    </template>
</InputField>
            
<InputField label="Icon-6" placeholder="Some placeholder" size="form-control-6" class="form-control-animated-6">
    <template #icon>
        <CalendarDaysIcon />                       
    </template>
</InputField>
            
<InputField label="Icon-[16px]" placeholder="Some placeholder" size="form-control-[16px]" class="form-control-animated-[16px]">
    <template #icon>
       <CalendarDaysIcon />                       
    </template>
</InputField>
<!-- #endregion animatedIcons -->
</div>

::: details Show Code
<<< ./index.md#animatedIcons{html}
:::