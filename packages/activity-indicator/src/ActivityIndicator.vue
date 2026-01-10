<script setup lang="ts">
import { type Component } from 'vue';
import { ComponentSize } from '@vue-interface/sizeable';

export type ActivityIndicatorSizePrefix = 'activity-indicator'; 

withDefaults(defineProps<{
    size?: ComponentSize<ActivityIndicatorSizePrefix>;
    type: Component;
}>(), {
    size: 'activity-indicator-md'
});
</script>

<template>
    <div
        class="activity-indicator"
        :class="size">
        <div class="activity-indicator-content">
            <Component
                :is="type"
                class="mx-auto" />
        </div>
    </div>
</template>