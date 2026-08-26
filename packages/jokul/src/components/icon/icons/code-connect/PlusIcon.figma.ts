// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/PlusIcon?node-id=14571:8298
// component=PlusIcon

import figma from "figma";

const variant = figma.selectedInstance.getEnum("Size", {
    Medium: "medium",
    Small: "small",
});

const example = figma.code`<PlusIcon
    ${figma.helpers.react.renderProp("variant", variant)}
/>`;

export default {
    id: "PlusIcon",
    imports: ['import { PlusIcon } from "@fremtind/jokul/components/icon";'],
    example,
    metadata: { nestable: true },
};
