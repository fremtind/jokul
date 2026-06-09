import { notFound } from "next/navigation";
import { AdjustColorsStep } from "../_steps/AdjustColorsStep";
import { BaseColorStep } from "../_steps/BaseColorStep";
import { IdentityStep } from "../_steps/IdentityStep";
import {
    THEME_BUILDER_STEPS,
    getNextThemeBuilderStep,
    getThemeBuilderStepBySlug,
} from "../_steps/stepConfig";

type ThemeBuilderStepPageProps = {
    params: Promise<{ step: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
    return THEME_BUILDER_STEPS.map((step) => ({ step: step.slug }));
}

export default async function ThemeBuilderStepPage({
    params,
}: ThemeBuilderStepPageProps) {
    const { step: stepSlug } = await params;
    const step = getThemeBuilderStepBySlug(stepSlug);

    if (!step) {
        notFound();
    }

    const nextStep = getNextThemeBuilderStep(step);

    if (step.id === "identitet" && nextStep) {
        return <IdentityStep nextStepPath={nextStep.path} />;
    }
    if (step.id === "baseColor" && nextStep) {
        return <BaseColorStep nextStepPath={nextStep.path} />;
    }
    if (step.id === "colors") return <AdjustColorsStep />;

    notFound();
}
