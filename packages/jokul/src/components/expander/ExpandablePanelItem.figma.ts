// url=https://www.figma.com/design/jnE6mPCHVfbjn7a0AiKGEK/Jokul?node-id=40014:1769
// component=ExpandablePanel

import figma from "figma";

const title = figma.selectedInstance.getString("Title");
const defaultOpen = figma.selectedInstance.getBoolean("Open");
const icon = figma.selectedInstance.getBoolean("Icon left", {
    true: figma.helpers.react.jsxElement("<GreenCheckIcon />"),
    false: undefined,
});
const slot = figma.selectedInstance.getSlot("Content");

const example = figma.code`<ExpandablePanel
    ${figma.helpers.react.renderProp("defaultOpen", defaultOpen)}
>
    <ExpandablePanel.Header ${figma.helpers.react.renderProp("icon", icon)}>
        {${figma.helpers.react.stringifyObject(title)}}
    </ExpandablePanel.Header>
    <ExpandablePanel.Content>
        ${slot ?? figma.code`{/* Innhold */}`}
    </ExpandablePanel.Content>
</ExpandablePanel>`;

export default {
    id: "ExpandablePanelItem",
    imports: [
        'import { ExpandablePanel } from "@fremtind/jokul/expander";',
        ...(icon
            ? ['import { GreenCheckIcon } from "@fremtind/jokul/icon";']
            : []),
    ],
    example,
    metadata: { nestable: true },
};
