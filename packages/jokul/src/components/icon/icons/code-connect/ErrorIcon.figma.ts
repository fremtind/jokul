// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/ErrorIcon?node-id=14579:146
// component=ErrorIcon

import figma from "figma";

const bold = figma.selectedInstance.getEnum("Weight", {
    Bold: true,
});
const variant = figma.selectedInstance.getEnum("Size", {
    Medium: "medium",
    Small: "small",
});

const example = figma.code`<ErrorIcon
    ${figma.helpers.react.renderProp("bold", bold)}
    ${figma.helpers.react.renderProp("variant", variant)}
/>`;

export default {
    id: "ErrorIcon",
    imports: ['import { ErrorIcon } from "@fremtind/jokul/components/icon";'],
    example,
    metadata: { nestable: true },
};
