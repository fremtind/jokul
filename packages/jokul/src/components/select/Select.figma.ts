// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/Select?node-id=30701:2283
// component=Select

import figma from "figma";

const nested = (() => {
    const nestedLayer1 = figma.selectedInstance.findInstance("Label");
    return {
        label:
            nestedLayer1.type !== "ERROR"
                ? nestedLayer1.getString("Text")
                : undefined,
    };
})();
const invalid = figma.selectedInstance.getEnum("State", {
    Error: true,
});

const example = figma.code`<Select
    ${figma.helpers.react.renderProp("label", nested.label)}
    ${figma.helpers.react.renderProp("name", nested.label)}
    items={[]}
    ${figma.helpers.react.renderProp("invalid", invalid)}
/>`;

export default {
    id: "Select",
    imports: ['import { Select } from "@fremtind/jokul/components/select";'],
    example,
    metadata: { nestable: true },
};
