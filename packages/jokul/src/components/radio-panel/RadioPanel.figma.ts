// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/RadioPanel?node-id=28385:1082
// component=RadioPanel

import figma from "figma";

let label = "Din label her";
const radioButton =
    figma.selectedInstance.findConnectedInstance("Radio Button");
if (radioButton?.type === "INSTANCE") {
    label = radioButton.getString("Label");
}
const description = figma.selectedInstance.getEnum("Description", {
    True: figma.selectedInstance.getString("Description Text"),
    False: undefined,
});
const checked = figma.selectedInstance.getEnum("State", {
    Selected: true,
});
const amount = figma.selectedInstance.getBoolean("Show Amount", {
    true: figma.selectedInstance.getString("Amount"),
    false: undefined,
});

const example = figma.code`<RadioPanel
    ${figma.helpers.react.renderProp("label", label)}
    ${figma.helpers.react.renderProp("description", description)}
    ${figma.helpers.react.renderProp("checked", checked)}
    ${figma.helpers.react.renderProp("amount", amount)}
/>`;

export default {
    id: "RadioPanel",
    imports: [
        'import { RadioPanel } from "@fremtind/jokul/components/radio-panel";',
    ],
    example,
    metadata: { nestable: true },
};
