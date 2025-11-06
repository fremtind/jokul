import type { ReactRenderer } from "@storybook/react";
import React, { useEffect } from "react";
import type { DecoratorFunction } from "storybook/internal/types";

export const typoStyles = [undefined, "expressive"] as const;

const applyDensity = (
    element: HTMLElement,
    density: (typeof typoStyles)[number],
) => {
    element.classList.add("jkl");
    element.dataset.typography = density;
};

const clearDensity = (element: HTMLElement) => {
    element.dataset.typography = undefined;
};

export const typographyGlobal = {
    description: "Typografistil for eksemplet",
    toolbar: {
        title: "Typografi",
        icon: "font",
        items: [
            { title: "Regular", value: typoStyles[0], icon: "browser" },
            { title: "Expressive", value: typoStyles[1], icon: "expandalt" },
        ],
        dynamicTitle: true,
    },
};

export const typographyDecorator: DecoratorFunction<ReactRenderer> = (
    Story,
    context,
) => {
    useEffect(() => {
        const body = window.document.body;
        clearDensity(body);
        applyDensity(body, context.globals.typography);

        return () => clearDensity(body);
    }, [context.globals.typography]);

    return <Story />;
};
