// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/QuestionIcon?node-id=14606:9464
// component=QuestionIcon

import figma from "figma";

const variant = figma.selectedInstance.getEnum("Size", {
    Medium: "medium",
    Small: "small",
});

const example = figma.code`<QuestionIcon
    ${figma.helpers.react.renderProp("variant", variant)}
/>`;

export default {
    id: "QuestionIcon",
    imports: [
        'import { QuestionIcon } from "@fremtind/jokul/components/icon";',
    ],
    example,
    metadata: { nestable: true },
};
