<script lang="ts">
import { Fragment, h, type SetupContext, type Slot, type VNode } from 'vue';

type MenuItemVNode = VNode & {
    props: { class?: string } & Record<string, unknown>;
    attrs: { on?: Record<string, unknown> } & Record<string, unknown>;
};

function appendClass(vnode: MenuItemVNode, str: string) {
    vnode.props.class = `${vnode.props.class || ''} ${str}`.trim();
}

function changeMenuItems(items: MenuItemVNode[]) {
    for(const vnode of items) {
        if(vnode.type === Fragment) {
            changeMenuItems(vnode.children as MenuItemVNode[]);
        }

        vnode.props = Object.assign({ class: undefined }, vnode.props);
        vnode.attrs = Object.assign({}, vnode.attrs);

        if(!vnode.attrs.on) {
            vnode.attrs.on = {};
        }

        const isDropdownItem = vnode.props.class && vnode.props.class.match(/dropdown-item/);
        const isDropdownDivider = vnode.props.class && vnode.props.class.match(/dropdown-divider/);

        if(typeof vnode.type === 'string' && vnode.type.match(/^h\d$/)) {
            appendClass(vnode, 'dropdown-header');
        }
        else if(vnode.type === 'hr' && !isDropdownDivider) {
            vnode.type = 'div';

            appendClass(vnode, 'dropdown-divider');
        }
        else if(!isDropdownItem && !isDropdownDivider) {
            appendClass(vnode, 'dropdown-item');
        }
    }

    return items;
}

const DropdownMenuItems = (_: unknown, context: SetupContext) => h('div', {}, changeMenuItems((context.slots.default as Slot)() as MenuItemVNode[]));

export default DropdownMenuItems;
</script>
