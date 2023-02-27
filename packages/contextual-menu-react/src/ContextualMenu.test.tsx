import { CopyIcon, DotsIcon, InfoIcon } from "@fremtind/jkl-icons-react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { ContextualMenu } from "./ContextualMenu";
import { ContextualMenuDivider } from "./ContextualMenuDivider";
import { ContextualMenuItem } from "./ContextualMenuItem";
import { ContextualMenuTriggerButton } from "./ContextualMenuTriggerButton";

// Framer motion is referencing ResizeObserver..
ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
}));

describe("ContextualMenu", () => {
    test("should render menu trigger", () => {
        renderContextualMenu();
        const contextualMenuTrigger = screen.getByText("En kontekstuell meny");
        expect(contextualMenuTrigger).toBeInTheDocument();
    });

    test("should open menu options when clicking on trigger element", async () => {
        renderContextualMenu();
        const user = userEvent.setup();
        await user.click(screen.getByText("En kontekstuell meny"));
        expect(screen.getByText(/Menyvalg 2/)).toBeInTheDocument();
    });

    test("should open menu expandable options when hover on ContextualMenuItem used as trigger element", async () => {
        renderContextualMenu();
        const user = userEvent.setup();
        await user.click(screen.getByText("En kontekstuell meny"));
        await user.hover(screen.getByText(/Ekspanderende menyvalg med veldig lang tekst/));
        const expandedMenuItem = await screen.findByText(/Ekspandert menyvalg med mer tekst/);
        expect(expandedMenuItem).toBeInTheDocument();
    });
});

function renderContextualMenu() {
    render(
        <ContextualMenu
            initialPlacement="bottom-start"
            triggerElement={<ContextualMenuTriggerButton description="En kontekstuell meny" icon={<DotsIcon bold />} />}
        >
            <ContextualMenuItem icon={<InfoIcon />}>Menyvalg 1</ContextualMenuItem>
            <ContextualMenuItem onClick={() => console.log("Hei fra Menyvalg 2")}>Menyvalg 2</ContextualMenuItem>
            <ContextualMenuItem disabled>Menyvalg med en lengre beskrivende tekst</ContextualMenuItem>
            <ContextualMenuDivider />
            <ContextualMenu
                openOnHover
                triggerElement={
                    <ContextualMenuItem expandable>Ekspanderende menyvalg med veldig lang tekst</ContextualMenuItem>
                }
            >
                <ContextualMenuItem icon={<InfoIcon />}>Ekspandert menyvalg</ContextualMenuItem>
                <ContextualMenuItem>Ekspandert menyvalg med mer tekst</ContextualMenuItem>
            </ContextualMenu>
            <ContextualMenu
                openOnHover
                triggerElement={<ContextualMenuItem expandable>Ekspanderende menyvalg</ContextualMenuItem>}
            >
                <ContextualMenuItem icon={<CopyIcon />}>Ekspandert menyvalg</ContextualMenuItem>
                <ContextualMenuItem>Ekspandert menyvalg med mer tekst</ContextualMenuItem>
            </ContextualMenu>
        </ContextualMenu>,
    );
}
