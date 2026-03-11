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
};
</script>


<script setup lang="ts" generic="T, Value">
import { PlusIcon, XMarkIcon } from '@heroicons/vue/24/outline';
import Fuse, { IFuseOptions } from 'fuse.js';
import type { FormControlEvents, FormControlProps, FormControlSlots } from '@vue-interface/form-control';
import { useFormControl } from '@vue-interface/form-control';
import { InputField } from '@vue-interface/input-field';
import { Badge, BadgeSizePrefix } from '@vue-interface/badge';
import { isEqual } from 'lodash-es';
import { InputHTMLAttributes, computed, onBeforeMount, onBeforeUnmount, Ref, ref, useTemplateRef, watch } from 'vue';

const props = withDefaults(defineProps<TagFieldProps<T,Value>>(), {
    formControlClass: 'form-control',
    labelClass: 'form-label',
    size: 'form-control-md',
    allowCustom: true,
    addTagLabel: 'Add Tag',
    options: () => [] as any,
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
} = useFormControl<InputHTMLAttributes, TagFieldSizePrefix, T[]|undefined, Value[]|undefined>({ model, props, emit });

const wrapperEl = useTemplateRef('wrapperEl');
const inputEl = useTemplateRef('inputEl');
const tagEl = useTemplateRef('tagEl');

const input = ref<string>();
const selected = ref<T[]>([]) as Ref<T[]>;
const hasFocus = ref(false);
const focusIndex = ref<number>();
const options = ref(props.options) as Ref<T[]>;

const keys = computed(() => {
    return typeof props.options === 'object' && props.options?.[0]
        ? Object.keys(props.options?.[0])
        : [];
});

const fuse: Fuse<T> = createFuse(props.options);

const badgeSize = computed<BadgeSizePrefix | undefined>(() => {
    return props.size ? String(props.size).replace('form-control', 'badge') as BadgeSizePrefix : undefined;
});

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
    document.addEventListener('keydown', onDocumentKeydown);
});
</script>

<template>
    <div class="relative [&_.form-control]:pr-8">
        <InputField
            :id="id"
            ref="inputEl"
            class="tag-field-input"
            :class="{ formGroupClasses }"
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
            :size="size"
            @click.self="inputEl?.focus()">
            <template #control="{ controlAttributes: innerControlAttributes, listeners: innerListeners }">
                <div class="flex flex-wrap gap-1 items-center h-auto py-[.15rem] cursor-text flex-1"
                    :class="[
                        innerControlAttributes.class,
                        {
                            'form-control': true
                        }
                    ]"
                    @click.self="inputEl?.focus()">
                    <Badge
                        v-for="(tag, i) in model"
                        ref="tagEl"
                        :key="`tag-${i}`"
                        tabindex="-1"
                        :size="badgeSize"
                        class="badge-primary dark:badge-neutral-500"
                        :class="{
                            'bg-blue-200! text-blue-900! border-blue-300! dark:bg-blue-600! dark:text-blue-100! dark:border-blue-500!': isTagActive(tag),
                        }"
                        closeable
                        @mousedown.prevent
                        @focus="toggleActiveTag(tag)"
                        @blur="deactivateTag(tag)"
                        @click.exact.meta="toggleActiveTag(tag, true)"
                        @click.exact="toggleActiveTag(tag)"
                        @click.exact.shift="toggleActiveTagRange(tag)">
                        {{ display?.(tag) ?? tag }}
                        
                        <template #close-icon>
                            <XMarkIcon class="size-[1.25em]" @mousedown.prevent @mouseup.stop="removeTag(tag)" />
                        </template>
                    </Badge>

                    <input
                        :id="id"
                        ref="inputEl"
                        v-model="input"
                        class="bg-transparent outline-none flex-1"
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
            v-if="showOptions"
            tabindex="-1"
            class="tag-field-dropdown">
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
    </div>
</template>