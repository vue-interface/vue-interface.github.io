---
title: Alert
---

<script setup>
import '../demo.css'
import Alert from '../src/Alert.vue';

import {
    ExclamationTriangleIcon,
    ExclamationCircleIcon,
    InformationCircleIcon,
    CheckCircleIcon,
    CircleStackIcon
} from '@heroicons/vue/24/outline';
</script>

# Alert

The `Alert` component provides a flexible and customizable alert system with built-in icons, customizable color variants, and sizes.

### Installation

::: code-group
```bash [pnpm]
pnpm i @vue-interface/alert
```

```bash [yarn]
yarn add @vue-interface/alert
```

```bash [npm]
npm i @vue-interface/alert
```

```bash [bun]
bun i @vue-interface/alert
```
:::

### Tailwind Setup

```css
@import '@vue-interface/alert/index.css';
```

## Basic Usage

The component renders with a default information icon.

<div class="flex flex-col gap-3">
    <!-- #region basicUsage -->
    <Alert>Some Content</Alert>
    <Alert class="alert-centered">Some Content</Alert>
    <Alert>Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus
        ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium
        tellus duis. Pretium tellus duis convallis tempus leo eu aeneanLorem ipsum dolor sit amet consectetur
        adipiscing elit.
    </Alert>
    <Alert class="inline-flex">
        Do you want to continue?
        <template #action>
            <button class="btn btn-secondary">No</button>
            <button class="btn btn-blue-900">Yes</button>
        </template>
    </Alert>
    <!-- #endregion basicUsage -->
</div>

<<< ./index.md#basicUsage{vue}

## Custom Icons

The default alert uses the `information-circle-icon` from [heroicon](https://heroicons.com/). To use a custom icon, import it, and use it inside the `template #icon` wrapper. 

```vue
import {ExclamationTriangleIcon, ExclamationCircleIcon, InformationCircleIcon, CheckCircleIcon, CircleStackIcon} from '@heroicons/vue/24/outline';
```

<div class="flex flex-col gap-3">
    <!-- #region customIcons -->
    <Alert>
        <template #icon>
            <InformationCircleIcon/>
        </template>
        Some Content
    </Alert>
    <Alert class="alert-danger">
        <template #icon>
            <ExclamationCircleIcon/>
        </template>
        Some Content
    </Alert>
    <Alert class="alert-success">
        <template #icon>
            <CheckCircleIcon/>
        </template>
        Some Content
    </Alert>
    <Alert class="alert-warning">
        <template #icon>
            <ExclamationTriangleIcon/>
        </template>
        Some Content
    </Alert>
    <Alert>
        <template #icon>
            <CircleStackIcon/>
        </template>
        Some Content
    </Alert>
    <!-- #endregion customIcons -->
</div>

::: details Show Code
<<< ./index.md#customIcons{vue}
:::

## Sizes

Customize the size of an `alert` using a [predetermined size](#predetermined-sizes), [tailwind's numeric sizing classes](#tailwind-sizes), or an [arbitrary](#arbitrary-sizes) CSS length unit.

### Predetermined Sizes

The size can be customized using predetermined `size prop` values: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`. Use the syntax: `size="[size]"`.

<div class="flex flex-col gap-3">
    <!-- #region sizeProp -->
    <Alert size="alert-xs">xs</Alert>
    <Alert size="alert-sm">sm</Alert>
    <Alert size="alert-md">md</Alert>
    <Alert size="alert-lg">lg</Alert>
    <Alert size="alert-xl">xl</Alert>
    <Alert size="alert-2xl">2xl</Alert>
    <Alert size="alert-3xl">3xl</Alert>
    <Alert size="alert-4xl">4xl</Alert>
    <Alert size="alert-5xl">5xl</Alert>
    <!-- #endregion sizeProp -->
</div>

::: details Show Code
<<< ./index.md#sizeProp{vue}
:::

### Tailwind Sizes

For more granular control over sizes, use Tailwind's numeric sizing scale classes: `alert-1` - `alert-96`.

<div class="flex flex-col gap-2">
    <!-- #region tailwindSizes-->
    <Alert size="alert-3">alert-3</Alert>
    <Alert size="alert-3.5">alert-3.5</Alert>
    <Alert size="alert-4">alert-4</Alert>
    <Alert size="alert-5">alert-5</Alert>
    <!-- #endregion tailwindSizes-->
</div>

::: details Show Code
<<< ./index.md#tailwindSizes{vue}
:::

### Arbitrary Sizes

For precise sizing, specify exact pixel values using the syntax `alert-[Npx]` or any other CSS length units (`rem`, `em`, `mm`, etc.).

<div class="flex flex-col gap-2">
    <!-- #region arbitrarySizes-->
    <Alert size="alert-[16px]">alert-[16px]</Alert>
    <Alert size="alert-[1.5rem]">alert-[1.5rem]</Alert>
    <!-- #endregion arbitrarySizes-->
</div>

::: details Show Code
<<< ./index.md#arbitrarySizes{vue}
:::

## Color Variants

The alert component supports eight standard color variants: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`. Use the syntax: `alert-[variant]`.

<div class="flex flex-col gap-3">
    <!-- #region variants -->
    <Alert class="alert-primary">Primary</Alert>
    <Alert class="alert-secondary">Secondary</Alert>
    <Alert class="alert-success">Success</Alert>
    <Alert class="alert-danger">Danger</Alert>
    <Alert class="alert-warning">Warning</Alert>
    <Alert class="alert-info">Info</Alert>
    <Alert class="alert-light">Light</Alert>
    <Alert class="alert-dark">Dark</Alert>
    <!-- #endregion variants -->
</div>

::: details Show Code
<<< ./index.md#variants{vue}
:::

## Color Shades

You can also use Tailwind color shades by passing them as classes.

<div class="flex flex-col gap-2">
    <!-- #region colorShades -->
    <Alert class="alert-red-50">alert-red-50</Alert>
    <Alert class="alert-red-100">alert-red-100</Alert>
    <Alert class="alert-red-200">alert-red-200</Alert>
    <Alert class="alert-red-300">alert-red-300 </Alert>
    <Alert class="alert-red-400">alert-red-400</Alert>
    <Alert class="alert-red-500">alert-red-500</Alert>
    <Alert class="alert-red-600">alert-red-600</Alert>
    <Alert class="alert-red-700">alert-red-700 </Alert>
    <Alert class="alert-red-800">alert-red-800 </Alert>
    <Alert class="alert-red-900">alert-red-900 </Alert>
    <Alert class="alert-red-950">alert-red-950</Alert>
    <!-- #endregion colorShades -->
</div>

::: details Show Code
<<< ./index.md#colorShades{vue}
:::