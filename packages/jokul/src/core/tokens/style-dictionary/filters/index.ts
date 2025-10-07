import type { DesignToken, Filter } from "style-dictionary/types";

export const isColor: Filter = {
    name: "isColor",
    filter: (token: DesignToken) => token.type === "color",
};

export const isSpacing: Filter = {
    name: "isSpacing",
    filter: (token: DesignToken) => token.type === "spacing",
};
