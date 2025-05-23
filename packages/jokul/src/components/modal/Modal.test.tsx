import { act, render, type RenderOptions } from "@testing-library/react";
import UserEventModule from "@testing-library/user-event";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { PrimaryButton, TertiaryButton } from "../button/Button.js";
import {
    Modal,
    ModalActions,
    ModalBody,
    ModalCloseButton,
    ModalContainer,
    ModalHeader,
    ModalOverlay,
    ModalTitle,
} from "./Modal.js";
import { useModal } from "./useModal.js";

// https://github.com/testing-library/user-event/issues/1146
// @ts-ignore typecheck liker ikke at default muligens ikke finnes
const userEvent = UserEventModule.default ?? UserEventModule;

function setup(jsx: JSX.Element, renderOptions?: RenderOptions) {
    return {
        user: userEvent.setup(),
        ...render(jsx, renderOptions),
    };
}

describe("Modal", () => {
    function ModalTest({ role }: { role?: "dialog" | "alertdialog" }) {
        const heading = "Bekreft sletting";

        const [instance, { title, overlay, container, modal, closeButton }] =
            useModal({ title: heading, role });

        useEffect(() => {
            if (!instance) {
                return;
            }
            instance.show();
        }, [instance]);

        return ReactDOM.createPortal(
            <ModalContainer {...container}>
                <ModalOverlay {...overlay} />
                <Modal {...modal}>
                    <ModalHeader>
                        <ModalTitle {...title}>{heading}</ModalTitle>
                        <ModalCloseButton {...closeButton} />
                    </ModalHeader>
                    <ModalBody>
                        Er du sikker på at du vil slette Foo Bar Baz?
                    </ModalBody>
                    <ModalActions>
                        <PrimaryButton onClick={() => instance?.hide()}>
                            Bekreft
                        </PrimaryButton>
                        <TertiaryButton onClick={() => instance?.hide()}>
                            Avbryt
                        </TertiaryButton>
                    </ModalActions>
                </Modal>
            </ModalContainer>,
            document.body,
        );
    }

    it("should render", () => {
        const { getByText, getByRole } = setup(<ModalTest />);
        expect(getByRole("dialog")).toBeInTheDocument();
        expect(getByText("Bekreft sletting")).toBeInTheDocument();
        expect(
            getByText("Er du sikker på at du vil slette Foo Bar Baz?"),
        ).toBeInTheDocument();
    });

    it("should be closable", async () => {
        const { user, getByRole } = setup(<ModalTest />);

        expect(getByRole("dialog")).not.toHaveAttribute("aria-hidden");

        await act(async () => {
            await user.click(getByRole("button", { name: "Bekreft" }));
        });

        expect(getByRole("dialog", { hidden: true })).toHaveAttribute(
            "aria-hidden",
            "true",
        );
    });

    it("should be configurable as alertdialog", () => {
        const { getByRole, queryByRole } = setup(
            <ModalTest role="alertdialog" />,
        );
        expect(getByRole("alertdialog")).toBeInTheDocument();
        expect(queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("should pass vi-axe tests in default state", async () => {
        const { container } = setup(<ModalTest />);

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("should pass vi-axe tests as alertdialog", async () => {
        const { container } = setup(<ModalTest role="alertdialog" />);

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
