export const backgroundValues = [
    "page",
    "pageVariant",
    "container",
    "containerLow",
    "containerHigh",
] as const;
export type BackgroundValue = (typeof backgroundValues)[number];

export const backgroundOptions: Record<
    BackgroundValue,
    { name: string; value: string }
> = {
    page: {
        name: "Page",
        value: "var(--jkl-color-background-page)",
    },
    pageVariant: {
        name: "Page variant",
        value: "var(--jkl-color-background-page-variant)",
    },
    container: {
        name: "Container",
        value: "var(--jkl-color-background-container)",
    },
    containerLow: {
        name: "Container low",
        value: "var(--jkl-color-background-container-low)",
    },
    containerHigh: {
        name: "Container high",
        value: "var(--jkl-color-background-container-high)",
    },
};
