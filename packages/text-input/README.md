# [`@fremtind/jkl-text-field`](https://fremtind.github.io/jokul/komponenter/textinput)

# Tekstfelt

Vi bruker tekstfelt når vi vil at brukerne skal legge inn informasjon. Ledeteksten skal fortelle hva brukeren skal oppgi i feltet. Tekstfelt godtar data med fast format eller fritekst. Fast format bruker du for eksempel når du vil at brukeren skal angi fødselsnummer eller et postnummer, mens fritekst passer til felt der brukerne skal fortelle noe med egne ord.

Velg størrelse på tekstefelt etter typen data brukerne skal legge inn.

## Typer tekstfelt

**Vanlige tekstfelt:**
For innhold som ikke overskrider lengden på feltet.

**Lange tekstfelt:**
Når innholdet blir lengre enn en setning. Høyden på feltet kan justeres.

**Inline tekstfelt:**
Til spesialtilfeller, hvis vi for eksempel trenger å plassere et tekstfelt i en setning.

## Tekst og validering

Velg størrelse på ledetekst etter prinsippene for skjemadesign. Skriv en kort og tydelig ledetekst, som forteller brukerne hva de skal oppgi i feltet. Hvis det trengs, kan vi sette inn en hjelpetekst under feltet, som forklarer mer.

Hvis tekstfeltet ikke validerer, vises en feilmelding som forteller hva som er galt. Vær oppmerskom på at feilmeldingen erstatter en eventuell hjelpetekst, slik at den feilmeldingen du lager også må fortelle hva hjelpeteksten var.

Eksempel:
Hjelpetekst for et tekstfelt med fast format: _Fyll ut fødselsnummer, 11 siffer._ Feilemeldingstekst: _Du må fylle ut fødselsnummer, 11 siffer_.
