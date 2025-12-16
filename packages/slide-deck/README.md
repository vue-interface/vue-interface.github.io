# Slide Deck

A slide deck is an abstract component that adds a slide effect between components. The height of the slide deck will automatically grow to the next slide. Since each element must be different, or a key must be defined for Vue transitions, the component will automatically add the slide index as a key if a key isn't define. The component handles the differing animations for going backwards and forwards.

## Installation

```bash
pnpm i @vue-interface/slide-deck
```

```bash
yarn add @vue-interface/slide-deck
```

```bash
npm i @vue-interface/slide-deck
```

```bash
bun i @vue-interface/slide-deck
```

## Basic Usage

```vue
<SlideDeck ref="deck" @enter="onEnter" @leave="onLeave" :active="0">
    <template #default="{ next, prev }">
        <div key="Slide 1" class="p-3 bg-red-100">
            <h2 class="text-3xl mb-3">Slide 1</h2>
            <button class="btn btn-primary" @click="next">Next &rarr;</button>
        </div>
    </template>
</SlideDeck>
```

For more comprehensive documentation and examples, please visit the [online documentation](https://vue-interface.github.io/packages/slide-deck/).

