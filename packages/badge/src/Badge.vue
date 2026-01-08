<script setup lang="ts">
import type { ComponentSize } from './sizes';

export type BadgeSizePrefix = 'badge';

withDefaults(defineProps<{
    closeable?: boolean;
    size?: ComponentSize<BadgeSizePrefix>;
}>(), {
    closeable: true,
    size: 'badge-md'
});

defineSlots<{
    default: [];
    closeIcon: [];
}>();

const emit = defineEmits<{
    click: [e: PointerEvent];
    close: [e: PointerEvent];
}>();
</script>

<template>
    <div 
        class="badge" 
        :class="size">
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
            <slot name="closeIcon">
                <div class="badge-close-icon" />
            </slot>
        </button>
    </div>
</template>