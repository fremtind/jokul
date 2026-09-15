// url=https://www.figma.com/design/jnE6mPCHVfbjn7a0AiKGEK/Jokul?node-id=40014:1759
// component=ExpandablePanel

import figma from "figma";

const multiple = figma.selectedInstance.getBoolean("Multiple");
const outlined = figma.selectedInstance.getBoolean("Outlined");
const panel = multiple
    ? undefined
    : figma.selectedInstance.findConnectedInstance("ExpandablePanelItem");
const icon =
    panel?.type === "INSTANCE"
        ? panel.getBoolean("Icon left", {
              true: figma.helpers.react.jsxElement("<GreenCheckIcon />"),
              false: undefined,
          })
        : undefined;
const imports = [
    multiple
        ? 'import { Accordion } from "@fremtind/jokul/expander";'
        : 'import { ExpandablePanel } from "@fremtind/jokul/expander";',
    ...(icon ? ['import { GreenCheckIcon } from "@fremtind/jokul/icon";'] : []),
];

const example = (() => {
    if (multiple) {
        // Sloten skal inneholde direkte, Code Connect-koblede paneler.
        // connectedInstances utelater tekst, ukoblede og dypere nestede instanser.
        const slot = figma.selectedInstance.getSlot("Expandables");
        const panels = slot?.connectedInstances.map(
            (panel) => panel.executeTemplate().example,
        );

        return figma.code`<Accordion
    ${figma.helpers.react.renderProp("outlined", outlined)}
>
    ${panels?.length ? panels : slot}
</Accordion>`;
    }

    if (!panel) {
        throw new Error(
            "Fant ikke Code Connect-koblingen ExpandablePanelItem. Publiser begge panelkoblingene under samme label, og kontroller at instansen inneholder et panel.",
        );
    }
    if (panel.type === "ERROR") {
        return figma.code`${panel.executeTemplate().example}`;
    }

    const title = panel.getString("Title");
    const defaultOpen = panel.getBoolean("Open");

    const slot = panel.getSlot("Content");

    return figma.code`<ExpandablePanel
    ${figma.helpers.react.renderProp("outlined", outlined)}
    ${figma.helpers.react.renderProp("defaultOpen", defaultOpen)}
>
    <ExpandablePanel.Header ${figma.helpers.react.renderProp("icon", icon)}>
        {${figma.helpers.react.stringifyObject(title)}}
    </ExpandablePanel.Header>
    <ExpandablePanel.Content>
        ${slot ?? figma.code`{/* Innhold */}`}
    </ExpandablePanel.Content>
</ExpandablePanel>`;
})();

export default {
    id: "ExpandablePanel",
    imports,
    example,
    metadata: { nestable: true },
};
