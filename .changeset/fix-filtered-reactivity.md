---
"@vue-interface/searchable-select-field": patch
---

Fix stale dropdown results when `options` change during an active search. The `filtered` computed only accessed `props.options` in the no-input branch, so Vue never tracked it as a reactive dependency during a search. When a parent replaced the options array (e.g., debounced server-side filtering), the internal Fuse instance rebuilt but the computed never re-ran. Access `options` unconditionally at the top of the computed so it remains tracked.
