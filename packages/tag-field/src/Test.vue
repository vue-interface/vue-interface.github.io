const props = withDefaults(defineProps<SearchableSelectFieldProps<T,Value>>(), {
    formControlClass: 'form-control',
    labelClass: 'form-label',
    size: 'form-control-md',
});

<template>
    <div ref="wrapperEl" class="relative">
        <SearchableSelectField
            v-bind="{ ...$attrs, controlAttributes, listeners }"
            :model-value="undefined"
            :options="filtered"
            :display="display"
            :allow-custom="allowCustom"
            :invalid="invalid"
            :error="error"
            :label="label"
            :disabled="disabled"
            :readonly="readonly"
            :fuse-options="fuseOptions"
            :form-control-class="formGroupClasses"
            @update:model-value="onOptionSelected"
            @input="onInput"
            @keydown.exact.delete="onBackspace"
            @keydown.exact.meta.a="selectAllTags"
            @keydown.exact.enter="onKeydownEnter"
            @keydown.exact.space="onKeydownSpace"
            @keydown.exact.arrow-up="onKeydownUp"
            @keydown.exact.arrow-down="onKeydownDown"
            @keydown.exact.arrow-left="onKeydownLeft($event)"
            @keydown.exact.shift.arrow-left="onKeydownLeft($event, true)"
            @keydown.exact.arrow-right="onKeydownRight($event)"
            @keydown.exact.shift.arrow-right="onKeydownRight($event, true)"
            @keydown.esc="onEscape"
            @blur="onBlur"
            @focus="onFocus"
        >
            <template #icon v-if="model.length">
                <div class="flex flex-wrap gap-2 mr-2 ml-2 my-1 z-10 items-center">
                    <Badge
                        v-for="(tag, i) in model"
                        ref="tagEl"
                        :key="`tag-${i}`"
                        closeable
                        tabindex="-1"
                        :class="[
                            'tag-badge cursor-pointer transition-colors border outline-none',
                            isTagActive(tag) 
                                ? 'bg-blue-200 text-blue-900 border-blue-300 dark:bg-blue-600 dark:text-blue-100 dark:border-blue-500' 
                                : 'bg-neutral-100 text-neutral-800 border-neutral-300 dark:bg-neutral-500 dark:text-neutral-100 dark:border-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-400'
                        ]"
                        @mousedown.prevent
                        @focus="toggleActiveTag(tag)"
                        @blur="deactivateTag(tag)"
                        @click.exact="toggleActiveTag(tag)"
                        @click.exact.meta="toggleActiveTag(tag, true)"
                        @click.exact.shift="toggleActiveTagRange(tag)"
                        @close="removeTag(tag)"
                    >
                        {{ display?.(tag) ?? tag }}
                    </Badge>
                </div>
            </template>
            <template #default="slotProps">
                <slot v-bind="slotProps"></slot>
            </template>
        </SearchableSelectField>
    </div>
</template>