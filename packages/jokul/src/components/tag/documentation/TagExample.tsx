import { ExampleComponentProps } from "doc-utils/index.js";
import React, { FC } from "react";
import { Tag, InfoTag, SuccessTag, WarningTag, ErrorTag } from "../Tag.js";

type TagType = "Info" | "Success" | "Warning" | "Error";

const getTypeOfTag = (typeofTag?: TagType) => {
    switch (typeofTag) {
        case "Info":
            return InfoTag;
        case "Success":
            return SuccessTag;
        case "Warning":
            return WarningTag;
        case "Error":
            return ErrorTag;
        default:
            return Tag;
    }
};

const getTagContent = (typeofTag?: TagType): string => {
    switch (typeofTag) {
        case "Info":
            return "Info";
        case "Success":
            return "Suksess";
        case "Warning":
            return "Advarsel";
        case "Error":
            return "Feil";
        default:
            return "Emne";
    }
};

const ExampleTagWrapper: React.FC<
    ExampleComponentProps & { variant?: TagType }
> = ({ variant }) => {
    const TagComponent = getTypeOfTag(variant);

    return (
        <TagComponent className="jkl-spacing-2xs--right jkl-spacing-2xs--top">
            {getTagContent(variant)}
        </TagComponent>
    );
};

export const TagExample: FC<ExampleComponentProps> = () => {
    return (
        <div>
            <ExampleTagWrapper />
            <ExampleTagWrapper variant="Info" />
            <ExampleTagWrapper variant="Success" />
            <ExampleTagWrapper variant="Warning" />
            <ExampleTagWrapper variant="Error" />
        </div>
    );
};

export const tagExampleCode = (): string => `
    <Tag className="jkl-spacing-2xs--right jkl-spacing-2xs--top">Emne</Tag>
    <InfoTag className="jkl-spacing-2xs--right jkl-spacing-2xs--top">Info Tag</InfoTag>
    <SuccessTag className="jkl-spacing-2xs--right jkl-spacing-2xs--top">Success Tag</SuccessTag>
    <WarningTag className="jkl-spacing-2xs--right jkl-spacing-2xs--top">Warning Tag</WarningTag>
    <ErrorTag className="jkl-spacing-2xs--right jkl-spacing-2xs--top">Error Tag</ErrorTag>
`;
