export type Easing = keyof typeof easings;

export const easings = Object.freeze({
    standard: "ease",
    entrance: "ease-out",
    exit: "ease-in",
    easeInBounceOut: "cubic-bezier(0, 0, 0.375, 1.17)",
    focus: "cubic-bezier(0.6, 0.2, 0.35, 1)",
});

export type Timing = keyof typeof timings;

export const timingsMillis = Object.freeze({
    energetic: 75,
    snappy: 100,
    productive: 150,
    expressive: 250,
    lazy: 400,
});

export const timings = Object.freeze({
    energetic: `${timingsMillis.energetic}ms`,
    snappy: `${timingsMillis.snappy}ms`,
    productive: `${timingsMillis.productive}ms`,
    expressive: `${timingsMillis.expressive}ms`,
    lazy: `${timingsMillis.lazy}ms`,
});
