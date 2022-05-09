/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from "react";
import { GatsbyBrowser } from "gatsby";

import "@forbrukerradet/jkl-core/core.min.css";
import "@forbrukerradet/jkl-accordion/accordion.min.css";
import "@forbrukerradet/jkl-alert-message/alert-message.min.css";
import "@forbrukerradet/jkl-breadcrumb/breadcrumb.min.css";
import "@forbrukerradet/jkl-button/button.min.css";
import "@forbrukerradet/jkl-card/card.min.css";
import "@forbrukerradet/jkl-checkbox/checkbox.min.css";
import "@forbrukerradet/jkl-datepicker/datepicker.min.css";
import "@forbrukerradet/jkl-description-list/description-list.min.css";
import "@forbrukerradet/jkl-feedback/feedback.min.css";
import "@forbrukerradet/jkl-field-group/field-group.min.css";
import "@forbrukerradet/jkl-hamburger/hamburger.min.css";
import "@forbrukerradet/jkl-icon-button/icon-button.min.css";
import "@forbrukerradet/jkl-list/list.min.css";
import "@forbrukerradet/jkl-loader/loader.min.css";
import "@forbrukerradet/jkl-logo/logo.min.css";
import "@forbrukerradet/jkl-message-box/message-box.min.css";
import "@forbrukerradet/jkl-radio-button/radio-button.min.css";
import "@forbrukerradet/jkl-select/select.min.css";
import "@forbrukerradet/jkl-summary-table/summary-table.min.css";
import "@forbrukerradet/jkl-table/table.min.css";
import "@forbrukerradet/jkl-tag/tag.min.css";
import "@forbrukerradet/jkl-text-input/text-input.min.css";
import "@forbrukerradet/jkl-toggle-switch/toggle-switch.min.css";
import "@forbrukerradet/jkl-icons/animated-icons.min.css";
import "@forbrukerradet/jkl-image/image.min.css";
import "@forbrukerradet/jkl-content-toggle/content-toggle.min.css";
import "@forbrukerradet/jkl-cookie-consent/cookie-consent.min.css";
import "@forbrukerradet/jkl-expand-button/expand-button.min.css";
import "@forbrukerradet/jkl-footer/footer.min.css";

import { initTabListener } from "@forbrukerradet/jkl-core";

import "./src/components/Typography/typography.scss";
import { FSMenuContextProvider } from "./src/contexts/fullscreenMenuContext";
import { LocationContextProvider } from "./src/contexts/locationContext";
import { A11yContextProvider } from "./src/contexts/a11yContext";

initTabListener();

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({ element }) => {
    return (
        <A11yContextProvider>
            <LocationContextProvider>
                <FSMenuContextProvider>{element}</FSMenuContextProvider>
            </LocationContextProvider>
        </A11yContextProvider>
    );
};
