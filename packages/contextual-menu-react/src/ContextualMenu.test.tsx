import { CopyIcon, DotsIcon, InfoIcon } from "@fremtind/jkl-icons-react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { ContextualMenu } from "./ContextualMenu";
import { ContextualMenuItem } from "./ContextualMenuItem";
import { ContextualMenuTriggerIcon } from "./ContextualMenuTriggerIcon";

// Framer motion is referencing ResizeObserver..
ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
}));

describe("ContextualMenu", () => {
    test("should render menu trigger", () => {
        renderContextualMenu();
        const contextualMenuTrigger = screen.getByRole("button", { name: /Vis meny/ });
        expect(contextualMenuTrigger).toBeInTheDocument();
    });

    test("should open menu options when clicking on trigger element", async () => {
        renderContextualMenu();
        const user = userEvent.setup();
        await user.click(screen.getByRole("button", { name: /Vis meny/i }));
        expect(screen.getByText(/Menyvalg 2/)).toBeInTheDocument();
    });

    test("should open menu expandable options when hover on ContextualMenuItem used as trigger element", async () => {
        renderContextualMenu();
        const user = userEvent.setup();
        await user.click(screen.getByRole("button", { name: /Vis meny/i }));
        await user.hover(screen.getByText(/Ekspanderende menyvalg 1/));
        expect(screen.getByText(/Ekspandert menyvalg på hover/)).toBeInTheDocument();
    });
});

function renderContextualMenu() {
    render(
        <ContextualMenu openOnHover={false} triggerElement={<ContextualMenuTriggerIcon icon={<DotsIcon bold />} />}>
            <ContextualMenuItem description="Menyvalg 1" icon={<InfoIcon />} />
            <ContextualMenuItem description="Menyvalg 2" />
            <ContextualMenuItem description="Menyvalg med en lengre beskrivende tekst" />
            <ContextualMenu
                openOnHover
                initialPlacement="right-start"
                triggerElement={<ContextualMenuItem expandable description="Ekspanderende menyvalg 1" />}
            >
                <ContextualMenuItem description="Ekspandert menyvalg på hover" icon={<InfoIcon />} />
                <ContextualMenuItem description="Ekspandert menyvalg med mer tekst" />
            </ContextualMenu>
            <ContextualMenu
                openOnHover
                initialPlacement="right-start"
                triggerElement={<ContextualMenuItem expandable description="Ekspanderende menyvalg 2" />}
            >
                <ContextualMenuItem description="Ekspandert menyvalg" icon={<CopyIcon />} />
                <ContextualMenuItem description="Ekspandert menyvalg med mer tekst" />
            </ContextualMenu>
        </ContextualMenu>,
    );
}
