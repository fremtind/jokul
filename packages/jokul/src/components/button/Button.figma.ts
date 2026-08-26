// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/Button?node-id=15479:1381
// component=Button

import figma from "figma";

const variant = figma.selectedInstance.getEnum("Variant", {
    Primary: "primary",
    Secondary: "secondary",
    Ghost: "ghost",
});
const children = figma.selectedInstance.getString("Label");
const icon = figma.selectedInstance.getEnum("Icon placement", {
    Left: figma.selectedInstance.getInstanceSwap("↳ Icon")?.executeTemplate()
        .example,
    Right: figma.selectedInstance.getInstanceSwap("↳ Icon")?.executeTemplate()
        .example,
});
const loader = figma.selectedInstance.getBoolean("Loading", {
    false: undefined,
    true: figma.helpers.react.object({
        showLoader: true,
        textDescription: "Laster inn...",
    }),
});
const iconPlacement = figma.selectedInstance.getEnum("Icon placement", {
    "No icon": undefined,
    "Icon only": undefined,
    Left: "left",
    Right: "right",
});

const example = figma.code`<Button
    ${figma.helpers.react.renderProp("variant", variant)}
    ${figma.helpers.react.renderProp("icon", icon)}
    ${figma.helpers.react.renderProp("loader", loader)}
    ${figma.helpers.react.renderProp("iconPlacement", iconPlacement)}
>
    ${figma.helpers.react.renderChildren(children)}
</Button>`;

export default {
    id: "Button",
    imports: ['import { Button } from "@fremtind/jokul/components/button";'],
    example,
    metadata: { nestable: true },
};
