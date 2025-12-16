# Breadcrumb

The `breadcrumb` utility class provides a flexible and customizable breadcrumb component system with customizable color variants and sizes.

## Installation

```bash
pnpm i @vue-interface/breadcrumb
```

```bash
yarn add @vue-interface/breadcrumb
```

```bash
npm i @vue-interface/breadcrumb
```

```bash
bun i @vue-interface/breadcrumb
```

## Basic Usage

To create a breadcrumb component, use the parent `breadcrumb` class and then add the `breadcrumb-link` class to the links in the breadcrumb.

```html
<div class="breadcrumb">
    <a href="#" class="breadcrumb-link breadcrumb-icon-home"></a>
    <a href="#foo" class="breadcrumb-link">Foo</a>
    <a href="#foo/bar" class="breadcrumb-link active">Bar</a>
</div>
```

For more comprehensive documentation and examples, please visit the [online documentation](https://vue-interface.github.io/packages/breadcrumb/).
