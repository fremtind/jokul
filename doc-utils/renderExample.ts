import { ReactElement } from "react";
import { createRoot } from "react-dom/client";

import { initTabListener } from "../packages/core/src";

// Disse pakkene må være bygget for å kunne kjøre opp eksemplene lokalt
// Bruk yarn boot eller yarn build
import "../packages/core/core.min.css";
import "../packages/webfonts/documentation/internal.scss";
import "../packages/radio-button/radio-button.min.css";
import "../packages/checkbox/checkbox.min.css";

import "./dev-example.scss";

export const renderExample = (content: ReactElement, node: HTMLElement | null): void => {
    if (!node) {
        console.error("Fikk ikke et HTML-element å rendre eksempelet i. Har du en skrivefeil i selectoren din?");
        return;
    }

    initTabListener();

    const root = createRoot(node);
    root.render(content);
};
