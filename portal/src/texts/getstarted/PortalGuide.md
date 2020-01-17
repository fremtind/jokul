---
title: portalen
path: /komigang/portalen
order: 6
---

# Jøkul portal

For at et designsystem skal fungere, må dokumentasjonen av system holde høy kvalitet. Hvis utviklere og designer ikke vet hvilke muligheter og begrensninger som finnes i systemet, så kommer man til å gjøre feil og dobbeltarbeid. Vi i kjerneteamet setter stor stolthet i å levere Jøkul med god dokumentasjon. Vi har bygd dokumentasjonsriggen selv for å sikre oss at den gir oss akkurat det vi trenger for Jøkul og for å gjøre utvikleropplevelsen så smidig som mulig. Det skal bare være en kilde til sannhet.

### Komponent eksempler

Eksemplenene hentes direkte fra pakken der koden ligger. Det er mulig å kjøre opp eksemplene alene per pakke, eller som en del av portalen. Under komponenter seksjonen ligger alle komponentene fra Jøkul dokumentert. Der skal det være:

-   fungerende utgave av komponenten i alle fornuftige statuser
-   beskrivelse av hva komponenten er og hvordan den skal brukes

-   eksempel kode som kan endres på _currently not supported_
-   type informasjon _currently not supported_
-   import informasjon _currently not supported_
-   endringslogg for pakkene _currently not supported_
-   lenke til koden på github _currently not supported_
-   vise design av komponenten med dyplenke til figma _currently not supported_

### I bruk

For å lage nytt eksempel til portalen er veien å lage en `.mdx` fil i `your-package/documentation`. Den vil plukkes opp automatisk av portalen, gitt at man setter en `title` i [frontmatter](https://www.gatsbyjs.org/docs/adding-markdown-pages/#frontmatter-for-metadata-in-markdown-files) headeren i fila. For å få lenker til github, legg med `react` og/eller `scss` med pakkenavnet. [Les mer om mdx.](https://mdxjs.com/)

```mdx
---
title: MyComponent
react: MyComponent-react-package-name
scss: MyComponent-style-package-name
---

@import MyComponent from '../MyComponent'

<MyComponent />

## More details
```
