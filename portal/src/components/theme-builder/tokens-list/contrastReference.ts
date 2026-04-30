import {
    COLOR_ROLES,
    type ColorRole,
    type ColorToken,
    type ContrastRequirementId,
    type RoleEntry,
} from "../tokens";

/**
 * Den "naturlige" paringen for et token, brukt til å beregne kontrast i listen.
 *
 * - `text.on-X` ↔ `background.X` (når det finnes i strukturen)
 * - `background.X` ↔ `text.on-X` (kun når den eksplisitte paringen finnes)
 * - øvrige `text.*` og alle `border.*` ↔ `background.page` (den dominante flaten)
 *
 * Bakgrunns-tokens uten et tilhørende `text.on-X` returnerer `null`. Surface
 * tokens har ingen iboende kontrast-rating — vurderingen tas fra forgrunnen
 * som tegnes på dem (og blir telt der).
 */
export function contrastReference(token: ColorToken): {
    against: RoleEntry;
    requirementId: ContrastRequirementId;
} | null {
    const { variant, group, role } = token;

    if (group === "text" && role.startsWith("on-")) {
        // `on-X` ↔ `X`. Castet er optimistisk — det er ikke garantert at
        // X er en gyldig `background.*`-rolle, men oppslagsbruken senere er
        // tolerant for ukjente nøkler (lookup-en returnerer `undefined`).
        const bgRole = role.slice("on-".length) as ColorRole;
        return {
            against: { variant, group: "background", role: bgRole },
            requirementId: "text",
        };
    }

    if (group === "background") {
        // Castet er optimistisk på samme måte som over; `includes`-sjekken
        // håndterer tilfellet hvor `on-X` ikke faktisk er en kjent rolle.
        const onRole = `on-${role}` as ColorRole;
        if (COLOR_ROLES.text?.includes(onRole)) {
            return {
                against: { variant, group: "text", role: onRole },
                requirementId: "text",
            };
        }
        return null;
    }

    if (group === "text" || group === "border") {
        const surface = dominantSurface();
        if (!surface) return null;
        return {
            against: { variant, group: "background", role: surface },
            requirementId: group === "text" ? "text" : "ui",
        };
    }

    return null;
}

/**
 * Den "dominante" flaten å måle øvrige forgrunner mot. Vi foretrekker
 * `background.page` eksplisitt — det er den naturlige standardflaten —
 * og faller tilbake til første tilgjengelige bakgrunnsrolle hvis `page`
 * ikke finnes i strukturen. Dette gjør målingen stabil uavhengig av
 * rekkefølgen i `color.tokens.json`.
 */
function dominantSurface(): ColorRole | undefined {
    const PAGE = "page" as ColorRole;
    if (COLOR_ROLES.background?.includes(PAGE)) return PAGE;
    return COLOR_ROLES.background?.[0];
}
