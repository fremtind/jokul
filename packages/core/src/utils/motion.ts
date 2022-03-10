export type Easing = keyof typeof easings;

export const easings = Object.freeze({
    standard: "ease",
    entrance: "ease-out",
    exit: "ease-in",
    easeInBounceOut: "cubic-bezier(0, 0, 0.375, 1.17)",
});

export type Timing = keyof typeof timings;

export const timings = Object.freeze({
    energetic: "75ms",
    productive: "150ms",
    expressive: "250ms",
    lazy: "400ms",
});
