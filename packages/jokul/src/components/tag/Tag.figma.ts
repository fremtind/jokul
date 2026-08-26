// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/Tag?node-id=2004:303
// component=Tag

import figma from "figma";

const children = figma.selectedInstance.getString("Text");
const variant = figma.selectedInstance.getEnum("Variant", {
    Error: "error",
    Warning: "warning",
    Success: "success",
    Neutral: "neutral",
    Info: "info",
});

const example = figma.code`<Tag
    ${figma.helpers.react.renderProp("variant", variant)}
>
    ${figma.helpers.react.renderChildren(children)}
</Tag>`;

export default {
    id: "Tag",
    imports: ['import { Tag } from "@fremtind/jokul/components/tag";'],
    example,
    metadata: { nestable: true },
};
