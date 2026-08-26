// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/ArrowDownIcon?node-id=15493:7173
// component=ArrowDownIcon

import figma from "figma";

const variant = figma.selectedInstance.getEnum("Size", {
    Medium: "medium",
    Small: "small",
});

const example = figma.code`<ArrowDownIcon
    ${figma.helpers.react.renderProp("variant", variant)}
/>`;

export default {
    id: "ArrowDownIcon",
    imports: [
        'import { ArrowDownIcon } from "@fremtind/jokul/components/icon";',
    ],
    example,
    metadata: { nestable: true },
};
