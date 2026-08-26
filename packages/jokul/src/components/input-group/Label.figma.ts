// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/Label?node-id=2007:8556
// component=Label

import figma from "figma";

const children = figma.selectedInstance.getString("Text");
const variant = figma.selectedInstance.getEnum("Type", {
    Large: "large",
    Medium: "medium",
    Small: "small",
});

const example = figma.code`<Label
    ${figma.helpers.react.renderProp("variant", variant)}
>
    ${figma.helpers.react.renderChildren(children)}
</Label>`;

export default {
    id: "Label",
    imports: [
        'import { Label } from "@fremtind/jokul/components/input-group";',
    ],
    example,
    metadata: { nestable: true },
};
