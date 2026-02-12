<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline';
import type { ComponentSize } from '@vue-interface/sizeable';

export type BadgeSizePrefix = 'badge';
export type BadgeSize = ComponentSize<BadgeSizePrefix>;

withDefaults(defineProps<{
    closeable?: boolean;
    closeLeft?: boolean;
    size?: BadgeSize;
}>(), {
    closeable: false,
    closeLeft: false,
    size: 'badge-md'
});

defineSlots<{
    default: [];
    'close-icon': [];
}>();

const emit = defineEmits<{
    click: [e: PointerEvent];
    close: [e: PointerEvent];
}>();
</script>

<template>
    <div 
        class="badge" 
        :class="[
            size, 
            { 'close-left': closeLeft }
            ]">
        <div
            class="badge-inner"
            @click="emit('click', $event)">
            <slot />
        </div>
        <button
            v-if="closeable"
            type="button"
            class="badge-close" 
            @click="emit('close', $event)">
            <slot name="close-icon">
                <XMarkIcon />
            </slot>
        </button>
    </div>
</template>