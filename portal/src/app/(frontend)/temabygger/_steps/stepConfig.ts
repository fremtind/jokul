export const THEME_BUILDER_STEPS = [
    {
        id: "identitet",
        slug: "identitet",
        path: "/temabygger/identitet",
        label: "Identitet",
    },
    {
        id: "baseColor",
        slug: "grunnfarge",
        path: "/temabygger/grunnfarge",
        label: "Grunnfarge",
    },
    {
        id: "colors",
        slug: "farger",
        path: "/temabygger/farger",
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
