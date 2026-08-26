// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/CheckIcon?node-id=14571:213
// component=CheckIcon

import figma from "figma";

const variant = figma.selectedInstance.getEnum("Size", {
    Medium: "medium",
    Small: "small",
});

const example = figma.code`<CheckIcon
    ${figma.helpers.react.renderProp("variant", variant)}
/>`;

export default {
    id: "CheckIcon",
    imports: ['import { CheckIcon } from "@fremtind/jokul/components/icon";'],
    example,
    metadata: { nestable: true },
};
