// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/Link?node-id=2006:2335
// component=Link

import figma from "figma";

const children = figma.selectedInstance.getString("Text");
const external = figma.selectedInstance.getBoolean("Show External Arrow");
const download = figma.selectedInstance.getEnum("Download", {
    True: true,
    False: false,
});

const example = figma.code`<Link
    ${figma.helpers.react.renderProp("external", external)}
    ${figma.helpers.react.renderProp("download", download)}
>
    ${figma.helpers.react.renderChildren(children)}
</Link>`;

export default {
    id: "Link",
    imports: ['import { Link } from "@fremtind/jokul/components/link";'],
    example,
    metadata: { nestable: true },
};
