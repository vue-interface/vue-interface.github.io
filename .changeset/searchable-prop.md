---
"@vue-interface/searchable-select-field": minor
---

Add a `searchable` prop (default `true`). Set `:searchable="false"` to skip client-side Fuse filtering when the options list is already filtered upstream (e.g., by a server-side search). The component renders `options` as-is, avoiding both the Fuse tokenization overhead and false negatives from Fuse's fuzzy-match scoring (e.g., `location`/`distance` rejecting valid matches that appear far from the start of a string).
