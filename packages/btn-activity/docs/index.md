---
title: Button Activity
---

<script setup>
import '../demo.css'
import { ref, onMounted } from 'vue'
import BtnActivity from '../src/BtnActivity.vue';
import { Dots, Spinner, Pulse } from '@vue-interface/activity-indicator'

const activity = ref(false)

/* #region setup */
const onClick = (event, { toggle }) => {
    toggle()
    
    setTimeout(() => {
        toggle()
    }, 2000)
}
/* #endregion setup */

/* #region activity */
onMounted(() => {
    const toggle = () => setTimeout(() => {
        activity.value = !activity.value
        toggle()
    }, 1000)
    
    toggle()
})
/* #endregion activity */
</script>

# Button Activity

The `btn-activity` component provides an interactive button with built-in activity indicators for async operations. It extends the standard [button](/packages/btn/) and [activity indicator](/packages/activity-indicator/) to show a loading icon.

### Installation

::: code-group
```bash [pnpm]
pnpm i @vue-interface/btn-activity
```

```bash [yarn]
yarn add @vue-interface/btn-activity
```

```bash [npm]
npm i @vue-interface/btn-activity
```

```bash [bun]
bun i @vue-interface/btn-activity
```
:::

### Tailwind Setup

```css
@import '@vue-interface/btn-activity/index.css';
```

## Basic Usage

<div class="mb-5 flex gap-2">
    <!-- #region basicUsage -->
    <BtnActivity :indicator="Dots" @click="onClick">Dots</BtnActivity>
    <BtnActivity :indicator="Spinner" @click="onClick">Spinner</BtnActivity>
    <BtnActivity :indicator="Pulse" @click="onClick">Pulse</BtnActivity>
    <!-- #endregion basicUsage -->
</div>

<<< ./index.md#basicUsage{html}
<<< ./index.md#setup{js}

## Dots

<div class="mb-5 items-start flex gap-2">
    <!-- #region dots -->
    <BtnActivity :indicator="Dots" size="btn-sm" @click="onClick">Click Me!</BtnActivity>
    <BtnActivity :indicator="Dots" size="btn-md" @click="onClick">Click Me!</BtnActivity>
    <BtnActivity :indicator="Dots" size="btn-lg" @click="onClick">Click Me!</BtnActivity>
    <!-- #endregion dots -->
</div>

::: details Show Code
<<< ./index.md#dots{html}
:::

## Spinner

<div class="flex items-start gap-2 mb-5">
  <!-- #region spinner -->
  <BtnActivity :indicator="Spinner" size="btn-sm" @click="onClick">Click Me!</BtnActivity>
  <BtnActivity :indicator="Spinner" size="btn-md" @click="onClick">Click Me!</BtnActivity>
  <BtnActivity :indicator="Spinner" size="btn-lg" @click="onClick">Click Me!</BtnActivity>
  <!-- #endregion spinner -->
</div>

::: details Show Code
<<< ./index.md#spinner{html}
:::

## Pulse

<div class="flex items-start gap-2 mb-5">
  <!-- #region pulse -->
  <BtnActivity :indicator="Pulse" size="btn-sm" @click="onClick">Click Me!</BtnActivity>
  <BtnActivity :indicator="Pulse" size="btn-md" @click="onClick">Click Me!</BtnActivity>
  <BtnActivity :indicator="Pulse" size="btn-lg" @click="onClick">Click Me!</BtnActivity>
  <!-- #endregion pulse -->
</div>

::: details Show Code
<<< ./index.md#pulse{html}
:::

## Placement

Control the position of the activity indicator relative to the button label using the `placement` prop.

<div class="flex gap-2 mb-5">
  <!-- #region placement -->
  <BtnActivity :indicator="Spinner" placement="top" @click="onClick">Orientate Top</BtnActivity>
  <BtnActivity :indicator="Spinner" placement="bottom" @click="onClick">Orientate Bottom</BtnActivity>
  <BtnActivity :indicator="Spinner" placement="left" @click="onClick">Orientate Left</BtnActivity>
  <BtnActivity :indicator="Spinner" placement="right" @click="onClick">Orientate Right</BtnActivity>
  <!-- #endregion placement -->
</div>

::: details Show Code
<<< ./index.md#placement{html}
:::

## Block Activity Buttons

Full-width buttons with different indicator placements using the `block` prop.

<div class="flex flex-col gap-2">
  <!-- #region block -->
  <BtnActivity :indicator="Spinner" block placement="top" @click="onClick">Spinner Top</BtnActivity>
  <BtnActivity :indicator="Spinner" block placement="bottom" @click="onClick">Spinner Bottom</BtnActivity>
  <BtnActivity :indicator="Spinner" block placement="left" @click="onClick">Spinner Left</BtnActivity>
  <BtnActivity :indicator="Spinner" block placement="right" @click="onClick">Spinner Right</BtnActivity>
  <!-- #endregion block -->
</div>

::: details Show Code
<<< ./index.md#block{html}
:::

## Variants

Button activity supports all standard button color variants.

<div class="flex flex-wrap gap-2 mb-5">
  <!-- #region variants -->
  <BtnActivity :indicator="Spinner" variant="btn-secondary" @click="onClick">btn-secondary</BtnActivity>
  <BtnActivity :indicator="Spinner" variant="btn-warning" @click="onClick">btn-warning</BtnActivity>
  <BtnActivity :indicator="Spinner" variant="btn-danger" @click="onClick">btn-danger</BtnActivity>
  <BtnActivity :indicator="Spinner" variant="btn-success" @click="onClick">btn-success</BtnActivity>
  <!-- #endregion variants -->
</div>

::: details Show Code
<<< ./index.md#variants{html}
:::

## Activity Attribute

Control the activity state programmatically using the `activity` prop.

<div class="flex gap-2 mb-5">
  <!-- #region activityAttribute -->
  <BtnActivity :indicator="Spinner" :activity="activity">
    {{ activity ? 'On' : 'Off' }}
  </BtnActivity>
  <BtnActivity :indicator="Spinner" :activity="activity" :disabled="true">
    {{ activity ? 'On' : 'Off' }}
  </BtnActivity>
  <!-- #endregion activityAttribute -->
</div>

::: details Show Code
<<< ./index.md#activityAttribute{html}
:::

<<< ./index.md#activity{js}

## Disabled State

Buttons can be disabled to prevent user interaction.

<div class="mb-5">
  <!-- #region disabled -->
  <BtnActivity :indicator="Spinner" disabled @click="onClick">Spinner</BtnActivity>
  <!-- #endregion disabled -->
</div>

::: details Show Code
<<< ./index.md#disabled{html}
:::

## Label Attribute

Use the `label` prop to set button text without using the default slot.

<div class="mb-5">
  <!-- #region labelAttribute -->
  <BtnActivity :indicator="Spinner" label="Some Text Here" @click="onClick"></BtnActivity>
  <!-- #endregion labelAttribute -->
</div>

::: details Show Code
<<< ./index.md#labelAttribute{html}
:::

## Custom Element

Combine slot content with the label attribute and disabled states.

<div class="flex gap-2 mb-5">
  <!-- #region customElement -->
  <BtnActivity :indicator="Spinner" @click="onClick">Label</BtnActivity>
  <BtnActivity :indicator="Spinner" label="Some Text Here" disabled @click="onClick"></BtnActivity>
  <!-- #endregion customElement -->
</div>

::: details Show Code
<<< ./index.md#customElement{html}
:::

## Click Event

The click event handler receives a toggle function to control the activity state.

<div class="flex gap-2 mb-5">
  <!-- #region clickEvent -->
  <BtnActivity :indicator="Spinner" class="btn-primary" @click="onClick">Enabled</BtnActivity>
  <BtnActivity :indicator="Spinner" disabled @click="onClick">Disabled</BtnActivity>
  <!-- #endregion clickEvent -->
</div>

::: details Show Code
<<< ./index.md#clickEvent{html}
:::