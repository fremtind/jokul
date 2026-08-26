// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/ProgressBar?node-id=13371:2589
// component=ProgressBar

import figma from "figma";

const component = figma.selectedInstance.getEnum("Animation", {
    None: "ProgressBar",
    "Progress (left to right)": "ProgressBar",
    "Countdown (right to left)": "Countdown",
});
const from = component === "Countdown" ? 5000 : undefined;

const example = figma.code`<${component} ${figma.helpers.react.renderProp("from", from)}/>`;

export default {
    id: "ProgressBar",
    imports: [
        'import { ProgressBar } from "@fremtind/jokul/components/progress-bar";',
    ],
    example,
    metadata: { nestable: true },
};
