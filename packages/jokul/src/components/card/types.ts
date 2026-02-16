export const CARD_PADDINGS = ["s", "m", "l", "xl"] as const;
export type CardPadding = (typeof CARD_PADDINGS)[number];
export const CARD_VARIANTS = ["outlined", "high", "low"] as const;
export type CardVariant = (typeof CARD_VARIANTS)[number];
