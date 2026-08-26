// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/CopyIcon?node-id=14607:10280
// component=CopyIcon

import figma from "figma";

const variant = figma.selectedInstance.getEnum("Size", {
    Medium: "medium",
    Small: "small",
});

const example = figma.code`<CopyIcon
    ${figma.helpers.react.renderProp("variant", variant)}
/>`;

export default {
    id: "CopyIcon",
    imports: ['import { CopyIcon } from "@fremtind/jokul/components/icon";'],
    example,
    metadata: { nestable: true },
};
