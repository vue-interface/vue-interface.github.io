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

### Tailwind Setup

```css
@import '@vue-interface/badge/index.css';
```

## Basic Usage

To create a badge component, use the `badge` class. Use the `badge-close` class to add a close button to the badge.

<div class="flex gap-1">
    <!-- #region basicUsage -->
    <div class="badge">
        No Children
    </div>
    <div class="badge">
        <span>With Children</span>
    </div>
    <div class="badge">
        <span>Right Close Button</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge">
        <button class="badge-close"></button>
        <span>Left Close Button</span>
    </div>
    <!-- #endregion basicUsage -->
</div>

<<< ./index.md#basicUsage{html}

 Use the `badge-outline` class to create an outlined badge.

<div class="flex gap-1">
    <!-- #region basicUsageOutline -->
    <div class="badge badge-outline">
        No Children
    </div>
    <div class="badge badge-outline">
        <span>With Children</span>
    </div>
    <div class="badge badge-outline">
        <span>Right Close Button</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-outline">
        <button class="badge-close"></button>
        <span>Left Close Button</span>
    </div>
    <!-- #endregion basicUsageOutline -->
</div>

::: details Show Code
<<< ./index.md#basicUsageOutline{html}
:::

## Sizes

Customize the size of a `badge` using a [predetermined size](#predetermined-sizes), [tailwind's numeric sizing classes](#tailwind-sizes), or an [arbitrary](#arbitrary-sizes) CSS length unit.

### Predetermined Sizes

The size can be customized using predetermined size classes: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`. Use the syntax: `badge-[size]`.

<div class="flex items-center gap-2">
    <!-- #region predeterminedSizes-->
    <div class="badge badge-xs">
        <span>xs</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-sm">
        <span>sm</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-md">
        <span>md</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-lg">
        <span>lg</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-xl">
        <span>xl</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-2xl">
        <span>2xl</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-3xl">
        <span>3xl</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-4xl">
        <span>4xl</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-5xl">
        <span>5xl</span>
        <button class="badge-close"></button>
    </div>
    <!-- #endregion predeterminedSizes-->
</div>

::: details Show Code
<<< ./index.md#predeterminedSizes{html}
:::

### Tailwind Sizes

For more granular control over button sizes, use Tailwind's numeric sizing scale classes: `badge-1` - `badge-96`.

<div class="flex items-center gap-2">
    <!-- #region tailwindSizes-->
    <div class="badge badge-4">
        <span>badge-4</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-5">
        <span>badge-5</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-6">
        <span>badge-6</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-7">
        <span>badge-7</span>
        <button class="badge-close"></button>
    </div>
    <!-- #endregion tailwindSizes-->
</div>

::: details Show Code
<<< ./index.md#tailwindSizes{html}
:::

### Arbitrary sizes

For precise sizing, specify exact pixel values using the syntax `badge-[Npx]` or any other CSS length units (`rem`, `em`, `mm`, etc.).

<div class="flex items-center gap-2">
    <!-- #region arbitrarySizes-->
    <div class="badge badge-[16px]">
        <span>[16px]</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-[1.5rem]">
        <span>[1.5rem]</span>
        <button class="badge-close"></button>
    </div>
    <!-- #endregion arbitrarySizes-->
</div>

::: details Show Code
<<< ./index.md#arbitrarySizes{html}
:::

## Color Variants

The badge component supports eight standard color variants: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`. Use the syntax: `badge-[variant]`.

<div class="flex items-center gap-2">
    <!-- #region variants -->
    <div class="badge badge-primary">
        <span>Primary</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-secondary">
        <span>Secondary</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-success">
        <span>Success</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-danger">
        <span>Danger</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-warning">
        <span>Warning</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-info">
        <span>Info</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-light">
        <span>Light</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-dark">
        <span>Dark</span>
        <button class="badge-close"></button>
    </div>
    <!-- #endregion variants -->
</div>

::: details Show Code
<<< ./index.md#variants{html}
:::

## Custom Colors

Customize the color of the `badge` component with the [Tailwind color palette](https://tailwindcss.com/docs/colors) by using the class: `badge-[color]`.

<div class="flex items-center gap-2">
    <!-- #region customColors -->
    <div class="badge badge-green-500">
        <span>badge-green-500</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-amber-500">
        <span>badge-amber-500</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-yellow-500">
        <span>badge-yellow-500</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-red-500">
        <span>badge-red-500</span>
        <button class="badge-close"></button>
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
        <span>badge-red-50</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-red-100">
        <span>badge-red-100</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-red-200">
        <span>badge-red-200</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-red-300">
        <span>badge-red-300</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-red-400">
        <span>badge-red-400</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-red-500">
        <span>badge-red-500</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-red-600">
        <span>badge-red-600</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-red-700">
        <span>badge-red-700</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-red-800">
        <span>badge-red-800</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-red-900">
        <span>badge-red-900</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-red-950">
        <span>badge-red-950</span>
        <button class="badge-close"></button>
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

<div class="flex items-center gap-2">
    <!-- #region outlinePredeterminedSizes-->
    <div class="badge badge-outline badge-xs">
        <span>xs</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-outline badge-sm">
        <span>sm</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-outline badge-md">
        <span>md</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-outline badge-lg">
        <span>lg</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-outline badge-xl">
        <span>xl</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-outline badge-2xl">
        <span>2xl</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-outline badge-3xl">
        <span>3xl</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-outline badge-4xl">
        <span>4xl</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-outline badge-5xl">
        <span>5xl</span>
        <button class="badge-close"></button>
    </div>
    <!-- #endregion outlinePredeterminedSizes-->
</div>

::: details Show Code
<<< ./index.md#outlinePredeterminedSizes{html}
:::

### Tailwind Sizes

For more granular control over button sizes, use Tailwind's numeric sizing scale classes: `badge-outline-1` - `badge-outline-96`.

<div class="flex items-center gap-2">
    <!-- #region outlineTailwindSizes-->
    <div class="badge badge-outline badge-outline-4">
        <span>badge-4</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-outline badge-outline-5">
        <span>badge-5</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-outline badge-outline-6">
        <span>badge-6</span>
        <button class="badge-close"></button>
    </div>
    <!-- #endregion outlineTailwindSizes -->
</div>

::: details Show Code
<<< ./index.md#outlineTailwindSizes{html}
:::

### Arbitrary sizes

For precise sizing, specify exact pixel values using the syntax `badge-outline-[Npx]` or any other CSS length units (`rem`, `em`, `mm`, etc.).

<div class="flex items-center gap-2">
    <!-- #region outlineArbitrarySizes-->
    <div class="badge badge-outline badge-outline-[16px]">
        <span>[16px]</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-outline badge-outline-[1.5rem]">
        <span>[1.5rem]</span>
        <button class="badge-close"></button>
    </div>
    <!-- #endregion outlineArbitrarySizes -->
</div>

::: details Show Code
<<< ./index.md#outlineArbitrarySizes{html}
:::

## Outline Color Variants

<div class="flex items-center gap-2">
    <!-- #region outlineVariants -->
    <div class="badge badge-outline-primary">
        <span>Primary</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-outline-secondary">
        <span>Secondary</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-outline-success">
        <span>Success</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-outline-danger">
        <span>Danger</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-outline-warning">
        <span>Warning</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-outline-info">
        <span>Info</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-outline-light">
        <span>Light</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-outline-dark">
        <span>Dark</span>
        <button class="badge-close"></button>
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
        <span>badge-red-50</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-outline-red-100">
        <span>badge-red-100</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-outline-red-200">
        <span>badge-red-200</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-outline-red-300">
        <span>badge-red-300</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-outline-red-400">
        <span>badge-red-400</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-outline-red-500">
        <span>badge-red-500</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-outline-red-600">
        <span>badge-red-600</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-outline-red-700">
        <span>badge-red-700</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-outline-red-800">
        <span>badge-red-800</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-outline-red-900">
        <span>badge-red-900</span>
        <button class="badge-close"></button>
    </div>
    <div class="badge badge-outline-red-950">
        <span>badge-red-950</span>
        <button class="badge-close"></button>
    </div>
    <!-- #endregion outlineShades -->
</div>

::: details Show Code
<<< ./index.md#outlineShades{html}
:::