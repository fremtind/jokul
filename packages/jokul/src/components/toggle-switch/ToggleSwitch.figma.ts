// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/Toggle%20Switch?node-id=2007:18937
// component=Toggle Switch

import figma from "figma";

const ariaPressed = figma.selectedInstance.getBoolean("Selected");
const disabled = figma.selectedInstance.getBoolean("Disabled");
const name = figma.selectedInstance.getString("Label");
const children = figma.selectedInstance.getString("Label");

const example = figma.code`<ToggleSwitch
    ${figma.helpers.react.renderProp("aria-pressed", ariaPressed)}
    ${figma.helpers.react.renderProp("disabled", disabled)}
    ${figma.helpers.react.renderProp("name", name)}
>
    ${figma.helpers.react.renderChildren(children)}
</ToggleSwitch>`;

export default {
    id: "Toggle Switch",
    imports: [
        'import { ToggleSwitch } from "@fremtind/jokul/components/toggle-switch";',
    ],
    example,
    metadata: { nestable: true },
};
