import React, { FC } from "react";
import { ExampleComponentProps, CodeExample, ExampleKnobsProps } from "../../../doc-utils";
import {
    ChatAndMailColumn,
    ContactInformation,
    ContactInformationHeading,
    Content,
    PhoneColumn,
    QAndAColumn,
} from "../src";

export const contactInformationExampleKnobs: ExampleKnobsProps = {
    boolProps: [
        { prop: "Mobil", defaultValue: true },
        { prop: "Med navn", defaultValue: true },
        { prop: "Med telefon", defaultValue: true },
        { prop: "Med chat og mail", defaultValue: true },
        { prop: "Med QnA", defaultValue: true },
    ],
};

export const ContactInformationExample: FC<ExampleComponentProps> = ({ boolValues }) => {
    const isMobile = boolValues?.["Mobil"];
    const withName = boolValues?.["Med navn"];
    const withPhone = boolValues?.["Med telefon"];
    const withChatAndMail = boolValues?.["Med chat og mail"];
    const withQnA = boolValues?.["Med QnA"];
    return (
        <div
            {...(isMobile ? { style: { minWidth: "21rem" } } : { style: { minWidth: "82rem" } })}
            data-simulate-mobile={isMobile ? "true" : undefined}
        >
            <ContactInformation
                headingComponent={
                    <ContactInformationHeading>
                        {withName && <p className="jkl-body">Ta kontakt med din rådgiver Ola Nordmann</p>}
                    </ContactInformationHeading>
                }
            >
                <Content>
                    {withPhone && <PhoneColumn phone={"900 90 900"} openingHours={"07:00 - 24:00"} />}
                    {withChatAndMail && (
                        <ChatAndMailColumn chat={() => alert("open chat")} email={"fremtind@fremtind.no"} />
                    )}
                    {withQnA && <QAndAColumn qAndA={() => alert("open link")} />}
                </Content>
            </ContactInformation>
        </div>
    );
};

export default ContactInformationExample;

export const contactInformationExampleCode: CodeExample = ({ boolValues }) => {
    const withName = boolValues?.["Med navn"];
    const withPhone = boolValues?.["Med telefon"];
    const withChatAndMail = boolValues?.["Med chat og mail"];
    const withQnA = boolValues?.["Med QnA"];

    return `<ContactInformation
                headingComponent={
                ${
                    withName ? (
                        <ContactInformationHeading>
                            <p className="jkl-body">Ta kontakt med din rådgiver Ola Nordmann</p>
                        </ContactInformationHeading>
                    ) : (
                        <ContactInformationHeading />
                    )
                }
            >
                <Content>
                    ${withPhone ? <PhoneColumn phone={"900 90 900"} openingHours={"07:00 - 24:00"} /> : ""}
                    ${
                        withChatAndMail ? (
                            <ChatAndMailColumn chat={() => alert("open chat")} email={"fremtind@fremtind.no"} />
                        ) : (
                            ""
                        )
                    }
                    ${withQnA ? <QAndAColumn qAndA={() => alert("open link")} /> : ""}
                </Content>
            </ContactInformation>
/>`;
};
