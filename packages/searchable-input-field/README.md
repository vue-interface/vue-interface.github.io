# Searchable Select Field

The `searchable-select-field` component provides flexible and customizable searchable input field with customizable sizes, states, and colors.

## Installation

```bash
pnpm i @vue-interface/searchable-select-field
```

```bash
yarn add @vue-interface/searchable-select-field
```

```bash
npm i @vue-interface/searchable-select-field
```

```bash
bun i @vue-interface/searchable-select-field
```

## Basic Usage

```vue
<SearchableSelectField v-model="selected" :options="options"></SearchableSelectField>
<SearchableSelectField :options="options" label="With Label" placeholder="Placeholder"></SearchableSelectField>
<SearchableSelectField :options="options" label="Disabled" disabled></SearchableSelectField>
```

```ts
import SearchableSelectField from '../src/SearchableSelectField.vue';

const value = ref()
const selected = ref()
const options = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
    'Option 7',
    'Option 8',
    'Option 9',
    'Option 10'
];
```

For more comprehensive documentation and examples, please visit the [online documentation](https://vue-interface.github.io/packages/searchable-select-field/).

