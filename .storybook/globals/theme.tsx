import type { ReactRenderer } from "@storybook/nextjs";
import React, { useEffect } from "react";
import type { DecoratorFunction, GlobalTypes } from "storybook/internal/types";

export const themes = [
    { title: "Auto", value: "" },
    { title: "Lyst", value: "light" },
    { title: "Mørkt", value: "dark" },
];

const applyTheme = (element: HTMLElement, theme: string | null) => {
    element.classList.add("jkl");
    if (theme) element.dataset.theme = theme;
    else delete element.dataset.theme;
};

const clearTheme = (element: HTMLElement) => {
    delete element.dataset.theme;
};

export const themeGlobal: GlobalTypes[string] = {
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
