import type { ReactRenderer } from "@storybook/react";
import React, { useEffect } from "react";
import type { DecoratorFunction } from "storybook/internal/types";

export const densities = [undefined, "compact", "comfortable"] as const;

const applyDensity = (
    element: HTMLElement,
    density: (typeof densities)[number],
) => {
    element.classList.add("jkl");
    element.dataset.layoutDensity = density;
};

const clearDensity = (element: HTMLElement) => {
    element.dataset.layoutDensity = undefined;
};

export const densityGlobal = {
    description: "Størrelse for eksemplet",
    toolbar: {
        title: "Størrelse",
        icon: "unfold",
        items: [
            { title: "Automatisk", value: densities[0], icon: "browser" },
            { title: "Compact", value: densities[1], icon: "collapse" },
            { title: "Comfortable", value: densities[2], icon: "expandalt" },
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
