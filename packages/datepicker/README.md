# [`datepicker`](https://fremtind.github.io/jokul/komponenter/datepicker)

# Datovelger

Vi bruker datovelgeren til å gi brukerne mulighet til å skrive inn eller velge en dato. Ledeteksten beskriver hvilken dato brukeren skal fylle inn, for eksempel: "Oppgi datoen da skaden skjedde".

## Typer og bruk

**Enkel datovelger:** Når brukeren skal velge en dato, som er nær dagens dato.

**Utvidet datovelger:** Når brukeren skal velge en dato som ligger mer enn ett år frem eller tilbake i tid.

Vi kan også bruke to datovelgere, når vi vil at brukeren skal angi en periode med fra- og tildato.
Eksempel: "Hvor lenge var du syk da du var på ferie? Velg dato fra og til".

## Tekst og validering

Velg størrelse på ledeteksten etter prinsippene for skjemadesign. Bruk en kort og tydelig ledetekst, som forteller hva brukeren skal velge. Hvis det trengs, kan du også gi mer forklaring med en hjelpetekst under feltet.

Hvis datovelgeren ikke validerer, vises en feilmelding, som forteller hva som er galt. Merk at feilmeldingen erstatter en eventuell hjelpetekst, slik at den feilmeldingen du lager også må fortelle hva hjelpeteksten var.

Eksempel:
Hjelpetekst for første kalender i en periode:
"Velg datoen da du først ble syk". Feilmelding: "Du må velge datoen da du først ble syk."
