---
"@fremtind/jokul": minor
---

File har blitt redesigna for mer fleksibel bruk i løsningene utenfor FileInput.

## Endringer

1. Navneendring: FileInputFile -> UploadedFile
2. Navneendring: FileInputFileValidation -> UploadedFileValidation
3. Navneendring i FileProps: SupportLabel -> ErrorLabel
4. Navneendring: validateFile -> validateFileInputFiles for å tydeliggjøre at valideringa skjer i input, ikke i File
   selv
5. Typeendring: Alle typer knytta til File er flytta til en egen mappe (/file) istedenfor sammen med FileInput
6. Typeendring: State er forenkla til å kun ta imot "error", "loading" eller undefined
7. Fjernet: FileInputFileState hentes nå direkte fra FileProps

## Next steps

1. Dekomponenere FileInput enda mer, for å tilgjengeliggjøre Dropzone og en egen FileUpload knapp.
2. Vurdere flere varianter av filer, dersom det er behov for dette i for eksempel dialoger