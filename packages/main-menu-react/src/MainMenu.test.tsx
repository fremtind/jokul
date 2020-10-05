import React from "react";
import { render, screen } from "@testing-library/react";
import { initialScreenState } from "@fremtind/jkl-react-hooks";
import { MainMenu, MenuItemList } from ".";
import { axe } from "jest-axe";

const getScreenInfo = (size: keyof typeof initialScreenState) => () =>
    size === "inner" ? initialScreenState : { ...initialScreenState, [size]: true };

const items: MenuItemList = [
    {
        linkText: "Hjem",
        content: "/",
    },
    {
        linkText: "Blogg",
        content: "/blogg",
    },
];

describe("Main menu", () => {
    it("displays the correct items", () => {
        // must explicitly set showTopLevel bco testing-library
        render(<MainMenu showTopLevel items={items} />);

        items.forEach((item) => {
            expect(screen.getByText(item.linkText)).toBeVisible();
        });
    });

    it("renders passed children", () => {
        render(
            <MainMenu showTopLevel items={items}>
                Heisann
            </MainMenu>,
        );

        expect(screen.getByText("Heisann")).toBeVisible();
    });

    it("does not show items when collapsed", () => {
        render(<MainMenu showTopLevel={false} items={items} />);
        console.warn(getScreenInfo("isLandscape")());

        items.forEach((item) => {
            expect(screen.getByText(item.linkText)).toBeInTheDocument();
            expect(screen.getByText(item.linkText)).not.toBeVisible();
        });
    });

    it("does not show children when collapsed", () => {
        render(
            <MainMenu showTopLevel={false} items={items}>
                Heisann
            </MainMenu>,
        );

        expect(screen.getByText("Heisann")).not.toBeVisible();
    });

    it("shows hamburger menu when collapsed", () => {
        const item: MenuItemList = [{ linkText: "Hjem", content: "/" }];
        render(<MainMenu showTopLevel={false} items={item} />);

        expect(screen.getByTestId("jkl-hamburger")).toBeInTheDocument();
    });
});

describe("a11y", () => {
    it("main menu should be a11y compliant on large screens", async () => {
        const { container } = render(
            <MainMenu showTopLevel getScreenInfo={getScreenInfo("isLargeDevice")} items={items} />,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("main menu should be a11y compliant on small screens", async () => {
        const { container } = render(
            <MainMenu showTopLevel getScreenInfo={getScreenInfo("isSmallDevice")} items={items} />,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
