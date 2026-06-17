export const THEME_BUILDER_ROUTES = {
    root: "/temabygger",
    preview: "/temabygger/forhandsvisning",
} as const;

export const THEME_BUILDER_STEPS = [
    {
        id: "identitet",
        slug: "identitet",
        path: `${THEME_BUILDER_ROUTES.root}/identitet`,
        label: "Identitet",
    },
    {
        id: "baseColor",
        slug: "grunnfarge",
        path: `${THEME_BUILDER_ROUTES.root}/grunnfarge`,
        label: "Grunnfarge",
    },
    {
        id: "colors",
        slug: "farger",
        path: `${THEME_BUILDER_ROUTES.root}/farger`,
        label: "Farger",
    },
] as const;

export type ThemeBuilderStep = (typeof THEME_BUILDER_STEPS)[number];

export const FIRST_THEME_BUILDER_STEP = THEME_BUILDER_STEPS[0];

export function getThemeBuilderStepBySlug(
    slug: string,
): ThemeBuilderStep | undefined {
    return THEME_BUILDER_STEPS.find((step) => step.slug === slug);
}

export function getNextThemeBuilderStep(
    currentStep: ThemeBuilderStep,
): ThemeBuilderStep | undefined {
    const currentIndex = THEME_BUILDER_STEPS.findIndex(
        (step) => step.id === currentStep.id,
    );
    return THEME_BUILDER_STEPS[currentIndex + 1];
}
