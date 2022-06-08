import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import React, { useState } from "react";
import { Hamburger } from ".";

describe("Hamburger", () => {
    it("should render to document", () => {
        render(<Hamburger id="jkl-hamburger" aria-controls="nothing" isOpen={false} onClick={() => {}} />);
    });

    it("should have attribute aria-expanded when isOpen is true", () => {
        render(<Hamburger id="jkl-hamburger" aria-controls="nothing" isOpen onClick={() => {}} />);

        const burger = screen.getByTestId("jkl-hamburger");

        expect(burger).toHaveAttribute("aria-expanded");
    });

    it("sets correct value for aria-controls", () => {
        const menuid = "hgsf8w4kjDH";
        render(<Hamburger id="jkl-hamburger" isOpen={false} aria-controls={menuid} onClick={() => {}} />);

        const component = screen.getByTestId("jkl-hamburger");
        expect(component).toHaveAttribute("aria-controls", menuid);
    });

    it("should render call onClick", async () => {
        const fn = jest.fn();
        render(<Hamburger id="jkl-hamburger" aria-controls="nothing" isOpen={false} onClick={fn} />);
        const burger = screen.getByTestId("jkl-hamburger");
        await act(async () => {
            await userEvent.click(burger);
        });

        expect(fn).toHaveBeenCalledTimes(1);
    });

    it("should set attribute aria-expanded when changing isOpen state", () => {
        const { rerender } = render(
            <Hamburger id="jkl-hamburger" aria-controls="nothing" isOpen={false} onClick={() => {}} />,
        );
        const burger = screen.getByTestId("jkl-hamburger");

        expect(burger).toHaveAttribute("aria-expanded", "false");

        rerender(<Hamburger id="jkl-hamburger" aria-controls="nothing" isOpen={true} onClick={() => {}} />);
        expect(burger).toHaveAttribute("aria-expanded", "true");
    });

    it("should render have correct description", () => {
        render(
            <Hamburger
                id="jkl-hamburger"
                aria-controls="nothing"
                aria-label="Testburger"
                isOpen={false}
                onClick={() => {}}
            />,
        );
        const burger = screen.getByTestId("jkl-hamburger");

        expect(burger).toHaveAttribute("aria-label", "Testburger");
    });

    it("should show open text when closed", () => {
        render(
            <Hamburger
                id="jkl-hamburger"
                aria-label=""
                aria-controls="nothing"
                isOpen={false}
                onClick={() => {}}
                actionLabel={{ open: "Open me", close: "Close me" }}
            />,
        );
        expect(screen.getByText("Open me")).toBeInTheDocument();

        // Vi må sette `aria-label=""` selv, men greit å bekrefte at det funker
        const burger = screen.getByTestId("jkl-hamburger");
        expect(burger).not.toHaveAttribute("aria-label");
    });

    it("should show close text when the hamburger is open", () => {
        render(
            <Hamburger
                id="jkl-hamburger"
                aria-controls="nothing"
                isOpen
                onClick={() => {}}
                actionLabel={{ open: "Open me", close: "Close me" }}
            />,
        );
        expect(screen.getByText("Close me")).toBeInTheDocument();
    });
});

describe("a11y", () => {
    const HamburgerExample = () => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <div data-testid="jkl-hamburger-example">
                <div>
                    <Hamburger
                        aria-controls="jkl-example-menu-placeholder"
                        aria-label="Testburger"
                        id="jkl-example-hamburger"
                        isOpen={isOpen}
                        onClick={() => setIsOpen(!isOpen)}
                    />
                </div>
                <div
                    id="jkl-example-menu-placeholder"
                    aria-labelledby="jkl-example-hamburger"
                    role="group"
                    hidden={!isOpen}
                >
                    Menyinnholdet ville vært inni et element med disse attributtene
                </div>
            </div>
        );
    };
    it("hamburger should be a11y compliant", async () => {
        render(<HamburgerExample />);

        let results = await axe(screen.getByTestId("jkl-hamburger-example"));

        expect(results).toHaveNoViolations();

        const burger = screen.getByTestId("jkl-hamburger");
        await act(async () => {
            await userEvent.click(burger);
        });

        results = await axe(screen.getByTestId("jkl-hamburger-example"));
        expect(results).toHaveNoViolations();
    });
});
