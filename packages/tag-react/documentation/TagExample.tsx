import React, { FC } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { Tag, InfoTag, SuccessTag, WarningTag, ErrorTag } from "../src";

export const TagExample: FC<ExampleComponentProps> = () => {
    return (
        <div>
            <Tag className="jkl-spacing-2xs--right jkl-spacing-2xs--top">Emne</Tag>
            <InfoTag className="jkl-spacing-2xs--right jkl-spacing-2xs--top">Info</InfoTag>
            <SuccessTag className="jkl-spacing-2xs--right jkl-spacing-2xs--top">Suksess</SuccessTag>
            <WarningTag className="jkl-spacing-2xs--right jkl-spacing-2xs--top">Advarsel</WarningTag>
            <ErrorTag className="jkl-spacing-2xs--right jkl-spacing-2xs--top">Feil</ErrorTag>
        </div>
    );
};

export const tagExampleCode = `
    <Tag className="jkl-spacing-2xs--right jkl-spacing-2xs--top">Emne</Tag>
    <InfoTag className="jkl-spacing-2xs--right jkl-spacing-2xs--top">Info</InfoTag>
    <SuccessTag className="jkl-spacing-2xs--right jkl-spacing-2xs--top">Suksess</SuccessTag>
    <WarningTag className="jkl-spacing-2xs--right jkl-spacing-2xs--top">Advarsel</WarningTag>
    <ErrorTag className="jkl-spacing-2xs--right jkl-spacing-2xs--top">Feil</ErrorTag>
`;
