<script lang="ts" setup>
import { ActivityIndicator, type ActivityIndicatorSizePrefix } from '@vue-interface/activity-indicator';
import { ref, watch, watchEffect, type Component, type Ref } from 'vue';
import type { ComponentSize } from '@vue-interface/sizeable';

export type BtnSizePrefix = 'btn';

export type BtnActivityProps = {
    activity?: boolean;
    indicator: Component;
    indicatorSize?: ComponentSize<ActivityIndicatorSizePrefix>;
    label?: string;
    placement?: 'top' | 'bottom' | 'left' | 'right';
    variant?: string;
    size?: ComponentSize<BtnSizePrefix>;
    block?: boolean;  
    disabled?: boolean;
};

const props = withDefaults(defineProps<BtnActivityProps>(), {
    indicatorSize: 'activity-indicator-xs',
    label: undefined,
    placement: 'right',
    variant: 'btn-primary',
    size: 'btn-md'
});

export type BtnActivityContext = {
    status: Ref<boolean>;
    toggle: () => void;
}

const emit = defineEmits<{
    click: [event: MouseEvent, context: BtnActivityContext];
    'hide-activity': [];
    'show-activity': [];
}>();

const status = ref(props.activity);

watchEffect(() => {
    status.value = props.activity;
});

watch(status, (value) => {
    if(value) {
        emit('show-activity');
    } 
    else {
        emit('hide-activity');
    }
});

function toggle() {
    status.value = !status.value;
}

const context = {
    status,
    toggle,
};
</script>

<template>
    <button
        type="button"
        :disabled="disabled"
        :class="[
            'btn',
            variant,
            size,
            {
                'w-full': block,
                'gap-1': ['activity-indicator-xs', 'activity-indicator-sm'].includes(indicatorSize as string),
                'gap-2': ['activity-indicator-md', 'activity-indicator-lg', 'activity-indicator-xl'].includes(indicatorSize as string),
                'flex-col-reverse': placement === 'top',
                'flex-col': placement === 'bottom',
                'flex-row-reverse': placement === 'left',
                'inline-flex items-center justify-center': true,
                'opacity-50 cursor-not-allowed': disabled,
            }
        ]"
        @click="emit('click', $event, context)"> 
        <slot>{{ label }}</slot>
        <Transition
            enter-active-class="transition-all ease-out duration-250"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-all ease-in duration-250"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0">
            <ActivityIndicator
                v-if="status"
                :type="indicator"
                :size="indicatorSize"
                :class="{
                    'pt-1': placement === 'top',
                    'pb-1': placement === 'bottom',
                    'pr-1': placement === 'left',
                    'pl-1': placement === 'right',
                }" />
        </Transition>
    </button>
</template>