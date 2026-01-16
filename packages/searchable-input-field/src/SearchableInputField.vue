<script setup lang="ts" generic="T">
import { ChevronDownIcon } from '@heroicons/vue/24/outline';
import { ActivityIndicator, Pulse } from '@vue-interface/activity-indicator';
import { InputField } from '@vue-interface/input-field';
import type { ComponentSize } from '@vue-interface/sizeable';
import { IFuseOptions } from 'fuse.js';
import { watchEffect } from 'vue';
import { useSearchableInputField } from './useSearchableInputField';

export type SearchableInputFieldSizePrefix = 'searchable-input-field';

const props = withDefaults(defineProps<{
    name?: string;
    label?: string;
    value?: T;
    options?: T[];
    fuseOptions?: IFuseOptions<T>;
    display?: (option: T) => string;
    disabled?: boolean,
    allowCustom?: boolean;
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
    invalid: undefined,
    size: 'searchable-input-field-md'
});

const model = defineModel<T>();

// Should this be a plain watch?
watchEffect(() => {
    if(props.value !== undefined) {
        model.value = props.value;
    }
});

defineSlots<{
    default(props: { option: T, display?: (option: T) => string }): any;
    activity(props: { disabled?: boolean, options?: T[], invalid?: boolean }): any;
}>();

const {
    input,
    showOptions,
    active,
    filtered,
    onInput,
    onKeypressEnter,
    onKeydownUp,
    onKeydownDown,
    onBlur,
    onClickOption
} = useSearchableInputField(props, model);


</script>

<template>
    <div class="relative [&_.form-control]:pr-8">
        <InputField
            v-bind="$attrs"
            :name="name"
            :label="label"
            :model-value="input ?? (model && props?.display ? props?.display?.(model) : model)"
            :disabled="disabled"
            :invalid="invalid"
            class="relative"
            @click="showOptions = true"
            @focus="showOptions = true"
            @blur="onBlur"
            @keypress.enter.prevent="onKeypressEnter"
            @keydown.up.prevent="onKeydownUp"
            @keydown.down.prevent="onKeydownDown"
            @keyup.escape="showOptions = false"
            @input="onInput">
            <template #activity>
                <slot
                    name="activity"
                    v-bind="{ disabled, options, invalid }">
                    <ActivityIndicator
                        v-if="!disabled && !options"
                        :type="Pulse"
                        size="activity-indicator-sm" />
                    <ChevronDownIcon 
                        v-else-if="!invalid"
                        class="size-4" />
                </slot>
            </template>
        </InputField>
        <div
            v-if="showOptions && filtered.length"
            ref="optionsEl"
            tabindex="-1"
            class="searchable-input-field-dropdown"
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