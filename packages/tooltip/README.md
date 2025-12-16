# Tooltip

The `tooltip` component provides flexible tooltips with customizable placement options.

## Installation

```bash
npm i @vue-interface/tooltip
```

```bash
yarn add @vue-interface/tooltip
```

```bash
pnpm i @vue-interface/tooltip
```

```bash
bun i @vue-interface/tooltip
```

## Basic Usage

Tooltips can be positioned at the top, bottom, left, or right of the target element using standard attributes.

```html
<a href="#" title="Top" data-tooltip-placement="top">Top</a>
<a href="#" title="Bottom" data-tooltip-placement="bottom">Bottom</a>
<a href="#" title="Left" data-tooltip-placement="left">Left</a>
<a href="#" title="Right" data-tooltip-placement="right">Right</a>
```

## Via Directive

You can also use the `v-tooltip` directive for a more concise syntax.

```html
<button
    v-tooltip="{
        title: 'Top',
        placement: 'top'
    }">
    Top
</button>
```

For more comprehensive documentation and examples, please visit the [online documentation](https://vue-interface.github.io/packages/tooltip/).
