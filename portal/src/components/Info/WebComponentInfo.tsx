import React, { VFC } from "react";
import { WarningMessage } from "@fremtind/jkl-message-box-react";
import { Link } from "@fremtind/jkl-core";
import "./style.scss";

const WebComponentInfo: VFC = () => (
    <WarningMessage fullWidth title="Web component" className="portal-wc-info">
        Denne komponenten bruker web components via{" "}
        <Link href="https://static.nrk.no/core-components/latest/index.html">NRK core components</Link> under panseret.
        Det betyr at for å støtte eldre browsere må du laste inn{" "}
        <Link href="https://github.com/WebReflection/document-register-element">polyfills for web components</Link> og
        custom elements. <br />
        Denne brukes ved boot av portalen:
        <pre>import &quot;document-register-element&quot;;</pre>
    </WarningMessage>
);

export default WebComponentInfo;
