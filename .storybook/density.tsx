import type { ReactRenderer } from "@storybook/nextjs";
import { useEffect } from "react";
import type { DecoratorFunction } from "storybook/internal/types";

export const densities = [
    { title: "Liten", value: "small" },
    { title: "Medium", value: "medium" },
    { title: "Stor", value: "large" },
];

const applyDensity = (element: HTMLElement, density: string) => {
    element.classList.add("jkl");
    element.dataset.size = density;
};

const clearDensity = (element: HTMLElement) => {
    element.dataset.size = undefined;
};

export const densityGlobal = {
    toolbar: {
        title: "Størrelse",
        icon: "unfold",
        items: densities,
        dynamicTitle: true,
    },
};

export const densityDecorator: DecoratorFunction<ReactRenderer> = (
    Story,
    context,
) => {
    useEffect(() => {
        const body = window.document.body;
        clearDensity(body);
        applyDensity(body, context.globals.density);

        return () => clearDensity(body);
    }, [context.globals.density]);

    return <Story />;
};
