---
"@fremtind/jokul": minor
---

La til støtte for valgbare tellestrategier i telleren til `TextArea`.

`counter`-propen støtter nå `strategy: "characters" | "bytes"`, slik at integrasjoner med bytebaserte grenser kan telle UTF-8-bytes. Eksisterende tegnbasert oppførsel er fortsatt standard.
