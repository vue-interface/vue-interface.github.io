# @vue-interface/searchable-select-field

## 2.1.1

### Patch Changes

- aea316e: Fixed an issue where `searchable` was not true by default on SearchableSelectField

## 2.1.0

### Minor Changes

- 321681d: Add a `searchable` prop (default `true`). Set `:searchable="false"` to skip client-side Fuse filtering when the options list is already filtered upstream (e.g., by a server-side search). The component renders `options` as-is, avoiding both the Fuse tokenization overhead and false negatives from Fuse's fuzzy-match scoring (e.g., `location`/`distance` rejecting valid matches that appear far from the start of a string).

## 2.0.8

### Patch Changes

- d891e74: Fix stale dropdown results when `options` change during an active search. The `filtered` computed only accessed `props.options` in the no-input branch, so Vue never tracked it as a reactive dependency during a search. When a parent replaced the options array (e.g., debounced server-side filtering), the internal Fuse instance rebuilt but the computed never re-ran. Access `options` unconditionally at the top of the computed so it remains tracked.

## 2.0.7

### Patch Changes

- 95be03f: fix activity-indicator slot
- acc01d8: fix activity-indicator slot

## 2.0.6

### Patch Changes

- d164d30: Emit `selected`, `clear`, and `input` events from SearchableSelectField so consumers can react to selection, clearing, and input changes.

## 2.0.5

### Patch Changes

- e416cd0: Fixed issue with attribute binding

## 2.0.4

### Patch Changes

- Updated dependencies [8e8e7f3]
  - @vue-interface/form-control@2.0.23
  - @vue-interface/input-field@3.0.4

## 2.0.3

### Patch Changes

- Updated dependencies [20f9025]
  - @vue-interface/form-control@2.0.22
  - @vue-interface/input-field@3.0.3

## 2.0.2

### Patch Changes

- 4d01598: Added types to package exports
- Updated dependencies [4d01598]
  - @vue-interface/input-field@3.0.2

## 2.0.1

### Patch Changes

- Updated dependencies [58ce36f]
  - @vue-interface/input-field@3.0.1

## 2.0.0

### Patch Changes

- Updated dependencies [76e3c99]
  - @vue-interface/input-field@3.0.0
  - @vue-interface/form-control@2.0.21

## 1.0.3

### Patch Changes

- Updated dependencies [dc65e84]
  - @vue-interface/form-control@2.0.20
  - @vue-interface/input-field@2.0.21

## 1.0.2

### Patch Changes

- Updated dependencies [d598393]
  - @vue-interface/activity-indicator@3.0.8
  - @vue-interface/form-control@2.0.19
  - @vue-interface/input-field@2.0.20

## 1.0.1

### Patch Changes

- d60ba53: Made ChevronDownIcon a button

## 2.0.0

### Major Changes

- 342dd69: New searchable-select-field components

### Patch Changes

- Updated dependencies [342dd69]
  - @vue-interface/form-control@2.0.18
  - @vue-interface/input-field@2.0.19
