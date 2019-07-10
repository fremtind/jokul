import { PrimaryButton } from "@fremtind/jkl-button-react";
import React from "react";

function clickHandler() {
    console.log("You've clicked me!");
}

export function ButtonExample() {
    return (
        <>
            <PrimaryButton onClick={clickHandler}>Click me!</PrimaryButton>
        </>
    );
}
