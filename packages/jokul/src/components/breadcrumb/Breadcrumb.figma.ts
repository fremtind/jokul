// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/BreadcrumbItem?node-id=2006:3137
// component=BreadcrumbItem

import figma from "figma";

const isLastElement = figma.selectedInstance.getEnum("Current", {
    True: true,
    False: false,
});

const example = figma.code`<BreadcrumbItem
    ${figma.helpers.react.renderProp("isLastElement", isLastElement)}
>
    Hei
</BreadcrumbItem>`;

export default {
    id: "BreadcrumbItem",
    imports: [
        'import { BreadcrumbItem } from "@fremtind/jokul/components/breadcrumb";',
    ],
    example,
    metadata: { nestable: true },
};
