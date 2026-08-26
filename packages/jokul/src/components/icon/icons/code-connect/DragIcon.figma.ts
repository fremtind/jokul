// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/DragIcon?node-id=14471:131
// component=DragIcon

import figma from "figma";

const variant = figma.selectedInstance.getEnum("Size", {
    Medium: "medium",
    Small: "small",
});

const example = figma.code`<DragIcon
    ${figma.helpers.react.renderProp("variant", variant)}
/>`;

export default {
    id: "DragIcon",
    imports: ['import { DragIcon } from "@fremtind/jokul/components/icon";'],
    example,
    metadata: { nestable: true },
};
