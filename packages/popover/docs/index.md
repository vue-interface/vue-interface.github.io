---
title: Popover
---

<script setup>
import '../demo.css'
import { ref } from 'vue';
import Popover from '../src/Popover.vue';
</script>

# Popover

The Popover component displays a floating content element next to a trigger element. It is built on top of [Floating UI](https://floating-ui.com/) and supports various positioning and interactions.

### Installation

::: code-group
```bash [pnpm]
pnpm i @vue-interface/popover
```

```bash [yarn]
yarn add @vue-interface/popover
```

```bash [npm]
npm i @vue-interface/popover
```

```bash [bun]
bun i @vue-interface/popover
```
:::

## Basic Usage

The Popover component uses a `default` slot for content and a `trigger` slot for the element that toggles the popover. The `trigger` slot receives `red`, `isOpen`, `open`, `close`, and `toggle` methods/state.

::: raw
<div>
    <!-- #region basicUsage -->
    <Popover>
        <template #trigger="{ ref, toggle, isOpen }">
            <button :ref="ref" class="btn" :class="{'btn-primary': !isOpen, 'btn-secondary': isOpen}" @click="toggle">
                Click me
            </button>
        </template>
        <div>This is a popover</div>
    </Popover>
    <!-- #endregion basicUsage -->
</div>
:::

<<< ./index.md#basicUsage{html}

## Placement

The `placement` prop determines where the popover appears relative to its trigger element. You can set it to values like `"top"`, `"left"`, `"right"`, or `"bottom"` to control the popover's alignment.

::: raw
<div class="flex gap-2">
    <!-- #region placement -->
    <Popover placement="top">
        <template #trigger="{ ref, toggle, isOpen }">
            <button :ref="ref" class="btn" :class="{'btn-primary': !isOpen, 'btn-secondary': isOpen}" @click="toggle">
                Top
            </button>
        </template>
        <div>Top aligned popover</div>
    </Popover>
    <Popover placement="left">
        <template #trigger="{ ref, toggle, isOpen }">
            <button :ref="ref" class="btn" :class="{'btn-primary': !isOpen, 'btn-secondary': isOpen}" @click="toggle">
                Left
            </button>
        </template>
        <div>Left aligned popover</div>
    </Popover>
    <Popover placement="right">
        <template #trigger="{ ref, toggle, isOpen }">
            <button :ref="ref" class="btn" :class="{'btn-primary': !isOpen, 'btn-secondary': isOpen}" @click="toggle">
                Right
            </button>
        </template>
        <div>Right aligned popover</div>
    </Popover>
    <Popover placement="bottom">
        <template #trigger="{ ref, toggle, isOpen }">
            <button :ref="ref" class="btn" :class="{'btn-primary': !isOpen, 'btn-secondary': isOpen}" @click="toggle">
                Bottom
            </button>
        </template>
        <div>Bottom aligned popover</div>
    </Popover>
    <!-- #endregion placement -->
</div>
:::