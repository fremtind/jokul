// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/CalendarIcon?node-id=14463:243
// component=CalendarIcon

import figma from "figma";

const variant = figma.selectedInstance.getEnum("Size", {
    Medium: "medium",
    Small: "small",
});

const example = figma.code`<CalendarIcon
    ${figma.helpers.react.renderProp("variant", variant)}
/>`;

export default {
    id: "CalendarIcon",
    imports: [
        'import { CalendarIcon } from "@fremtind/jokul/components/icon";',
    ],
    example,
    metadata: { nestable: true },
};
