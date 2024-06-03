import { ArrowLeftIcon, ArrowRightIcon } from "@fremtind/jkl-icons-react";
import React, { useState } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { Button } from "../src";

export const Tertiary: React.FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const [showLoader, setShowLoader] = useState(false);
    const loader = { showLoader: showLoader || !!boolValues?.["isLoading"], textDescription: "Laster innhold" };
    const icon =
        choiceValues?.["Ikon"] === "uten"
            ? undefined
            : (choiceValues?.["Ikon"] as "arrow-left" | "arrow-right" | "begge");

    const simulateLoading = () => {
        console.log("Hello!");
        setShowLoader(true);
        setTimeout(() => {
            setShowLoader(false);
        }, 2200);
    };

    return (
        <Button
            variant="tertiary"
            loader={showLoader || !!boolValues?.["withLoader"] ? loader : undefined}
            className="jkl-spacing-l--right"
            onClick={simulateLoading}
            iconLeft={icon === "arrow-left" || icon === "begge" ? <ArrowLeftIcon bold /> : null}
            iconRight={icon === "arrow-right" || icon === "begge" ? <ArrowRightIcon bold /> : null}
        >
            Avbryt
        </Button>
    );
};

export const tertiaryCode = ({ boolValues, choiceValues }: ExampleComponentProps): string => `
<Button
    variant="tertiary"
    loader={${
        !!boolValues?.["withLoader"]
            ? `{
        showLoader: ${!!boolValues?.["isLoading"]},
        textDescription: "Laster innhold"
    }`
            : `false`
    }}
    onClick={simulateLoading}
    className="jkl-spacing-l--right"
    iconLeft={${
        choiceValues?.["Ikon"] === "arrow-left" || choiceValues?.["Ikon"] === "begge" ? `<ArrowLeft bold/>` : null
    }}
    iconRight={${
        choiceValues?.["Ikon"] === "arrow-right" || choiceValues?.["Ikon"] === "begge" ? `<ArrowRight bold/>` : null
    }}
>
    Avbryt
</Button>
`;
