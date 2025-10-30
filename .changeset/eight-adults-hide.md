---
"@fremtind/jokul": major
---

BREAKING CHANGES:
- `RadioPanel` og `CheckboxPanel` tar ikke lenger inn `alwaysOpen`. Alt innhold vil derfor alltid være synlig.
- `RadioPanel` og `CheckboxPanel` krever nå en `value`.
- `extraLabel` er erstattet med `amount` for å tydeliggjøre typen innhold som skal stå til høyre i panelet.
- `RadioPanelGroup` er fjernet til fordel for `FieldGroup`.
