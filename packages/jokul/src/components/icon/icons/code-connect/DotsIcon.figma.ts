// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/DotsIcon?node-id=14606:9953
// component=DotsIcon

import figma from "figma";

const variant = figma.selectedInstance.getEnum("Size", {
    Medium: "medium",
    Small: "small",
});

const example = figma.code`<DotsIcon
    ${figma.helpers.react.renderProp("variant", variant)}
/>`;

export default {
    id: "DotsIcon",
    imports: ['import { DotsIcon } from "@fremtind/jokul/components/icon";'],
    example,
    metadata: { nestable: true },
};
