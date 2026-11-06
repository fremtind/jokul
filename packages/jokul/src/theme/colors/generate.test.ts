import { describe, expect, it } from "vitest";
import { generatePalette } from "./generate.js";

describe("generatePalette", () => {
    // Låser fargene som genereres, slik at utilsiktede endringer i algoritmen,
    // fargemetadataene eller chroma-js blir oppdaget. Ved en tilsiktet endring
    // oppdaterer du generate.<metode>.fixture.json med:
    // pnpm --filter @fremtind/jokul test src/theme/colors/generate.test.ts -u
    it.each(["wcag", "oklch"] as const)(
        "gir stabil palett for #006F4E med %s",
        async (method) => {
            await expect(
                `${JSON.stringify(generatePalette("#006F4E", method), null, 4)}\n`,
            ).toMatchFileSnapshot(`./generate.${method}.fixture.json`);
        },
    );
});
