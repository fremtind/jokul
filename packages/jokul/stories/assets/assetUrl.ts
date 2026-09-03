/**
 * Normaliserer en bilde-import til en URL-streng.
 *
 * Storiene i denne mappa bygges av to ulike bundlere: Storybook bruker Vite,
 * mens portalen importerer noen av dem inn i Next.js (se
 * `portal/src/app/(frontend)/temabygger/_preview/`). De to gir ulikt resultat
 * for `import bilde from "…jpg"` — Vite gir en URL-streng, mens Next gir et
 * `StaticImageData`-objekt med URLen i `src`.
 *
 * Stories som bare kjører i Storybook (`src/components/…/stories/`) trenger
 * ikke denne hjelperen og kan bruke importen direkte.
 *
 * Vi importerer bilder i stedet for å skrive absolutte stier som `/images/…`,
 * fordi Storybook publiseres under en underbane (`/jokul/<versjon>/`) der slike
 * stier ikke finnes. Bundleren gir oss URL-er som virker begge steder.
 */
export function assetUrl(asset: unknown): string {
    const value =
        typeof asset === "object" && asset !== null && "default" in asset
            ? (asset as { default: unknown }).default
            : asset;

    if (typeof value === "string") {
        return value;
    }

    if (typeof value === "object" && value !== null && "src" in value) {
        return String((value as { src: unknown }).src);
    }

    throw new Error(
        "assetUrl: forventet en URL-streng eller et StaticImageData-objekt fra bundleren.",
    );
}
