import React from "react";
import ReactDOM from "react-dom";

// Import core styles, webfonts and tab listener (same for all components):
import { initTabListener } from "@fremtind/jkl-core";
import "@fremtind/jkl-core/core.scss";
import "../../webfonts/documentation/internal.scss";

// Imports required for showing example (same for all components):
import { DevExample } from "@fremtind/jkl-portal-components";
import "@fremtind/jkl-portal-components/dev-example.min.css";
import "@fremtind/jkl-radio-button/radio-button.min.css";
import "@fremtind/jkl-checkbox/checkbox.min.css";
import "@fremtind/jkl-button/button.min.css";
import "@fremtind/jkl-list/list.min.css";
import "@fremtind/jkl-card/card.min.css";
import "@fremtind/jkl-text-input/text-input.min.css";

// Import actual example and component stylesheet (specific for this component):
import IsEmailExample from "./IsEmailExample";
import IsPhoneNumberExample from "./IsPhoneNumberExample";
import IsRegistreringsNumberExample from "./IsRegistrationNumberExample";
import IsChassisNumberExample from "./IsChassisNumberExample";

initTabListener();

const mountNode = document.getElementById("app");
ReactDOM.render(
    <>
        <DevExample component={IsEmailExample} />
        <DevExample component={IsPhoneNumberExample} />
        <DevExample component={IsRegistreringsNumberExample} />
        <DevExample component={IsChassisNumberExample} />
    </>,
    mountNode,
);
