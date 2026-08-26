// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/SupportLabel?node-id=2388:376
// component=SupportLabel

import figma from "figma";

const labelType = figma.selectedInstance.getEnum("Type", {
    Help: "help",
    Error: "error",
});
const label = figma.selectedInstance.getEnum("Type", {
    Help: figma.selectedInstance.findText("Support Text").__render__(),
    Error: figma.selectedInstance.findText("Error Text").__render__(),
});

const example = figma.code`<SupportLabel
    id="my-support-label"
    ${figma.helpers.react.renderProp("labelType", labelType)}
    ${figma.helpers.react.renderProp("label", label)}
/>`;

export default {
    id: "SupportLabel",
    imports: [
        'import { SupportLabel } from "@fremtind/jokul/components/input-group";',
    ],
    example,
    metadata: { nestable: true },
};
