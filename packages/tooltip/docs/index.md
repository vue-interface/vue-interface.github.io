---
title: Tooltip
---

<script setup lang="ts">
import '../index.css'
import { ref, getCurrentInstance } from 'vue'
import { TooltipPlugin } from '../index.ts'

const show = ref(false);
const app = getCurrentInstance()!.appContext.app

app.use(TooltipPlugin);
</script>

# Tooltip

The `tooltip` component provides flexible tooltips with customizable placement options.

### Installation

::: code-group
```bash [pnpm]
pnpm i @vue-interface/tooltip
```

```bash [yarn]
yarn add @vue-interface/tooltip
```

```bash [npm]
npm i @vue-interface/tooltip
```

```bash [bun]
bun i @vue-interface/tooltip
```
:::

### Tailwind Setup

```css
@import '@vue-interface/tooltip/index.css';
```

## Basic Usage

Tooltips can be positioned at the top, bottom, left, or right of the target element.

<div class="flex gap-4">
    <!-- #region basicUsage -->
    <a href="#" title="Top" data-tooltip-placement="top">Top</a>
    <a href="#" title="Bottom" data-tooltip-placement="bottom">Bottom</a>
    <a href="#" title="Left" data-tooltip-placement="left">Left</a>
    <a href="#" title="Right" data-tooltip-placement="right">Right</a>
    <!-- #endregion basicUsage -->
</div>

<<< ./index.md#basicUsage{html}

## Dynamic Elements

Tooltips work with dynamically mounted and unmounted elements.

<div class="flex gap-4 [&>button]:p-2 [&>button]:rounded [&>button]:bg-blue-500">
    <!-- #region dynamicElements -->
    <button @click="show = true">Mount Element</button>
    <button v-if="show" title="Some Tooltip" @click="show = false">
        Click to Unmount
    </button>
    <!-- #endregion dynamicElements -->
</div>

::: details Show Code
<<< ./index.md#dynamicElements{html}
:::

## Via Directive

Use the `v-tooltip` directive for a more concise syntax.

<div class="flex gap-4 [&>button]:p-2 [&>button]:rounded [&>button]:bg-blue-500">
    <!-- #region viaDirective -->
    <button
        v-tooltip="{
            title: 'Top',
            placement: 'top'
        }">
        Top
    </button>
    <button
        v-tooltip="{
            title: 'Bottom',
            placement: 'bottom'
        }">
        Bottom
    </button>
    <button
        v-tooltip="{
            title: 'Left',
            placement: 'left'
        }">
        Left
    </button>
    <button v-tooltip="{
            title: 'Right',
            placement: 'right'
        }">
        Right
    </button>
    <!-- #endregion viaDirective -->
</div>

::: details Show Code
<<< ./index.md#viaDirective{html}
:::