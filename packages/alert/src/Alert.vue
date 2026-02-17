<script setup lang="ts">
import { InformationCircleIcon } from '@heroicons/vue/24/outline';
import { ComponentSize } from '@vue-interface/sizeable';

export type AlertSizePrefix = 'alert'; 
export type AlertSize = ComponentSize<AlertSizePrefix>;

withDefaults(defineProps<{
    size?: AlertSize;
}>(), {
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