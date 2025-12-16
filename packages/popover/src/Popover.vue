<script setup lang="ts">
import { arrow as arrowFn, autoUpdate, flip as flipFn, FlipOptions, offset as offsetFn, OffsetOptions, useFloating, UseFloatingOptions } from '@floating-ui/vue';
import { computed, ref, ShallowRef } from 'vue';
    
export type PopoverProps = {
        arrow?: boolean;
        placement?: UseFloatingOptions['placement'];
        strategy?: UseFloatingOptions['strategy'];
        middleware?: (arrow: Readonly<ShallowRef<HTMLDivElement | null>>) => UseFloatingOptions['middleware'];
        flip?: FlipOptions;
        offset?: OffsetOptions;
    };
    
const props = withDefaults(defineProps<PopoverProps>(), {
    arrow: true,
    middleware: undefined,
    placement: undefined,
    strategy: undefined,
    flip: undefined,
    offset: () => ({
        mainAxis: 10
    } as OffsetOptions)
});
    
const triggerEl = ref<HTMLElement | null>(null);
const popoverEl = ref<HTMLElement | null>(null);
const arrowEl = ref<HTMLDivElement | null>(null);
const isOpen = ref(false);
        
const { floatingStyles, middlewareData, placement } = useFloating(triggerEl, popoverEl, {
    placement: props.placement,
    middleware: props.middleware?.(arrowEl) ?? [
        flipFn(props.flip),
        offsetFn(props.offset),
        arrowFn({
            element: arrowEl
        }),
    ],
    whileElementsMounted: autoUpdate
});
    
    type Side = 'bottom' | 'left' | 'top' | 'right';
    
const side = computed(() => placement.value.split('-')[0] as Side);
    
const arrowPosition = computed(() => {
    return {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right'
    }[side.value] as Side;
});
    
const arrowRotation = computed<Record<Side,string>>(() => ({
    top: 'rotate(225deg)',
    right: 'rotate(-45deg)',
    bottom: 'rotate(45deg)',
    left: 'rotate(135deg)',
}));
    
defineSlots<{
        default?: () => void;
        trigger?: (props: {
            ref: (el: HTMLElement | null) => void;
            isOpen: boolean;
            open: () => void;
            close: () => void;
            toggle: () => void
        }) => void
    }>();
    
function setTriggerRef(el: HTMLElement | null) {
    triggerEl.value = el;
}
    
function open() {
    isOpen.value = true;
}
    
function close() {
    isOpen.value = false;
}
    
function toggle() {
    if(!isOpen.value) {
        open();
    }
    else {
        close();
    }
}
</script>
    
<template>
    <div>
        <slot
            name="trigger"
            v-bind="{ ref: setTriggerRef, isOpen, open, close, toggle }" />
    </div>
    <div 
        v-if="isOpen"
        class="popover-container"
        @click.self="close">
        <div
            ref="popoverEl"
            role="tooltip"
            data-popover
            :style="floatingStyles"
            class="popover">
            <slot />
            <div
                v-if="arrow"
                ref="arrowEl"
                data-popover-arrow
                class="popover-arrow"
                :style="{
                    transform: arrowRotation[arrowPosition],
                    ...Object.assign({
                        left:
                            middlewareData.arrow?.x != null
                                ? `${middlewareData.arrow.x}px`
                                : '',
                        top:
                            middlewareData.arrow?.y != null
                                ? `${middlewareData.arrow.y}px`
                                : ''
                    }, {
                        [arrowPosition]: `calc(${-(arrowEl?.offsetWidth ?? 0) / 2}px - 1px)`
                    })
                }" />
        </div>
    </div>
</template>