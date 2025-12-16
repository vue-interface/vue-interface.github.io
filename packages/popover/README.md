# Popover

The Popover component displays a floating content element next to a trigger element. It is built on top of [Floating UI](https://floating-ui.com/) and supports various positioning and interactions.

## Installation

```bash
npm i @vue-interface/popover
```

```bash
yarn add @vue-interface/popover
```

```bash
pnpm i @vue-interface/popover
```

```bash
bun i @vue-interface/popover
```

## Basic Usage

The Popover component uses a `default` slot for content and a `trigger` slot for the element that toggles the popover. The `trigger` slot receives `isOpen`, `open`, `close`, and `toggle` methods/state.

```html
<Popover>
    <template #trigger="{ ref, toggle, isOpen }">
        <button :ref="ref" class="btn" @click="toggle">
            Click me
        </button>
    </template>
    <div>
        <h3 class="font-bold text-lg mb-2">Popover</h3>
        <p>This is a popover</p>
    </div>
</Popover>
```

## Placement

The popover can be positioned at different locations relative to the trigger element.

```html
<Popover placement="top">
    <template #trigger="{ ref, toggle }">
        <button :ref="red" class="btn" @click="toggle">Top</button>
    </template>
    <div>Top aligned popover</div>
</Popover>

<Popover placement="bottom">
    <template #trigger="{ ref, toggle }">
        <button :ref="ref" class="btn" @click="toggle">Bottom</button>
    </template>
    <div>Bottom aligned popover</div>
</Popover>

<Popover placement="left">
    <template #trigger="{ ref, toggle }">
        <button :ref="ref" class="btn" @click="toggle">Left</button>
    </template>
    <div>Left aligned popover</div>
</Popover>

<Popover placement="right">
    <template #trigger="{ ref, toggle }">
        <button :ref="ref" class="btn" @click="toggle">Right</button>
    </template>
    <div>Right aligned popover</div>
</Popover>
```

For more comprehensive documentation and examples, please visit the [online documentation](https://vue-interface.github.io/packages/popover/).

