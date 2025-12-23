---
title: Banner
---

<script type="module">
import '../demo.css'
</script>

# Banner

The `banner` utility class provides a flexible and customizable banner component system with customizable color variants and sizes.

### Installation

::: code-group
```bash [pnpm]
pnpm i @vue-interface/banner
```

```bash [yarn]
yarn add @vue-interface/banner
```

```bash [npm]
npm i @vue-interface/banner
```

```bash [bun]
bun i @vue-interface/banner
```
:::

## Basic Usage

To create a banner component, use the `banner` class. Use the `banner-centered` class to center the contents of the banner and `icon-[variant]` to customize the icon.

<div class="flex flex-col items-start gap-3">
    <!-- #region basicUsage -->
    <div class="banner">Some Content</div>
    <div class="banner banner-centered">Some Content</div>
    <div class="banner">Lorem ipsum dolor sit amet consectetur adipiscing elit.
        Consectetur adipiscing elit quisque faucibus ex sapien vitae.
        Ex sapien vitae pellentesque sem placerat in id.
        Placerat in id cursus mi pretium tellus duis.
        Pretium tellus duis convallis tempus leo eu aeneanLorem ipsum dolor sit amet consectetur adipiscing
        elit.</div>
    <!-- #endregion basicUsage -->
</div>

<<< ./index.md#basicUsage{html}

## Sizes

Customize the size of a `banner` using a [predetermined size](#predetermined-sizes), [tailwind's numeric sizing classes](#tailwind-sizes), or an [arbitrary](#arbitrary-sizes) CSS length unit.

### Predetermined Sizes

The size can be customized using predetermined size classes: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`. Use the syntax: `banner-[size]`.

<div class="flex flex-col items-start gap-3">
    <!-- #region predeterminedSizes-->
    <div class="banner banner-xs">xs</div>
    <div class="banner banner-sm">sm</div>
    <div class="banner banner-md">md</div>
    <div class="banner banner-lg">lg</div>
    <div class="banner banner-xl">xl</div>
    <div class="banner banner-2xl">2xl</div>
    <div class="banner banner-3xl">3xl</div>
    <div class="banner banner-4xl">4xl</div>
    <div class="banner banner-5xl">5xl</div>
    <!-- #endregion predeterminedSizes-->
</div>

::: details Show Code
<<< ./index.md#predeterminedSizes{html}
:::

### Tailwind Sizes

For more granular control over button sizes, use Tailwind's numeric sizing scale classes: `banner-1` - `banner-96`.

<div class="flex items-center gap-2">
    <!-- #region tailwindSizes-->
    <div class="banner banner-3">banner-3</div>
    <div class="banner banner-3.5">banner-3.5</div>
    <div class="banner banner-4">banner-4</div>
    <div class="banner banner-5">banner-5</div>
    <!-- #endregion tailwindSizes-->
</div>

::: details Show Code
<<< ./index.md#tailwindSizes{html}
:::

### Arbitrary sizes

For precise sizing, specify exact pixel values using the syntax `banner-[Npx]` or any other CSS length units (`rem`, `em`, `mm`, etc.).

<div class="flex items-center gap-2">
    <!-- #region arbitrarySizes-->
    <div class="banner banner-[16px]">[16px]</div>
    <div class="banner banner-[1.5rem]">[1.5rem]</div>
    <!-- #endregion arbitrarySizes-->
</div>

::: details Show Code
<<< ./index.md#arbitrarySizes{html}
:::

## Color Variants

The banner component supports eight standard color variants: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`. Use the syntax: `banner-[variant]`.

<div class="flex flex-col items-start gap-3">
    <!-- #region variants -->
    <div class="banner banner-primary">Primary</div>
    <div class="banner banner-secondary">Secondary</div>
    <div class="banner banner-success">Success</div>
    <div class="banner banner-danger">Danger</div>
    <div class="banner banner-warning">Warning</div>
    <div class="banner banner-info">Info</div>
    <div class="banner banner-light">Light</div>
    <div class="banner banner-dark">Dark</div>
    <!-- #endregion variants -->
</div>

::: details Show Code
<<< ./index.md#variants{html}
:::

## Custom Colors

Customize the color of the `banner` component with the [Tailwind color palette](https://tailwindcss.com/docs/colors) by using the class: `banner-[color]`.

<div class="flex flex-col items-start gap-3">
    <!-- #region customColors -->
    <div class="banner banner-green-500">banner-green-500</div>
    <div class="banner banner-amber-500">banner-amber-500</div>
    <div class="banner banner-yellow-500">banner-yellow-500</div>
    <div class="banner banner-red-500">banner-red-500</div>
    <!-- #endregion customColors -->
</div>

::: details Show Code
<<< ./index.md#customColors{html}
:::

## Color Shades

<div class="flex flex-col gap-2">
    <!-- #region colorShades -->
    <div class="banner banner-red-50">banner-red-50</div>
    <div class="banner banner-red-100">banner-red-100</div>
    <div class="banner banner-red-200">banner-red-200</div>
    <div class="banner banner-red-300">banner-red-300 </div>
    <div class="banner banner-red-400">banner-red-400</div>
    <div class="banner banner-red-500">banner-red-500</div>
    <div class="banner banner-red-600">banner-red-600</div>
    <div class="banner banner-red-700">banner-red-700 </div>
    <div class="banner banner-red-800">banner-red-800 </div>
    <div class="banner banner-red-900">banner-red-900 </div>
    <div class="banner banner-red-950">banner-red-950</div>
    <!-- #endregion colorShades -->
</div>

::: details Show Code
<<< ./index.md#colorShades{html}
:::

## Color Shades

<div class="flex flex-col items-start gap-3">
    <!-- #region iconVariants -->
    <div class="banner banner-primary icon-info">Some Content</div>
    <div class="banner banner-danger icon-danger">Some Content</div>
    <div class="banner banner-success icon-success">Some Content</div>
    <div class="banner banner-warning icon-warning">Some Content</div>
    <!-- #endregion iconVariants -->
</div>

::: details Show Code
<<< ./index.md#iconVariants{html}
:::