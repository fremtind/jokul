import { DotsIcon } from "@fremtind/jkl-icons-react";
import { render, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { ContextualMenu } from "./ContextualMenu";
import { ContextualMenuItem } from "./ContextualMenuItem";
import { ContextualMenuTriggerButton } from "./ContextualMenuTriggerButton";

function setup(jsx: JSX.Element, renderOptions?: RenderOptions) {
    return {
        user: userEvent.setup(),
        ...render(jsx, renderOptions),
    };
}

describe("ContextualMenu", () => {
    let defaultResizeObserver = globalThis.ResizeObserver;

    beforeAll(() => {
        // Framer motion is referencing ResizeObserver..
        globalThis.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    afterAll(() => {
        globalThis.ResizeObserver = defaultResizeObserver;
    });

    test("should render menu trigger", () => {
        const { getByRole, queryByRole } = setup(
            <ContextualMenu
                initialPlacement="bottom-start"
                triggerElement={
                    <ContextualMenuTriggerButton description="En kontekstuell meny" icon={<DotsIcon bold />} />
                }
            >
                <ContextualMenuItem>Menyvalg</ContextualMenuItem>
            </ContextualMenu>,
        );

        expect(getByRole("button", { name: "En kontekstuell meny" })).toBeInTheDocument();
        // Start med menyen skjult
        expect(queryByRole("menuitem")).not.toBeInTheDocument();
    });

    test("should open menu options when clicking on trigger element", async () => {
        const { getByRole, user } = setup(
            <ContextualMenu
                initialPlacement="bottom-start"
                triggerElement={
                    <ContextualMenuTriggerButton description="En kontekstuell meny" icon={<DotsIcon bold />} />
                }
            >
                <ContextualMenuItem>Menyvalg</ContextualMenuItem>
            </ContextualMenu>,
        );

        await user.click(getByRole("button", { name: "En kontekstuell meny" }));

        expect(getByRole("menuitem", { name: "Menyvalg" })).toBeInTheDocument();
    });

    test("when open on hover is set on submenu, opens on hover", async () => {
        const { findByRole, getByRole, queryByRole, user } = setup(
            <ContextualMenu
                initialPlacement="bottom-start"
                triggerElement={
                    <ContextualMenuTriggerButton description="En kontekstuell meny" icon={<DotsIcon bold />} />
                }
            >
                <ContextualMenu
                    openOnHover
                    triggerElement={<ContextualMenuItem expandable>Ekspanderende</ContextualMenuItem>}
                >
                    <ContextualMenuItem>Ekspandert</ContextualMenuItem>
                </ContextualMenu>
            </ContextualMenu>,
        );

        expect(queryByRole("menuitem", { name: "Ekspanderende" })).not.toBeInTheDocument();

        await user.click(getByRole("button", { name: "En kontekstuell meny" }));

        expect(getByRole("menuitem", { name: "Ekspanderende" })).toBeInTheDocument();
        expect(queryByRole("menuitem", { name: "Ekspandert" })).not.toBeInTheDocument();

        await user.hover(getByRole("menuitem", { name: "Ekspanderende" }));

        const ekspandert = await findByRole("menuitem", { name: "Ekspandert" });
        expect(ekspandert).toBeInTheDocument();
    });
});
