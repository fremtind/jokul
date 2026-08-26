// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/Checkbox?node-id=2006:3746
// component=Checkbox

import figma from "figma";

const name = figma.selectedInstance.getString("Label");
const checked = figma.selectedInstance.getBoolean("Selected");
const children = figma.selectedInstance.getString("Label");
const invalid = figma.selectedInstance.getBoolean("Error");
const indeterminate = figma.selectedInstance.getBoolean("Indeterminate");

const example = figma.code`<Checkbox
    ${figma.helpers.react.renderProp("value", children)}
    ${figma.helpers.react.renderProp("name", name)}
    ${figma.helpers.react.renderProp("checked", checked)}
    ${figma.helpers.react.renderProp("invalid", invalid)}
    ${figma.helpers.react.renderProp("indeterminate", indeterminate)}
>
    ${figma.helpers.react.renderChildren(children)}
</Checkbox>`;

export default {
    id: "Checkbox",
    imports: [
        'import { Checkbox } from "@fremtind/jokul/components/checkbox";',
    ],
    example,
    metadata: { nestable: true },
};
