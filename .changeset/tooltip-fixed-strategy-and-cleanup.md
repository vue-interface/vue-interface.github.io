---
"@vue-interface/tooltip": minor
---

Default Floating-UI `strategy` to `fixed` and properly tear down tooltips when their targets are removed.

- **`strategy: 'fixed'` by default.** Tooltips are teleported to `<body>` and previously used the default `absolute` strategy. With no positioned ancestor, absolute tooltips contribute to the initial containing block's `scrollHeight`, causing stale/offscreen tooltips to extend the document's scroll area (a visible body-level overflow on pages that render many tooltip targets inside scrolling containers). `fixed` positions tooltips relative to the viewport and does not affect any ancestor's scroll. Consumers can opt back in by passing an explicit `strategy` prop.
- **Unmount the Vue component on destroy.** `destroyTooltip` now tracks the off-DOM render container per target (via a `WeakMap`) and calls `render(null, container)` when the target is removed. This triggers `onUnmounted` on the internal `Tooltip` component, which releases `useFloating`'s `autoUpdate` listeners, the target's `mouseover`/`mouseout` handlers, and the teleported DOM. Prevents memory leaks and prevents stale tooltips from accumulating under `<body>`.
- **Recurse into removed subtrees.** The `MutationObserver` callback now walks each removed node for descendants that carry `data-tooltip-id`, so tooltips are cleaned up when a container element (rather than the target itself) is removed from the DOM.
- **Guard against duplicate creation.** `createTooltip` short-circuits if a container already exists for the target, preventing double-registration when both the `v-tooltip` directive and the global mixin fire on the same element.
- **Restore and clear `title`.** `destroyTooltip` now also removes the `data-tooltip-og-title` attribute after restoring the original `title`.
