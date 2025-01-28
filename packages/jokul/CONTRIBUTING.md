# Bidragsguide

Se også [CONTRIBUTING.md](../../CONTRIBUTING.md).

## Integrasjonstester

Vi har en testsuite laget med [Playwright](https://playwright.dev/). Den håndterer
både visuell regresjonstesting og testing mot WCAG kriteria med en [Axe](https://www.deque.com/axe/)-plugin.

### Visuelle regresjonstester

Disse er kun tenkt kjørt på CI-serveren for å unngå false negatives når skjermbilder
tas på forskjellige platformer. Dersom det allerede finnes skjermbilder for en test
vil det gjøres en sammenligning mellom de som er lagret og det som er rendret
i browseren og dersom det ikke finnes noen skjermbilder vil nye tas.

Dersom du har gjort visuelle endringer er dermed alt du trenger å gjøre å slette
eksisterende skjermbilder, så vil en Github action ta nye og gjøre en commit mot
branchen etter at du oppretter en PR.

### Testing mot WCAG kriteria

Disse kan du fint kjøre lokalt, bruk da kommandoen `CI=true pnpm integration:axe` på
rot av prosjektet.

## Lage ny komponent

Følg mappe- og filstruktur fra de andre komponentene.

```
| components/
| - [navn]/
| -- [Navn].tsx
| -- index.ts
| -- development/
| --- [Navn]Example.tsx
| --- Example.tsx
| -- styles/
| --- _index.scss
| --- [navn].scss
```

Du må også legge til komponenten to steder til

I [package.json](./package.json):

```json
        "./components/[navn]": {
            "import": {
                "types": "./build/es/components/[navn]/index.d.ts"
                "default": "./build/es/components/[navn]/index.js",
            },
            "require": {
                "types": "./build/cjs/components/[navn]/index.d.cts"
                "default": "./build/cjs/components/[navn]/index.cjs",
            }
        },
```

I [styles.scss](./src/styles/styles.scss)

```scss
@use "../components/[navn]/styles" as [navn];
```

Når dette er på plass bør du kunne starte opp devserveren ved å kjøre kommandoen

```bash
pnpm dev
```

I denne mappa.
