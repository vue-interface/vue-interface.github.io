---
title: Slide Deck
---

<script setup>
import '../demo.css'
import { ref } from 'vue';
/* #region script */
import SlideDeck from '../src/SlideDeck.vue';

const deck = ref(null)

function firstSlide() {
    deck.value.first();
}

function lastSlide() {
    deck.value.last();
}

function onEnter(current, previous) {
    console.log('enter', current, previous);
}

function onLeave(current, previous) {
    console.log('leave', current, previous);
}

function onBeforeEnter(current, previous) {
    console.log('before enter', current, previous);
}

function onBeforeLeave(current, previous) {
    console.log('before leave', current, previous);
}

function onAfterEnter(current, previous) {
    console.log('after enter', current, previous);
}

function onAfterLeave(current, previous) {
    console.log('after leave', current, previous);
}
/* #endregion script */
</script>

# Slide Deck

The `SlideDeck` component is a [Vue](https://vuejs.org/) component and [Tailwind](https://tailwindcss.com/) utility that provides smooth animated transitions between each step in the slide. The height of the slide deck will automatically transition to the next and previous slides.

### Installation

::: code-group
```bash [pnpm]
pnpm i @vue-interface/slide-deck
```

```bash [yarn]
yarn add @vue-interface/slide-deck
```

```bash [npm]
npm i @vue-interface/slide-deck
```

```bash [bun]
bun i @vue-interface/slide-deck
```
:::

## Basic Usage



<ClientOnly>
<!-- #region basicUsage -->
<div class="my-6">
    <div class="flex justify-between mb-3">
        <button class="btn btn-primary" @click="firstSlide">First</button>
        <button class="btn btn-primary" @click="lastSlide">Last</button>
    </div>
    <SlideDeck ref="deck" @enter="onEnter" @leave="onLeave" :active="0">
        <template #default="{ next, prev }">
            <div key="Slide 1" class="p-4 bg-neutral-100 dark:bg-neutral-900">
                <div class="text-3xl mb-4">Slide 1</div>
                <button class="btn btn-primary" @click="next">Next &rarr;</button>
            </div>
            <div key="Slide 2" class="p-4 bg-neutral-100 dark:bg-neutral-900">
                <div class="text-3xl mb-4">Slide 2</div>
                <p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis nunc, gravida vitae euismod ut, bibendum facilisis justo. In hac habitasse platea dictumst. Curabitur elit ligula, euismod a suscipit sed, sodales non diam. Duis pellentesque blandit ligula, pellentesque condimentum dolor egestas quis. Aenean eget mollis odio. Praesent in posuere ligula, a viverra nisi. Nam diam ipsum, iaculis at tortor id, iaculis sollicitudin diam. Etiam vestibulum lacus quis vulputate rhoncus. Morbi tincidunt eros ipsum, sed sagittis sem blandit nec.</p>
                <div class="flex justify-between">
                    <button class="btn btn-primary" @click="prev">&larr; Prev</button>
                    <button class="btn btn-primary" @click="next">Next &rarr;</button>
                </div>
            </div>
            <div key="Slide 3" class="p-4 bg-neutral-100 dark:bg-neutral-900 min-h-50">
                <div class="text-3xl mb-4">Slide 3</div>
                <p class="mb-3">Ut mi urna, egestas ut congue eget, accumsan eget turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum egestas semper rutrum. Donec quis auctor orci. In venenatis odio nec luctus sodales.</p>
                <div class="flex justify-between">
                    <button class="btn btn-primary" @click="prev">&larr; Prev</button>
                    <button class="btn btn-primary" @click="next">Next &rarr;</button>
                </div>
            </div>
            <div key="Slide 4" class="p-4 bg-neutral-100 dark:bg-neutral-900">
                <div class="text-3xl mb-4">Slide 4</div>
                <button class="btn btn-primary" @click="prev">&larr; Prev</button>
            </div>
        </template>
    </SlideDeck>
</div>
<!-- #endregion basicUsage -->
</ClientOnly>

<<< ./index.md#basicUsage{html}
<<< ./index.md#script{js}