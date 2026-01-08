<script setup lang="ts">
withDefaults(defineProps<{
    align?: 'left' | 'right',
    show?: boolean
}>(), {
    align: 'left'
});
</script>

<template>
    <div
        class="dropdown-menu"
        :aria-labelledby="($attrs.id as string|undefined)"
        :class="{
            'dropdown-menu-left': align === 'left',
            'dropdown-menu-right': align === 'right',
            'show': show
        }">
        <slot />
    </div>
</template>