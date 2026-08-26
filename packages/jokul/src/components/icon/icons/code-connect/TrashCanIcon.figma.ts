// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/TrashCanIcon?node-id=14606:9436
// component=TrashCanIcon

import figma from "figma";

const variant = figma.selectedInstance.getEnum("Size", {
    Medium: "medium",
    Small: "small",
});

const example = figma.code`<TrashCanIcon
    ${figma.helpers.react.renderProp("variant", variant)}
/>`;

export default {
    id: "TrashCanIcon",
    imports: [
        'import { TrashCanIcon } from "@fremtind/jokul/components/icon";',
    ],
    example,
    metadata: { nestable: true },
};
