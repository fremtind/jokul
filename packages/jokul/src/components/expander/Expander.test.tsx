import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { ExpandablePanel } from "./ExpandablePanel.js";
import { Expander } from "./Expander.js";

describe("Expander", () => {
    it("respekterer eksplisitt `open={false}` selv inne i et åpent ExpandablePanel", () => {
        const { getAllByRole } = render(
            <ExpandablePanel defaultOpen>
                <ExpandablePanel.Header>Panel-tittel</ExpandablePanel.Header>
                <ExpandablePanel.Content>
                    <Expander as="button" open={false}>
                        Lukket Expander
                    </Expander>
                </ExpandablePanel.Content>
            </ExpandablePanel>,
        );

        const closedExpander = getAllByRole("button", {
            name: "Lukket Expander",
        })[0];

        expect(closedExpander.className).not.toContain("jkl-expander--open");
    });

    it("arver context-state når `open` ikke er satt", () => {
        const { getByText } = render(
            <ExpandablePanel defaultOpen>
                <ExpandablePanel.Header>Panel-tittel</ExpandablePanel.Header>
            </ExpandablePanel>,
        );

        const header = getByText("Panel-tittel").closest(".jkl-expander");
        expect(header?.className).toContain("jkl-expander--open");
    });

    it("kontrollert Expander toggler ikke omkringliggende ExpandablePanel ved klikk", async () => {
        const user = userEvent.setup();
        const onPanelOpenChange = vi.fn();
        const onInnerClick = vi.fn();

        const { getByRole } = render(
            <ExpandablePanel
                defaultOpen
                onOpenChange={onPanelOpenChange}
                data-testid="outer-panel"
            >
                <ExpandablePanel.Header>Ytre panel</ExpandablePanel.Header>
                <ExpandablePanel.Content>
                    <Expander
                        as="button"
                        open={false}
                        onClick={onInnerClick}
                    >
                        Indre Expander
                    </Expander>
                </ExpandablePanel.Content>
            </ExpandablePanel>,
        );

        await user.click(
            getByRole("button", { name: "Indre Expander" }),
        );

        expect(onInnerClick).toHaveBeenCalledTimes(1);
        expect(onPanelOpenChange).not.toHaveBeenCalled();
    });
});
