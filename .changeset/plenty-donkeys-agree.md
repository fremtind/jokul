---
"@fremtind/jokul": minor
---

Skjemafeltene viser `disabled` og `readOnly` likt: disabled dempes til 50 %, readOnly gir dempet ramme med full tekstkontrast. Tilstanden legges på selve kontrollen, så label, beskrivelse og støttetekst beholder full kontrast. Hover slår ikke inn på en deaktivert kontroll, og `aria-disabled="true"` støttes på lik linje med native `disabled`.

Gjelder `TextInput`, `TextArea`, `Select`, `DateInput`, `NumberInput`, `Search`, `FileInput`, `Checkbox`, `RadioButton`, `ToggleSwitch`, `CheckboxPanel`, `RadioPanel` og `SegmentedControl`.
