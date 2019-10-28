# [`@fremtind/jkl-text-field`](https://fremtind.github.io/jokul/components/textfield/)

## Om tekstfelt

I et tekstfelt kan brukerne legge inn egne opplysninger. Et tekstfelt kan være kort eller langt, og det kan gå over en eller flere linjer. Vi kan også legge et tekstfelt inne i en setning for å la brukeren fylle ut et manglende ord eller tall.

-   Vi legger inn validering på tekstfelt, slik at brukeren ikke kan fylle det inn feil. Ledeteksten skal tydelig vise hva brukeren kan skrive i feltet.
-   Vi bruker helst bare ledetekst, men hvis vi trenger hjelpetekst i tillegg, skal den plasseres under feltet.
-   Vi bruker bredden på tekstfeltet til å styre hvor mye vi vil at brukeren skal skrive inn. _Et felt for fødselsnummer bør ikke ta mer plass enn det 11 siffer gjør._

> Tekstfelter som er inne i en setning kan ikke ha feil- eller hjelpetekst. Dersom det er feil i utfyllingen av disse må årsaken gjøres klar på annen måte.

### Langt tekstfelt

Vi kan bruke et langt tekstfelt når vi vil at brukerne skal skrive en lengre tekst, eller de må ha mulighet til å kunne gjøre det. Dette feltet utvider seg, slik at det blir tydelig for brukerne at de kan skrive mye.

Når vi bruker lange tekstfelt, må vi ha en god ledetekst, som forklarer hva vi forventer at brukeren skal skrive i feltet. Vi kan også angi hvor mange tegn de kan bruke.
