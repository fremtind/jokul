import React from "react";
import { DevExample } from "../../../doc-utils";
import { CookieConsentExample } from "./CookieConsentExample";
import "../../cookie-consent/cookie-consent.scss";
import "../../button/button.scss";
import "../../list/list.scss";

export default function Example() {
    return <DevExample component={CookieConsentExample} />;
}
