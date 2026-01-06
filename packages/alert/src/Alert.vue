<script setup lang="ts">
import { InformationCircleIcon } from '@heroicons/vue/24/outline';
import type { ComponentSize } from './sizes';

export type AlertSizePrefix = 'alert';

export interface AlertProps {
    size?: ComponentSize<AlertSizePrefix>;
}

withDefaults(defineProps<AlertProps>(), {
    size: 'alert-md'
});
</script>

<template>
    <div 
        class="alert"
        :class="size">
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