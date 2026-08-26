// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/Message?node-id=14268:9812
// component=Message

import figma from "figma";

const children = figma.selectedInstance.getString("Text");
const dismissable = figma.selectedInstance.getBoolean("Dismissable");
const title = figma.selectedInstance.getBoolean("Show Title", {
    true: figma.selectedInstance.getString("Title"),
    false: undefined,
});
const variant = figma.selectedInstance.getEnum("Type", {
    Error: "error",
    Warning: "warning",
    Success: "success",
    Info: "info",
});

const example = figma.code`<Message
    ${figma.helpers.react.renderProp("dismissable", dismissable)}
    ${figma.helpers.react.renderProp("title", title)}
    ${figma.helpers.react.renderProp("variant", variant)}
>
    ${figma.helpers.react.renderChildren(children)}
</Message>`;

export default {
    id: "Message",
    imports: [
        'import { InfoMessage } from "@fremtind/jokul/components/message";',
    ],
    example,
    metadata: { nestable: false },
};
