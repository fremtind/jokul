import React from "react";
import { hydrateRoot } from "react-dom/client";
import { initTabListener } from "../packages/core";
import "../packages/checkbox/checkbox.scss";
import "../packages/core/core.scss";
import "../packages/core/vind.scss";
import "../packages/expand-button/expand-button.scss";
import "../packages/icons/icons.scss";
import "../packages/input-group/input-group.scss";
import "../packages/radio-button/radio-button.scss";
import "../packages/select/select.scss";
import "../packages/webfonts/documentation/internal.scss";

export type HydrateClientOptions = {
    rootId: string;
};

const defaults: HydrateClientOptions = {
    rootId: "app",
};

export function hydrateClient(
    rootComponent: React.ReactElement,
    options = defaults,
) {
    const opts = { ...defaults, ...options };

    initTabListener();

    const root = document.getElementById(opts.rootId);
    // I can't for the life of me figure out where this template lives so forgive me...
    root?.setAttribute("style", "width: 100%");

    if (root) {
        hydrateRoot(root, rootComponent);
    } else {
        throw new Error(
            `No element found with ID ${opts.rootId} – hydration failed`,
        );
    }
}
