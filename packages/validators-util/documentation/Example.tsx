import React from "react";
import "@fremtind/jkl-button/button.css";
import "@fremtind/jkl-card/card.css";
import "@fremtind/jkl-core/core.min.css";
import IsEmailExample from "./IsEmailExample";
import IsPhoneNumberExample from "./IsPhoneNumberExample";
import IsRegistreringsNummerExample from "./IsRegistrationNumberExample";
import IsChassisNummerExample from "./IsChassisNumberExample";

const Example = () => (
    <>
        <IsEmailExample />
        <IsPhoneNumberExample />
        <IsRegistreringsNummerExample />
        <IsChassisNummerExample />
    </>
);

export default Example;
