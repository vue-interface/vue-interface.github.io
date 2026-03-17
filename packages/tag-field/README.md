# Searchable Select Field

The `tag-field` component provides flexible and customizable searchable input field with tags that have customizable sizes, states, and colors.

## Installation

```bash
pnpm i @vue-interface/tag-field
```

```bash
yarn add @vue-interface/tag-field
```

```bash
npm i @vue-interface/tag-field
```

```bash
bun i @vue-interface/tag-field
```

## Basic Usage

```vue
<TagField v-model="selected" :options="languages"></TagField>
<TagField :options="options" placeholder="Type to search..." label="Placeholder"></TagField>
<TagField :options="options" label="Descriptive Text Field" help-text="Some helpful text goes here."></TagField>
<TagField :options="options" label="Readonly" placeholder="Type something here..." readonly></TagField>
<TagField :options="options" label="Disabled" disabled></TagField>
<TagField :options="options" placeholder="Disabled" label="Disabled (Placeholder)" disabled></TagField>
<TagField :options="options" label="Clearable" placeholder="Clearable" clearable></TagField>
```

Use the `plaintext` prop to use a plaintext version.

```vue
<TagField :options="options" placeholder="Click to search..." :model-value="['Tag']" label="Plaintext" plaintext></TagField>
<TagField :options="options" label="Plaintext Readonly" :model-value="['Tag']" plaintext readonly></TagField>
<TagField :options="options" label="Plaintext Disabled" :model-value="['Tag']" plaintext disabled></TagField>
``

For more comprehensive documentation and examples, please visit the [online documentation](https://vue-interface.github.io/packages/tag-field/).