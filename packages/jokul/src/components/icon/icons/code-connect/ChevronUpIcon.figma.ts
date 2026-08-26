// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/ChevronUpIcon?node-id=15493:7207
// component=ChevronUpIcon

import figma from "figma";

const variant = figma.selectedInstance.getEnum("Size", {
    Medium: "medium",
    Small: "small",
});

const example = figma.code`<ChevronUpIcon
    ${figma.helpers.react.renderProp("variant", variant)}
/>`;

export default {
    id: "ChevronUpIcon",
    imports: [
        'import { ChevronUpIcon } from "@fremtind/jokul/components/icon";',
    ],
    example,
    metadata: { nestable: true },
};
