<script setup lang="ts" generic="Value, ModelValue = boolean">
import type { CheckedFormControlProps, FormControlSlots } from '@vue-interface/form-control';
import { FormControlErrors, FormControlEvents, FormControlFeedback, useFormControl } from '@vue-interface/form-control';
import { computed, InputHTMLAttributes, useTemplateRef } from 'vue';

const props = withDefaults(defineProps<LightSwitchFieldProps<ModelValue, Value>>(), {
    formControlClass: 'form-switch',
    labelClass: 'form-switch-label'
});

defineOptions({
    inheritAttrs: false
});

const model = defineModel<ModelValue, string, boolean, ModelValue>({
    default: false,
    required: false,
    get(value) {
        return (value === onValue.value) || props.checked || false;
    },
    set(value) {
        return value ? onValue.value : offValue.value;
    }
});

const onValue = computed(() => props.onValue ?? (true as ModelValue));
const offValue = computed(() => props.offValue ?? (false as ModelValue));

defineSlots<FormControlSlots<LightSwitchFieldControlSizePrefix, ModelValue> & {
    default: () => unknown
}>();

const emit = defineEmits<FormControlEvents>();

const {
    controlAttributes,
    formGroupClasses,
    listeners,
} = useFormControl<
    InputHTMLAttributes,
    LightSwitchFieldControlSizePrefix,
    ModelValue,
    Value,
    boolean
>({ model, props, emit });

const help = useTemplateRef<HTMLElement>('help');
const label = useTemplateRef<HTMLLabelElement>('label');
const field = useTemplateRef<HTMLInputElement>('field');
const wrapper = useTemplateRef<HTMLDivElement>('wrapper');

defineExpose({
    help,
    field,
    label,
    wrapper,
    focus: () => field.value?.focus(),
    blur: () => field.value?.blur(),
});
</script>

<script lang="ts">
export type LightSwitchFieldControlSizePrefix = 'form-switch';

export type LightSwitchFieldProps<ModelValue, Value = undefined> = CheckedFormControlProps<
    InputHTMLAttributes,
    LightSwitchFieldControlSizePrefix,
    ModelValue,
    Value
> & {
    onValue?: ModelValue,
    offValue?: ModelValue,
};
</script>

<template>
    <div
        ref="wrapper"
        class="light-switch-field"
        :class="formGroupClasses">
        <label
            ref="label"
            :for="controlAttributes.id"
            :class="labelClass">
            <slot
                name="control"
                v-bind="{ controlAttributes, listeners }">
                <input
                    ref="field"
                    type="checkbox"
                    :class="formControlClass"
                    v-model="model"
                    v-bind="{...controlAttributes, ...listeners}">
                <slot name="label">{{ props.label }}</slot>
            </slot>
        </label>

        <slot
            name="errors"
            v-bind="{ error, errors, id, name }">
            <FormControlErrors
                v-if="!!(error || errors)"
                :id="id"
                v-slot="{ error }"
                :name="name"
                :error="error"
                :errors="errors">
                <div
                    invalid
                    class="invalid-feedback">
                    {{ error }}<br>
                </div>
            </FormControlErrors>
        </slot>

        <slot
            name="feedback"
            v-bind="{ feedback }">
            <FormControlFeedback
                v-slot="{ feedback }"
                :feedback="feedback">
                <div
                    valid
                    class="valid-feedback">
                    {{ feedback }}
                </div>
            </FormControlFeedback>
        </slot>

        <slot name="help">
            <small
                v-if="helpText"
                ref="help">
                {{ helpText }}
            </small>
        </slot>
    </div>
</template>
