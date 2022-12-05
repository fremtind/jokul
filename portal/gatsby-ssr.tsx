import { GatsbySSR } from "gatsby";
import React from "react";
import { SharedProviders } from "./gatsby-shared-providers";

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setHtmlAttributes }) => {
    setHtmlAttributes({ lang: "no" });
};

export const wrapRootElement: GatsbySSR["wrapRootElement"] = ({ element }) => {
    return <SharedProviders>{element}</SharedProviders>;
};
