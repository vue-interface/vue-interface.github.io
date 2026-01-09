---
title: Badge
---

<script setup>
import '../demo.css'
import Badge from '../src/Badge.vue';
import { TrashIcon } from '@heroicons/vue/24/outline';
</script>

# Badge

The `Badge` component provides a flexible and customizable way to display status, labels, or other metadata with various color variants and sizes.

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

To create a badge component, use the `<Badge>` component. Use the `closeable` prop to add a close button and add `close-left` to place the close button on the left.

<div class="flex gap-1">
    <!-- #region basicUsage -->
    <Badge>Basic Usage</Badge>
    <Badge closeable @click="() => {console.log('click')}" @close="() => {console.log('close')}">
        Right Close Button
    </Badge>
    <Badge closeable close-left>Left Close Button</Badge>
    <!-- #endregion basicUsage -->
</div>

<<< ./index.md#basicUsage{vue}

Use the `badge-outline` class to create an outlined badge.

<div class="flex gap-1">
    <!-- #region outlineVariant -->
    <Badge class="badge-outline">Basic Usage</Badge>
    <Badge class="badge-outline" closeable>Right Close Button</Badge>
    <Badge class="badge-outline" closeable close-left>Left Close Button</Badge>
    <!-- #endregion outlineVariant -->
</div>

<<< ./index.md#outlineVariant{vue}

## Custom Close Icon

You can override the default close icon using the `close-icon` slot.

<div class="flex items-center gap-1">
    <!-- #region customIcon -->
    <Badge closeable>
        Default Icon
    </Badge>
    <Badge closeable>
        <template #close-icon>
            <TrashIcon />
        </template>
        Custom Icon
    </Badge>
    <!-- #endregion customIcon -->
</div>

::: details Show Code
<<< ./index.md#customIcon{vue}
:::

## Sizes

Customize the size of a `badge` using a [predetermined size](#predetermined-sizes), [tailwind's numeric sizing classes](#tailwind-sizes), or an [arbitrary](#arbitrary-sizes) CSS length unit.

### Predetermined Sizes

The size can be customized using a predetermined `size` prop: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`. Use the syntax: `badge-[size]`.

<div class="flex items-center gap-1 mb-4">
    <!-- #region predeterminedSizes-->
    <Badge size="badge-xs" closeable>xs</Badge>
    <Badge size="badge-sm" closeable>sm</Badge>
    <Badge size="badge-md" closeable>md</Badge>
    <Badge size="badge-lg" closeable>lg</Badge>
    <Badge size="badge-xl" closeable>xl</Badge>
    <Badge size="badge-2xl" closeable>2xl</Badge>
    <Badge size="badge-3xl" closeable>3xl</Badge>
    <Badge size="badge-4xl" closeable>4xl</Badge>
    <Badge size="badge-5xl" closeable>5xl</Badge>
    <!-- #endregion predeterminedSizes-->
</div>

::: details Show Code
<<< ./index.md#predeterminedSizes{vue}
:::

### Tailwind Sizes

For more granular control over `badge` sizes, use Tailwind's numeric sizing scale classes: `badge-1` - `badge-96`.

<div class="flex items-center gap-1">
    <!-- #region tailwindSizes-->
    <Badge size="badge-3" closeable>badge-3</Badge>
    <Badge size="badge-3.5" closeable>badge-3.5</Badge>
    <Badge size="badge-4" closeable>badge-4</Badge>
    <Badge size="badge-5" closeable>badge-5</Badge>
    <Badge size="badge-6" closeable>badge-6</Badge>
    <!-- #endregion tailwindSizes-->
</div>

::: details Show Code
<<< ./index.md#tailwindSizes{vue}
:::

### Arbitrary sizes

For precise sizing, specify exact pixel values using the syntax `badge-[Npx]` or any other CSS length units (`rem`, `em`, `mm`, etc.).

<div class="flex items-center gap-1">
    <!-- #region arbitrarySizes-->
    <Badge size="badge-[16px]" closeable>[16px]</Badge>
    <Badge size="badge-[1.5rem]" closeable>[1.5rem]</Badge>
    <!-- #endregion arbitrarySizes-->
</div>

::: details Show Code
<<< ./index.md#arbitrarySizes{vue}
:::

## Color Variants

The badge component supports eight standard color variants: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`. Use the syntax: `badge-[variant]`.

<div class="flex items-center gap-1">
    <!-- #region variants -->
    <Badge class="badge-primary" closeable>Primary</Badge>
    <Badge class="badge-secondary" closeable>Secondary</Badge>
    <Badge class="badge-success" closeable>Success</Badge>
    <Badge class="badge-danger" closeable>Danger</Badge>
    <Badge class="badge-warning" closeable>Warning</Badge>
    <Badge class="badge-info" closeable>Info</Badge>
    <Badge class="badge-light" closeable>Light</Badge>
    <Badge class="badge-dark" closeable>Dark</Badge>
    <!-- #endregion variants -->
</div>

::: details Show Code
<<< ./index.md#variants{vue}
:::

## Custom Colors

Customize the color of the `badge` component with the [Tailwind color palette](https://tailwindcss.com/docs/colors) by using the class: `badge-[color]`.

<div class="flex items-center gap-1">
    <!-- #region customColors -->
    <Badge class="badge-green-500" closeable>badge-green-500</Badge>
    <Badge class="badge-amber-500" closeable>badge-amber-500</Badge>
    <Badge class="badge-yellow-500" closeable>badge-yellow-500</Badge>
    <Badge class="badge-red-500" closeable>badge-red-500</Badge>
    <!-- #endregion customColors -->
</div>

::: details Show Code
<<< ./index.md#customColors{vue}
:::

## Color Shades

<div class="flex flex-col gap-1">
    <!-- #region colorShades -->
    <Badge class="badge-red-50" closeable>badge-red-50</Badge>
    <Badge class="badge-red-100" closeable>badge-red-100</Badge>
    <Badge class="badge-red-200" closeable>badge-red-200</Badge>
    <Badge class="badge-red-300" closeable>badge-red-300</Badge>
    <Badge class="badge-red-400" closeable>badge-red-400</Badge>
    <Badge class="badge-red-500" closeable>badge-red-500</Badge>
    <Badge class="badge-red-600" closeable>badge-red-600</Badge>
    <Badge class="badge-red-700" closeable>badge-red-700</Badge>
    <Badge class="badge-red-800" closeable>badge-red-800</Badge>
    <Badge class="badge-red-900" closeable>badge-red-900</Badge>
    <Badge class="badge-red-950" closeable>badge-red-950</Badge>
    <!-- #endregion colorShades -->
</div>

::: details Show Code
<<< ./index.md#colorShades{vue}
:::

## Outline Sizes

Customize the size of a `badge-outline` using a [predetermined size](#predetermined-sizes-(outline)), [tailwind's numeric sizing classes](#tailwind-sizes-(outline)), or an [arbitrary](#arbitrary-sizes-(outline)) CSS length unit.

### Predetermined Sizes (Outline)

The size can be customized using a predetermined `size` prop: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`. Use the syntax: `badge-[size]`.

<div class="flex gap-2 items-center">
    <!-- #region outlineSizes -->
    <Badge class="badge-outline" size="badge-xs" closeable>xs</Badge>
    <Badge class="badge-outline" size="badge-sm" closeable>sm</Badge>
    <Badge class="badge-outline" size="badge-md" closeable>md</Badge>
    <Badge class="badge-outline" size="badge-lg" closeable>lg</Badge>
    <Badge class="badge-outline" size="badge-xl" closeable>xl</Badge>
    <Badge class="badge-outline" size="badge-2xl" closeable>2xl</Badge>
    <Badge class="badge-outline" size="badge-3xl" closeable>3xl</Badge>
    <Badge class="badge-outline" size="badge-4xl" closeable>4xl</Badge>
    <Badge class="badge-outline" size="badge-5xl" closeable>5xl</Badge>
    <!-- #endregion outlineSizes -->
</div>

::: details Show Code
<<< ./index.md#outlineSizes{vue}
:::

### Tailwind Sizes (Outline)

For more granular control over `badge-outline` sizes, use Tailwind's numeric sizing scale classes: `badge-1` - `badge-96`.

<div class="flex items-center gap-1">
    <!-- #region outlineTailwindSizes-->
    <Badge class="badge-outline" size="badge-3" closeable>badge-3</Badge>
    <Badge class="badge-outline" size="badge-3.5" closeable>badge-3.5</Badge>
    <Badge class="badge-outline" size="badge-4" closeable>badge-4</Badge>
    <Badge class="badge-outline" size="badge-5" closeable>badge-5</Badge>
    <!-- #endregion outlineTailwindSizes-->
</div>

::: details Show Code
<<< ./index.md#outlineTailwindSizes{vue}
:::

### Arbitrary sizes (Outline)

For precise sizing, specify exact pixel values using the syntax `badge-[Npx]` or any other CSS length units (`rem`, `em`, `mm`, etc.).

<div class="flex items-center gap-1">
    <!-- #region outlineArbitrarySizes-->
    <Badge class="badge-outline" size="badge-[16px]" closeable>[16px]</Badge>
    <Badge class="badge-outline" size="badge-[1.5rem]" closeable>[1.5rem]</Badge>
    <!-- #endregion outlineArbitrarySizes-->
</div>

::: details Show Code
<<< ./index.md#outlineArbitrarySizes{vue}
:::

## Outline Color Variants

<div class="flex gap-2">
    <!-- #region outlineVariants -->
    <Badge class="badge-outline-primary" closeable>Primary</Badge>
    <Badge class="badge-outline-secondary" closeable>Secondary</Badge>
    <Badge class="badge-outline-success" closeable>Success</Badge>
    <Badge class="badge-outline-danger" closeable>Danger</Badge>
    <Badge class="badge-outline-warning" closeable>Warning</Badge>
    <Badge class="badge-outline-info" closeable>Info</Badge>
    <Badge class="badge-outline-light" closeable>Light</Badge>
    <Badge class="badge-outline-dark" closeable>Dark</Badge>
    <!-- #endregion outlineVariants -->
</div>

::: details Show Code
<<< ./index.md#outlineVariants{vue}
:::

## Outline Color Shades

<div class="flex flex-col gap-1">
    <!-- #region outlineShades -->
    <Badge class="badge-outline-red-50" closeable>badge-red-50</Badge>
    <Badge class="badge-outline-red-100" closeable>badge-red-100</Badge>
    <Badge class="badge-outline-red-200" closeable>badge-red-200</Badge>
    <Badge class="badge-outline-red-300" closeable>badge-red-300</Badge>
    <Badge class="badge-outline-red-400" closeable>badge-red-400</Badge>
    <Badge class="badge-outline-red-500" closeable>badge-red-500</Badge>
    <Badge class="badge-outline-red-600" closeable>badge-red-600</Badge>
    <Badge class="badge-outline-red-700" closeable>badge-red-700</Badge>
    <Badge class="badge-outline-red-800" closeable>badge-red-800</Badge>
    <Badge class="badge-outline-red-900" closeable>badge-red-900</Badge>
    <Badge class="badge-outline-red-950" closeable>badge-red-950</Badge>
    <!-- #endregion outlineShades -->
</div>

::: details Show Code
<<< ./index.md#outlineShades{vue}
:::

## API

### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `closeable` | `boolean` | `false` | Add close button. |
| `close-left` | `boolean` | `false` | Left side close button. |
| `size` | `string` | `'badge-md'` | Badge size |

### Events

| Event | Payload | Description |
| --- | --- | --- |
| `@click` | `PointerEvent` | Emitted when the badge content is clicked. |
| `@close` | `PointerEvent` | Emitted when the close button is clicked. |

### Slots

| Slot | Description |
| --- | --- |
| `default` | The main content of the badge. |
| `close-icon` | Optional slot to override the default close icon. |