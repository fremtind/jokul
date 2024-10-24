import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
import { CookieConsentModalExample, cookieConsentModalExampleKnobs } from "./CookieConsentModalExample.js";

export default function Example() {
    return <DevExample component={CookieConsentModalExample} knobs={cookieConsentModalExampleKnobs} />;
}
