import type { ReactRenderer } from "@storybook/nextjs";
import { useEffect } from "react";
import type { DecoratorFunction } from "storybook/internal/types";

export const brands = [
    { title: "Jokul", value: "jokul", icon: "home" },
    { title: "DNB", value: "dnb", icon: "graphbar" },
    { title: "Eika", value: "eika", icon: "circlehollow" },
    { title: "SpareBank 1", value: "sparebank1", icon: "circle" },
];

const applyBrand = (element: HTMLElement, brand?: string) => {
    element.classList.add("jkl");

    if (!brand || brand === "default") {
        delete element.dataset.brand;
        return;
    }

    element.dataset.brand = brand;
};

const clearBrand = (element: HTMLElement) => {
    delete element.dataset.brand;
};

export const brandGlobal = {
    toolbar: {
        title: "Distributør",
        icon: "transfer",
        items: brands,
        dynamicTitle: true,
    },
};

export const brandDecorator: DecoratorFunction<ReactRenderer> = (
    Story,
    context,
) => {
    useEffect(() => {
        const body = window.document.body;
        clearBrand(body);
        applyBrand(body, context.globals.brand);

        return () => clearBrand(body);
    }, [context.globals.brand]);

    return <Story />;
};
