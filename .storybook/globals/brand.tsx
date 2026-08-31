import type { ReactRenderer } from "@storybook/nextjs";
import { useEffect } from "react";
import type { DecoratorFunction, GlobalTypes } from "storybook/internal/types";
import {
    BRANDS,
    type Brand,
} from "../../packages/jokul/src/utilities/types.js";

const brandTitles: Record<Brand, string> = {
    dnb: "DNB",
};

export const brands = BRANDS.map((brand) => ({
    title: brandTitles[brand] ?? brand,
    value: brand,
}));

const resetItem = { title: "Jøkul (ingen merkevare)", value: "" };

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

export const brandGlobal: GlobalTypes[string] = {
    toolbar: {
        title: "Merkevare",
        icon: "transfer",
        items: [resetItem, ...brands],
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
