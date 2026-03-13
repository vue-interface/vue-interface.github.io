<script setup lang="ts" generic="T, Value">
import { PlusIcon, XMarkIcon } from '@heroicons/vue/24/outline';
import { ActivityIndicator } from '@vue-interface/activity-indicator';
import { Badge } from '@vue-interface/badge';
import type { FormControlEvents, FormControlProps, FormControlSlots } from '@vue-interface/form-control';
import { FormControlErrors, FormControlFeedback, useFormControl } from '@vue-interface/form-control';
import type { IFuseOptions } from 'fuse.js';
import Fuse from 'fuse.js';
import { isEqual } from 'lodash-es';
import { type HTMLAttributes, computed, onBeforeMount, onBeforeUnmount, ref, toRaw, unref, useTemplateRef, watch, type Ref } from 'vue';

export type TagFieldSizePrefix = 'form-control';

export type TagFieldProps<T, Value> = FormControlProps<
    HTMLAttributes,
    TagFieldSizePrefix,
    T[],
    Value[]
> & {
    options?: T[];
    fuseOptions?: IFuseOptions<T>;
    display?: (option: T) => string;
    format?: (value: string) => T;
    allowCustom?: boolean;
    addTagLabel?: string;
    noResultsText?: string;
    showNoResults?: boolean;
    clearable?: boolean;
};

const props = withDefaults(defineProps<TagFieldProps<T, Value>>(), {
    formControlClass: 'form-control',
    labelClass: 'form-label',
    size: 'form-control-md',
    allowCustom: false,
    addTagLabel: 'Add Tag',
    noResultsText: 'No results found',
    showNoResults: true,
    clearable: false,
    options: () => [],
});

defineOptions({
    inheritAttrs: false
});

const model = defineModel<T[]>();

defineSlots<FormControlSlots<TagFieldSizePrefix, T[]> & {
    default(props: { option: T; display?: (option: T) => string }): any;
    'no-results'(props: { input: string | undefined }): any;
}>();

const emit = defineEmits<FormControlEvents>();

const {
    controlAttributes,
    formGroupClasses,
    listeners
} = useFormControl<HTMLAttributes, TagFieldSizePrefix, T[]|undefined, Value[]>({ model, props, emit });

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
    return isInteractive.value && hasFocus.value && (filtered.value.length || input.value);
});

const selectedIndexes = computed(() => {
    return selected.value.map(tag => {
        return (model.value ?? []).findIndex(item => isEqual(item, tag));
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
        return !(model.value ?? []).find(item => {
            return isEqual(item, toRaw(unref(option)));
        });
    });

    if(!input.value) {
        return items;
    }

    fuse.setCollection(items as T[]);

    return fuse.search(input.value).map(({ item }) => item);
});

function addCustomTag(value: string) {
    if(!isInteractive.value) return;

    const tag = props.format?.(value) ?? value as T;

    if(!options.value.find(option => isEqual(option, tag))) {
        options.value.push(tag);

        addTag(tag);

        input.value = undefined;
    }
}

function addTag(tag: T) {
    if(!isInteractive.value) return;

    model.value = [...(model.value ?? []), tag];
    input.value = undefined;
    focusIndex.value = undefined;
}

function removeTag(tag: T) {
    if(!isInteractive.value) return;

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
    const items = model.value ?? [];
    const index = items.indexOf(tag);
    const lastSelectedIndex = selectedIndexes.value[selectedIndexes.value.length - 1];
    const fn = !isTagActive(tag) ? activateTag : deactivateTag;

    if(lastSelectedIndex === undefined) {
        toggleActiveTag(tag);

        return;
    }

    let range: T[] = [];

    if(index > lastSelectedIndex) {
        range = items.slice(lastSelectedIndex, index + 1);
    }
    else if(index < lastSelectedIndex) {
        range = items.slice(index, lastSelectedIndex + 1);
    }

    for(const tag of range) {
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
}

function deactivateTag(tag: T) {
    if(isTagActive(tag)) {
        selected.value.splice(selected.value.indexOf(tag), 1);
    }

    blurTags();
}

function removeActiveTags() {
    model.value = (model.value ?? []).filter(tag => {
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
}

function onFocus() {
    hasFocus.value = true;

    deactivateTags();
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
    <div
        ref="wrapperEl"
        class="tag-field"
        :class="[formGroupClasses, { 'has-clear-button': canClear }]">
        <slot name="label">
            <label
                v-if="label"
                :class="labelClass"
                :for="controlAttributes.id">
                {{ label }}
            </label>
        </slot>

        <div class="form-control-inner">
            <slot
                name="control"
                v-bind="{ controlAttributes, listeners }">
                <div
                    v-if="$slots.icon"
                    class="form-control-inner-icon"
                    @click="inputEl?.focus()">
                    <slot name="icon" />
                </div>
                <div
                    v-bind="controlAttributes"
                    class="form-control flex"
                    @click.self="inputEl?.focus()">
                    <div class="flex flex-wrap gap-2 mr-2 flex-1">
                        <Badge
                            v-for="(tag, i) in model"
                            ref="tagEl"
                            :key="`tag-${i}`"
                            tabindex="-1"
                            size="badge-[.95em]"
                            class="badge-neutral-100 dark:badge-neutral-500"
                            :class="{
                                'badge-blue-600!': isTagActive(tag),
                            }"
                            :closeable="isInteractive"
                            @mousedown.prevent
                            @close="removeTag(tag)"
                            @focus="toggleActiveTag(tag)"
                            @blur="deactivateTag(tag)"
                            @click.exact.meta="toggleActiveTag(tag, true)"
                            @click.exact="toggleActiveTag(tag)"
                            @click.exact.shift="toggleActiveTagRange(tag)">
                            <slot :option="tag" :display="display">
                                {{ display?.(tag) ?? tag }}
                            </slot>
                            <template #close-icon>
                                <XMarkIcon class="size-[1.25em]" @mousedown.prevent />
                            </template>
                        </Badge>

                        <input
                            ref="inputEl"
                            v-model="input"
                            :placeholder="model?.length ? undefined : ($attrs.placeholder as string)"
                            :disabled="props.disabled"
                            :readonly="props.readonly"
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
                </div>
            </slot>

            <div class="form-control-activity-indicator">
                <slot name="activity" v-bind="{ canClear, clear, isInteractive }">
                    <button
                        v-if="canClear"
                        type="button"
                        class="tag-field-clear-button"
                        @click.stop="clear">
                        <XMarkIcon class="size-[1.25em]" />
                    </button>
                    <Transition name="tag-field-fade" v-else>
                        <ActivityIndicator
                            v-if="props.activity && props.indicator"
                            key="activity"
                            :type="props.indicator"
                            :size="props.indicatorSize" />
                    </Transition>
                </slot>
            </div>
        </div>

        <div
            v-if="showOptions"
            tabindex="-1"
            class="tag-field-dropdown"
            @mousedown.prevent.stop>
            <button
                v-for="(option, i) in filtered"
                :key="`option-${JSON.stringify(option)}`"
                type="button"
                tabindex="-1"
                :class="{
                    ['bg-neutral-100 dark:bg-neutral-800']: focusIndex === i
                }"
                @mousedown.prevent
                @mouseup="addTag(option)">
                <div class="truncate">
                    {{ display?.(option) ?? option }}
                </div>
            </button>
            <button
                v-if="allowCustom && input"
                class="flex items-center gap-1"
                type="button"
                @mousedown.prevent
                @mouseup="onClickAddTag">
                <PlusIcon class="size-4" /> {{ addTagLabel }}
            </button>
            <div
                v-if="showNoResults && !filtered.length && !allowCustom"
                class="py-2 px-4 text-neutral-400 dark:text-neutral-500">
                <slot name="no-results" :input="input">
                    {{ noResultsText }}
                </slot>
            </div>
        </div>

        <slot
            name="errors"
            v-bind="{ error, errors, id: controlAttributes.id, name }">
            <FormControlErrors
                v-if="!!(error || errors)"
                :id="controlAttributes.id"
                v-slot="{ error: err }"
                :name="name"
                :error="error"
                :errors="errors">
                <div
                    invalid
                    class="invalid-feedback">
                    {{ err }}
                </div>
            </FormControlErrors>
        </slot>

        <slot
            name="feedback"
            v-bind="{ feedback }">
            <FormControlFeedback
                v-slot="{ feedback: fb }"
                :feedback="feedback">
                <div
                    valid
                    class="valid-feedback">
                    {{ fb }}
                </div>
            </FormControlFeedback>
        </slot>

        <slot
            name="help"
            v-bind="{ helpText }">
            <small
                v-if="helpText"
                class="form-help">
                {{ helpText }}
            </small>
        </slot>
    </div>
</template>
