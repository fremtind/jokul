import React from "react";
import { DevExample } from "../../../doc-utils";
import { HamburgerExample } from "./HamburgerExample";
import "../../hamburger/hamburger.scss";

export default function Client() {
    return (
        <DevExample
            knobs={{ boolProps: ["Med tekst", "Tekst før knapp", "Skaler tekst ved hover"] }}
            component={HamburgerExample}
        />
    );
}
