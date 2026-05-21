import type { ReactRenderer } from "@storybook/nextjs";
import { useEffect } from "react";
import type { DecoratorFunction } from "storybook/internal/types";
import { BRANDS } from "../../packages/jokul/src/utilities/types.js";

const brandTitles: Record<string, string> = {
    dnb: "DNB",
    eika: "Eika",
    fremtind: "Fremtind",
    sparebank1: "SpareBank 1",
};

export const brands = (BRANDS as readonly string[]).map((brand) => ({
    title: brandTitles[brand] ?? brand,
    value: brand,
}));

export const hasBrands = brands.length > 0;

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
