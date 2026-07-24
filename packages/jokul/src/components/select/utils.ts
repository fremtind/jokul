import { type ReactNode, isValidElement } from "react";
import type { ValuePair } from "../../utilities/valuePair.js";

export function getReactNodeText(node: ReactNode): string {
    if (typeof node === "string" || typeof node === "number") return String(node);
    if (Array.isArray(node)) return node.map(getReactNodeText).join("");
    if (isValidElement(node)) return getReactNodeText(node.props.children);
    return "";
}

export const getButtonText = (
    selected: Set<string>,
    valuePairs: ValuePair[],
    placeholderText: string,
): string => {
    if (selected.size === 1) {
        return (
            valuePairs.find((p) => selected.has(p.value))?.label ??
            placeholderText
        );
    }
    return `${selected.size} valgt`;
};

export const autofocus =
    (active: boolean | (() => boolean)) => (el: HTMLElement | null) => {
        if (el) el.autofocus = typeof active === "boolean" ? active : active();
    };
