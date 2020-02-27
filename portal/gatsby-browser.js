/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from "react";

import "document-register-element";
import "@fremtind/jkl-core/core.min.css";
import "@fremtind/jkl-text-input/text-input.min.css";
import "@fremtind/jkl-portal-components/src/ComponentExample.scss";
import { initTabListener } from "@fremtind/jkl-core";

import "./src/components/Typography/Typography.scss";
import { ThemeContextProvider } from "./src/contexts/themeContext";

initTabListener();

export const wrapRootElement = ({ element }) => {
    return <ThemeContextProvider>{element}</ThemeContextProvider>;
};
