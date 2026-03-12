<script lang="ts">
export type TagFieldSizePrefix = 'form-control';

export type TagFieldProps<ModelValue, Value> = FormControlProps<
    InputHTMLAttributes, 
    TagFieldSizePrefix, 
    ModelValue[], 
    Value[]
> & {
    options?: ModelValue[];
    fuseOptions?: IFuseOptions<ModelValue>;
    display?: (option: ModelValue) => string;
    format?: (value: string) => ModelValue;
    allowCustom?: boolean;
    addTagLabel?: string;
    id?: string;
    clearable?: boolean;
};
</script>


<script setup lang="ts" generic="T, Value">
import { PlusIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/vue/24/outline';
import Fuse, { IFuseOptions } from 'fuse.js';
import { ActivityIndicator, Pulse } from '@vue-interface/activity-indicator';
import type { FormControlEvents, FormControlProps, FormControlSlots } from '@vue-interface/form-control';
import { useFormControl } from '@vue-interface/form-control';
import { InputField } from '@vue-interface/input-field';
import { Badge } from '@vue-interface/badge';
import { isEqual } from 'lodash-es';
import { InputHTMLAttributes, computed, onBeforeMount, onBeforeUnmount, Ref, ref, useTemplateRef, watch } from 'vue';

const props = withDefaults(defineProps<TagFieldProps<T,Value>>(), {
    formControlClass: 'form-control',
    labelClass: 'form-label',
    size: 'form-control-md',
    allowCustom: true,
    addTagLabel: 'Add Tag',
    clearable: true,
    options: () => []
});

const model = defineModel<T[]>();

defineSlots<FormControlSlots<TagFieldSizePrefix, T[]> & {
    default(props: { option: T; display?: (option: T) => string }): any;
}>();

const emit = defineEmits<FormControlEvents>();

const {
    controlAttributes,
    formGroupClasses,
    listeners
} = useFormControl<InputHTMLAttributes, TagFieldSizePrefix, T[]|undefined, T>({ model, props, emit });

const wrapperEl = useTemplateRef('wrapperEl');
const inputEl = useTemplateRef('inputEl');
const tagEl = useTemplateRef('tagEl');

const input = ref<string>();
const selected = ref<T[]>([]) as Ref<T[]>;
const hasFocus = ref(false);
const focusIndex = ref<number>();
const options = ref(props.options) as Ref<T[]>;

const isInteractive = computed(() => !props.disabled && !props.readonly);

const canClear = computed(() => {
    return props.clearable && (!!input.value || !!model.value?.length) && isInteractive.value;
});

const keys = computed(() => {
    return typeof props.options === 'object' && props.options?.[0]
        ? Object.keys(props.options?.[0])
        : [];
});

const fuse: Fuse<T> = createFuse(props.options);

const showOptions = computed(() => {
    return hasFocus.value && (filtered.value.length || props.allowCustom && input.value);
});

const selectedIndexes = computed(() => {
    return selected.value.map(tag => {
        return (model.value ?? []).findIndex((item: T) => isEqual(item, tag));
    });
});

watch(() => props.options, () => {
    options.value = props.options;
});

watch(input, () => {
    hasFocus.value = true;
    focusIndex.value = undefined;

    deactivateTags();
});

function createFuse(items: T[]) {
    return new Fuse(items, props.fuseOptions ?? {
        includeScore: true,
        threshold: .45,
        keys: keys.value
    });
}

const filtered = computed<T[]>(() => {
    const items = options.value.filter(option => {
        return !(model.value ?? []).find((item: T) => isEqual(item, option));
    });

    if(!input.value) {
        return items;
    }

    fuse.setCollection(items as T[]);
    
    return fuse.search(input.value).map(({ item }) => item);
});

function addCustomTag(value: string) {
    const tag = props.format?.(value) ?? value as T;

    if(!options.value.find(option => isEqual(option, tag))) {
        options.value.push(tag);

        addTag(tag);

        input.value = undefined;
    }
}

function addTag(tag: T) {
    model.value = [...(model.value ?? []), tag];
    input.value = undefined;
    focusIndex.value = undefined;
}

function removeTag(tag: T) {
    const value = [...(model.value ?? [])];

    value.splice(value.indexOf(tag), 1);

    deactivateTag(tag);
    

    model.value = value;
}

function toggleActiveTag(tag: T, multiple = false) {
    if(!multiple) {
        deactivateTags(tag);
    }

    if(!isTagActive(tag)) {
        activateTag(tag);
    }
    else {
        deactivateTag(tag);
    }
}

function toggleActiveTagRange(tag: T) {
    const index = model.value?.indexOf(tag);
    const lastSelectedIndex = selectedIndexes.value[selectedIndexes.value.length - 1];
    const fn = !isTagActive(tag) ? activateTag : deactivateTag;

    if(lastSelectedIndex === undefined || index === undefined || index === -1) {
        toggleActiveTag(tag);

        return;
    }

    let range: T[] = [];
    
    if(index > lastSelectedIndex) {
        range = model.value?.slice(lastSelectedIndex, index + 1) ?? [];
    }
    else if(index < lastSelectedIndex) {
        range = model.value?.slice(index, lastSelectedIndex + 1) ?? [];
    }

    for(const tag of range ?? []) {
        fn(tag);
    }
}

function selectAllTags() {
    if(input.value) {
        return;
    }
    
    selected.value = [...(model.value ?? [])];
}

function deactivateTags(omit?: T) {
    if(!omit) {
        selected.value = [];
    }
    else {
        const tags = selected.value.filter(
            item => !isEqual(item, omit)
        );

        for(const tag of tags) {
            deactivateTag(tag);
        }
    }

    blurTags();
}

function blurTags() {
    if(!tagEl.value) {
        return;
    }

    for(const tag of tagEl.value) {
        (tag?.$el as HTMLElement | undefined)?.blur();
    }
}

function isTagActive(tag: T) {
    return !!selected.value.find(item => isEqual(item, tag));
}

function activateTag(tag: T) {
    if(!isTagActive(tag)) {
        selected.value.push(tag);
    }

    // inputEl.value?.focus();
}

function deactivateTag(tag: T) {
    if(isTagActive(tag)) {
        selected.value.splice(selected.value.indexOf(tag), 1);
    }
    
    blurTags();
}

function removeActiveTags() {
    model.value = model.value?.filter(tag => {
        return !isTagActive(tag);
    });

    selected.value = [];
}

function onBackspace() {
    inputEl.value?.focus();

    if(input.value) {
        return;
    }

    if(selected.value.length) {
        removeActiveTags();
    }
    else if(model.value?.length) {
        removeTag(model.value[model.value.length - 1]);
    }
}

function onKeydownEnter(e: KeyboardEvent) {
    if(focusIndex.value !== undefined) {
        addTag(filtered.value[focusIndex.value]);
    }
    else if(filtered.value.length) {
        addTag(filtered.value[0]);
    }
    else if(props.allowCustom && input.value) {
        addCustomTag(input.value);
    }

    e.preventDefault();
}

function onKeydownSpace(e: KeyboardEvent) {
    if(focusIndex.value === undefined) {
        return;
    }

    addTag(filtered.value[focusIndex.value]);

    e.preventDefault();
}

function onKeydownUp() {
    if(!focusIndex.value) {
        focusIndex.value = filtered.value.length - 1;
    }
    else {
        focusIndex.value--;
    }
}

function onKeydownDown() {
    if(focusIndex.value === undefined || focusIndex.value === filtered.value.length - 1) {
        focusIndex.value = 0;
    }
    else {
        focusIndex.value++;
    }
}

function onKeydownLeft(multiple: boolean = false) {
    if(!model.value?.length || input.value) {
        return;
    }
    
    const nextIndex = Math.min(...selectedIndexes.value, model.value.length) - 1;

    if(model.value[nextIndex]) {
        toggleActiveTag(model.value[nextIndex], multiple);
    }
    else {
        deactivateTags();
    }
}

function onKeydownRight(multiple: boolean = false) {
    if(!model.value?.length || input.value) {
        return;
    }
    
    const nextIndex = Math.max(...selectedIndexes.value, -1) + 1;

    if(model.value[nextIndex]) {
        toggleActiveTag(model.value[nextIndex], multiple);
    }
    else {
        deactivateTags();
    }
}

function onEscape() {
    if(hasFocus.value) {
        hasFocus.value = false;
    }
    else {
        deactivateTags();
    }
}

function onBlur() {
    if(props.allowCustom && input.value) {
        addCustomTag(input.value);
    }

    hasFocus.value = false;
    
    deactivateTags();
    
    // emit('blur', undefined);
}

function onFocus() {
    hasFocus.value = true;

    deactivateTags();
    
    // emit('focus', undefined);
}

function onClickAddTag() {
    if(input.value) {
        addCustomTag(input.value);
    }
}

function clear() {
    if (!isInteractive.value) return;
    input.value = undefined;
    model.value = [];
}

function toggle() {
    if (!isInteractive.value) return;
    
    if(hasFocus.value) {
        hasFocus.value = false;
    }
    else {
        hasFocus.value = true;
        inputEl.value?.focus();
    }
}

function onClickOutsideWrapper(e: MouseEvent) {
    if(!e.target) {
        return;
    }

    if(!(wrapperEl.value == e.target || wrapperEl.value?.contains(e.target as Element))) {
        deactivateTags();
    }
}

function onDocumentKeydown(e: KeyboardEvent) {
    switch (e.key) {
    case 'Backspace':
        if(selected.value.length) {
            removeActiveTags();
            e.preventDefault();
        }
        break;
    case 'Escape':
        if(!hasFocus.value) {
            deactivateTags();
        }
    }
}
onBeforeMount(() => {
    document.addEventListener('click', onClickOutsideWrapper);
    document.addEventListener('keydown', onDocumentKeydown);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', onClickOutsideWrapper);
    document.removeEventListener('keydown', onDocumentKeydown);
});
</script>

<template>
    <div ref="wrapperEl" class="relative [&_.form-control]:pr-8">
        <InputField
            ref="field"
            class="tag-field-input"
            :class="{ 'has-clear-button': canClear, ...formGroupClasses }"
            v-bind="{ ...$attrs, controlAttributes, listeners }"
            :name="name"
            :label="label"
            :disabled="disabled"
            :readonly="readonly"
            :color="color"
            :error="error"
            :errors="errors"
            :feedback="feedback"
            :valid="valid"
            :invalid="invalid"
            :size="size">
            <template #icon v-if="$slots.icon">
                <slot name="icon" />
            </template>
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
                        class="tag-field-clear-button"
                        @click.stop="clear">
                        <XMarkIcon class="size-[1.25em]" />
                    </button>
                    <button
                        v-else-if="!invalid && !valid"
                        type="button"
                        @click.stop="toggle">
                        <ChevronDownIcon class="size-[1em]" />
                    </button>
                </slot>
            </template>
            <template #control="{ controlAttributes, listeners }">
                <div class="flex flex-wrap gap-2 mr-2 flex-1">
                    <Badge
                        v-for="(tag, i) in model"
                        ref="tagEl"
                        :key="`tag-${i}`"
                        tabindex="-1"
                        size="badge-[1em]"
                        class="badge-neutral-100 dark:badge-neutral-500"
                        :class="{
                            'badge-blue-200! dark:badge-blue-600!': isTagActive(tag),
                        }"
                        closeable
                        @mousedown.prevent
                        @close="removeTag(tag)"
                        @focus="toggleActiveTag(tag)"
                        @blur="deactivateTag(tag)"
                        @click.exact.meta="toggleActiveTag(tag, true)"
                        @click.exact="toggleActiveTag(tag)"
                        @click.exact.shift="toggleActiveTagRange(tag)">
                        {{ display?.(tag) ?? tag }}
                        <template #close-icon>
                            <XMarkIcon class="size-[1.25em]" @mousedown.prevent />
                        </template>
                    </Badge>
                
                    <input
                        ref="inputEl"
                        v-bind="{ ...controlAttributes, ...listeners }"
                        v-model="input"
                        class="bg-transparent outline-none flex-1 min-w-0"
                        @keydown.exact.delete="onBackspace"
                        @keydown.exact.meta.a="selectAllTags"
                        @keydown.exact.enter="onKeydownEnter"
                        @keydown.exact.space="onKeydownSpace"
                        @keydown.exact.arrow-up="onKeydownUp"
                        @keydown.exact.arrow-down="onKeydownDown"
                        @keydown.exact.arrow-left="onKeydownLeft()"
                        @keydown.exact.shift.arrow-left="onKeydownLeft(true)"
                        @keydown.exact.arrow-right="onKeydownRight()"
                        @keydown.exact.shift.arrow-right="onKeydownRight(true)"
                        @keydown.esc="onEscape"
                        @blur="onBlur"
                        @focus="onFocus">
                </div>
            </template>
        </InputField>
        <div
            v-if="showOptions && filtered.length"
            tabindex="-1"
            class="tag-field-dropdown"
            :class="size"
            @mousedown.prevent.stop>
            <button
                v-for="(option, i) in filtered"
                :key="`option-${JSON.stringify(option)}`"
                type="button"
                tabindex="-1"
                :class="{
                    ['bg-neutral-200 dark:bg-neutral-700']: focusIndex === i
                }"
                @mousedown.prevent
                @mouseup="addTag(option)">
                <div class="truncate">
                    {{ display?.(option) ?? option }}
                </div>
            </button>
            <button
                v-if="allowCustom && input"
                class="flex items-center"
                type="button"
                @mousedown.prevent
                @mouseup="onClickAddTag">
                <PlusIcon class="size-4" /> {{ addTagLabel }}
            </button>
        </div>

        <slot
            name="help"
            v-bind="{ helpText }">
            <small
                v-if="helpText"
                ref="help"
                class="form-help">
                {{ helpText }}
            </small>
        </slot>
    </div>
</template>