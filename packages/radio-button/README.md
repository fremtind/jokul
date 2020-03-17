# [`@fremtind/jkl-radio-button`](https://fremtind.github.io/jokul/komponenter/radiobutton)

## Radioknapper

Vi bruker radioknapper når vi vil at brukeren skal velge ett av flere alternativ. Bruk helst radioknapper for inntil fire alternativ. Hvis du trenger å gi brukeren flere muligheter enn det, er det ofte bedre med en _nedtrekksliste_.

Over radioknappene setter vi inn en tydelig overskrift, som forteller hva det er brukeren skal velge mellom. I tillegg skal hver radioknapp ha en kort og tydelig ledetekst til høyre for knappen, som beskriver alternativet.

## Bruk

En gruppe radioknapper kan enten settes opp under eller ved siden av hverandre. Det er mest brukervennlig å sette dem opp vertikalt.

En av radioknappene bør alltid være valgt på forhånd. Det kan være det alternativet som de fleste vil velge, eller det som har minst følger for brukeren. I noen tilfeller kan det være viktig at brukeren selv velger, uten å bli påvirket av et forhåndsvalg. Da kan vi sette opp radioknapper uten forhåndsvalg. **Vis eksempler på det**

## Tekst og validering

Bruk prinsippene for skjemadesign når du velger størrelse på overskriften til en gruppe radioknapper. Skriv en kort og tydelig overskrift, som forteller hva brukeren skal velge. Hvis det er behov for det, kan vi legge inn en hjelpetekst under gruppen, for å forklare mer.

Hvis radioknappene ikke validerer, viser systemet en feilmelding som forklarer hva som er galt. Feilmeldingen erstatter en eventuell hjelpetekst, så den må eventuelt gjenta det viktigste fra hjelpeteksten.

Eksempel fra helsevurdering:
**Hjelpetekst**: _Velg om du har hatt diagnosen de siste 5, 10 eller 15 årene_. **Feilmelding**: _Du har ikke valgt hvor lenge du har hatt diagnosen_.
