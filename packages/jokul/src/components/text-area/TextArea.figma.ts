// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/TextArea?node-id=30701:395
// component=TextArea

import figma from "figma";

const value = figma.selectedInstance.getString("Text");
const nested = (() => {
    const nestedLayer0 = figma.selectedInstance.findInstance("Label");
    return {
        label:
            nestedLayer0.type !== "ERROR"
                ? nestedLayer0.getString("Text")
                : undefined,
    };
})();
const counter = figma.selectedInstance.getBoolean("Show Counter", {
    true: figma.helpers.react.object({ maxLength: 250 }),
    false: undefined,
});

const example = figma.code`<TextArea
    ${figma.helpers.react.renderProp("label", nested.label)}
    ${figma.helpers.react.renderProp("value", value)}
    ${figma.helpers.react.renderProp("counter", counter)}
/>`;

export default {
    id: "TextArea",
    imports: [
        'import { TextArea } from "@fremtind/jokul/components/text-area";',
    ],
    example,
    metadata: { nestable: true },
};
