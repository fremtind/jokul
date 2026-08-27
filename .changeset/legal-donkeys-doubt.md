---
"@fremtind/jokul": major
---

`FileInput` er forenklet og har fått et nytt API. Komponenten brukes nå kun til å velge filer. Løsningen som bruker komponenten, har selv ansvar for å validere filene, vise dem og håndtere opplastingsstatus.

Bytt ut `legend` med `label`, og bruk `buttonText` til teksten på knappen. Valgte filer hentes fra `event.currentTarget.files` i `onChange`. Funksjonen som sendes til `onChange`, mottar ikke lenger en egen filliste som andre argument, og valgte filer må vises utenfor `FileInput`.

Komponenten har nå variantene `"button"` og `"dropzone"`. De tidligere variantene `"flexible"` og `"small"` er fjernet. Som standard kan brukeren nå bare velge én fil. Sett `multiple` dersom flere filer skal kunne velges.

Propsene `value` og `maxSizeBytes` er fjernet. Det samme gjelder eksportene `upload`, `UploadedFile` og `UploadedFileValidation`.
