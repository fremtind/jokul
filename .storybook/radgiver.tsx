import type { ReactRenderer } from "@storybook/react";
import React, { useEffect } from "react";
import type { DecoratorFunction } from "storybook/internal/types";

export const looks = ["expressive", "productive"] as const;

const applyLook = (element: HTMLElement, look: (typeof looks)[number]) => {
    element.classList.add("jkl");
    element.dataset.look = look;
};

const clearLook = (element: HTMLElement) => {
    element.dataset.look = looks[0];
};

export const lookGlobal = {
    description: "Look and feel",
    toolbar: {
        title: "Stil",
        icon: "paintbrush",
        items: [
            { title: "productive", value: looks[0] },
            { title: "expressive", value: looks[1] },
        ],
    },
};

export const lookDecorator: DecoratorFunction<ReactRenderer> = (
    Story,
    context,
) => {
    useEffect(() => {
        const body = window.document.body;
        clearLook(body);
        applyLook(body, context.globals.look);

        return () => clearLook(body);
    }, [context.globals.look]);

    return <Story />;
};
