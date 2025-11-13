---
"@fremtind/jokul": major
---

BREAKING CHANGES:
- `RadioPanel` og `CheckboxPanel` krever nå en `value` av typen `string`.
- `RadioPanelGroup` er fjernet. Bruk heller `FieldGroup`.

Andre endringer:
- `extraLabel` er erstattet med `amount` for å tydeliggjøre typen innhold som skal stå til høyre i panelet.
- `children` er erstattet med `description`.
- `alwaysOpen` er fjernet.
