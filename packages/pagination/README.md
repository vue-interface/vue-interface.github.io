# Pagination

The `pagination` component provides flexible and customizable pagination control with customizable sizes, colors, and states.

## Installation

```bash
pnpm i @vue-interface/pagination
```

```bash
yarn add @vue-interface/pagination
```

```bash
npm i @vue-interface/pagination
```

```bash
bun i @vue-interface/pagination
```

## Basic Usage

To create a pagination component, use the parent `pagination` class and then add the `pagination-link` class to the links in the pagination. Use the `active` class to indicate the current page and `disabled` class for non-clickable links.

```html
<div class="flex flex-col gap-3">
    <div class="pagination">
        <a href="#" class="pagination-link">«</a>
        <a href="#" class="pagination-link">1</a>
        <div class="pagination-link active disabled">2</div>
        <a href="#" class="pagination-link">3</a>
        <div class="pagination-link disabled">...</div>
        <a href="#" class="pagination-link">4</a>
        <a href="#" class="pagination-link active">5</a>
        <a href="#" class="pagination-link">6</a>
        <div class="pagination-link disabled">...</div>
        <a href="#" class="pagination-link">7</a>
        <a href="#" class="pagination-link">8</a>
        <a href="#" class="pagination-link">9</a>
        <a href="#" class="pagination-link">»</a>
    </div>
</div>
```