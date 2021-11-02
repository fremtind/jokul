import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import { CookieConsentExample } from "./CookieConsentExample";
import "@fremtind/jkl-cookie-consent/cookie-consent.min.css";
import "@fremtind/jkl-button/button.min.css";
import "@fremtind/jkl-list/list.min.css";

const mountNode = document.getElementById("app");
renderExample(<DevExample component={CookieConsentExample} />, mountNode);
