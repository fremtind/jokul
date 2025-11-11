import type { ReactRenderer } from "@storybook/react";
import React, { useEffect } from "react";
import type { DecoratorFunction } from "storybook/internal/types";

export const colorSchemes = [undefined, "light", "dark"] as const;

const applyColorScheme = (
    element: HTMLElement,
    colorScheme: (typeof colorSchemes)[number],
) => {
    element.classList.add("jkl");
    element.dataset.theme = colorScheme;
};

const clearColorScheme = (element: HTMLElement) => {
    element.dataset.theme = undefined;
};

export const colorSchemeGlobal = {
    description: "Fargetema for eksemplet",
    toolbar: {
        title: "Color Scheme",
        icon: "paintbrush",
        items: [
            { title: "Automatisk", value: colorSchemes[0], icon: "browser" },
            { title: "Lyst", value: colorSchemes[1], icon: "sun" },
            { title: "Mørkt", value: colorSchemes[2], icon: "moon" },
        ],
        dynamicTitle: true,
    },
};

export const colorSchemeDecorator: DecoratorFunction<ReactRenderer> = (
    Story,
    context,
) => {
    useEffect(() => {
        const body = window.document.body;
        clearColorScheme(body);
        applyColorScheme(body, context.globals.colorScheme);

        return () => clearColorScheme(body);
    }, [context.globals.colorScheme]);

    return <Story />;
};
