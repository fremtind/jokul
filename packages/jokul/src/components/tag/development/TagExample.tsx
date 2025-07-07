import React, { type FC } from "react";
import type { ExampleComponentProps } from "utils/dev-example/index.js";
import { ErrorTag, InfoTag, SuccessTag, Tag, WarningTag } from "../Tag.js";

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
        <TagComponent className="jkl-spacing-4--right jkl-spacing-4--top">
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
    <Tag className="jkl-spacing-4--right jkl-spacing-4--top">Emne</Tag>
    <InfoTag className="jkl-spacing-4--right jkl-spacing-4--top">Info Tag</InfoTag>
    <SuccessTag className="jkl-spacing-4--right jkl-spacing-4--top">Success Tag</SuccessTag>
    <WarningTag className="jkl-spacing-4--right jkl-spacing-4--top">Warning Tag</WarningTag>
    <ErrorTag className="jkl-spacing-4--right jkl-spacing-4--top">Error Tag</ErrorTag>
`;
