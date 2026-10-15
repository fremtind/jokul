---
"@fremtind/jokul": minor
---

Skjemafelter som er `readOnly` viser nå et dekorativt låseikon rett foran label-teksten. Gjelder `TextInput`, `TextArea`, `NumberInput`, `DateInput`, `Combobox` og `Search`.

Felter med skjult label får ingen lås, siden labelen klippes bort i sin helhet — det gjelder `Search` som standard og alle `inline`-felter. Vil du ha låsen på et søkefelt må du vise labelen med `labelProps={{ srOnly: false }}`.

Label-teksten i felter med tooltip har fått klassen `jkl-label__text`.
