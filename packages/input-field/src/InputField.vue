<script setup lang="ts" generic="ModelValue, Value">
import { ActivityIndicator } from '@vue-interface/activity-indicator';
import type { FormControlEvents, FormControlProps, FormControlSlots } from '@vue-interface/form-control';
import { FormControlErrors, FormControlFeedback, useFormControl } from '@vue-interface/form-control';
import { InputHTMLAttributes, useTemplateRef } from 'vue';

const props = withDefaults(defineProps<InputFieldProps<ModelValue,Value>>(), {
    formControlClass: 'form-control',
    labelClass: 'form-label',
    size: 'form-control-md'
});

defineOptions({
    inheritAttrs: false
});

const model = defineModel<ModelValue>();

defineSlots<FormControlSlots<InputFieldControlSizePrefix,ModelValue>>();

const emit = defineEmits<FormControlEvents>();

const {
    controlAttributes,
    formGroupClasses,
    listeners
} = useFormControl<InputHTMLAttributes, InputFieldControlSizePrefix, ModelValue|undefined, Value>({ model, props, emit });

const activity = useTemplateRef<InstanceType<typeof ActivityIndicator>>('activity');
const help = useTemplateRef<HTMLElement>('help');
const label = useTemplateRef<HTMLLabelElement>('label');
const field = useTemplateRef<HTMLInputElement>('field');
const wrapper = useTemplateRef<HTMLDivElement>('wrapper');

defineExpose({
    activity,
    help,
    field,
    label,
    wrapper,
    focus: () => field.value?.focus(),
    blur: () => field.value?.blur(),
})
</script>

<script lang="ts">
export type InputFieldControlSizePrefix = 'form-control';

export type InputFieldProps<ModelValue, Value> = FormControlProps<
    InputHTMLAttributes, 
    InputFieldControlSizePrefix, 
    ModelValue, 
    Value
>;
</script>

<template>
    <div
        ref="wrapper"
        class="input-field"
        :class="formGroupClasses">
        <slot name="label">
            <label
                v-if="props.label"
                ref="label"
                :class="labelClass"
                :for="controlAttributes.id">
                {{ props.label }}
            </label>
        </slot>
        
        <div class="form-control-inner">
            <slot
                name="control"
                v-bind="{ controlAttributes, listeners }">
                <div
                    v-if="$slots.icon"
                    class="form-control-inner-icon"
                    @click="field?.focus()">
                    <slot name="icon" />
                </div>
                <input
                    ref="field"
                    v-model="model"
                    v-bind="{...controlAttributes, ...listeners}">
            </slot>
            
            <div class="form-control-activity-indicator">
                <slot name="activity">
                    <Transition name="input-field-fade">
                        <ActivityIndicator
                            v-if="props.activity && indicator"
                            key="activity"
                            ref="activity"
                            :type="indicator"
                            :size="indicatorSize" />
                    </Transition>
                </slot>
            </div>
        </div>

        <slot
            name="errors"
            v-bind="{ error, errors, id: $attrs.id, name: $attrs.name }">  
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