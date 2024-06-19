import { GatsbySSR } from "gatsby";
import React from "react";
import { SharedProviders } from "./gatsby-shared-providers";
// @ts-ignore joda, fontfilen finnes og kan importeres
import font from "./static/fonts/Fremtind_Material_Symbols.woff2";

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setHtmlAttributes, setHeadComponents }) => {
    setHtmlAttributes({ lang: "no" });
    setHeadComponents([<link key="iconfont" rel="preload" href={font} as="font" type="font/woff2" crossOrigin="" />]);
};

export const wrapRootElement: GatsbySSR["wrapRootElement"] = ({ element }) => {
    return <SharedProviders>{element}</SharedProviders>;
};
