import React from "react";
import { DevExample } from "../../../doc-utils";
import "../../cookie-consent/cookie-consent.scss";
import "../../button/button.scss";
import "../../list/list.scss";
import {
    CookieConsentModalExample,
    cookieConsentModalExampleCode,
    cookieConsentModalExampleKnobs,
} from "./CookieConsentModalExample";

export default function Example() {
    return (
        <div className="jkl-cookie-consent-example">
            <DevExample
                component={CookieConsentModalExample}
                knobs={cookieConsentModalExampleKnobs}
                codeExample={cookieConsentModalExampleCode}
            />
        </div>
    );
}
