// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/ChevronRightIcon?node-id=15493:7208
// component=ChevronRightIcon

import figma from "figma";

const variant = figma.selectedInstance.getEnum("Size", {
    Medium: "medium",
    Small: "small",
});

const example = figma.code`<ChevronRightIcon
    ${figma.helpers.react.renderProp("variant", variant)}
/>`;

export default {
    id: "ChevronRightIcon",
    imports: [
        'import { ChevronRightIcon } from "@fremtind/jokul/components/icon";',
    ],
    example,
    metadata: { nestable: true },
};
