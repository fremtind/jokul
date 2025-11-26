import type { ReactRenderer } from "@storybook/react";
import React, { useEffect } from "react";
import type { DecoratorFunction } from "storybook/internal/types";

export const densities = [undefined, "small", "medium", "large"] as const;

const applyDensity = (
    element: HTMLElement,
    density: (typeof densities)[number],
) => {
    element.classList.add("jkl");
    element.dataset.size = density;
};

const clearDensity = (element: HTMLElement) => {
    element.dataset.size = undefined;
};

export const densityGlobal = {
    description: "Størrelse for eksemplet",
    toolbar: {
        title: "Størrelse",
        icon: "unfold",
        items: [
            { title: "Automatisk", value: densities[0], icon: "browser" },
            { title: "Small", value: densities[1], icon: "collapse" },
            { title: "Medium", value: densities[2], icon: "expandalt" },
            { title: "Large", value: densities[3], icon: "expand" },
        ],
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
