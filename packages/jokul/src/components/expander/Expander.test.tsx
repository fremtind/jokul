import { act, render } from "@testing-library/react";
import UserEventModule from "@testing-library/user-event";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { ExpandablePanel } from "./ExpandablePanel.js";
import { Expander } from "./Expander.js";

// https://github.com/testing-library/user-event/issues/1146
// @ts-ignore typecheck liker ikke at default muligens ikke finnes
const userEvent = UserEventModule.default ?? UserEventModule;

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
                    <Expander as="button" open={false} onClick={onInnerClick}>
                        Indre Expander
                    </Expander>
                </ExpandablePanel.Content>
            </ExpandablePanel>,
        );

        await act(async () => {
            await userEvent.click(
                getByRole("button", { name: "Indre Expander" }),
            );
        });

        expect(onInnerClick).toHaveBeenCalledTimes(1);
        expect(onPanelOpenChange).not.toHaveBeenCalled();
    });

    describe("tracking", () => {
        it("merker expander-triggeren som sporbar og åpen når panelet er åpent", () => {
            const { getByText } = render(
                <ExpandablePanel defaultOpen>
                    <ExpandablePanel.Header>
                        Panel-tittel
                    </ExpandablePanel.Header>
                </ExpandablePanel>,
            );

            const header = getByText("Panel-tittel").closest(".jkl-expander");
            expect(header).toHaveAttribute("data-jkl-tracked", "Expander");
            expect(header).toHaveAttribute("data-jkl-selected", "true");
        });

        it("setter data-jkl-has-icon kun når triggeren har ikon", () => {
            const { rerender, getByRole } = render(
                <Expander as="button">Lukket Expander</Expander>,
            );

            expect(
                getByRole("button", { name: "Lukket Expander" }),
            ).not.toHaveAttribute("data-jkl-has-icon");

            rerender(
                <Expander as="button" icon={<span aria-hidden="true">+</span>}>
                    Lukket Expander
                </Expander>,
            );

            expect(
                getByRole("button", { name: "Lukket Expander" }),
            ).toHaveAttribute("data-jkl-has-icon", "true");
        });

        it("setter data-jkl-tracking som JSON kun når tracking-propen er gitt", () => {
            const { rerender, getByRole } = render(
                <Expander as="button">Lukket Expander</Expander>,
            );

            expect(
                getByRole("button", { name: "Lukket Expander" }),
            ).not.toHaveAttribute("data-jkl-tracking");

            rerender(
                <Expander as="button" tracking={{ section: "faq" }}>
                    Lukket Expander
                </Expander>,
            );

            expect(
                getByRole("button", { name: "Lukket Expander" }),
            ).toHaveAttribute(
                "data-jkl-tracking",
                JSON.stringify({ section: "faq" }),
            );
        });
    });
});
