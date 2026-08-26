// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/ArrowRightIcon?node-id=14618:10306
// component=ArrowRightIcon

import figma from "figma";

const variant = figma.selectedInstance.getEnum("Size", {
    Medium: "medium",
    Small: "small",
});

const example = figma.code`<ArrowRightIcon
    ${figma.helpers.react.renderProp("variant", variant)}
/>`;

export default {
    id: "ArrowRightIcon",
    imports: [
        'import { ArrowRightIcon } from "@fremtind/jokul/components/icon";',
    ],
    example,
    metadata: { nestable: true },
};
