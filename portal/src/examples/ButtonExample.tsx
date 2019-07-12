import React from "react";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "@fremtind/jkl-button-react";

function clickHandler() {
    console.log("You've clicked me!");
}

export function ButtonExample() {
    return (
        <>
            <PrimaryButton onClick={clickHandler}>Primærknapp</PrimaryButton>
            <SecondaryButton onClick={clickHandler}>Sekundærknapp</SecondaryButton>
            <TertiaryButton onClick={clickHandler}>Tertiærknapp</TertiaryButton>
        </>
    );
}
