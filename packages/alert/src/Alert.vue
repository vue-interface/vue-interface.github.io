<script setup lang="ts">
import { InformationCircleIcon } from '@heroicons/vue/24/outline';
import { computed } from 'vue';

export type AlertSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';

const props = defineProps<{
    size?: AlertSize
}>();

const classes = computed(() => ({
    'alert-xs': props.size === 'xs',
    'alert-sm': props.size === 'sm',
    'alert-md': props.size === 'md',
    'alert-lg': props.size === 'lg',
    'alert-xl': props.size === 'xl',
    'alert-2xl': props.size === '2xl',
    'alert-3xl': props.size === '3xl',
    'alert-4xl': props.size === '4xl',
    'alert-5xl': props.size === '5xl',
}));
</script>

<template>
    <div 
        class="alert"
        :class="[`alert-${props.size}`, classes]" 
        v-bind="$attrs">
        <div class="alert-icon">
            <slot name="icon">
                <InformationCircleIcon />
            </slot>
        </div>
        <div>
            <slot />
        </div>
        
        <slot name="action" />
    </div>
</template>