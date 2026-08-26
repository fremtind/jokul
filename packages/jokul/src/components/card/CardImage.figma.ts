// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/CardImage?node-id=14660:368
// component=CardImage

import figma from "figma";

const placement = figma.selectedInstance.getEnum("Placement", {
    Top: "top",
    Middle: "middle",
    Bottom: "bottom",
});

const example = figma.code`<CardImage
    ${figma.helpers.react.renderProp("placement", placement)}
/>`;

export default {
    id: "CardImage",
    imports: ['import { CardImage } from "@fremtind/jokul/components/card";'],
    example,
    metadata: { nestable: true },
};
