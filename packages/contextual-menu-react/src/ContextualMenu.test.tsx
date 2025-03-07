import { IconButton } from "@fremtind/jkl-icon-button-react";
import { DotsIcon } from "@fremtind/jkl-icons-react";
import { act, render, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import React from "react";
import { ContextualMenu } from "./ContextualMenu";
import { ContextualMenuDivider } from "./ContextualMenuDivider";
import { ContextualMenuItem } from "./ContextualMenuItem";

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
                    <IconButton title="En kontekstuell meny">
                        <DotsIcon bold />
                    </IconButton>
                }
            >
                <ContextualMenuItem>Menyvalg</ContextualMenuItem>
            </ContextualMenu>,
        );

        expect(
            getByRole("button", { name: "En kontekstuell meny" }),
        ).toBeInTheDocument();
        // Start med menyen skjult
        expect(queryByRole("menuitem")).not.toBeInTheDocument();
    });

    test("should render as open if isOpen prop is true", async () => {
        const { getByRole } = setup(
            <ContextualMenu
                initialPlacement="bottom-start"
                isOpen={true}
                triggerElement={
                    <IconButton title="En kontekstuell meny">
                        <DotsIcon bold />
                    </IconButton>
                }
            >
                <ContextualMenuItem>Menyvalg</ContextualMenuItem>
            </ContextualMenu>,
        );

        expect(getByRole("menuitem", { name: "Menyvalg" })).toBeInTheDocument();
    });

    test("should not open if isOpen prop is set to false", async () => {
        const { getByRole, queryByRole, user } = setup(
            <ContextualMenu
                initialPlacement="bottom-start"
                isOpen={false}
                triggerElement={
                    <IconButton title="En kontekstuell meny">
                        <DotsIcon bold />
                    </IconButton>
                }
            >
                <ContextualMenuItem>Menyvalg</ContextualMenuItem>
            </ContextualMenu>,
        );

        await user.click(getByRole("button", { name: "En kontekstuell meny" }));

        expect(
            queryByRole("menuitem", { name: "Menyvalg" }),
        ).not.toBeInTheDocument();
    });

    test("should open menu options when clicking on trigger element", async () => {
        const { getByRole, user } = setup(
            <ContextualMenu
                initialPlacement="bottom-start"
                triggerElement={
                    <IconButton title="En kontekstuell meny">
                        <DotsIcon bold />
                    </IconButton>
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
                    <IconButton title="En kontekstuell meny">
                        <DotsIcon bold />
                    </IconButton>
                }
            >
                <ContextualMenu
                    openOnHover
                    triggerElement={
                        <ContextualMenuItem expandable>
                            Ekspanderende
                        </ContextualMenuItem>
                    }
                >
                    <ContextualMenuItem>Ekspandert</ContextualMenuItem>
                </ContextualMenu>
            </ContextualMenu>,
        );

        expect(
            queryByRole("menuitem", { name: "Ekspanderende" }),
        ).not.toBeInTheDocument();

        await user.click(getByRole("button", { name: "En kontekstuell meny" }));

        expect(
            getByRole("menuitem", { name: "Ekspanderende" }),
        ).toBeInTheDocument();
        expect(
            queryByRole("menuitem", { name: "Ekspandert" }),
        ).not.toBeInTheDocument();

        await user.hover(getByRole("menuitem", { name: "Ekspanderende" }));

        const ekspandert = await findByRole("menuitem", { name: "Ekspandert" });
        expect(ekspandert).toBeInTheDocument();
    });

    test("should call onToggle callback when opening and closing", async () => {
        const onToggle = jest.fn();

        const { getByRole, user } = setup(
            <ContextualMenu
                onToggle={onToggle}
                initialPlacement="bottom-start"
                triggerElement={
                    <IconButton title="En kontekstuell meny">
                        <DotsIcon bold />
                    </IconButton>
                }
            >
                <ContextualMenuItem>Menyvalg</ContextualMenuItem>
            </ContextualMenu>,
        );

        await user.click(getByRole("button", { name: "En kontekstuell meny" }));
        await user.click(getByRole("button", { name: "En kontekstuell meny" }));

        // Called with false on mount since menu starts out closed
        expect(onToggle).toHaveBeenNthCalledWith(1, false);
        expect(onToggle).toHaveBeenNthCalledWith(2, true);
        expect(onToggle).toHaveBeenNthCalledWith(3, false);
    });

    test("should pass jest-axe tests in default state", async () => {
        const { container } = setup(
            <ContextualMenu
                initialPlacement="bottom-start"
                triggerElement={
                    <IconButton title="En kontekstuell meny">
                        <DotsIcon bold />
                    </IconButton>
                }
            >
                <ContextualMenuItem>Menyvalg</ContextualMenuItem>
            </ContextualMenu>,
        );

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    test("should pass jest-axe tests when open", async () => {
        const { getByRole, container, user } = setup(
            <ContextualMenu
                initialPlacement="bottom-start"
                triggerElement={
                    <IconButton title="En kontekstuell meny">
                        <DotsIcon bold />
                    </IconButton>
                }
            >
                <ContextualMenuItem>Menyvalg</ContextualMenuItem>
                <ContextualMenuDivider />
                <ContextualMenu
                    openOnHover
                    triggerElement={
                        <ContextualMenuItem expandable>
                            Ekspanderende
                        </ContextualMenuItem>
                    }
                >
                    <ContextualMenuItem>Ekspandert</ContextualMenuItem>
                </ContextualMenu>
            </ContextualMenu>,
        );

        await user.click(getByRole("button", { name: "En kontekstuell meny" }));
        expect(
            getByRole("menuitem", { name: "Ekspanderende" }),
        ).toBeInTheDocument();

        const results = await axe(container, {
            rules: {
                // Denne klager over focus guards fra FloatingUI, som ikke skal leses opp
                "aria-command-name": { enabled: false },
            },
        });

        expect(results).toHaveNoViolations();
    });

    test("should pass jest-axe tests when hover submenu is open", async () => {
        const { findByRole, getByRole, container, user } = setup(
            <ContextualMenu
                initialPlacement="bottom-start"
                triggerElement={
                    <IconButton title="En kontekstuell meny">
                        <DotsIcon bold />
                    </IconButton>
                }
            >
                <ContextualMenuItem>Menyvalg</ContextualMenuItem>
                <ContextualMenuDivider />
                <ContextualMenu
                    openOnHover
                    triggerElement={
                        <ContextualMenuItem expandable>
                            Ekspanderende
                        </ContextualMenuItem>
                    }
                >
                    <ContextualMenuItem>Ekspandert</ContextualMenuItem>
                </ContextualMenu>
            </ContextualMenu>,
        );

        await user.click(getByRole("button", { name: "En kontekstuell meny" }));
        await user.hover(getByRole("menuitem", { name: "Ekspanderende" }));

        const ekspandert = await findByRole("menuitem", { name: "Ekspandert" });
        expect(ekspandert).toBeInTheDocument();

        await act(async () => {}); // La @floating-ui posisjonere undermenyen ferdig (https://floating-ui.com/docs/react#testing)

        const results = await axe(container, {
            rules: {
                // Denne klager over focus guards fra FloatingUI, som ikke skal leses opp
                "aria-command-name": { enabled: false },
            },
        });

        expect(results).toHaveNoViolations();
    });
});
