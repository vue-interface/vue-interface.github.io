---
title: Alert
---

<script type="module">
import '../demo.css'
</script>

# Alert

The `alert` utility class provides a flexible and customizable alert component system with customizable color variants and sizes.

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

## Basic Usage

To create a alert component, use the `alert` class. Use the `alert-centered` class to center the contents of the alert and `icon-[variant]` to customize the icon.

<div class="flex flex-col items-start gap-3">
    <!-- #region basicUsage -->
    <div class="alert">Some Content</div>
    <div class="alert alert-centered">Some Content</div>
    <div class="alert">Lorem ipsum dolor sit amet consectetur adipiscing elit.
        Consectetur adipiscing elit quisque faucibus ex sapien vitae.
        Ex sapien vitae pellentesque sem placerat in id.
        Placerat in id cursus mi pretium tellus duis.
        Pretium tellus duis convallis tempus leo eu aeneanLorem ipsum dolor sit amet consectetur adipiscing
        elit.</div>
    <!-- #endregion basicUsage -->
</div>

<<< ./index.md#basicUsage{html}

## Sizes

Customize the size of a `alert` using a [predetermined size](#predetermined-sizes), [tailwind's numeric sizing classes](#tailwind-sizes), or an [arbitrary](#arbitrary-sizes) CSS length unit.

### Predetermined Sizes

The size can be customized using predetermined size classes: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`. Use the syntax: `alert-[size]`.

<div class="flex flex-col items-start gap-3">
    <!-- #region predeterminedSizes-->
    <div class="alert alert-xs">xs</div>
    <div class="alert alert-sm">sm</div>
    <div class="alert alert-md">md</div>
    <div class="alert alert-lg">lg</div>
    <div class="alert alert-xl">xl</div>
    <div class="alert alert-2xl">2xl</div>
    <div class="alert alert-3xl">3xl</div>
    <div class="alert alert-4xl">4xl</div>
    <div class="alert alert-5xl">5xl</div>
    <!-- #endregion predeterminedSizes-->
</div>

::: details Show Code
<<< ./index.md#predeterminedSizes{html}
:::

### Tailwind Sizes

For more granular control over button sizes, use Tailwind's numeric sizing scale classes: `alert-1` - `alert-96`.

<div class="flex items-center gap-2">
    <!-- #region tailwindSizes-->
    <div class="alert alert-3">alert-3</div>
    <div class="alert alert-3.5">alert-3.5</div>
    <div class="alert alert-4">alert-4</div>
    <div class="alert alert-5">alert-5</div>
    <!-- #endregion tailwindSizes-->
</div>

::: details Show Code
<<< ./index.md#tailwindSizes{html}
:::

### Arbitrary sizes

For precise sizing, specify exact pixel values using the syntax `alert-[Npx]` or any other CSS length units (`rem`, `em`, `mm`, etc.).

<div class="flex items-center gap-2">
    <!-- #region arbitrarySizes-->
    <div class="alert alert-[16px]">[16px]</div>
    <div class="alert alert-[1.5rem]">[1.5rem]</div>
    <!-- #endregion arbitrarySizes-->
</div>

::: details Show Code
<<< ./index.md#arbitrarySizes{html}
:::

## Color Variants

The alert component supports eight standard color variants: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`. Use the syntax: `alert-[variant]`.

<div class="flex flex-col items-start gap-3">
    <!-- #region variants -->
    <div class="alert alert-primary">Primary</div>
    <div class="alert alert-secondary">Secondary</div>
    <div class="alert alert-success">Success</div>
    <div class="alert alert-danger">Danger</div>
    <div class="alert alert-warning">Warning</div>
    <div class="alert alert-info">Info</div>
    <div class="alert alert-light">Light</div>
    <div class="alert alert-dark">Dark</div>
    <!-- #endregion variants -->
</div>

::: details Show Code
<<< ./index.md#variants{html}
:::

## Custom Colors

Customize the color of the `alert` component with the [Tailwind color palette](https://tailwindcss.com/docs/colors) by using the class: `alert-[color]`.

<div class="flex flex-col items-start gap-3">
    <!-- #region customColors -->
    <div class="alert alert-green-500">alert-green-500</div>
    <div class="alert alert-amber-500">alert-amber-500</div>
    <div class="alert alert-yellow-500">alert-yellow-500</div>
    <div class="alert alert-red-500">alert-red-500</div>
    <!-- #endregion customColors -->
</div>

::: details Show Code
<<< ./index.md#customColors{html}
:::

## Color Shades

<div class="flex flex-col gap-2">
    <!-- #region colorShades -->
    <div class="alert alert-red-50">alert-red-50</div>
    <div class="alert alert-red-100">alert-red-100</div>
    <div class="alert alert-red-200">alert-red-200</div>
    <div class="alert alert-red-300">alert-red-300 </div>
    <div class="alert alert-red-400">alert-red-400</div>
    <div class="alert alert-red-500">alert-red-500</div>
    <div class="alert alert-red-600">alert-red-600</div>
    <div class="alert alert-red-700">alert-red-700 </div>
    <div class="alert alert-red-800">alert-red-800 </div>
    <div class="alert alert-red-900">alert-red-900 </div>
    <div class="alert alert-red-950">alert-red-950</div>
    <!-- #endregion colorShades -->
</div>

::: details Show Code
<<< ./index.md#colorShades{html}
:::

## Color Shades

<div class="flex flex-col items-start gap-3">
    <!-- #region iconVariants -->
    <div class="alert alert-primary icon-info">Some Content</div>
    <div class="alert alert-danger icon-danger">Some Content</div>
    <div class="alert alert-success icon-success">Some Content</div>
    <div class="alert alert-warning icon-warning">Some Content</div>
    <!-- #endregion iconVariants -->
</div>

::: details Show Code
<<< ./index.md#iconVariants{html}
:::