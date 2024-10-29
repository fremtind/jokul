import React, { UIEventHandler } from "react";
import type { PropItem } from "react-docgen-typescript";

const inlineCode = (code: string) => (
    <code className="jkl-portal-inline-code">{code}</code>
);

export const isExternalProp = (prop: PropItem) =>
    prop.declarations?.some((declaration) =>
        declaration.fileName.includes("node_modules"),
    );

export const isOwnProp = (prop: PropItem) =>
    prop.declarations?.some(
        (declaration) =>
            prop.name === "children" ||
            !declaration.fileName.includes("node_modules"),
    );

export const getRows = (data: PropItem[]) =>
    data.map((prop) => [
        prop.name ? inlineCode(prop.name) : "",
        prop.description,
        prop.defaultValue?.value
            ? inlineCode(prop.defaultValue.value as string)
            : "ingen",
        prop.required ? "Påkrevd" : "Ikke påkrevd",
        prop.type?.name ? inlineCode(prop.type.name) : "",
    ]);

export const setScrollShadows = (
    table: HTMLTableElement,
    wrapper: HTMLDivElement,
) => {
    const { scrollLeft, scrollWidth } = table;
    const { clientWidth } = wrapper;

    const showLeftShadow = scrollLeft > 0;
    const showRightShadow = scrollWidth - scrollLeft > clientWidth;

    wrapper.classList.toggle("left-shadow", showLeftShadow);
    wrapper.classList.toggle("right-shadow", showRightShadow);
};

export const handleScroll: UIEventHandler<HTMLTableElement> = (event) => {
    const table = event.target as HTMLTableElement;
    const wrapper = table.parentElement as HTMLDivElement;

    setScrollShadows(table, wrapper);
};
