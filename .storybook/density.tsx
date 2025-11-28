import type { ReactRenderer } from "@storybook/nextjs";
import React, { useEffect } from "react";
import type { DecoratorFunction } from "storybook/internal/types";

export const densities = [
    { title: "Kompakt", value: "compact", icon: "collapse" },
    { title: "Komfortabelt", value: "comfortable", icon: "expandalt" },
];

const applyDensity = (
    element: HTMLElement,
    density: string,
) => {
    element.classList.add("jkl");
    element.dataset.layoutDensity = density;
};

const clearDensity = (element: HTMLElement) => {
    element.dataset.layoutDensity = undefined;
};

export const densityGlobal = {
    toolbar: {
        title: "Density",
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
