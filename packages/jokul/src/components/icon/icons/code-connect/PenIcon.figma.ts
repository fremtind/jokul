// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/PenIcon?node-id=14606:9435
// component=PenIcon

import figma from "figma";

const variant = figma.selectedInstance.getEnum("Size", {
    Medium: "medium",
    Small: "small",
});

const example = figma.code`<PenIcon
    ${figma.helpers.react.renderProp("variant", variant)}
/>`;

export default {
    id: "PenIcon",
    imports: ['import { PenIcon } from "@fremtind/jokul/components/icon";'],
    example,
    metadata: { nestable: true },
};
