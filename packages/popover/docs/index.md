---
title: Popover
---

<script setup>
import '../demo.css'
import { ref } from 'vue';
/* #region script */
import Popover from '../src/Popover.vue';
/* #endregion script */
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
:::

## Basic Usage

The Popover component uses a `default` slot for content and a `trigger` slot for the element that toggles the popover. The `trigger` slot receives `isOpen`, `open`, `close`, and `toggle` methods/state.

<!-- #region basicUsage -->
<div class="flex gap-4 ml-6">
    <Popover>
        <template #trigger="{ toggle, isOpen }">
            <button class="btn" @click="toggle">
                Click me
            </button>
        </template>
        <div>
            <h3 class="font-bold text-lg mb-2">Popover</h3>
            <p>This is a popover</p>
        </div>
    </Popover>
    <Popover placement="top">
        <template #trigger="{ toggle, isOpen }">
            <button class="btn" @click="toggle">
                Top Aligned
            </button>
        </template>
        <div>
            top aligned
        </div>
    </Popover>
    <Popover placement="left">
        <template #trigger="{ toggle, isOpen }">
            <button class="btn" @click="toggle">
                Left Aligned
            </button>
        </template>
        <div>
            left aligned
        </div>
    </Popover>
    <Popover placement="right">
        <template #trigger="{ toggle, isOpen }">
            <button class="btn" @click="toggle">
                Right Aligned
            </button>
        </template>
        <div>
            right aligned
        </div>
    </Popover>
</div>
<!-- #endregion basicUsage -->

<<< ./index.md#script{js}
<<< ./index.md#basicUsage{html}

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `arrow` | `boolean` | `true` | Whether to display the arrow pointing to the trigger. |
| `placement` | `Placement` | `undefined` | Preferred placement of the popover (e.g., 'top', 'bottom', 'left', 'right'). |
| `strategy` | `Strategy` | `undefined` | Positioning strategy ('absolute' or 'fixed'). |
| `flip` | `FlipOptions` | `undefined` | Options for the flip middleware. |
| `offset` | `OffsetOptions` | `{ mainAxis: 10 }` | Options for the offset middleware. |

## Slots

| Slot | Scoped Props | Description |
| --- | --- | --- |
| `trigger` | `{ isOpen, open, close, toggle }` | The element that triggers the popover. |
| `default` | - | The content of the popover. |