import { render, screen, cleanup } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { ChatAndMailColumn, ContactInformation, ContactInformationHeading, Content, PhoneColumn, QAndAColumn } from ".";

describe("ContactInformation", () => {
    it("should render", () => {
        render(<ContactInformation headingComponent={<ContactInformationHeading />} />);

        screen.getByText("Trenger du hjelp med forsikring?");
    });

    test("should be a11y compliant", async () => {
        let screen = render(<ContactInformation headingComponent={<ContactInformationHeading />} />);
        let results = await axe(screen.container);
        expect(results).toHaveNoViolations();
        cleanup();

        screen = render(
            <ContactInformation
                headingComponent={
                    <ContactInformationHeading>
                        <p>Ta kontakt med din rådgiver Ola Nordmann</p>
                    </ContactInformationHeading>
                }
            >
                <Content>
                    <PhoneColumn phone={"900 90 900"} openingHours={"07:00 - 24:00"} />
                    <ChatAndMailColumn chat={() => alert("open chat")} email={"fremtind@fremtind.no"} />
                    <QAndAColumn qAndA={() => alert("open link")} />
                </Content>
            </ContactInformation>,
        );
        results = await axe(screen.container);
        expect(results).toHaveNoViolations();
        cleanup();

        screen = render(
            <ContactInformation
                headingComponent={
                    <ContactInformationHeading>
                        <p>Ta kontakt med din rådgiver Ola Nordmann</p>
                    </ContactInformationHeading>
                }
            />,
        );
        results = await axe(screen.container);
        expect(results).toHaveNoViolations();
    });
});
