import React, { FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { Tag, InfoTag, SuccessTag, WarningTag, ErrorTag } from "../src";

export const tagExampleKnobs: ExampleKnobsProps = {
    boolProps: [
        {
            defaultValue: false,
            prop: "Dismissable",
        },
    ],
};

export const TagExample: FC<ExampleComponentProps> = ({ boolValues }) => {
    return (
        <div>
            <Tag
                className="jkl-spacing-2xs--right jkl-spacing-2xs--top"
                dismissAction={
                    boolValues?.["Dismissable"] ? { label: "Fjern", onClick: () => alert("Fjern Emne") } : undefined
                }
            >
                Emne
            </Tag>
            <InfoTag
                className="jkl-spacing-2xs--right jkl-spacing-2xs--top"
                dismissAction={
                    boolValues?.["Dismissable"] ? { label: "Fjern", onClick: () => alert("Fjern Info") } : undefined
                }
            >
                Info
            </InfoTag>
            <SuccessTag
                className="jkl-spacing-2xs--right jkl-spacing-2xs--top"
                dismissAction={
                    boolValues?.["Dismissable"] ? { label: "Fjern", onClick: () => alert("Fjern Suksess") } : undefined
                }
            >
                Suksess
            </SuccessTag>
            <WarningTag
                className="jkl-spacing-2xs--right jkl-spacing-2xs--top"
                dismissAction={
                    boolValues?.["Dismissable"] ? { label: "Fjern", onClick: () => alert("Fjern Advarsel") } : undefined
                }
            >
                Advarsel
            </WarningTag>
            <ErrorTag
                className="jkl-spacing-2xs--right jkl-spacing-2xs--top"
                dismissAction={
                    boolValues?.["Dismissable"] ? { label: "Fjern", onClick: () => alert("Fjern Feil") } : undefined
                }
            >
                Feil
            </ErrorTag>
        </div>
    );
};

export const tagExampleCode = ({ boolValues }: ExampleComponentProps): string => `
    <Tag className="jkl-spacing-2xs--right jkl-spacing-2xs--top"${
        boolValues?.["Dismissable"] ? { label: "Fjern", onClick: () => alert("Fjern Emne") } : ""
    }>Emne</Tag>
    <InfoTag className="jkl-spacing-2xs--right jkl-spacing-2xs--top"${
        boolValues?.["Dismissable"] ? { label: "Fjern", onClick: () => alert("Fjern Info") } : ""
    }>Info</InfoTag>
    <SuccessTag className="jkl-spacing-2xs--right jkl-spacing-2xs--top"${
        boolValues?.["Dismissable"] ? { label: "Fjern", onClick: () => alert("Fjern Suksess") } : ""
    }>Suksess</SuccessTag>
    <WarningTag className="jkl-spacing-2xs--right jkl-spacing-2xs--top"${
        boolValues?.["Dismissable"] ? { label: "Fjern", onClick: () => alert("Fjern Advarsel") } : ""
    }>Advarsel</WarningTag>
    <ErrorTag className="jkl-spacing-2xs--right jkl-spacing-2xs--top"${
        boolValues?.["Dismissable"] ? { label: "Fjern", onClick: () => alert("Fjern Feil") } : ""
    }>Feil</ErrorTag>
`;
