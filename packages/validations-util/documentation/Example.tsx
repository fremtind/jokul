import React from "react";
import "@fremtind/jkl-button/button.css";
import "@fremtind/jkl-card/card.css";
import "@fremtind/jkl-core/core.min.css";
import IsValidEpostExample from "./IsValidEpostExample";
import IsValidTelefonnummerExample from "./IsValidTelefonnummerExample";
import IsValidRegistreringsnummerExample from "./IsValidRegistreringsnummerExample";
import IsValidChassisnummerExample from "./IsValidChassisnummerExample";

const Example = () => (
    <>
        <IsValidEpostExample />
        <IsValidTelefonnummerExample />
        <IsValidRegistreringsnummerExample />
        <IsValidChassisnummerExample />
    </>
);

export default Example;
