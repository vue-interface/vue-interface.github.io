---
"@vue-interface/tooltip": patch
---

Fix `placement` prop type to accept string values

`UseFloatingOptions['placement']` resolves to `MaybeReadonlyRefOrGetter<Placement | undefined>`, which Vue's runtime prop compiler cannot identify as a string — it fell back to `[Object, Function]`, causing a Vue prop validation warning whenever a string like `"bottom"` or `"top-start"` was passed. Changed to `Placement` (a plain string union re-exported from `@floating-ui/vue`) so the compiled prop type correctly includes `String`.
