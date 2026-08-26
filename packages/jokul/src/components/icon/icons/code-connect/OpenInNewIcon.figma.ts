// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/OpenInNewIcon?node-id=15493:7176
// component=OpenInNewIcon

import figma from "figma";

const variant = figma.selectedInstance.getEnum("Size", {
    Medium: "medium",
    Small: "small",
});

const example = figma.code`<OpenInNewIcon
    ${figma.helpers.react.renderProp("variant", variant)}
/>`;

export default {
    id: "OpenInNewIcon",
    imports: [
        'import { OpenInNewIcon } from "@fremtind/jokul/components/icon";',
    ],
    example,
    metadata: { nestable: true },
};
