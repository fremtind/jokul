import type { ReactRenderer } from "@storybook/nextjs";
import { useEffect } from "react";
import type { DecoratorFunction } from "storybook/internal/types";

export const brands = [
    { title: "Fremtind", value: "fremtind" },
    { title: "DNB", value: "dnb" },
    { title: "Eika", value: "eika" },
    { title: "SpareBank 1", value: "sparebank1" },
];

const applyBrand = (element: HTMLElement, brand?: string) => {
    element.classList.add("jkl");

    if (!brand) {
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
