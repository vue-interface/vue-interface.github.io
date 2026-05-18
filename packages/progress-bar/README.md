# Progress Bar

The `progress-bar` component provides a flexible and customizable progress-bar component system with customizable color variants and sizes.

## Installation

```bash
pnpm i @vue-interface/progress-bar
```

```bash
yarn add @vue-interface/progress-bar
```

```bash
npm i @vue-interface/progress-bar
```

```bash
bun i @vue-interface/progress-bar
```

## Basic Usage

To create a progress bar component, use the `<ProgressBar>` tag. Use the `value` prop to set the progress.

```vue
<ProgressBar :value="progress"></ProgressBar>
<ProgressBar :value="50" show-value></ProgressBar>
<ProgressBar :value="50" striped></ProgressBar>
<ProgressBar :value="50" striped animated></ProgressBar>
```

Use the sizing properties and color classes to customize the appearance.

```vue
<ProgressBar :value="50" class="progress-bar-primary"></ProgressBar>
<ProgressBar :value="50" class="progress-bar-success"></ProgressBar>
<ProgressBar :value="50" size="progress-bar-lg"></ProgressBar>
```

For more comprehensive documentation and examples, please visit the [online documentation](https://vue-interface.github.io/packages/progress-bar/).