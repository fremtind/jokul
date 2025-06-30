# Synkronisering av design tokens fra Figma

Denne guiden beskriver hvordan design tokens fra Figma blir transformert til kode i Jøkul-prosjektet.

## Om Style Dictionary

Jøkul bruker [Style Dictionary](https://amzn.github.io/style-dictionary) til å transformere design tokens fra et sentralt JSON-format til plattform-spesifikk kode som TypeScript, CSS og SCSS. Dette sikrer at vi har én enkelt kilde til sannhet for alle designverdier.

## Prosess

### 1. Finn tokens i Figma

Verdiene for design tokens vedlikeholdes i Figma.

1.  Åpne Jøkul-prosjektet i [Figma](https://www.figma.com/).
2.  Gå inn i **Dev Mode** og finn **Variables** i sidepanelet til høyre.
3.  Herfra kan du kopiere verdiene du trenger å oppdatere.

### 2. Oppdater tokendefinisjoner (JSON)

Kilde-filene for alle tokens ligger i prosjektet som `*.tokens.json`-filer.

1.  Naviger til mappen [packages/jokul/src/core/tokens](https://github.com/fremtind/jokul/tree/main/packages/jokul/src/core/tokens).
2.  Finn den relevante undermappen (f.eks. `color`, `typography`, `spacing`) og rediger den aktuelle JSON-filen.

Eksempler på filer du kan redigere:
*   [color/color.brand.tokens.json](https://github.com/fremtind/jokul/blob/main/packages/jokul/src/core/tokens/color/color.brand.tokens.json)
*   [typography/typography.tokens.json](https://github.com/fremtind/jokul/blob/main/packages/jokul/src/core/tokens/typography/typography.tokens.json)

### 3. Generer kode

Når JSON-filene er oppdatert, kan du generere kodeformatene.

```bash
pnpm generate:tokens
````

Dette skriptet kjører Style Dictionary, som leser alle `*.tokens.json`-filene og transformerer dem til flere formater, blant annet:

*   TypeScript-objekter
*   CSS Custom Properties
*   SCSS- og LESS-variabler
*   Tailwind-konfigurasjon

> **Hvor blir filene lagret?**
> For en nøyaktig og alltid oppdatert oversikt over *hvilke* filer som genereres og *hvor* de plasseres, se konfigurasjonsfilen: [tokens.build.mjs](https://github.com/fremtind/jokul/blob/main/packages/jokul/tokens.build.mjs).

### 4. Test og commit

Etter at filene er generert, verifiser at alt fungerer som forventet.

```bash
pnpm build      # Verifiser at prosjektet bygger uten feil
pnpm dev        # Start utviklingsmiljøet for visuell testing
git add .
pnpm commit     # Lag en commit (følger conventional commits)
pnpm changeset  # Opprett en changeset for versjonshåndtering
```
---

## Hovedregler

*   **Aldri rediger autogenererte filer direkte.** Endringene dine vil bli overskrevet neste gang `generate:tokens` kjøres.
*   **Kjør alltid `pnpm generate:tokens`** etter at du har endret på en `*.tokens.json`-fil.
*   **Konfigurasjonen er kilden.** `tokens.build.mjs` styrer hele transformasjonsprosessen. Se i denne filen for å forstå logikken.