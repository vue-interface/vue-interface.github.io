<script setup lang="ts">
import { type Component } from 'vue';
import { ComponentSize } from '@vue-interface/sizeable';

export type ActivityIndicatorSizePrefix = 'activity-indicator';
export type ActivityIndicatorSize = ComponentSize<ActivityIndicatorSizePrefix>;

withDefaults(defineProps<{
    size?: ActivityIndicatorSize;
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