/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from "react";
import "document-register-element";

import "@fremtind/jkl-core/core.min.css";
import "@fremtind/jkl-accordion/accordion.min.css";
import "@fremtind/jkl-button/button.min.css";
import "@fremtind/jkl-card/card.min.css";
import "@fremtind/jkl-checkbox/checkbox.min.css";
import "@fremtind/jkl-datepicker/datepicker.min.css";
import "@fremtind/jkl-divider-line/divider-line.min.css";
import "@fremtind/jkl-field-group/field-group.min.css";
import "@fremtind/jkl-hamburger/hamburger.min.css";
import "@fremtind/jkl-list/list.min.css";
import "@fremtind/jkl-loader/loader.min.css";
import "@fremtind/jkl-logo/logo.min.css";
import "@fremtind/jkl-message-box/message-box.min.css";
import "@fremtind/jkl-progress-bar/progress-bar.min.css";
import "@fremtind/jkl-radio-button/radio-button.min.css";
import "@fremtind/jkl-select/select.min.css";
import "@fremtind/jkl-table/table.min.css";
import "@fremtind/jkl-text-input/text-input.min.css";
import "@fremtind/jkl-toggle-switch/toggle-switch.min.css";
import { initTabListener } from "@fremtind/jkl-core";

import "./src/components/Typography/typography.scss";
import { ThemeContextProvider } from "./src/contexts/themeContext";
import { FSMenuContextProvider } from "./src/contexts/fullscreenMenuContext";
import { LocationContextProvider } from "./src/contexts/locationContext";

initTabListener();

export const wrapRootElement = ({ element }) => {
    return (
        <LocationContextProvider>
            <ThemeContextProvider>
                <FSMenuContextProvider>{element}</FSMenuContextProvider>
            </ThemeContextProvider>
        </LocationContextProvider>
    );
};
