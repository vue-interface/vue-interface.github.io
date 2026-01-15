import { computed, nextTick, ref, useTemplateRef, watch, Ref } from 'vue';
import Fuse, { IFuseOptions } from 'fuse.js';

export interface SearchableInputProps<T> {
    name?: string;
    label?: string;
    value?: T;
    options?: T[];
    fuseOptions?: IFuseOptions<T>;
    display?: (option: T) => string;
    disabled?: boolean;
    allowCustom?: boolean;
}

export function useSearchableInputField<T>(
    props: SearchableInputProps<T>,
    model: Ref<T | undefined>
) {
    const input = ref<string>();
    const showOptions = ref(false);
    const active = ref<number>();

    const buttons = useTemplateRef<HTMLButtonElement[]>('buttons');
    const optionsEl = useTemplateRef<HTMLDivElement>('optionsEl');

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
        if (!input.value) {
            return props.options ?? [];
        }

        const matches = fuse.search(input.value).map(({ item }) => item);

        if (props.allowCustom && !matches.length) {
            return props.options ?? [];
        }

        return matches;
    });

    watch(() => props.options, () => {
        fuse = createFuse();
    });

    function scrollIntoView(child?: HTMLElement) {
        const parent = optionsEl.value;

        if (!parent || !child) {
            return;
        }

        const parentRect = parent.getBoundingClientRect();
        const childRect = child.getBoundingClientRect();

        const childTop = childRect.top - parentRect.top + parent.scrollTop;

        parent.scrollTop = childTop;
    }

    watch([input, active], ([inputVal, activeVal]) => {
        if (inputVal) {
            buttons.value?.[0]?.scrollIntoView({
                block: 'nearest',
                inline: 'nearest'
            });
        }
        else if (activeVal !== undefined) {
            buttons.value?.[activeVal]?.scrollIntoView({
                block: 'nearest',
                inline: 'nearest'
            });
        }
    });

    watch(optionsEl, (value) => {
        if (!value) {
            return;
        }

        nextTick(() => {
            if (active.value === undefined) {
                return;
            }

            scrollIntoView(buttons.value?.[active.value]);
        });
    });

    function select(option?: T) {
        model.value = option;
        active.value = option && props.options?.includes(option)
            ? props.options.indexOf(option)
            : undefined;
        input.value = undefined;
        showOptions.value = false;
    }

    function onInput(e: Event) {
        showOptions.value = true;
        active.value = undefined;
        input.value = (e.target as HTMLInputElement)?.value;

        if (props.allowCustom) {
            model.value = input.value as T;
        }
    }

    function onKeypressEnter() {
        if (!showOptions.value) {
            showOptions.value = true;

            return;
        }

        if (props.allowCustom && active.value === undefined) {
            select(input.value as T ?? model.value);
        }
        else if (active.value === undefined) {
            select(filtered.value[0]);
        }
        else if (filtered.value[active.value]) {
            select(filtered.value[active.value]);
        }
        else {
            select(undefined);
        }
    }

    function onKeydownUp() {
        showOptions.value = true;

        if (!active.value) {
            active.value = filtered.value.length - 1;
        }
        else {
            active.value--;
        }
    }

    function onKeydownDown() {
        showOptions.value = true;

        if (active.value === undefined || active.value === filtered.value.length - 1) {
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

    return {
        input,
        showOptions,
        active,
        filtered,
        buttons,
        optionsEl,
        select,
        onInput,
        onKeypressEnter,
        onKeydownUp,
        onKeydownDown,
        onBlur,
        onClickOption
    };
}
