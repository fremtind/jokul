---
"@fremtind/jokul": major
---

`useId` har fått ny, forenklet signatur og er ikke lenger deprecated.

**Før:** `useId(id?: string, options?: { generateSuffix?: boolean })`

**Nå:** `useId(prefix?: string, id?: string)`

Den nye signaturen speiler hvordan hooken faktisk brukes: du oppgir et lesbart `prefix`, og eventuelt en fast `id` fra konsumenten som overstyrer den genererte verdien.

| Før | Nå |
|---|---|
| `useId()` | `useId()` (uendret) |
| `useId("jkl-prefix")` | `useId("jkl-prefix")` (uendret) |
| `useId(id \|\| "jkl-prefix", { generateSuffix: !id })` | `useId("jkl-prefix", id)` |
| `useId(myId, { generateSuffix: false })` | `useId(undefined, myId)` |

`generateSuffix`-opsjonen er fjernet – skillet mellom «prefiks» og «ferdig id» uttrykkes nå via argumentposisjon i stedet for et flagg.

**Server-side rendering:** Hooken bygger på Reacts innebygde `useId`, som gir like ID-er på server og klient. Komponenter som bruker denne hooken – og Jøkul-komponenter som bygger på den (`id`, `htmlFor`, `aria-describedby`, `aria-labelledby` osv.) – hydrerer nå uten «hydration mismatch»-advarsler i Next.js, Remix o.l. Tidligere kunne ulikt genererte ID-er føre til at koblingen mellom label/hjelpetekst og felt brøt ved hydrering, samt konsollvarsler.

**Merk:** Formatet på de genererte ID-ene har endret seg (React bruker `«r0»`-lignende verdier). Snapshot-tester eller CSS/selektorer som er avhengige av det gamle ID-formatet må oppdateres.

Endringen dekkes av codemoden: `pnpm exec jokul codemod`.
