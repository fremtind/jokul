# [`@fremtind/jkl-select`](https://fremtind.github.io/jokul/komponenter/select)

# Nedtrekksliste

Vi bruker nedtrekkslister til å gi brukeren en liste med alternativ. Nedtrekkslister passer i de tilfellene det er for mange valg til å bruke _radioknapper_. Nedtrekkslisten må ha en overskrift, som forteller hva det er brukerne kan velge mellom i listen.

Hvis du trenger en nedtrekksliste med mange valg, kan du også legge inn en søke- eller filtreringsfunksjon.

## Tekst og validering

Bruk prinsippene for skjemadesign til å velge størrelse på overskriften til listen. Lag en kort og tydelig tekst, som forteller hva det er brukeren skal gjøre i nedtrekkslisten. Eksempel: _Velg land_. Hvis det trengs, kan du legge en hjelpetekst under listen for å forklare mer.

Hvis nedtrekkslisten ikke validerer, viser systemet en feilmelding som forklarer hva som er galt. Feilmeldingen erstatter en eventuell hjelpetekst, så den må eventuelt gjenta informasjonen fra hjelpeteksten.

Eksempel:
**Hjelpetekst**: _Velg landet du var på ferie i da du ble syk_. **Feilmelding**: _Du må velge hvor du var på ferie_.

## Bruk

-   Velg årsak eller skadetype (gjerne mange valg)
-   Velg diagnose (for dyre- eller helseforsikring, gjerne med søkemulighet)
-   Velg stilling (gjerne med søkemulighet)
