import type { ReactRenderer } from "@storybook/react";
import React, { useEffect } from "react";
import type { DecoratorFunction } from "storybook/internal/types";

export const themes = [undefined, "light", "dark"] as const;

const applyTheme = (element: HTMLElement, theme: (typeof themes)[number]) => {
    element.classList.add("jkl");
    element.dataset.theme = theme;
};

const clearTheme = (element: HTMLElement) => {
    element.dataset.theme = undefined;
};

export const themeGlobal = {
    description: "Fargetema for eksemplet",
    toolbar: {
        title: "Fargetema",
        icon: "mirror",
        items: [
            { title: "Automatisk", value: themes[0], icon: "globe" },
            { title: "Lyst", value: themes[1], icon: "sun" },
            { title: "Mørkt", value: themes[2], icon: "moon" },
        ],
        dynamicTitle: true,
    },
};

export const themeDecorator: DecoratorFunction<ReactRenderer> = (
    Story,
    context,
) => {
    useEffect(() => {
        const body = window.document.body;
        clearTheme(body);
        applyTheme(body, context.globals.theme);

        return () => clearTheme(body);
    }, [context.globals.theme]);

    return <Story />;
};
