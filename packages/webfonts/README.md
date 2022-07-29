# [`@fremtind/jkl-webfonts`](https://jokul.fremtind.no/komponenter/typography)

Denne pakken inneholder skrifttypene våre til bruk i nettløsninger. Disse kan ikke installeres lokalt på datamaskinen. Om du trenger Fremtind-fonten installert på maskinen din, spør en kollega om hjelp.

Fontfilene må gjøres tilgjengelige i løsningen ved at du legger dem i en mappe som blir publisert med appen din, for eksempel `/build`, `/dist` eller lignende.

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/typography).

## Installasjon

1. `yarn add @fremtind/jkl-webfonts` eller `npm i @fremtind/jkl-webfonts`.
2. Importer CSSen som deklarerer fontfamilien Fremtind Grotesk med `@font-face`.
3. Legg til `jkl`-klassen på rotnivå i appen din, slik at fontfamilien blir brukt overalt.
4. Konfigurer byggverktøyet ditt til å kopiere fontfiler.
5. Sett riktig filsti til fontene i stilarket.

Avhengig av hvilke byggverktøy dere bruker i prosjektene vil fremgangsmåten være ulik. Konfigurasjonen har to mål:

1. Pakk selve fontfilene fra `node_modules/@fremtind/jkl-webfonts/fonts` med i prosjektet et sted på disk, for eksempel `/public/fonts`.
2. Generer CSS med riktig filsti for ditt prosjekt.

Om dere bruker Sass-stilark i prosjektet deres er dette ofte den enkleste måten. Antagelsen er at dere bruker en Sass-loader i tillegg til en loader som håndterer fontfiler, og om kan konverterer lokale filstier til riktige URLer.

```scss
// Variabelen `$webfonts-dir` angir hvor på disk filene ligger.
// Hvis den ikke spesifiseres vil stilarket se etter fontfilene i mappen `/fonts`.
@use "@fremtind/jkl-webfonts/webfonts.scss" with (
    $webfonts-dir: "../relative/path/to/node_modules/@fremtind/jkl-webfonts/fonts"
);
```

Om dere ikke bruker Sass kan dere bruke CSS-versjonen. Denne versjonen ser **kun** etter fontfilene på URLen `/fonts`, så det beste er å sørge for å kopiere fonter på en måte som gjør at du får den URLen.

Om dere er nødt til å legge fontfilene et annet sted må dere kopiere CSS-filen `node_modules/@fremtind/jkl-webfonts/webfonts.css` inn i prosjektet. Deretter må dere endre URLen i hver `@font-face`-definisjon manuelt så det stemmer med hvor fontfilene ligger. **Husk at dere må gjenta prosessen hver gang dere oppdaterer pakken!**

```css
@font-face {
    font-family: "Fremtind Grotesk";
    font-display: fallback;
    font-weight: normal;
    font-style: normal;
    src: local("Fremtind Grotesk"),
        /* Endre de to neste linjene så de stemmer */
            url("/relative/path/to/font/files/FremtindGrotesk-Regular-Web.woff2") format("woff2"), url("/relative/path/to/font/files/FremtindGrotesk-Regular-Web.woff")
            format("woff");
}
```
