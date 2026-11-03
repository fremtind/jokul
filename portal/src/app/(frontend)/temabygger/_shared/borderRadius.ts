/**
 * Hjørnene velges som ett uttrykk for hele skalaen, ikke trinn for trinn: `xs`
 * til `l` er samme formspråk i fire størrelser, og et tema der trinnene spriker
 * blir ikke rundere, bare mer tilfeldig.
 *
 * `none` og `full` står utenfor. De er semantiske ytterpunkter — ingen hjørner
 * og helt sirkulært — og betyr det samme uansett hvor rundt temaet ellers er.
 */
export const BORDER_RADIUS_STEPS = ["xs", "s", "m", "l"] as const;

export type BorderRadiusStep = (typeof BORDER_RADIUS_STEPS)[number];

export const BORDER_RADIUS_SCALES = {
    sharp: { label: "Skarpe", values: { xs: 0, s: 0, m: 0, l: 0 } },
    light: { label: "Lette", values: { xs: 2, s: 4, m: 6, l: 8 } },
    standard: { label: "Standard", values: { xs: 4, s: 8, m: 12, l: 16 } },
    round: { label: "Runde", values: { xs: 8, s: 16, m: 24, l: 32 } },
} as const satisfies Record<
    string,
    { label: string; values: Record<BorderRadiusStep, number> }
>;

export type BorderRadiusScaleId = keyof typeof BORDER_RADIUS_SCALES;
export type BorderRadiusScale =
    (typeof BORDER_RADIUS_SCALES)[BorderRadiusScaleId];

export const DEFAULT_BORDER_RADIUS_SCALE_ID =
    "standard" satisfies BorderRadiusScaleId;

export function getBorderRadiusScale(
    id: BorderRadiusScaleId,
): BorderRadiusScale {
    return BORDER_RADIUS_SCALES[id];
}

export function isBorderRadiusScaleId(
    value: unknown,
): value is BorderRadiusScaleId {
    return typeof value === "string" && value in BORDER_RADIUS_SCALES;
}

export const BORDER_RADIUS_SCALE_OPTIONS = Object.entries(
    BORDER_RADIUS_SCALES,
).map(([id, scale]) => ({
    id: id as BorderRadiusScaleId,
    label: scale.label,
    // Navnet alene sier ingenting om hvor rundt «Runde» er, så trinnene står ved
    // siden av valget.
    helpLabel: `${BORDER_RADIUS_STEPS.map((step) => scale.values[step]).join(" · ")} px`,
}));
