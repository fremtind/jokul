import React from "react";
import "@fremtind/jkl-core/core.css";
import "@fremtind/jkl-message-box/message-box.scss";
import { ErrorMessage, InfoMessage, SuccessMessage, WarningMessage } from "../src";

const Example = () => (
    <section className="jkl-spacing--top-3 jkl-spacing--bottom-3">
        <InfoMessage className="jkl-spacing--bottom-2" title="Info">
            Cupidatat Lorem incididunt incididunt in non mollit cillum Lorem eiusmod sunt magna.
        </InfoMessage>
        <WarningMessage className="jkl-spacing--bottom-2" title="Warning">
            In non dolore ullamco minim adipisicing ipsum pariatur deserunt ipsum.
        </WarningMessage>
        <ErrorMessage className="jkl-spacing--bottom-2" title="Error">
            In non dolore ullamco minim adipisicing ipsum pariatur deserunt ipsum.
        </ErrorMessage>
        <SuccessMessage className="jkl-spacing--bottom-2" title="Success">
            Ullamco minim aute Lorem adipisicing.
        </SuccessMessage>
        <InfoMessage className="jkl-spacing--bottom-2" fullWidth title="Info">
            Cupidatat Lorem incididunt incididunt in non mollit cillum Lorem eiusmod sunt magna.
        </InfoMessage>
        <WarningMessage className="jkl-spacing--bottom-2" fullWidth title="Warning">
            In non dolore ullamco minim adipisicing ipsum pariatur deserunt ipsum.
        </WarningMessage>
        <ErrorMessage className="jkl-spacing--bottom-2" fullWidth title="Error">
            In non dolore ullamco minim adipisicing ipsum pariatur deserunt ipsum.
        </ErrorMessage>
        <SuccessMessage fullWidth title="Success">
            Ullamco minim aute Lorem adipisicing.
        </SuccessMessage>
    </section>
);

export default Example;
