---
title: Tag Field
---

<script setup>
import '../demo.css'
import { ref } from 'vue'
import TagField from '../src/TagField.vue';
import { CalendarDaysIcon } from '@heroicons/vue/24/outline';
</script>

# Searchable Select Field

The `tag-field` component provides a searchable dropdown input with customizable sizes, states, and styling.

### Installation

::: code-group
```bash [pnpm]
pnpm i @vue-interface/stagfield
```

```bash [yarn]
yarn add @vue-interface/tag-field
```

```bash [npm]
npm i @vue-interface/tagfield
```

```bash [bun]
bun i @vue-interface/tag-field
```
:::

### Tailwind Setup

```css
@import '@vue-interface/tag-field/index.css';
```

## Basic Usage

<!-- <<< ./index.md#basicUsage{vue} -->