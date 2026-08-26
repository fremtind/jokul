// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/TextInput?node-id=30699:1281
// component=TextInput

import figma from "figma";

const value = figma.selectedInstance.getEnum("Has Value", {
    True: figma.selectedInstance.getString("Value"),
    False: undefined,
});
const description = figma.selectedInstance.getBoolean("Show Description", {
    true: figma.selectedInstance.getString("Description"),
    false: undefined,
});
const placeholder = figma.selectedInstance.getString("Placeholder");
const label = figma.selectedInstance.getString("Label");

const example = figma.code`<TextInput
    ${figma.helpers.react.renderProp("value", value)}
    ${figma.helpers.react.renderProp("description", description)}
    ${figma.helpers.react.renderProp("placeholder", placeholder)}
    ${figma.helpers.react.renderProp("label", label)}
/>`;

export default {
    id: "TextInput",
    imports: [
        'import { TextInput } from "@fremtind/jokul/components/text-input";',
    ],
    example,
    metadata: { nestable: true },
};
