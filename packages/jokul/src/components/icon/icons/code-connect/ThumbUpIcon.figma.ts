// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/ThumbUpIcon?node-id=14471:132
// component=ThumbUpIcon

import figma from "figma";

const variant = figma.selectedInstance.getEnum("Size", {
    Medium: "medium",
    Small: "small",
});

const example = figma.code`<ThumbUpIcon
    ${figma.helpers.react.renderProp("variant", variant)}
/>`;

export default {
    id: "ThumbUpIcon",
    imports: ['import { ThumbUpIcon } from "@fremtind/jokul/components/icon";'],
    example,
    metadata: { nestable: true },
};
