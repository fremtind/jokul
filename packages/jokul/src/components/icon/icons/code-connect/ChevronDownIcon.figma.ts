// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/ChevronDownIcon?node-id=14607:10178
// component=ChevronDownIcon

import figma from "figma";

const variant = figma.selectedInstance.getEnum("Size", {
    Medium: "medium",
    Small: "small",
});

const example = figma.code`<ChevronDownIcon
    ${figma.helpers.react.renderProp("variant", variant)}
/>`;

export default {
    id: "ChevronDownIcon",
    imports: [
        'import { ChevronDownIcon } from "@fremtind/jokul/components/icon";',
    ],
    example,
    metadata: { nestable: true },
};
