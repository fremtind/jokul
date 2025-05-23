import React from "react";
import { DevExample } from "utils/dev-example/DevExample.js";
import {
    CookieConsentModalExample,
    knobs,
} from "./CookieConsentModalExample.js";

export default function Example() {
    return <DevExample component={CookieConsentModalExample} knobs={knobs} />;
}
