import React, { FC, useState } from "react";
import { Tag, InfoTag, SuccessTag, WarningTag, ErrorTag } from "..";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../../../../doc-utils";

export const tagExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Dismissable"],
};

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

const ExampleTagWrapper: React.FC<ExampleComponentProps & { variant?: TagType }> = ({ boolValues, variant }) => {
    const [dismissed, setDismissed] = useState(false);
    const C = getTypeOfTag(variant);
    const dismissAction = boolValues?.["Dismissable"]
        ? {
              onClick: () => {
                  setDismissed(true);
                  setTimeout(() => setDismissed(false), 2600);
              },
              label: "Fjern filter",
          }
        : undefined;

    if (dismissed) {
        return null;
    }

    return (
        <C className="jkl-spacing-2xs--right jkl-spacing-2xs--top" dismissAction={dismissAction}>
            {getTagContent(variant)}
        </C>
    );
};

export const TagExample: FC<ExampleComponentProps> = ({ boolValues }) => {
    return (
        <div>
            <ExampleTagWrapper boolValues={boolValues} />
            <ExampleTagWrapper boolValues={boolValues} variant="Info" />
            <ExampleTagWrapper boolValues={boolValues} variant="Success" />
            <ExampleTagWrapper boolValues={boolValues} variant="Warning" />
            <ExampleTagWrapper boolValues={boolValues} variant="Error" />
        </div>
    );
};
