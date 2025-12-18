---
title: Badge
---

<script type="module">
import '../demo.css'
</script>

# Badge

The `badge` utility class provides a flexible and customizable badge component system with customizable color variants and sizes.

### Installation

::: code-group
```bash [pnpm]
pnpm i @vue-interface/badge
```

```bash [yarn]
yarn add @vue-interface/badge
```

```bash [npm]
npm i @vue-interface/badge
```

```bash [bun]
bun i @vue-interface/badge
```
:::

## Basic Usage

To create a badge component, use the parent `badge` class and then add the `badge-link` class to the inner elements. Use the `close-button` class to add a close button to the badge. Use the `badge-outline` class to create an outlined badge.

<div class="flex flex-col gap-3">
    <!-- #region basicUsage -->
    <div class="badge">
        <a class="badge-link">Basic Usage (close-button)</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge">
        <a class="badge-link">Basic usage (no close-button)</a>
    </div>
    <div class="badge badge-outline">
        <a class="badge-link">badge-outline</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <!-- #endregion basicUsage -->
</div>

<<< ./index.md#basicUsage{html}

## Sizes

Customize the size of a `badge` using a [predetermined size](#predetermined-sizes), [tailwind's numeric sizing classes](#tailwind-sizes), or an [arbitrary](#arbitrary-sizes) CSS length unit.

### Predetermined Sizes

The size can be customized using predetermined size classes: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`. Use the syntax: `badge-[size]`.

<div class="flex flex-col gap-2">
    <!-- #region predeterminedSizes-->
    <div class="badge badge-xs">
        <a class="badge-link">xs</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-sm">
        <a class="badge-link">sm</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-md">
        <a class="badge-link">md</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-lg">
        <a class="badge-link">lg</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-xl">
        <a class="badge-link">xl</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-2xl">
        <a class="badge-link">2xl</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-3xl">
        <a class="badge-link">3xl</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-4xl">
        <a class="badge-link">4xl</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-5xl">
        <a class="badge-link">5xl</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <!-- #endregion predeterminedSizes-->
</div>

::: details Show Code
<<< ./index.md#predeterminedSizes{html}
:::

### Tailwind Sizes

For more granular control over button sizes, use Tailwind's numeric sizing scale classes: `badge-1` - `badge-96`.

<div class="flex flex-col gap-2">
    <!-- #region tailwindSizes-->
    <div class="badge badge-4">
        <a class="badge-link">badge-4</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-5">
        <a class="badge-link">badge-5</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-6">
        <a class="badge-link">badge-6</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <!-- #endregion tailwindSizes-->
</div>

::: details Show Code
<<< ./index.md#tailwindSizes{html}
:::

### Arbitrary sizes

For precise sizing, specify exact pixel values using the syntax `badge-[Npx]` or any other CSS length units (`rem`, `em`, `mm`, etc.).

<div class="flex flex-col gap-2">
    <!-- #region arbitrarySizes-->
    <div class="badge badge-[16px]">
        <a class="badge-link">[16px]</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-[1.5rem]">
        <a class="badge-link">[1.5rem]</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <!-- #endregion arbitrarySizes-->
</div>

::: details Show Code
<<< ./index.md#arbitrarySizes{html}
:::

## Color Variants

The badge component supports eight standard color variants: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`. Use the syntax: `badge-[variant]`.

<div class="flex flex-col gap-2">
    <!-- #region variants -->
    <div class="badge badge-primary">
        <a class="badge-link">Primary</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-secondary">
        <a class="badge-link">Secondary</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-success">
        <a class="badge-link">Success</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-danger">
        <a class="badge-link">Danger</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-warning">
        <a class="badge-link">Warning</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-info">
        <a class="badge-link">Info</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-light">
        <a class="badge-link">Light</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-dark">
        <a class="badge-link">Dark</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <!-- #endregion variants -->
</div>

::: details Show Code
<<< ./index.md#variants{html}
:::

## Custom Colors

Customize the color of the `badge` component with the [Tailwind color palette](https://tailwindcss.com/docs/colors) by using the class: `badge-[color]`.

<div class="flex flex-col gap-2">
    <!-- #region customColors -->
    <div class="badge badge-green-500">
        <a class="badge-link">badge-green-500</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-amber-500">
        <a class="badge-link">badge-amber-500</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-yellow-500">
        <a class="badge-link">badge-yellow-500</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-red-500">
        <a class="badge-link">badge-red-500</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <!-- #endregion customColors -->
</div>

::: details Show Code
<<< ./index.md#customColors{html}
:::

## Color Shades

<div class="flex flex-col gap-2">
    <!-- #region colorShades -->
    <div class="badge badge-red-50">
        <a class="badge-link">badge-red-50</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-red-100">
        <a class="badge-link">badge-red-100</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-red-200">
        <a class="badge-link">badge-red-200</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-red-300">
        <a class="badge-link">badge-red-300</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-red-400">
        <a class="badge-link">badge-red-400</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-red-500">
        <a class="badge-link">badge-red-500</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-red-600">
        <a class="badge-link">badge-red-600</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-red-700">
        <a class="badge-link">badge-red-700</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-red-800">
        <a class="badge-link">badge-red-800</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-red-900">
        <a class="badge-link">badge-red-900</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <!-- #endregion colorShades -->
</div>

::: details Show Code
<<< ./index.md#colorShades{html}
:::

## Outline Sizes

Customize the size of a `badge-outline` using a [predetermined size](#predetermined-sizes), [tailwind's numeric sizing classes](#tailwind-sizes), or an [arbitrary](#arbitrary-sizes) CSS length unit.

### Predetermined Sizes

The size can be customized using predetermined size classes: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`. Use the syntax: `badge-outline-[size]`.

<div class="flex flex-col gap-2">
    <!-- #region outlineSizes -->
    <div class="badge badge-outline badge-outline-xs">
        <a class="badge-link">xs</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-outline badge-outline-sm">
        <a class="badge-link">sm</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-outline badge-outline-md">
        <a class="badge-link">md</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-outline badge-outline-lg">
        <a class="badge-link">lg</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-outline badge-outline-xl">
        <a class="badge-link">xl</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-outline badge-outline-2xl">
        <a class="badge-link">2xl</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-outline badge-outline-3xl">
        <a class="badge-link">3xl</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-outline badge-outline-4xl">
        <a class="badge-link">4xl</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-outline badge-outline-5xl">
        <a class="badge-link">5xl</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <!-- #endregion outlineSizes -->
</div>

::: details Show Code
<<< ./index.md#outlineSizes{html}
:::

### Tailwind Sizes

For more granular control over button sizes, use Tailwind's numeric sizing scale classes: `badge-outline-1` - `badge-outline-96`.

<div class="flex flex-col gap-2">
    <!-- #region outlineTailwindSizes-->
    <div class="badge badge-outline badge-outline-4">
        <a class="badge-link">badge-4</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-outline badge-outline-5">
        <a class="badge-link">badge-5</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-outline badge-outline-6">
        <a class="badge-link">badge-6</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <!-- #endregion outlineTailwindSizes -->
</div>

::: details Show Code
<<< ./index.md#outlineTailwindSizes{html}
:::

### Arbitrary sizes

For precise sizing, specify exact pixel values using the syntax `badge-outline-[Npx]` or any other CSS length units (`rem`, `em`, `mm`, etc.).

<div class="flex flex-col gap-2">
    <!-- #region outlineArbitrarySizes-->
    <div class="badge badge-outline badge-outline-[16px]">
        <a class="badge-link">[16px]</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-outline badge-outline-[1.5rem]">
        <a class="badge-link">[1.5rem]</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <!-- #endregion outlineArbitrarySizes -->
</div>

::: details Show Code
<<< ./index.md#outlineArbitrarySizes{html}
:::

## Outline Color Variants

<div class="flex flex-col gap-2">
    <!-- #region outlineVariants -->
    <div class="badge badge-outline-primary">
        <a class="badge-link">Primary</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-outline-secondary">
        <a class="badge-link">Secondary</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-outline-success">
        <a class="badge-link">Success</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-outline-danger">
        <a class="badge-link">Danger</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-outline-warning">
        <a class="badge-link">Warning</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-outline-info">
        <a class="badge-link">Info</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-outline-light">
        <a class="badge-link">Light</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-outline-dark">
        <a class="badge-link">Dark</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <!-- #endregion outlineVariants -->
</div>

::: details Show Code
<<< ./index.md#outlineVariants{html}
:::

## Outline Color Shades

<div class="flex flex-col gap-2">
    <!-- #region outlineShades -->
    <div class="badge badge-outline-red-50">
        <a class="badge-link">badge-red-50</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-outline-red-100">
        <a class="badge-link">badge-red-100</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-outline-red-200">
        <a class="badge-link">badge-red-200</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-outline-red-300">
        <a class="badge-link">badge-red-300</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-outline-red-400">
        <a class="badge-link">badge-red-400</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-outline-red-500">
        <a class="badge-link">badge-red-500</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-outline-red-600">
        <a class="badge-link">badge-red-600</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-outline-red-700">
        <a class="badge-link">badge-red-700</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-outline-red-800">
        <a class="badge-link">badge-red-800</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <div class="badge badge-outline-red-900">
        <a class="badge-link">badge-red-900</a>
        <a href="#" class="badge-link close-button"></a>
    </div>
    <!-- #endregion outlineShades -->
</div>

::: details Show Code
<<< ./index.md#outlineShades{html}
:::