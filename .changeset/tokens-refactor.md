---
"@fremtind/jokul": major
---

Vi har ryddet opp i strukturen til grunnverdiene i Jøkul, og stilarkene som genereres på bakgrunn av dem. Dette fører til noen endringer i importstier, særlig for de grunnleggende stilarkene. Til gjengjeld får vi mye bedre kontroll over alle tilgjengelige verdier for farger, avstander, typografi og lignende, siden alt blir generert fra én felles definisjon.

## Nye semantiske tekststil-variabler

Tekststilene våre eksporteres nå også som CSS custom properties via `font`-shorthand. Du kan bruke dem direkte i CSS:

```css
.min-tittel {
    font: var(--jkl-text-style-heading-1);
}
```

Du kan fortsatt bruke Sass-mixin for å sette tekststil i dine egne Sass-stilark dersom du foretrekker det:

```scss
.min-tittel {
    @include jkl.text-style("heading-1");
}
```

Tilgjengelige stiler: `title`, `title-small`, `heading-1`–`heading-5`, `paragraph-large`, `paragraph-medium`, `paragraph-small`, `text-large`, `text-medium`, `text-small`, `text-micro`.

## Alle gamle fargevariabler er fjernet

Det er ikke lenger mulig å hente ut fargevariabler som `granitt`, `varde` og tilsvarende, verken som Sass- eller CSS-variabler. Bruk heller [de semantiske fargevariablene](https://jokul-portal.intern.app.prodaws.fremtind.no/fundamenter/farger).

## Mixins for custom dark-/light-farger er fjernet

Samtidig som vi faser ut de gamle fargene faser vi også ut mixins for å definere egne fargevariabler for mørk og lys modus. Bruk heller de semantiske fargevariablene linket til over.

```diff
- @include jkl.light-mode-variables {
-     --min-farge: jkl.$color-granitt;
- }
- @include jkl.dark-mode-variables {
-     --min-farge: jkl.$color-snohvit;
- }
-
.min-klasse {
-     color: var(--min-farge);
+     color: var(--jkl-color-text-default);
}
```

## Brand-spesifikke fargetemaer

Jøkul eksporterer nå også brand-spesifikke fargetemaer for `dnb`, `eika` og `sparebank1`. Disse genereres fra token-definisjonene og er tilgjengelige som egne theme-filer under `@fremtind/jokul/styles/theme/brands/...`.

## Nye importstier for Tailwind

Importstiene for Jøkul sitt Tailwind-oppsett er endret

- Preset og typografi-plugin for Tailwind versjon 3: `@fremtind/jokul/tailwind`
- Temafil for for Tailwind versjon 4: `@fremtind/jokul/styles/tailwind`.

## Nye importstier for stilark og Sass-hjelpere

På grunn av ny struktur internt i Jøkul er importstiene for noen av hovedstilarkene og Sass-hjelperne endret. Grunnstiler og komponentstilark er også tilgjengelige som kompilert CSS (med filendelse `.css`) og som minifisert CSS (med filendelse `.min.css`)

| Funksjon | Gammel import | Ny import |
|---|---|---|
| Grunnstiler | `@fremtind/jokul/styles/core` | `@fremtind/jokul/styles/base.scss` |
| Stilark for ALLE komponenter | `@fremtind/jokul/styles` | `@fremtind/jokul/styles/components.scss` |
| Sass-hjelpere | `@fremtind/jokul/styles/core/jkl` | `@fremtind/jokul/styles/jkl` |
| Stiler påkrevd for fonter | `@fremtind/jokul/styles/fonts` | Inkludert i `base.scss` |

Stilarkene for Beta-komponentene var tidligere bakt sammen med sine ikke-Beta varianter. De er nå eksportert for seg.

| Komponent | Gammel import | Ny import |
|---|---|---|
| Description List | `@fremtind/jokul/styles/components/description-list` | `@fremtind/jokul/styles/components/beta/description-list.scss` |
| Nav Link | `@fremtind/jokul/styles/components/nav-link` | `@fremtind/jokul/styles/components/beta/nav-link.scss` |
| Select | `@fremtind/jokul/styles/components/select` | `@fremtind/jokul/styles/components/beta/select.scss` |

## Ny importsti for typer som tidligere ble eksportert fra `core`

Vi har fjernet `core` som konsept, så typer som tidligere bodde her kan nå importeres fra `utilities`:

```diff
- import type { WithChildren, DataTestAutoId } from "@fremtind/jokul/core";
+ import type { WithChildren, DataTestAutoId } from "@fremtind/jokul/utilities";
```

## Øvrige strukturelle endringer

- Beta-komponentene `DescriptionList`, `NavLink` og `Select` er flyttet fra `components-beta/` til `components/beta/` internt i pakken. Eksportstiene er uendret.
