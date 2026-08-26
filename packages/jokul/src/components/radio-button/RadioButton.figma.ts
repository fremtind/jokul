// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/Radio%20Button?node-id=2007:9587
// component=Radio Button

import figma from "figma";

const children = figma.selectedInstance.getString("Label");
const value = figma.selectedInstance.getString("Label");
const checked = figma.selectedInstance.getBoolean("Selected");
const ariaInvalid = figma.selectedInstance.getBoolean("Error");

const example = figma.code`<RadioButton
    ${figma.helpers.react.renderProp("value", value)}
    ${figma.helpers.react.renderProp("checked", checked)}
    ${figma.helpers.react.renderProp("aria-invalid", ariaInvalid)}
>
    ${figma.helpers.react.renderChildren(children)}
</RadioButton>`;

export default {
    id: "Radio Button",
    imports: [
        'import { RadioButton } from "@fremtind/jokul/components/radio-button";',
    ],
    example,
    metadata: { nestable: true },
};
