// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/ChevronLeftIcon?node-id=15493:7209
// component=ChevronLeftIcon

import figma from "figma";

const variant = figma.selectedInstance.getEnum("Size", {
    Medium: "medium",
    Small: "small",
});

const example = figma.code`<ChevronLeftIcon
    ${figma.helpers.react.renderProp("variant", variant)}
/>`;

export default {
    id: "ChevronLeftIcon",
    imports: [
        'import { ChevronLeftIcon } from "@fremtind/jokul/components/icon";',
    ],
    example,
    metadata: { nestable: true },
};
