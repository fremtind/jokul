// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/SuccessIcon?node-id=14606:2522
// component=SuccessIcon

import figma from "figma";

const variant = figma.selectedInstance.getEnum("Size", {
    Medium: "medium",
    Small: "small",
});

const example = figma.code`<SuccessIcon
    ${figma.helpers.react.renderProp("variant", variant)}
/>`;

export default {
    id: "SuccessIcon",
    imports: ['import { SuccessIcon } from "@fremtind/jokul/components/icon";'],
    example,
    metadata: { nestable: true },
};
