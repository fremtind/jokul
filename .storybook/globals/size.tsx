import type { ReactRenderer } from "@storybook/nextjs";
import { useEffect } from "react";
import type { DecoratorFunction, GlobalTypes } from "storybook/internal/types";

export const sizes = [
    { title: "Auto", value: "" },
    { title: "Small", value: "small" },
    { title: "Medium", value: "medium" },
    { title: "Large", value: "large" },
];

const applySize = (element: HTMLElement, size: string) => {
    element.classList.add("jkl");
    element.dataset.size = size || "medium";
};

const clearSize = (element: HTMLElement) => {
    delete element.dataset.size;
};

export const sizeGlobal: GlobalTypes[string] = {
    toolbar: {
        title: "Størrelse",
        icon: "unfold",
        items: sizes,
        dynamicTitle: true,
    },
};

export const sizeDecorator: DecoratorFunction<ReactRenderer> = (
    Story,
    context,
) => {
    useEffect(() => {
        const body = window.document.body;
        clearSize(body);
        applySize(body, context.globals.size);

        return () => clearSize(body);
    }, [context.globals.size]);
    return <Story />;
};
