// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/ArrowUpIcon?node-id=15493:7174
// component=ArrowUpIcon

import figma from "figma";

const variant = figma.selectedInstance.getEnum("Size", {
    Medium: "medium",
    Small: "small",
});

const example = figma.code`<ArrowUpIcon
    ${figma.helpers.react.renderProp("variant", variant)}
/>`;

export default {
    id: "ArrowUpIcon",
    imports: ['import { ArrowUpIcon } from "@fremtind/jokul/components/icon";'],
    example,
    metadata: { nestable: true },
};
