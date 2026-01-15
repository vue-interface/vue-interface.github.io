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

```vue
<Badge>Basic Usage</Badge>
<Badge closeable @click="() => {console.log('click')}" @close="() => {console.log('close')}">
    Right Close Button
</Badge>
<Badge closeable close-left>Left Close Button</Badge>
<Badge closeable class="badge-pill">Pill Badge</Badge>
<Badge closeable>
    <template #close-icon>
        <trash-icon></trash-icon>
    </template>
    Custom Icon
</Badge>
```
Use the `badge-outline` class to create an outlined badge.

```vue
<Badge class="badge-outline">Basic Usage</Badge>
<Badge class="badge-outline" closeable>Right Close Button</Badge>
<Badge class="badge-outline" closeable close-left>Left Close Button</Badge>
<Badge closeable class="badge-pill badge-outline">Pill Badge</Badge>
<Badge closeable class="badge-outline">
    <template #close-icon>
        <trash-icon></trash-icon>
    </template>
    Custom Icon
</Badge>
```

For more comprehensive documentation and examples, please visit the [online documentation](https://vue-interface.github.io/packages/badge/).