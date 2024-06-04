import { ChevronDownIcon } from "@fremtind/jkl-icons-react";
import React, { useState } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { Button } from "../src";

export const Ghost: React.FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const [showLoader] = useState(false);
    const loader = { showLoader: showLoader || !!boolValues?.["isLoading"], textDescription: "Laster innhold" };

    return (
        <Button
            variant="ghost"
            loader={showLoader || !!boolValues?.["withLoader"] ? loader : undefined}
            className="jkl-spacing-l--right"
            iconRight={<ChevronDownIcon bold />}
        >
            Ola Nordmann
        </Button>
    );
};

export const ghostCode = (): string => `
<Button
    variant="ghost"
    className="jkl-spacing-l--right"
    iconRight={<ChevronDownIcon bold />}
>
    Ola Nordmann
</Button>
`;
