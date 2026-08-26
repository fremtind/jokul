// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/ThumbDownIcon?node-id=14471:133
// component=ThumbDownIcon

import figma from "figma";

const variant = figma.selectedInstance.getEnum("Size", {
    Medium: "medium",
    Small: "small",
});

const example = figma.code`<ThumbDownIcon
    ${figma.helpers.react.renderProp("variant", variant)}
/>`;

export default {
    id: "ThumbDownIcon",
    imports: [
        'import { ThumbDownIcon } from "@fremtind/jokul/components/icon";',
    ],
    example,
    metadata: { nestable: true },
};
