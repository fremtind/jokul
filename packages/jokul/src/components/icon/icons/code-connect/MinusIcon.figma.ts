// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/MinusIcon?node-id=14606:9463
// component=MinusIcon

import figma from "figma";

const variant = figma.selectedInstance.getEnum("Size", {
    Medium: "medium",
    Small: "small",
});

const example = figma.code`<MinusIcon
    ${figma.helpers.react.renderProp("variant", variant)}
/>`;

export default {
    id: "MinusIcon",
    imports: ['import { MinusIcon } from "@fremtind/jokul/components/icon";'],
    example,
    metadata: { nestable: true },
};
