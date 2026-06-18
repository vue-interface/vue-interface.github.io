<script setup lang="ts">
import { arrow as arrowFn, autoUpdate, flip as flipFn, FlipOptions, offset as offsetFn, OffsetOptions, shift as shiftFn, size as sizeFn, useFloating, UseFloatingOptions } from '@floating-ui/vue';
import { ComponentPublicInstance, computed, ref, ShallowRef } from 'vue';

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
    strategy: props.strategy ?? 'fixed',
    middleware: props.middleware?.(arrowEl) ?? [
        offsetFn(props.offset),
        flipFn(props.flip),
        shiftFn({ padding: 4 }),
        sizeFn({
            padding: 8,
            apply({ availableHeight, elements }) {
                const content = elements.floating.querySelector('[data-popover-content]') as HTMLElement;
                if(content) {
                    content.style.maxHeight = `${Math.max(120, availableHeight - 8)}px`;
                }
            },
        }),
        ...(props.arrow ? [arrowFn({ element: arrowEl })] : []),
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

const arrowRotation = computed<Record<Side, string>>(() => ({
    top: 'rotate(225deg)',
    right: 'rotate(-45deg)',
    bottom: 'rotate(45deg)',
    left: 'rotate(135deg)',
}));

defineSlots<{
    default?: (props: { close: () => void }) => void;
    trigger?: (props: {
        ref: (el: Element | ComponentPublicInstance | null) => void;
        isOpen: boolean;
        open: () => void;
        close: () => void;
        toggle: () => void
    }) => void
}>();

function setTriggerRef(el: Element | ComponentPublicInstance | null) {
    triggerEl.value = (el && '$el' in el ? el.$el : el) as HTMLElement | null;
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

defineExpose({ open, close, toggle });
</script>

<template>
    <div>
        <slot
            name="trigger"
            v-bind="{ ref: setTriggerRef, isOpen, open, close, toggle }" />
    </div>
    <Teleport to="body">
        <div
            v-if="isOpen"
            class="fixed top-0 left-0 z-50 h-screen w-screen"
            @click.self="close">
            <div
                ref="popoverEl"
                role="tooltip"
                data-popover
                :style="floatingStyles"
                class="relative">
                <!-- scrollable content panel -->
                <div
                    data-popover-content
                    class="
                      overflow-y-auto rounded-xl border border-black/10
                      bg-white/96 p-3
                      shadow-[0_8px_28px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.6)]
                      backdrop-blur-xl backdrop-saturate-150
                      dark:border-white/10 dark:bg-neutral-800/97
                      dark:shadow-[0_8px_28px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)]
                    ">
                    <slot :close="close" />
                </div>
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
    </Teleport>
</template>
