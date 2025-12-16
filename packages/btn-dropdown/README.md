# Button Dropdown

The `btn-dropdown` component provides an interactive button paired with a dropdown menu. It extends the standard button, button-group, and dropdown-menu components.

## Installation

```bash
pnpm i @vue-interface/btn-dropdown
```

```bash
yarn add @vue-interface/btn-dropdown
```

```bash
npm i @vue-interface/btn-dropdown
```

```bash
bun i @vue-interface/btn-dropdown
```

## Basic Usage

```vue
<BtnDropdown label="Dropdown" @click-toggle="onToggle">
    <a href="#/test" @click="onClickItem">Action</a>
    <a href="#">Another Action</a>
    <hr>
    <a href="#">Something else here</a>
</BtnDropdown>
```

For more comprehensive documentation and examples, please visit the [online documentation](https://vue-interface.github.io/packages/btn-dropdown/).

