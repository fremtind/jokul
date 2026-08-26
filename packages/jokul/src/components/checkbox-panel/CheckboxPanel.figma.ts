// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/CheckboxPanel?node-id=28385:3692
// component=CheckboxPanel

import figma from "figma";

const description = figma.selectedInstance.getEnum("Description", {
    True: figma.selectedInstance.getString("Description text"),
    False: undefined,
});
const checked = figma.selectedInstance.getEnum("State", {
    Selected: true,
});
const amount = figma.selectedInstance.getBoolean("Show Amount", {
    true: figma.selectedInstance.getString("Amount"),
    false: undefined,
});

const example = figma.code`<CheckboxPanel
    label="Skriv noe her"
    ${figma.helpers.react.renderProp("description", description)}
    ${figma.helpers.react.renderProp("checked", checked)}
    ${figma.helpers.react.renderProp("amount", amount)}
/>`;

export default {
    id: "CheckboxPanel",
    imports: [
        'import { CheckboxPanel } from "@fremtind/jokul/components/checkbox-panel";',
    ],
    example,
    metadata: { nestable: true },
};
