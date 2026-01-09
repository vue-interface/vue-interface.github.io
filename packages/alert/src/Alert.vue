<script setup lang="ts">
import { InformationCircleIcon } from '@heroicons/vue/24/outline';
import { ComponentSize } from '../../sizeable';

export type AlertSizePrefix = 'alert'; 

withDefaults(defineProps<{
    size?: ComponentSize<AlertSizePrefix>;
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