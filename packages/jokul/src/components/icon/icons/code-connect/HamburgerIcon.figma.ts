// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/HamburgerIcon?node-id=14607:10210
// component=HamburgerIcon

import figma from "figma";

const variant = figma.selectedInstance.getEnum("Size", {
    Medium: "medium",
    Small: "small",
});

const example = figma.code`<HamburgerIcon
    ${figma.helpers.react.renderProp("variant", variant)}
/>`;

export default {
    id: "HamburgerIcon",
    imports: [
        'import { HamburgerIcon } from "@fremtind/jokul/components/icon";',
    ],
    example,
    metadata: { nestable: true },
};
