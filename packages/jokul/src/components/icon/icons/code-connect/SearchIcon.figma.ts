// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/SearchIcon?node-id=14463:229
// component=SearchIcon

import figma from "figma";

const variant = figma.selectedInstance.getEnum("Size", {
    Medium: "medium",
    Small: "small",
});

const example = figma.code`<SearchIcon
    ${figma.helpers.react.renderProp("variant", variant)}
/>`;

export default {
    id: "SearchIcon",
    imports: ['import { SearchIcon } from "@fremtind/jokul/components/icon";'],
    example,
    metadata: { nestable: true },
};
