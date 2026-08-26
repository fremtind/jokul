// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/ArrowLeftIcon?node-id=15493:7164
// component=ArrowLeftIcon

import figma from "figma";

const variant = figma.selectedInstance.getEnum("Size", {
    Medium: "medium",
    Small: "small",
});

const example = figma.code`<ArrowLeftIcon
    ${figma.helpers.react.renderProp("variant", variant)}
/>`;

export default {
    id: "ArrowLeftIcon",
    imports: [
        'import { ArrowLeftIcon } from "@fremtind/jokul/components/icon";',
    ],
    example,
    metadata: { nestable: true },
};
