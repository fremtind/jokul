import { render, screen, cleanup } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { Footer } from ".";

describe("Footer", () => {
    it("should render", () => {
        render(
            <Footer
                address={{
                    addressLine1: "Postboks 778 Sentrum",
                    postalCode: "0106",
                    postalArea: "Oslo",
                    organizationNumber: "915651232",
                }}
                links={[
                    {
                        title: "Jøkul på GitHub",
                        href: "https://github.com/fremtind/jokul",
                        external: true,
                    },
                    {
                        title: "Personvernserklæring",
                        href: "https://www.fremtind.no/personvern/",
                        external: true,
                    },
                ]}
            />,
        );

        screen.getByText("Jøkul på GitHub");
    });

    test("should be a11y compliant", async () => {
        let screen = render(<Footer />);
        let results = await axe(screen.container);
        expect(results).toHaveNoViolations();
        cleanup();

        screen = render(
            <Footer
                address={{
                    addressLine1: "Postboks 778 Sentrum",
                    postalCode: "0106",
                    postalArea: "Oslo",
                    organizationNumber: "915651232",
                }}
            />,
        );
        results = await axe(screen.container);
        expect(results).toHaveNoViolations();
        cleanup();

        screen = render(
            <Footer
                links={[
                    {
                        title: "Jøkul på GitHub",
                        href: "https://github.com/fremtind/jokul",
                        external: true,
                    },
                    {
                        title: "Personvernserklæring",
                        href: "https://www.fremtind.no/personvern/",
                        external: true,
                    },
                ]}
            />,
        );
        results = await axe(screen.container);
        expect(results).toHaveNoViolations();
    });
});
