# Badge

The `badge` utility class provides a flexible and customizable badge component system with customizable color variants and sizes.

## Installation

```bash
pnpm i @vue-interface/badge
```

```bash
yarn add @vue-interface/badge
```

```bash
npm i @vue-interface/badge
```

```bash
bun i @vue-interface/badge
```

## Basic Usage

To create a badge component, use the `badge` class. Use the `badge-close` class to add a close button to the badge.

```html
<div class="badge">
    Basic usage
</div>
<div class="badge">
    <span>With Inner</span>
    <span>Elements</span>
</div>
<div class="badge">
    <span>Right Close</span>
    <button class="badge-close"></button>
</div>
<div class="badge">
    <button class="badge-close"></button>
    <span>Left Close</span>
</div>
```
Use the `badge-outline` class to create an outlined badge.

```html
<div class="badge badge-outline">
    No Children
</div>
<div class="badge badge-outline">
    <span>With Children</span>
</div>
<div class="badge badge-outline">
    <span>Right Close Button</span>
    <button class="badge-close"></button>
</div>
<div class="badge badge-outline">
    <button class="badge-close"></button>
    <span>Left Close Button</span>
</div>
```

For more comprehensive documentation and examples, please visit the [online documentation](https://vue-interface.github.io/packages/badge/).