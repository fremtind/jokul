// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/CloseIcon?node-id=14571:9228
// component=CloseIcon

import figma from "figma";

const variant = figma.selectedInstance.getEnum("Size", {
    Medium: "medium",
    Small: "small",
});

const example = figma.code`<CloseIcon
    ${figma.helpers.react.renderProp("variant", variant)}
/>`;

export default {
    id: "CloseIcon",
    imports: ['import { CloseIcon } from "@fremtind/jokul/components/icon";'],
    example,
    metadata: { nestable: true },
};
