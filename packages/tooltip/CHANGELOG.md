# @vue-interface/tooltip

## 2.1.1

### Patch Changes

- 40bdcb3: Close the tooltip on `click` and `blur` of the target.

  Previously tooltips only closed on `mouseout`. When a user clicked a target that triggered a navigation (e.g., an Inertia `Link` or router `visit`), the `click` fired but `mouseout` often did not — leaving the tooltip visible at `opacity: .9` after the page had changed, sometimes hovering over unrelated UI. The listeners are removed in `onUnmounted` alongside the existing ones.

## 2.1.0

### Minor Changes

- 220e988: Default Floating-UI `strategy` to `fixed` and properly tear down tooltips when their targets are removed.
  - **`strategy: 'fixed'` by default.** Tooltips are teleported to `<body>` and previously used the default `absolute` strategy. With no positioned ancestor, absolute tooltips contribute to the initial containing block's `scrollHeight`, causing stale/offscreen tooltips to extend the document's scroll area (a visible body-level overflow on pages that render many tooltip targets inside scrolling containers). `fixed` positions tooltips relative to the viewport and does not affect any ancestor's scroll. Consumers can opt back in by passing an explicit `strategy` prop.
  - **Unmount the Vue component on destroy.** `destroyTooltip` now tracks the off-DOM render container per target (via a `WeakMap`) and calls `render(null, container)` when the target is removed. This triggers `onUnmounted` on the internal `Tooltip` component, which releases `useFloating`'s `autoUpdate` listeners, the target's `mouseover`/`mouseout` handlers, and the teleported DOM. Prevents memory leaks and prevents stale tooltips from accumulating under `<body>`.
  - **Recurse into removed subtrees.** The `MutationObserver` callback now walks each removed node for descendants that carry `data-tooltip-id`, so tooltips are cleaned up when a container element (rather than the target itself) is removed from the DOM.
  - **Guard against duplicate creation.** `createTooltip` short-circuits if a container already exists for the target, preventing double-registration when both the `v-tooltip` directive and the global mixin fire on the same element.
  - **Restore and clear `title`.** `destroyTooltip` now also removes the `data-tooltip-og-title` attribute after restoring the original `title`.

## 2.0.9

### Patch Changes

- 4d01598: Added types to package exports

## 2.0.8

### Patch Changes

- a2c2973: clean up package dependencies

## 2.0.7

### Patch Changes

- f042fac: Standardize vite.config.js and fixed export issue.

## 2.0.6

### Patch Changes

- aea22a9: Fixed issues with package.json exports

## 2.0.5

### Patch Changes

- 0631b52: Fixed issues with package.json exports

## 2.0.4

### Patch Changes

- 8bc226f: Updated package.json homepage url

## 2.0.3

### Patch Changes

- b1b56fc: Updated MIT license

## 2.0.2

### Patch Changes

- 63ea504: Added README to package

## 2.0.1

### Patch Changes

- bb83523: Fix issue with dist not being published

## 2.0.0

### Major Changes

- 7119322: Add support for TailwindCSS v4
