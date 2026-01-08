<script setup lang="ts">
import { useTemplateRef } from 'vue';
import { type ComponentExposed } from 'vue-component-type-helpers';
import BtnDropdownSingle from './BtnDropdownSingle.vue';
import BtnDropdownSplit from './BtnDropdownSplit.vue';
import { BtnDropdownEvents, BtnDropdownProps, BtnDropdownSlotProps } from './useDropdownHandler';

const props = withDefaults(defineProps<{
    split?: boolean
} & BtnDropdownProps>(), {
    split: false,
    caret: true
});

const emit = defineEmits<BtnDropdownEvents>();

const el = useTemplateRef<ComponentExposed<typeof BtnDropdownSingle | typeof BtnDropdownSplit>>('el');

defineExpose({
    hide: () => el.value?.hide(),
    show: () => el.value?.show(),
    toggle: () => el.value?.toggle(),
});

defineSlots<{
    button(props: BtnDropdownSlotProps): any;
    toggle(props: BtnDropdownSlotProps): any;
    split(props: BtnDropdownSlotProps): any;
    default(): any;
}>();
</script>

<template>
    <Component
        ref="el"
        :is="!split ? BtnDropdownSingle : BtnDropdownSplit"
        v-bind="props"
        @click="(e: MouseEvent) => emit('click', e)"
        @click-toggle="(e: MouseEvent) => emit('clickToggle', e)"
        @show="() => emit('show')"
        @hide="() => emit('hide')">
        <template #button="slot">
            <slot
                name="button"
                v-bind="slot" />
        </template>
        <template #toggle="slot">
            <slot
                name="toggle"
                v-bind="slot" />
        </template>
        <template #split="slot">
            <slot
                name="split"
                v-bind="slot" />
        </template>
        <slot />
    </Component>
</template>