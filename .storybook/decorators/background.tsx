import type { ReactRenderer } from "@storybook/react";
import { useEffect } from "react";
import type { DecoratorFunction, InputType } from "storybook/internal/types";

export const backgrounds = [
    "var(--jkl-color-background-page)",
    "var(--jkl-color-background-page-variant)",
    "var(--jkl-color-background-container)",
    "var(--jkl-color-background-container-low)",
    "var(--jkl-color-background-container-high)",
] as const;

const applyBackground = (
    element: HTMLElement,
    background: (typeof backgrounds)[number],
) => {
    element.style.backgroundColor = "var(--storybook-background-color)";
    element.style.setProperty("--storybook-background-color", background);
};

const clearBackground = (element: HTMLElement) => {
    element.style.backgroundColor = "";
    element.style.removeProperty("--storybook-background-color");
};

export const backgroundGlobal: InputType = {
    type: "boolean",
    description: "Endre bakgrunnsfarge for eksemplene",
    toolbar: {
        title: "Bakgrunnsfarge",
        icon: "photo",
        items: [
            { title: "Page", value: backgrounds[0] },
            { title: "Page Variant", value: backgrounds[1] },
            { title: "Container", value: backgrounds[2] },
            { title: "Container Low", value: backgrounds[3] },
            { title: "Container High", value: backgrounds[4] },
        ],
    },
};

export const backgroundDecorator: DecoratorFunction<ReactRenderer> = (
    Story,
    context,
) => {
    useEffect(() => {
        console.log("Applying background:", context.globals.background);
        const body = window.document.body;
        clearBackground(body);
        applyBackground(body, context.globals.background);

        return () => clearBackground(body);
    }, [context.globals.background]);

    return <Story />;
};
