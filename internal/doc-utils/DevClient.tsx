import { initTabListener } from "@fremtind/jkl-core";
import React from "react";
import { hydrateRoot } from "react-dom/client";
import "@fremtind/jkl-core/core.scss";
import "@fremtind/jkl-checkbox-react/node_modules/@fremtind/jkl-checkbox/checkbox.scss";
import "@fremtind/jkl-expand-button-react/node_modules/@fremtind/jkl-expand-button/expand-button.scss";
import "@fremtind/jkl-field-group-react/node_modules/@fremtind/jkl-field-group/field-group.scss";
import "@fremtind/jkl-icons-react/node_modules/@fremtind/jkl-icons/animated-icons.scss";
import "@fremtind/jkl-radio-button-react/node_modules/@fremtind/jkl-radio-button/radio-button.scss";
import "@fremtind/jkl-select-react/node_modules/@fremtind/jkl-select/select.scss";
import "@fremtind/jkl-webfonts/documentation/internal.scss";

export type HydrateClientOptions = {
    rootId: string;
};

const defaults: HydrateClientOptions = {
    rootId: "app",
};

export function hydrateClient(rootComponent: React.ReactElement, options = defaults) {
    const opts = { ...defaults, ...options };

    initTabListener();

    const root = document.getElementById(opts.rootId);

    if (root) {
        hydrateRoot(root, rootComponent);
    } else {
        throw new Error(`No element found with ID ${opts.rootId} – hydration failed`);
    }
}
