// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/SegmentedControlButton?node-id=25659:7709
// component=SegmentedControlButton

import figma from "figma";

let label = "Label";
const radioButton =
    figma.selectedInstance.findConnectedInstance("Radio Button");
if (radioButton?.type === "INSTANCE") {
    label = radioButton.getString("Label");
}
const separated = figma.selectedInstance.getEnum("Position", {
    Separate: true,
});
const checked = figma.selectedInstance.getEnum("State", {
    Selected: true,
});
const children = label;
const value = label;

const example = figma.code`<SegmentedControlButton
    ${figma.helpers.react.renderProp("separated", separated)}
    ${figma.helpers.react.renderProp("checked", checked)}
    ${figma.helpers.react.renderProp("value", value)}
>
    ${figma.helpers.react.renderChildren(children)}
</SegmentedControlButton>`;

export default {
    id: "SegmentedControlButton",
    imports: [
        'import { SegmentedControlButton } from "@fremtind/jokul/components/segmented-control";',
    ],
    example,
    metadata: { nestable: true },
};
