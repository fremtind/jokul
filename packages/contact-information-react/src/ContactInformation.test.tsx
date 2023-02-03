import { render, screen, cleanup } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { ContactInformation } from ".";

describe("ContactInformation", () => {
    it("should render", () => {
        render(
            <ContactInformation
                contactName={"Ola Nordmann"}
                phone={{ number: "90040900", openingHours: "07.00 - 23.00 Alle dager" }}
                chatAndMail={{ chat: () => alert("open chat"), email: "fremtind@fremtind.no" }}
                qAndA={() => alert("open link")}
            />,
        );

        screen.getByText("Ola Nordmann");
    });

    test("should be a11y compliant", async () => {
        let screen = render(<ContactInformation />);
        let results = await axe(screen.container);
        expect(results).toHaveNoViolations();
        cleanup();

        screen = render(
            <ContactInformation
                contactName={"Ola Nordmann"}
                phone={{ number: "90040900", openingHours: "07.00 - 23.00 Alle dager" }}
                chatAndMail={{ chat: () => alert("open chat"), email: "fremtind@fremtind.no" }}
                qAndA={() => alert("open link")}
            />,
        );
        results = await axe(screen.container);
        expect(results).toHaveNoViolations();
        cleanup();

        screen = render(<ContactInformation />);
        results = await axe(screen.container);
        expect(results).toHaveNoViolations();
    });
});
