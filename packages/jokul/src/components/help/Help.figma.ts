// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/Help?node-id=26847:10089
// component=Help

import figma from "figma";

const nested = (() => {
    const nestedLayer2 = figma.selectedInstance.findInstance("Help Popover");
    return {
        children:
            nestedLayer2.type !== "ERROR"
                ? nestedLayer2.getString("Text")
                : undefined,
    };
})();

const example = figma.code`<Help buttonText="Hjelp">
    ${figma.helpers.react.renderChildren(nested.children)}
</Help>`;

export default {
    id: "Help",
    imports: ['import { Help } from "@fremtind/jokul/components/help";'],
    example,
    metadata: { nestable: true },
};
