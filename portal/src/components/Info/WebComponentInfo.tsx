import React from "react";
import { WarningMessage } from "@fremtind/jkl-message-box-react";
import "./style.scss";

const WebComponentInfo = () => (
    <WarningMessage fullWidth title="Web component" className="portal-wc-info">
        Denne komponenten bruker web components via{" "}
        <a href="https://static.nrk.no/core-components/latest/index.html">NRK core components</a> under panseret. Det
        betyr at for å støtte eldre browsere må du laste inn{" "}
        <a href="https://github.com/WebReflection/document-register-element">polyfills for web components</a> og custom
        elements. <br />
        Denne brukes ved boot av portalen:
        <pre>import &quot;document-register-element&quot;;</pre>
    </WarningMessage>
);

export default WebComponentInfo;
