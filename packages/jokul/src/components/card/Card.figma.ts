// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/Card?node-id=39212:9326
// component=Card

import figma from "figma";

const padding = figma.selectedInstance.getEnum("Padding", {
    S: "s",
    M: "m",
    L: "l",
    XL: "xl",
});
const outlined = figma.selectedInstance.getBoolean("Outlined");
const slot = figma.selectedInstance.getSlot("Content");
const children = slot?.connectedInstances.map(
    (item) => item.executeTemplate().example,
);

const example = figma.code`<Card
    ${figma.helpers.react.renderProp("padding", padding)}
    ${figma.helpers.react.renderProp("outlined", outlined)}
>
    ${children ?? slot}
</Card>`;

export default {
    id: "Card",
    imports: ['import { Card } from "@fremtind/jokul/components/card";'],
    example,
    metadata: { nestable: false },
};
