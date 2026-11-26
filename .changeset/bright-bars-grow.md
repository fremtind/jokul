---
"@fremtind/jokul": minor
---

`File` har fått propen `uploadProgress`. Når `state` er `"loading"` vises fremdriften som en tynn `ProgressBar` i underkanten av filen. Uten `uploadProgress` glir linjen frem og tilbake, og spinneren i miniatyrbildet er fjernet. Send med `uploadProgress` fra `UploadedFile` for å vise hvor langt opplastingen har kommet.
