<script setup lang="ts" generic="T">
import { ChevronDownIcon, XMarkIcon } from '@heroicons/vue/24/outline';
import { ActivityIndicator, Pulse } from '@vue-interface/activity-indicator';
import { InputField } from '@vue-interface/input-field';
import type { ComponentSize } from '@vue-interface/sizeable';
import Fuse, { IFuseOptions } from 'fuse.js';
import { computed, nextTick, ref, useTemplateRef, watch, watchEffect } from 'vue';

export type SearchableInputFieldSizePrefix = 'form-control';

const props = withDefaults(defineProps<{
    name?: string;
    label?: string;
    value?: T;
    options?: T[];
    fuseOptions?: IFuseOptions<T>;
    display?: (option: T) => string;
    disabled?: boolean,
    readonly?: boolean;
    allowCustom?: boolean;
    clearable?: boolean;
    valid?: boolean;
    invalid?: boolean;
    size?: ComponentSize<SearchableInputFieldSizePrefix>;
}>(), {
    name: undefined,
    label: undefined,
    value: undefined,
    options: () => [],
    fuseOptions: undefined,
    display: undefined,
    disabled: false,
    readonly: false,
    clearable: true,
    valid: undefined,
    invalid: undefined,
    size: 'form-control-md'
});

const model = defineModel<T>();

// Should this be a plain watch?
watchEffect(() => {
    if(props.value !== undefined) {
        model.value = props.value;
    }
});

const input = ref<string>();
const showOptions = ref(false);
const active = ref<number>();
const buttons = useTemplateRef<HTMLButtonElement[]>('buttons');
const optionsEl = useTemplateRef<HTMLDivElement>('optionsEl');
const field = useTemplateRef<{ focus: () => void } | null>('field');

const keys = computed(() => {
    return typeof props.options === 'object' && props.options?.[0]
        ? Object.keys(props.options?.[0])
        : ['$'];
});

let fuse: Fuse<T> = createFuse();

function createFuse() {
    return new Fuse(props.options ?? [], props.fuseOptions ?? {
        includeScore: true,
        threshold: .45,
        keys: keys.value
    });
}
const filtered = computed<T[]>(() => {
    if(!input.value) {
        return props.options ?? [];
    }

    const matches = fuse.search(input.value).map(({ item }) => item);

    if(props.allowCustom && !matches.length) {
        return props.options;
    }

    return matches;
});

watch(() => props.options, () => {
    fuse = createFuse();
});

function scrollIntoView(child?: HTMLElement) {
    const parent = optionsEl.value;

    if(!parent || !child) {
        return;
    }

    const parentRect = parent.getBoundingClientRect();
    const childRect = child.getBoundingClientRect();

    const childTop = childRect.top - parentRect.top + parent.scrollTop;

    parent.scrollTop = childTop;
};

watch([input, active], ([input, active]) => {
    if(input) {
        buttons.value?.[0]?.scrollIntoView({
            block: 'nearest',
            inline: 'nearest'
        });
    }
    else if(active) {
        buttons.value?.[active]?.scrollIntoView({
            block: 'nearest',
            inline: 'nearest'
        });
    }
});

watch(optionsEl, (value) => {
    if(!value) {
        return;
    }

    nextTick(() => {
        if(!active.value) {
            return;
        }
        
        scrollIntoView(buttons.value?.[active.value]);
    });
});

function select(option?: T) {
    model.value = option;
    active.value = option && props.options.includes(option)
        ? props.options.indexOf(option)
        : undefined;
    input.value = undefined;
    showOptions.value = false;
}

function onInput(e: Event) {
    showOptions.value = true;
    active.value = undefined;
    input.value = (e.target as HTMLInputElement)?.value;

    if(!input.value && !props.allowCustom) {
        model.value = undefined;
    }


    if(props.allowCustom) {
        model.value = input.value as T;
    }
}

function onKeypressEnter() {
    if(!showOptions.value) {
        showOptions.value = true;
        
        return;
    }

    if(props.allowCustom && active.value === undefined) {
        select(input.value as T ?? model.value);
    }
    else if(active.value === undefined) {
        select(filtered.value[0]);
    }
    else if(filtered.value[active.value]) {
        select(filtered.value[active.value]);
    }
    else {
        select(undefined);
    }
}

function onKeydownUp() {
    showOptions.value = true;

    if(!active.value) {
        active.value = filtered.value.length - 1;
    }
    else {
        active.value--;
    }
}

function onKeydownDown() {
    showOptions.value = true;

    if(active.value === undefined || active.value === filtered.value.length - 1) {
        active.value = 0;
    }
    else {
        active.value++;
    }
}

function onBlur() {
    showOptions.value = false;
    input.value = undefined;
}

function onClickOption(option: T) {
    select(option);
}

function clear() {
    input.value = undefined;
    model.value = undefined;
    field.value?.focus();
}

const canClear = computed(() => {
    return props.clearable && (!!input.value || !!model.value) && !props.disabled && !props.readonly;
});
</script>

<template>
    <div class="relative [&_.form-control]:pr-8">
        <InputField
            ref="field"
            class="searchable-input-field-input"
            :class="{ 'has-clear-button': canClear }"
            :size="size"
            v-bind="$attrs"
            :name="name"
            :label="label"
            :model-value="input ?? (model && props?.display ? props?.display?.(model) : model)"
            :disabled="disabled"
            :readonly="readonly"
            :valid="valid"
            :invalid="invalid"
            @click="showOptions = true"
            @focus="showOptions = true"
            @blur="onBlur"
            @keypress.enter.prevent="onKeypressEnter"
            @keydown.up.prevent="onKeydownUp"
            @keydown.down.prevent="onKeydownDown"
            @keyup.escape="showOptions = false"
            @input="onInput">
            <!-- <template #icon>
                <slot name="icon" />
            </template> -->
            <template #activity>
                <slot
                    name="activity"
                    v-bind="{ disabled, options, invalid, valid }">
                    <ActivityIndicator
                        v-if="!disabled && !options"
                        :type="Pulse"
                        size="activity-indicator-sm" />
                        <button
                            v-else-if="canClear"
                            type="button"
                            class="btn-clearable"
                            @click.stop="clear">
                            <XMarkIcon class="size-[1.25em]" />
                        </button>
                    <ChevronDownIcon 
                        v-else-if="!invalid && !valid"
                        class="size-[1.25em]" />
                </slot>
            </template>
        </InputField>
        <div
            v-if="showOptions && filtered.length"
            ref="optionsEl"
            tabindex="-1"
            class="searchable-input-field-dropdown"
            :class="size"
            @mousedown.prevent.stop>
            <button
                v-for="(option, i) in filtered"
                ref="buttons"
                :key="i"
                type="button"
                tabindex="-1"
                :title="display?.(option) ?? String(option)"
                :class="{
                    ['bg-neutral-200 dark:bg-neutral-700']: active === i
                }"
                @mousedown.prevent
                @click="onClickOption(option)">
                <slot v-bind="{ option, display }">
                    <div class="truncate">
                        {{ display?.(option) ?? option }}
                    </div>
                </slot>
            </button>
        </div>
    </div>
</template>