# Stories på tvers av Storybook og portalen

Storiene i denne mappa bygges av **to** bundlere:

- **Storybook** (Vite), publisert under en underbane: `/jokul/<versjon>/`
- **Portalen** (Next.js), som importerer noen av dem direkte — se
  `portal/src/app/(frontend)/temabygger/_preview/previewStories.tsx`

Det gir to begrensninger som ikke gjelder for storiene under
`packages/jokul/src/components/*/stories/`:

### 1. Alt som importeres må ligge inne i `packages/jokul/`

Docker-imaget for portalen kopierer bare inn `packages/jokul` og `portal` (se
`Dockerfile`). Importerer du noe som ligger utenfor `packages/jokul/`, bygger det
fint lokalt, men feiler med `Module not found` i CI.

### 2. Bruk `assetUrl()` på bilde-importer

Vite og Next gir ulikt resultat for `import bilde from "…jpg"`: Vite gir en
URL-streng, Next gir et `StaticImageData`-objekt. `assetUrl()` normaliserer
begge til en streng.

```tsx
import { assetUrl } from "../assets/assetUrl.js";
import * as poolsideImage from "../assets/poolside.jpg";

<CardImage src={assetUrl(poolsideImage)} alt="" />;
```

Ikke skriv absolutte stier som `src="/images/poolside.jpg"`. De finnes ikke når
Storybook publiseres under en underbane.

## Hvor legger jeg bilder og testdata?

Filer som stories bruker (bilder, PDF-er, datasett) importeres gjennom
bundleren, og legges i en `assets/`-mappe ved siden av storiene:

- Brukes de av **én** komponent:
  `src/components/<komponent>/stories/assets/`
- Brukes de av **flere** komponenter, eller av stories i denne mappa:
  `stories/assets/` (denne mappa)

Husk `assetUrl()` for bilder i stories som også kjører i portalen.
