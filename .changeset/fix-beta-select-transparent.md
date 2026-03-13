---
"@fremtind/jokul": patch
---

fix(select-beta): replace invalid `var(transparent)` with `transparent` in beta Select styles

`var()` requires a CSS custom property name starting with `--`. Using `var(transparent)` is invalid and causes a parse error in strict CSS parsers such as Turbopack.
