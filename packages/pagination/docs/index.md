---
title: Pagination
---

<script type="module">
import '../demo.css'
</script>

# Pagination

The `pagination` utility class provides a flexible and customizable pagination component system with customizable color variants and sizes.

### Installation

::: code-group
```bash [pnpm]
pnpm i @vue-interface/pagination
```

```bash [yarn]
yarn add @vue-interface/pagination
```

```bash [npm]
npm i @vue-interface/pagination
```

```bash [bun]
bun i @vue-interface/pagination
```
:::

## Basic Usage

To create a pagination component, use the parent `pagination` class and then add the `pagination-link` class to the links in the pagination. Use the `active` class to indicate the current page and `disabled` class for non-clickable links.

<div class="flex flex-col gap-3">
    <!-- #region basicUsage -->
    <div class="pagination">
        <a href="#" class="pagination-link">«</a>
        <a href="#" class="pagination-link">1</a>
        <div class="pagination-link active disabled">2</div>
        <a href="#" class="pagination-link">3</a>
        <div class="pagination-link disabled">...</div>
        <a href="#" class="pagination-link">4</a>
        <a href="#" class="pagination-link active">5</a>
        <a href="#" class="pagination-link">6</a>
        <div class="pagination-link disabled">...</div>
        <a href="#" class="pagination-link">7</a>
        <a href="#" class="pagination-link">8</a>
        <a href="#" class="pagination-link">9</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <!-- #endregion basicUsage -->
</div>

<<< ./index.md#basicUsage{html}

## Sizes

Customize the size of a `pagination` using a [predetermined size](#predetermined-sizes), [tailwind's numeric sizing classes](#tailwind-sizes), or an [arbitrary](#arbitrary-sizes) CSS length unit.

### Predetermined Sizes

The size can be customized using predetermined size classes: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`. Use the syntax: `pagination-[size]`.

<div class="flex flex-col gap-3">
    <!-- #region predeterminedSizes-->
    <div class="pagination pagination-xs">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <div class="pagination pagination-sm">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <div class="pagination pagination-md">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <div class="pagination pagination-lg">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <div class="pagination pagination-xl">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <div class="pagination pagination-2xl">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <div class="pagination pagination-3xl">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <div class="pagination pagination-4xl">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <div class="pagination pagination-5xl">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <!-- #endregion predeterminedSizes-->
</div>

::: details Show Code
<<< ./index.md#predeterminedSizes{html}
:::

### Tailwind Sizes

For more granular control over pagination sizes, use Tailwind's numeric sizing scale classes: `pagination-1` - `pagination-96`.

<div class="flex flex-col gap-3">
    <!-- #region tailwindSizes-->
    <div class="pagination pagination-4">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <div class="pagination pagination-5">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <div class="pagination pagination-6">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <!-- #endregion tailwindSizes-->
</div>

::: details Show Code
<<< ./index.md#tailwindSizes{html}
:::

### Arbitrary sizes

For precise sizing, specify exact pixel values using the syntax `pagination-[Npx]` or any other CSS length units (`rem`, `em`, `mm`, etc.).

<div class="flex flex-col gap-3">
    <!-- #region arbitrarySizes-->
    <div class="pagination pagination-[16px]">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <div class="pagination pagination-[1.5rem]">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <!-- #endregion arbitrarySizes-->
</div>

::: details Show Code
<<< ./index.md#arbitrarySizes{html}
:::

## Variants

The pagination component supports eight standard color variants: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`. Use the syntax: `pagination-[variant]`.

<div class="flex flex-col gap-3">
    <!-- #region variants -->
    <div class="pagination pagination-primary">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <div class="pagination pagination-secondary">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <div class="pagination pagination-success">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <div class="pagination pagination-danger">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <div class="pagination pagination-warning">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <div class="pagination pagination-info">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <div class="pagination pagination-light">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <div class="pagination pagination-dark">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <!-- #endregion variants -->
</div>

::: details Show Code
<<< ./index.md#variants{html}
:::

## Custom Colors

Customize the color of the `pagination` component with the [Tailwind color palette](https://tailwindcss.com/docs/colors) by using the class: `pagination-[color]`.

<div class="flex flex-col gap-3">
    <!-- #region customColors -->
    <div class="pagination pagination-green-500">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <div class="pagination pagination-amber-500">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <div class="pagination pagination-yellow-500">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <div class="pagination pagination-red-500">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <!-- #endregion customColors -->
</div>

## Color Shades

Color shades automatically invert the text color for light and dark colors.

<div class="flex flex-col gap-3">
    <!-- #region colorShades -->
    <div class="pagination pagination-red-50">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <div class="pagination pagination-red-100">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <div class="pagination pagination-red-200">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <div class="pagination pagination-red-300">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <div class="pagination pagination-red-400">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <div class="pagination pagination-red-500">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <div class="pagination pagination-red-600">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <div class="pagination pagination-red-700">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <div class="pagination pagination-red-800">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <div class="pagination pagination-red-900">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <div class="pagination pagination-red-950">
        <a href="#" class="pagination-link disabled">«</a>
        <a href="#" class="pagination-link active">1</a>
        <a href="#" class="pagination-link">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">»</a>
    </div>
    <!-- #endregion colorShades -->
</div>

::: details Show Code
<<< ./index.md#colorShades{html}
:::