---
"@fremtind/jokul": patch
---

FileInput og File: dra-og-slipp ignoreres når feltet er deaktivert, og med `multiple={false}` brukes bare første fil. Markeringen blinker ikke lenger når pekeren går over innholdet i dropsonen. `accept` valideres etter reglene i HTML-spesifikasjonen. Skjermlesere får beskjed om antall valgte filer, og fokus flyttes til filvelgeren når en fil fjernes. Feilmeldingen på en fil er koblet til fjern-knappen. Forhåndsvisninger av bilder lekker ikke lenger minne, og slipp-hintet skjules på touch-enheter.
