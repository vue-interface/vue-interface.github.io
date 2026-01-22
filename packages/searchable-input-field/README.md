# Searchable Input Field

The `searchable-input-field` component provides flexible and customizable searchable input field with customizable sizes, states, and colors.

## Installation

```bash
pnpm i @vue-interface/searchable-input-field
```

```bash
yarn add @vue-interface/searchable-input-field
```

```bash
npm i @vue-interface/searchable-input-field
```

```bash
bun i @vue-interface/searchable-input-field
```

## Basic Usage

```vue
<SearchableInputField v-model="selected" :options="options"></SearchableInputField>
<SearchableInputField :options="options" label="With Label" placeholder="Placeholder"></SearchableInputField>
<SearchableInputField :options="options" label="Disabled" disabled></SearchableInputField>
```

```ts
import SearchableInputField from '../src/SearchableInputField.vue';

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

For more comprehensive documentation and examples, please visit the [online documentation](https://vue-interface.github.io/packages/searchable-input-field/).

