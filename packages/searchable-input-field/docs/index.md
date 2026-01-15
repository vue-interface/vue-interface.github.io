---
title: Searchable Input Field
---

<script setup>
import '../demo.css'
import SearchableInputField from '../src/SearchableInputField.vue';
</script>

# Searchable Input Field

The `searchable-input-field` component provides flexible and customizable input fields with customizable sizes, states, and colors.

### Installation

::: code-group
```bash [pnpm]
pnpm i @vue-interface/searchable-input-field
```

```bash [yarn]
yarn add @vue-interface/searchable-input-field
```

```bash [npm]
npm i @vue-interface/searchable-input-field
```

```bash [bun]
bun i @vue-interface/searchable-input-field
```
:::

### Tailwind Setup

```css
@import '@vue-interface/searchable-input-field/index.css';
```

## Basic Usage

<div class="bg-neutral-100 dark:bg-neutral-800 p-3 mb-4">
    Value: {{ value }}
</div>

<!-- #region basicUsage -->
<RadioField v-model="value" name="default" label="Unchecked" value="unchecked"></RadioField>
<RadioField v-model="value" name="default" label="Checked" value="checked" checked></RadioField>
<!-- #endregion basicUsage -->

<<< ./index.md#basicUsage{html}