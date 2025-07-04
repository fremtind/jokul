---
"portal": patch
---

Retter opp i et SSR-problem som forårsaker hydration mismatch og en visuell flimring i komponentgalleri-siden. Problemet stammer fra en konflikt mellom server- og klient-rendret HTML, ettersom serveren ikke har tilgang til `localStorage`.

Endringene som er gjort løser konflikten ved å bytte fra `localStorage` til `cookies`:

1.  **Bytter fra localStorage til cookies:**
    Bruker `cookies-next` biblioteket for å håndtere cookies på klient-siden, som eliminerer problemet med at serveren ikke har tilgang til `localStorage`.

2.  **Server-side cookie-lesing:**
    Hovedsiden (`page.tsx`) leser cookies med Next.js `cookies()` funksjon og sender verdien som `mode` prop til `ComponentGallery`.

3.  **klient-side cookie-håndtering:**
    `ComponentGallery` bruker `getCookie` og `setCookie` fra `cookies-next` for å lese og skrive brukerens valgte visningstype.
