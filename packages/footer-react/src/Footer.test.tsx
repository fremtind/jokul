import { render, screen, cleanup } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { Footer } from ".";

describe("Footer", () => {
    it("should render", () => {
        render(
            <Footer
                showFinansportalenLink={true}
                links={[
                    {
                        title: "Personvern og vilkår",
                        href: "https://www.fremtind.no/personvern/",
                        external: false,
                    },
                    {
                        title: "Bruk av informasjonskapsler",
                        component: "button",
                        onClick: () => alert("Åpne cookieConsent"),
                        external: false,
                    },
                ]}
            />,
        );

        screen.getByText("Personvern og vilkår");
    });

    test("should be a11y compliant", async () => {
        let screen = render(<Footer />);
        let results = await axe(screen.container);
        expect(results).toHaveNoViolations();
        cleanup();

        screen = render(<Footer showFinansportalenLink={true} />);
        results = await axe(screen.container);
        expect(results).toHaveNoViolations();
        cleanup();

        screen = render(
            <Footer
                links={[
                    {
                        title: "Personvern og vilkår",
                        href: "https://www.fremtind.no/personvern/",
                        external: false,
                    },
                    {
                        title: "Bruk av informasjonskapsler",
                        component: "button",
                        onClick: () => alert("Åpne cookieConsent"),
                        external: false,
                    },
                ]}
            />,
        );
        results = await axe(screen.container);
        expect(results).toHaveNoViolations();
    });
});
