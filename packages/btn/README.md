# Button

The `btn` utility class provides a flexible and customizable button component system with color variants, sizes, and states.

## Installation

```bash
pnpm i @vue-interface/btn
```

```bash
yarn add @vue-interface/btn
```

```bash
npm i @vue-interface/btn
```

```bash
bun i @vue-interface/btn
```

## Basic Usage

```html
<button class="btn btn-primary">Button</button>
```

This is the default button where the `btn` class provides the default sizing and the `btn-primary` class applies the primary variant color.

## Color Variants

The button component supports eight standard color variants:

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-light">Light</button>
<button class="btn btn-dark">Dark</button>
```

## Outline Buttons

Outline buttons feature transparent backgrounds with colored borders:

```html
<button class="btn btn-outline-primary">Primary</button>
<button class="btn btn-outline-secondary">Secondary</button>
<button class="btn btn-outline-danger">Danger</button>
```

## Custom Colors

Use any Tailwind color with the `btn-[color]-[shade]` syntax:

```html
<button class="btn btn-red-700">Red-700</button>
<button class="btn btn-blue-500">Blue-500</button>
<button class="btn btn-green-600">Green-600</button>
```

## Sizes

Customize button sizes using predetermined sizes or Tailwind's numeric scale:

```html
<button class="btn btn-primary btn-xs">Extra Small</button>
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary btn-md">Medium</button>
<button class="btn btn-primary btn-lg">Large</button>
<button class="btn btn-primary btn-xl">Extra Large</button>
```

## Block Buttons

Create full-width buttons using the `btn-block` class:

```html
<button class="btn btn-primary btn-block">Full Width Button</button>
```

## States

Buttons support active and disabled states:

```html
<button class="btn btn-primary" active>Active</button>
<button class="btn btn-primary" disabled>Disabled</button>
```

For more comprehensive documentation and examples, please visit the [online documentation](https://vue-interface.github.io/packages/btn/).

