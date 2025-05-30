/* eslint-disable @typescript-eslint/no-var-requires */
import atRule from "./at-rule.mjs";
import block from "./block.mjs";
import color from "./color.mjs";
import customProperty from "./custom-property.mjs";
import declaration from "./declaration.mjs";
import fontFamily from "./font-family.mjs";
import keyframes from "./keyframes.mjs";
import property from "./property.mjs";
import scss from "./scss.mjs";
import selector from "./selector.mjs";
import sheet from "./sheet.mjs";
import value from "./value.mjs";

export default Object.assign(
    {},
    atRule,
    block,
    color,
    customProperty,
    declaration,
    fontFamily,
    keyframes,
    property,
    scss,
    selector,
    sheet,
    value,
);
