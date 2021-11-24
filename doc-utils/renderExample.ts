import { ReactElement } from "react";
import ReactDOM from "react-dom";

import { initTabListener } from "../packages/core/src";

// Disse pakkene må være bygget for å kunne kjøre opp eksemplene lokalt
// Bruk yarn boot eller yarn build
import "../packages/core/core.min.css";
import "../packages/webfonts/documentation/internal.scss";
import "../packages/radio-button/radio-button.min.css";
import "../packages/checkbox/checkbox.min.css";

import "./dev-example.scss";

export const renderExample = (content: ReactElement, node: HTMLElement | null): void => {
    initTabListener();

    ReactDOM.render(content, node);
};
