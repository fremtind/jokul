import { act, render, RenderOptions } from "@testing-library/react";
import UserEventModule from "@testing-library/user-event";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { axe } from "vitest-axe";
import { DotsIcon } from "../icon/index.js";
import { IconButton } from "../icon-button/IconButton.js";
import { Menu } from "./Menu.js";
import { MenuDivider } from "./MenuDivider.js";
import { MenuItem } from "./MenuItem.js";

// https://github.com/testing-library/user-event/issues/1146
// @ts-ignore typecheck liker ikke at default muligens ikke finnes
const userEvent = UserEventModule.default ?? UserEventModule;

function setup(jsx: JSX.Element, renderOptions?: RenderOptions) {
    return {
        user: userEvent.setup(),
        ...render(jsx, renderOptions),
    };
}

describe("Menu", () => {
    it("should render menu trigger", () => {
        const { getByRole, queryByRole } = setup(
            <Menu
                initialPlacement="bottom-start"
                triggerElement={
                    <IconButton title="En kontekstuell meny">
                        <DotsIcon bold />
                    </IconButton>
                }
            >
                <MenuItem>Menyvalg</MenuItem>
            </Menu>,
        );

        expect(
            getByRole("button", { name: "En kontekstuell meny" }),
        ).toBeInTheDocument();
        // Start med menyen skjult
        expect(queryByRole("menuitem")).not.toBeInTheDocument();
    });

    it("should render as open if isOpen prop is true", async () => {
        const { getByRole } = setup(
            <Menu
                initialPlacement="bottom-start"
                isOpen={true}
                triggerElement={
                    <IconButton title="En kontekstuell meny">
                        <DotsIcon bold />
                    </IconButton>
                }
            >
                <MenuItem>Menyvalg</MenuItem>
            </Menu>,
        );

        expect(getByRole("menuitem", { name: "Menyvalg" })).toBeInTheDocument();
    });

    it("should not open if isOpen prop is set to false", async () => {
        const { getByRole, queryByRole, user } = setup(
            <Menu
                initialPlacement="bottom-start"
                isOpen={false}
                triggerElement={
                    <IconButton title="En kontekstuell meny">
                        <DotsIcon bold />
                    </IconButton>
                }
            >
                <MenuItem>Menyvalg</MenuItem>
            </Menu>,
        );

        await user.click(getByRole("button", { name: "En kontekstuell meny" }));

        expect(
            queryByRole("menuitem", { name: "Menyvalg" }),
        ).not.toBeInTheDocument();
    });

    it("should open menu options when clicking on trigger element", async () => {
        const { getByRole, user } = setup(
            <Menu
                initialPlacement="bottom-start"
                triggerElement={
                    <IconButton title="En kontekstuell meny">
                        <DotsIcon bold />
                    </IconButton>
                }
            >
                <MenuItem>Menyvalg</MenuItem>
            </Menu>,
        );

        await user.click(getByRole("button", { name: "En kontekstuell meny" }));

        expect(getByRole("menuitem", { name: "Menyvalg" })).toBeInTheDocument();
    });

    it("when open on hover is set on submenu, opens on hover", async () => {
        const { findByRole, getByRole, queryByRole, user } = setup(
            <Menu
                initialPlacement="bottom-start"
                triggerElement={
                    <IconButton title="En kontekstuell meny">
                        <DotsIcon bold />
                    </IconButton>
                }
            >
                <Menu
                    openOnHover
                    triggerElement={
                        <MenuItem expandable>Ekspanderende</MenuItem>
                    }
                >
                    <MenuItem>Ekspandert</MenuItem>
                </Menu>
            </Menu>,
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

    it("should call onToggle callback when opening and closing", async () => {
        const onToggle = vi.fn();

        const { getByRole, user } = setup(
            <Menu
                onToggle={onToggle}
                initialPlacement="bottom-start"
                triggerElement={
                    <IconButton title="En kontekstuell meny">
                        <DotsIcon bold />
                    </IconButton>
                }
            >
                <MenuItem>Menyvalg</MenuItem>
            </Menu>,
        );

        await user.click(getByRole("button", { name: "En kontekstuell meny" }));
        await user.click(getByRole("button", { name: "En kontekstuell meny" }));

        // Called with false on mount since menu starts out closed
        expect(onToggle).toHaveBeenNthCalledWith(1, false);
        expect(onToggle).toHaveBeenNthCalledWith(2, true);
        expect(onToggle).toHaveBeenNthCalledWith(3, false);
    });

    it("should pass vi-axe tests in default state", async () => {
        const { container } = setup(
            <Menu
                initialPlacement="bottom-start"
                triggerElement={
                    <IconButton title="En kontekstuell meny">
                        <DotsIcon bold />
                    </IconButton>
                }
            >
                <MenuItem>Menyvalg</MenuItem>
            </Menu>,
        );

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("should pass vi-axe tests when open", async () => {
        const { getByRole, container, user } = setup(
            <Menu
                initialPlacement="bottom-start"
                triggerElement={
                    <IconButton title="En kontekstuell meny">
                        <DotsIcon bold />
                    </IconButton>
                }
            >
                <MenuItem>Menyvalg</MenuItem>
                <MenuDivider />
                <Menu
                    openOnHover
                    triggerElement={
                        <MenuItem expandable>Ekspanderende</MenuItem>
                    }
                >
                    <MenuItem>Ekspandert</MenuItem>
                </Menu>
            </Menu>,
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

    it("should pass vi-axe tests when hover submenu is open", async () => {
        const { findByRole, getByRole, container, user } = setup(
            <Menu
                initialPlacement="bottom-start"
                triggerElement={
                    <IconButton title="En kontekstuell meny">
                        <DotsIcon bold />
                    </IconButton>
                }
            >
                <MenuItem>Menyvalg</MenuItem>
                <MenuDivider />
                <Menu
                    openOnHover
                    triggerElement={
                        <MenuItem expandable>Ekspanderende</MenuItem>
                    }
                >
                    <MenuItem>Ekspandert</MenuItem>
                </Menu>
            </Menu>,
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
