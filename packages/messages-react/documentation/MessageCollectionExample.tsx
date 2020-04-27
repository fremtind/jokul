import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import SystemMessageExample from "./SystemMessageExample";
import MessageBoxExample from "./MessageBoxExample";

export const Example: React.FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const showSystemMessage = choiceValues?.["Melding type"];

    if (showSystemMessage === "System melding") {
        return <SystemMessageExample boolValues={boolValues} choiceValues={choiceValues} />;
    }

    return <MessageBoxExample boolValues={boolValues} choiceValues={choiceValues} />;
};

export default Example;
