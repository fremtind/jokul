# Bidragsguide

Se også [CONTRIBUTING.md](../../CONTRIBUTING.md).

## Lage ny komponent

Følg mappe- og filstruktur fra de andre komponentene.

```
| components/
| - [navn]/
| -- [Navn].tsx
| -- index.ts
| -- documentation/
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
                "default": "./build/cjs/components/[navn]/index.cjs",
                "types": "./build/cjs/components/[navn]/index.d.cts"
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
