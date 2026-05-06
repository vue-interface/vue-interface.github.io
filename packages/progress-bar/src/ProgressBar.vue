<script setup lang="ts">
import type { ComponentSize } from '@vue-interface/sizeable';

export type ProgressBarSizePrefix = 'progress-bar';
export type ProgressBarSize = ComponentSize<ProgressBarSizePrefix>;

const props = withDefaults(defineProps<{
    label?: string;
    value?: number | string;
    showValue?: boolean;
    size?: ProgressBarSize;
    striped?: boolean;
    animated?: boolean;
}>(), {
    label: undefined,
    value: 0,
    showValue: false,
    size: 'progress-bar-md',
    striped: false,
    animated: false // Animated only applies if striped is true
});

function uom(value: number | string, unit: string) {
    return typeof value === 'number' ? `${value}${unit}` : value;
}

</script>

<template>
    <div
        class="progress-bar"
        :class="[ size ]">
        <div
            class="progress-bar-inner"
            :class="{
                'progress-bar-inner-striped': striped,
                'progress-bar-inner-animated': animated
            }"
            :style="{
                width: value ? uom(value, '%') : undefined
            }">
            <slot name="label" :label="label" :value="value">
                <div
                    v-if="label || showValue"
                    class="progress-bar-label">
                    {{ label || `${value}%` }}
                </div>
            </slot>
        </div>
    </div>
</template>