<script setup lang="ts">
import { DropdownMenu } from '@vue-interface/dropdown-menu';
import { ComponentPublicInstance } from 'vue';
import { BtnDropdownEvents, BtnDropdownProps, BtnDropdownSlotProps, useDropdownHandler } from './useDropdownHandler';

const props = withDefaults(defineProps<BtnDropdownProps>(), {
    caret: true,
    variant: 'btn-primary'
});

const emit = defineEmits<BtnDropdownEvents>();

const {
    target,
    menu,
    buttonClasses,
    classes,
    expanded,
    floatingStyles,
    show,
    hide,
    toggle,
    onBlur,
    onClickToggle,
    onClickItem
} = useDropdownHandler(props, emit);

defineExpose({
    show,
    hide,
    toggle,
});

defineSlots<{
    button(props: BtnDropdownSlotProps): any;
    default(): any;
}>();
</script>

<template>
    <div
        class="btn-group"
        :class="classes">
        <slot
            name="button"
            v-bind="{
                target: (el: Element | ComponentPublicInstance | null) => target = el,
                expanded,
                onBlur,
                onClickToggle
            }">
            <button
                ref="target"
                type="button"
                :class="{...buttonClasses, ['dropdown-toggle']: true}"
                aria-haspopup="true"
                :aria-expanded="expanded"
                @blur="onBlur"
                @click="onClickToggle">
                {{ label }}
            </button>
        </slot>
        <DropdownMenu
            ref="menu"
            :class="{
                'show': expanded
            }"
            :style="floatingStyles"
            @blur="onBlur"
            @click="onClickItem"
            @mousedown.prevent>
            <slot />
        </DropdownMenu>
    </div>
</template>