// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/WarningIcon?node-id=14463:7735
// component=WarningIcon

import figma from "figma";

const variant = figma.selectedInstance.getEnum("Size", {
    Medium: "medium",
    Small: "small",
});

const example = figma.code`<WarningIcon
    ${figma.helpers.react.renderProp("variant", variant)}
/>`;

export default {
    id: "WarningIcon",
    imports: ['import { WarningIcon } from "@fremtind/jokul/components/icon";'],
    example,
    metadata: { nestable: true },
};
