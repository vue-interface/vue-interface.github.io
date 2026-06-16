---
"@vue-interface/form-control": minor
---

Add a base `form-label` utility so standalone field labels have sensible default styling (display, margin, font size/weight, line-height, colour). Previously `.form-label` was only styled inside the floating-label animation, so a plain label rendered as a bare inline element at the inherited size. Appearance is overridable via the new `--form-label-*` tokens.
