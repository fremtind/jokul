import type { ReactRenderer } from "@storybook/nextjs";
import { useEffect } from "react";
import type { DecoratorFunction } from "storybook/internal/types";

export const themes = [
    { title: "Lyst", value: "light", icon: "sun" },
    { title: "Mørkt", value: "dark", icon: "moon" },
];

const applyTheme = (element: HTMLElement, theme: string) => {
    element.classList.add("jkl");
    element.dataset.theme = theme;
};

const clearTheme = (element: HTMLElement) => {
    element.dataset.theme = undefined;
};

export const themeGlobal = {
    toolbar: {
        title: "Tema",
        icon: "paintbrush",
        items: themes,
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
