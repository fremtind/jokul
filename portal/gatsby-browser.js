/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from "react";
import "document-register-element";

import "@fremtind/jkl-core/core.min.css";
import "@fremtind/jkl-accordion/accordion.min.css";
import "@fremtind/jkl-alert-message/alert-message.min.css";
import "@fremtind/jkl-button/button.min.css";
import "@fremtind/jkl-card/card.min.css";
import "@fremtind/jkl-checkbox/checkbox.min.css";
import "@fremtind/jkl-datepicker/datepicker.min.css";
import "@fremtind/jkl-description-list/description-list.min.css";
import "@fremtind/jkl-feedback/feedback.min.css";
import "@fremtind/jkl-field-group/field-group.min.css";
import "@fremtind/jkl-hamburger/hamburger.min.css";
import "@fremtind/jkl-icon-button/icon-button.min.css";
import "@fremtind/jkl-list/list.min.css";
import "@fremtind/jkl-loader/loader.min.css";
import "@fremtind/jkl-logo/logo.min.css";
import "@fremtind/jkl-message-box/message-box.min.css";
import "@fremtind/jkl-progress-bar/progress-bar.min.css";
import "@fremtind/jkl-radio-button/radio-button.min.css";
import "@fremtind/jkl-select/select.min.css";
import "@fremtind/jkl-summary-table/summary-table.min.css";
import "@fremtind/jkl-table/table.min.css";
import "@fremtind/jkl-text-input/text-input.min.css";
import "@fremtind/jkl-toggle-switch/toggle-switch.min.css";
import "@fremtind/jkl-icons/animated-icons.min.css";
import "@fremtind/jkl-image/image.min.css";
import "@fremtind/jkl-content-toggle/content-toggle.min.css";
import "@fremtind/jkl-cookie-consent/cookie-consent.min.css";

import { initTabListener } from "@fremtind/jkl-core";

import "@fremtind/jkl-portal-components/component-example.scss";

import "./src/components/Typography/typography.scss";
import { FSMenuContextProvider } from "./src/contexts/fullscreenMenuContext";
import { LocationContextProvider } from "./src/contexts/locationContext";
import { A11yContextProvider } from "./src/contexts/a11yContext";

initTabListener();

export const wrapRootElement = ({ element }) => {
    return (
        <A11yContextProvider>
            <LocationContextProvider>
                <FSMenuContextProvider>{element}</FSMenuContextProvider>
            </LocationContextProvider>
        </A11yContextProvider>
    );
};
