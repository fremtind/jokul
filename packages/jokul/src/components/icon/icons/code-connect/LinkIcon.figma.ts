// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/LinkIcon?node-id=14471:130
// component=LinkIcon

import figma from "figma";

const variant = figma.selectedInstance.getEnum("Size", {
    Medium: "medium",
    Small: "small",
});

const example = figma.code`<LinkIcon
    ${figma.helpers.react.renderProp("variant", variant)}
/>`;

export default {
    id: "LinkIcon",
    imports: ['import { LinkIcon } from "@fremtind/jokul/components/icon";'],
    example,
    metadata: { nestable: true },
};
