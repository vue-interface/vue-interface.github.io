---
"@vue-interface/tooltip": patch
---

Close the tooltip on `click` and `blur` of the target.

Previously tooltips only closed on `mouseout`. When a user clicked a target that triggered a navigation (e.g., an Inertia `Link` or router `visit`), the `click` fired but `mouseout` often did not — leaving the tooltip visible at `opacity: .9` after the page had changed, sometimes hovering over unrelated UI. The listeners are removed in `onUnmounted` alongside the existing ones.
