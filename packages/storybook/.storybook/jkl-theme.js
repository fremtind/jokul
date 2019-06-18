import { create } from "@storybook/theming";
import brandImage from "./fremtind-symbol.svg";

export default create({
    base: "light",
    brandTitle: "Jøkul komponentbibliotek",
    brandUrl: "https://fremtind.no",
    brandImage,

    colorPrimary: "#FF4785",
    colorSecondary: "#509ce6",

    // UI
    appBg: "#f0f0f0",
    appContentBg: "#fafafa",
    appBorderRadius: 0,

    // Fonts
    fontBase: "'Akkurat Light Pro', sans-serif",
    fontCode: "monospace",

    barBg: "#f0f0f0",
    barSelectedColor: "#509ce6",

    inputBorderRadius: 0,
});
