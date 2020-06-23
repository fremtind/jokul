import React from "react";
import "@fremtind/jkl-button/button.css";
import "@fremtind/jkl-card/card.css";
import "@fremtind/jkl-core/core.min.css";
import isValidEpostExample from "./isValidEpostExample";
import isValidTelefonnummerExample from "./isValidTelefonnummerExample";
import isValidRegistreringsnummerExample from "./isValidRegistreringsnummerExample";
import isValidChassisnummerExample from "./isValidChassisnummerExample";

const Example = () => (
    <>
        <isValidEpostExample />
        <isValidTelefonnummerExample />
        <isValidRegistreringsnummerExample />
        <isValidChassisnummerExample />
    </>
);

export default Example;
