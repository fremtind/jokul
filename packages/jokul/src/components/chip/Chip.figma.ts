// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/Chip?node-id=17770:1129
// component=Chip

import figma from "figma";

const children = figma.selectedInstance.getString("Text");
const variant = figma.selectedInstance.getEnum("Variant", {
    Filter: "filter",
    "Filter Selected": "filter",
    Input: "input",
});
const selected = figma.selectedInstance.getEnum("Variant", {
    "Filter Selected": true,
});

const example = figma.code`<Chip
    ${figma.helpers.react.renderProp("variant", variant)}
    ${figma.helpers.react.renderProp("selected", selected)}
>
    ${figma.helpers.react.renderChildren(children)}
</Chip>`;

export default {
    id: "Chip",
    imports: ['import { Chip } from "@fremtind/jokul/components/chip";'],
    example,
    metadata: { nestable: true },
};
