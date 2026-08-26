// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/SystemMessage?node-id=14268:9754
// component=SystemMessage

import figma from "figma";

const children = figma.selectedInstance.getString("Text");
const dismissable = figma.selectedInstance.getBoolean("Dismissable");
const variant = figma.selectedInstance.getEnum("Type", {
    Info: "info",
    Warning: "warning",
    Error: "error",
});

const example = figma.code`<SystemMessage
    ${figma.helpers.react.renderProp("dismissable", dismissable)}
    ${figma.helpers.react.renderProp("variant", variant)}
>
    ${figma.helpers.react.renderChildren(children)}
</SystemMessage>`;

export default {
    id: "SystemMessage",
    imports: [
        'import { ErrorSystemMessage } from "@fremtind/jokul/components/system-message";',
    ],
    example,
    metadata: { nestable: true },
};
