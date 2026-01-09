---
title: Sizeable
---

# Sizeable

The `sizeable` package provides a standardized way to handle component sizing across the Vue Interface library. It defines a set of size prefixes and utilities to ensure consistency in sizing options for various components.

### Installation

::: code-group
```bash [pnpm]
pnpm i @vue-interface/sizeable
```

```bash [yarn]
yarn add @vue-interface/sizeable
```

```bash [npm]
npm i @vue-interface/sizeable
```

```bash [bun]
bun i @vue-interface/sizeable
```
:::

## Usage

The `sizeable` package is designed to be used within Vue components to provide flexible sizing options via a `size` prop. It uses TypeScript to enforce specific size formats based on a component-specific prefix.

### Basic Implementation

To use `sizeable` in your component, you should define a size prefix and use the `ComponentSize` type for your `size` prop.

```vue
<script setup lang="ts">
import type { ComponentSize } from '@vue-interface/sizeable';

// 1. Define your component's size prefix
export type BadgeSizePrefix = 'badge';

// 2. Use ComponentSize with your prefix in defineProps
withDefaults(defineProps<{
    size?: ComponentSize<BadgeSizePrefix>;
}>(), {
    // 3. Set a default value (optional)
    size: 'badge-md'
});
</script>

<template>
    <!-- 4. Apply the size prop as a class -->
    <div class="badge" :class="size">
        <slot />
    </div>
</template>
```

### Supported Size Formats

The `ComponentSize` type supports several formats for the sizing value:

1.  **Predetermined Sizes**: Uses the format `${prefix}-${size}`, where size is one of: `2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`.
    - Example: `badge-sm`, `badge-lg`

2.  **Numeric Sizes**: Uses the format `${prefix}-${number}`.
    - Example: `badge-10`, `badge-50`

3.  **Custom Values**: Uses brackets for arbitrary values or CSS expressions: `${prefix}-[${value}]`.
    - Example: `badge-[10px]`, `badge-[calc(100%-1rem)]`

4.  **Object Syntax**: Supports Vue's object class syntax where keys are size values and values are booleans.
    - Example: `:size="{ 'badge-md': true, 'badge-lg': isLarge }"`

### How it works

The `size` value is intended to be used directly as a CSS class. For example, if `size` is `badge-md`, the resulting HTML will have the class `badge-md`.

```vue
<script setup lang="ts">
import { Badge } from '@vue-interface/badge';
</script>

<template>
    <Badge size="badge-sm">sm</Badge>
    <Badge size="badge-4">alert-4</Badge>
    <Badge size="badge-[16px]">alert-[16px]</Badge>
</template>
```

Individual components are responsible for providing the corresponding CSS rules for these classes.