import type { ReactRenderer } from "@storybook/nextjs";
import { useEffect } from "react";
import type { DecoratorFunction } from "storybook/internal/types";

export const variants = [
    { title: "Neutral", value: "neutral", icon: "component" },
    { title: "Accent", value: "accent", icon: "paintbrush" },
];

const applyVariant = (element: HTMLElement, variant?: string) => {
    element.classList.add("jkl");
    element.dataset.variant = variant ?? "neutral";
};

const clearVariant = (element: HTMLElement) => {
    delete element.dataset.variant;
};

export const variantGlobal = {
    toolbar: {
        title: "Variant",
        icon: "branch",
        items: variants,
        dynamicTitle: true,
    },
};

export const variantDecorator: DecoratorFunction<ReactRenderer> = (
    Story,
    context,
) => {
    useEffect(() => {
        const body = window.document.body;
        clearVariant(body);
        applyVariant(body, context.globals.variant);

        return () => clearVariant(body);
    }, [context.globals.variant]);

    return <Story />;
};
