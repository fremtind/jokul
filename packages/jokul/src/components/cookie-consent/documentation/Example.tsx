import React from "react";
import { DevExample } from "../../../../../../utils/dev-example";
import { CookieConsentModalExample, cookieConsentModalExampleKnobs } from "./CookieConsentModalExample";

export default function Example() {
    return <DevExample component={CookieConsentModalExample} knobs={cookieConsentModalExampleKnobs} />;
}
