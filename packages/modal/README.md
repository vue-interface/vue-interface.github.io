# Modal

The `modal` component provides flexible and customizable modals with customizable sizes and colors. The modal component uses a button with an unique `id` to call the modal with a matching `id`.

## Installation

```bash
pnpm i @vue-interface/modal
```

```bash
yarn add @vue-interface/modal
```

```bash
npm i @vue-interface/modal
```

```bash
bun i @vue-interface/modal
```

## Basic Usage

```vue
<button id="basic-modal" class="btn btn-primary">Basic Modal</button>
<Modal
    trigger="#basic-modal"
    close-button
    button-orientation="vertical"
    title="Basic Modal"
    content="Some Content" 
>
    <template #buttons="{close}">
        <button class="btn" @click="close">Close</button>
    </template>
</Modal>
```

For more comprehensive documentation and examples, please visit the [online documentation](https://vue-interface.github.io/packages/modal/).

