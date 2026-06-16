---
"@vue-interface/tooltip": patch
---

Keep tooltips on-screen near viewport edges by adding the `shift()` middleware, and recompute position on open so the tooltip is correct after layout shifts that `autoUpdate` does not track (e.g. an animated expand/collapse with no scroll or resize event).
