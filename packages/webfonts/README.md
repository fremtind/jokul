# [`webfonts`](https://fremtind.github.io/jokul/komponenter/typography)

Denne pakken inneholder skrifttypene våre til bruk i nettløsninger (disse kan ikke installeres lokalt på datamaskinen). Disse må gjøres tilgjengelige i løsningen ved at du legger fontfilene i en mappe som blir eksportert med app-en din, f.eks. `/build`, `/dist` eller lignende.

## Bruk

I tillegg til å distribuere fontfilene sammen med løsningen din må du importere fontdefinisjonene i prosjektet ditt. Disse er tilgjengelige som en `.scss`-fil og som en ren `.css`-fil, som brukes litt ulikt:

### Bruk av `.scss`-versjon

Om du bruker Sass-stilark i prosjektet ditt er dette den enkleste måten. I rot-`.scss`-filen din:

```scss
$webfonts-dir: "/relative/path/to/font/files";
@import "~@fremtind/jkl-webfonts/webfonts.scss"; // NB! bruk riktig import for din sass-loader
```

Variabelen `$webfonts-dir` angir hvor filene ligger. Hvis den ikke spesifiseres vil stilarket se etter fontfilene i mappen `/fonts`.

### Bruk av `.css`-versjon

Om du ikke bruker Sass kan du benytte deg av den rene `.css`-versjonen. Denne versjonen ser kun etter fontfilene i mappen `/fonts`. Om du vil legge fontfilene et annet sted må du kopiere CSS-filen `node_modules/@fremtind/jkl-webfonts/webfonts.css` og legge den inn i prosjektet ditt. Deretter må du endre url-en i hver `@font-face`-definisjon manuelt så det stemmer med hvor fontfilene dine ligger:

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
