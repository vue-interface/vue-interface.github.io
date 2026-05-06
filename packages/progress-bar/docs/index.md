---
title: Progress Bar
---

<script setup>
import '../demo.css'
import ProgressBar from '../src/ProgressBar.vue';
import { ref, onMounted } from 'vue';

const progress = ref(0);

onMounted(() => {
    const updateProgress = () => {
        setTimeout(() => {
            progress.value++;

            if(progress.value < 100) {
                updateProgress();
            }

        }, 500);
    };

    updateProgress();
});
</script>

# Progress Bar

The `ProgressBar` component provides a flexible and customizable way to display status, labels, or other metadata with various color variants and sizes.

### Installation

::: code-group
```bash [pnpm]
pnpm i @vue-interface/progress-bar
```

```bash [yarn]
yarn add @vue-interface/progress-bar
```

```bash [npm]
npm i @vue-interface/progress-bar
```

```bash [bun]
bun i @vue-interface/progress-bar
```
:::

### Tailwind Setup

```css
@import '@vue-interface/progress-bar/index.css';
```

## Basic Usage

To create a progress bar component, use the `<ProgressBar>` component. Use the `value` prop to set the progress and `show-value` to display the progress numerically.

<div class="flex flex-col gap-4">
    <!-- #region basicUsage -->
    <ProgressBar :value="progress"></ProgressBar>
    <ProgressBar :value="progress" label="Progress Bar"></ProgressBar>
    <ProgressBar :value="progress" show-value></ProgressBar>
    <ProgressBar :value="50" striped></ProgressBar>
    <ProgressBar :value="50" striped animated></ProgressBar>
    <!-- #endregion basicUsage -->
</div>

<<< ./index.md#basicUsage{vue}

## Color Variants

The progress-bar component supports eight standard color variants: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`. Use the syntax: `progress-bar-[variant]`.

<div class="flex flex-col gap-4">
    <!-- #region colorVariants -->
    <ProgressBar :value="50" class="progress-bar-primary"></ProgressBar>
    <ProgressBar :value="50" class="progress-bar-secondary"></ProgressBar>
    <ProgressBar :value="50" class="progress-bar-success"></ProgressBar>
    <ProgressBar :value="50" class="progress-bar-danger"></ProgressBar>
    <ProgressBar :value="50" class="progress-bar-warning"></ProgressBar>
    <ProgressBar :value="50" class="progress-bar-info"></ProgressBar>
    <ProgressBar :value="50" class="progress-bar-dark"></ProgressBar>
    <ProgressBar :value="50" class="progress-bar-light"></ProgressBar>
    <!-- #endregion colorVariants -->
</div>

::: details Show Code
<<< ./index.md#colorVariants{vue}
:::

## Custom Colors

Customize the color of the `ProgressBar` component with the [Tailwind color palette](https://tailwindcss.com/docs/colors) by using the class: `progress-bar-[color]`.

<div class="flex flex-col gap-4">
    <!-- #region customColors -->
    <ProgressBar :value="50" class="progress-bar-amber-500"></ProgressBar>
    <ProgressBar :value="50" class="progress-bar-green-500"></ProgressBar>
    <ProgressBar :value="50" class="progress-bar-purple-500"></ProgressBar>
    <ProgressBar :value="50" class="progress-bar-neutral-500"></ProgressBar>
    <!-- #endregion customColors -->
</div>

::: details Show Code
<<< ./index.md#customColors{vue}
:::

## Sizes

Customize the size of a `ProgressBar` using a [predetermined size](#predetermined-sizes), [tailwind's numeric sizing classes](#tailwind-sizes), or an [arbitrary](#arbitrary-sizes) CSS length unit.

### Predetermined Sizes

The size can be customized using a predetermined `size` prop: `2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`. Use the syntax: `progress-bar-[size]`.

<div class="flex flex-col gap-4">
    <!-- #region predeterminedSizes -->
    <ProgressBar :value="50" size="progress-bar-2xs"></ProgressBar>
    <ProgressBar :value="50" size="progress-bar-xs"></ProgressBar>
    <ProgressBar :value="50" size="progress-bar-sm"></ProgressBar>
    <ProgressBar :value="50" size="progress-bar-md"></ProgressBar>
    <ProgressBar :value="50" size="progress-bar-lg"></ProgressBar>
    <ProgressBar :value="50" size="progress-bar-xl"></ProgressBar>
    <ProgressBar :value="50" size="progress-bar-2xl"></ProgressBar>
    <ProgressBar :value="50" size="progress-bar-3xl"></ProgressBar>
    <ProgressBar :value="50" size="progress-bar-4xl"></ProgressBar>
    <ProgressBar :value="50" size="progress-bar-5xl"></ProgressBar>
    <!-- #endregion predeterminedSizes -->
</div>

::: details Show Code
<<< ./index.md#predeterminedSizes{vue}
:::

### Tailwind Sizes

For more granular control over `ProgressBar` sizes, use Tailwind's numeric sizing scale classes: `progress-bar-1` - `progress-bar-96`.

<div class="flex flex-col gap-4">
    <!-- #region tailwindSizes -->
    <ProgressBar :value="50" size="progress-bar-3"></ProgressBar>
    <ProgressBar :value="50" size="progress-bar-4"></ProgressBar>
    <ProgressBar :value="50" size="progress-bar-5"></ProgressBar>
    <!-- #endregion tailwindSizes -->
</div>

::: details Show Code
<<< ./index.md#tailwindSizes{vue}
:::

### Arbitrary sizes

For precise sizing, specify exact pixel values using the syntax `progress-bar-[Npx]` or any other CSS length units (`rem`, `em`, `mm`, etc.).

<div class="flex flex-col gap-4">
    <!-- #region arbitrarySizes -->
    <ProgressBar :value="50" size="progress-bar-[16px]"></ProgressBar>
    <ProgressBar :value="50" size="progress-bar-[1.5rem]"></ProgressBar>
    <!-- #endregion arbitrarySizes -->
</div>

::: details Show Code
<<< ./index.md#arbitrarySizes{vue}
:::

## Striped

Add the `striped` prop to apply a striped gradient over the progress bar's background color.

<div class="flex flex-col gap-4">
    <!-- #region striped -->
    <ProgressBar :value="50" class="progress-bar-primary" striped></ProgressBar>
    <ProgressBar :value="50" class="progress-bar-secondary" striped></ProgressBar>
    <ProgressBar :value="50" class="progress-bar-success" striped></ProgressBar>
    <ProgressBar :value="50" class="progress-bar-danger" striped></ProgressBar>
    <ProgressBar :value="50" class="progress-bar-warning" striped></ProgressBar>
    <ProgressBar :value="50" class="progress-bar-info" striped></ProgressBar>
    <ProgressBar :value="50" class="progress-bar-dark" striped></ProgressBar>
    <ProgressBar :value="50" class="progress-bar-light" striped></ProgressBar>
    <!-- #endregion striped -->
</div>

::: details Show Code
<<< ./index.md#striped{vue}
:::

## Striped & Animated

Add both `striped` and `animated` props to animate the stripes from right to left.

<div class="flex flex-col gap-4">
    <!-- #region stripedAnimated -->
    <ProgressBar :value="50" class="progress-bar-primary" striped animated></ProgressBar>
    <ProgressBar :value="50" class="progress-bar-secondary" striped animated></ProgressBar>
    <ProgressBar :value="50" class="progress-bar-success" striped animated></ProgressBar>
    <ProgressBar :value="50" class="progress-bar-danger" striped animated></ProgressBar>
    <ProgressBar :value="50" class="progress-bar-warning" striped animated></ProgressBar>
    <ProgressBar :value="50" class="progress-bar-info" striped animated></ProgressBar>
    <ProgressBar :value="50" class="progress-bar-dark" striped animated></ProgressBar>
    <ProgressBar :value="50" class="progress-bar-light" striped animated></ProgressBar>
    <!-- #endregion stripedAnimated -->
</div>

::: details Show Code
<<< ./index.md#stripedAnimated{vue}
:::

## API

### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | `0` | The value of the progress bar. |
| `label` | `string` | `undefined` | The label to display. |
| `show-value` | `boolean` | `false` | Display the progress numerically. |
| `size` | `string` | `'progress-bar-md'` | Progress bar size. |
| `striped` | `boolean` | `false` | Add stripes to the progress bar. |
| `animated` | `boolean` | `false` | Animate the stripes. |

### Slots

| Slot | Description |
| --- | --- |
| `label` | Optional slot to override the default label rendering. Exposes `label` and `value` bindings. |