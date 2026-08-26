// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/InfoIcon?node-id=14606:9388
// component=InfoIcon

import figma from "figma";

const variant = figma.selectedInstance.getEnum("Size", {
    Medium: "medium",
    Small: "small",
});

const example = figma.code`<InfoIcon
    ${figma.helpers.react.renderProp("variant", variant)}
/>`;

export default {
    id: "InfoIcon",
    imports: ['import { InfoIcon } from "@fremtind/jokul/components/icon";'],
    example,
    metadata: { nestable: true },
};
