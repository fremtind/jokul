import type {
    TransformedToken,
    Transform,
    DesignToken,
} from "style-dictionary/types";

const excludeFromTokenPath = (token: TransformedToken, exclude: string[]) =>
    token.path.filter((step) => !exclude.includes(step));

const stripLightDarkTransform: Transform = {
    name: "strip/light-dark",
    type: "name",
    filter: (token: DesignToken) =>
        token.path.includes("light") || token.path.includes("dark"),
    transform: (token: TransformedToken) => {
        const tokenPath = excludeFromTokenPath(token, ["light", "dark"]);
        return tokenPath.join("-");
    },
};

export default stripLightDarkTransform;
