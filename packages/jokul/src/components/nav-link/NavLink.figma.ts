// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/NavLink?node-id=13893:14591
// component=NavLink

import figma from "figma";

const active = figma.selectedInstance.getBoolean("Active");
const back = figma.selectedInstance.getBoolean("Back");
const children = figma.selectedInstance.getString("Text");

const example = figma.code`<NavLink
    ${figma.helpers.react.renderProp("active", active)}
    ${figma.helpers.react.renderProp("back", back)}
>
    ${figma.helpers.react.renderChildren(children)}
</NavLink>`;

export default {
    id: "NavLink",
    imports: ['import { NavLink } from "@fremtind/jokul/components/nav-link";'],
    example,
    metadata: { nestable: true },
};
