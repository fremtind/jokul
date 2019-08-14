import React from "react";
import ReactDOM from "react-dom";
import "@fremtind/jkl-core/core.css";
import "@fremtind/jkl-message-box/message-box.scss";
import { ErrorMessage, InfoMessage, SuccessMessage, WarningMessage } from "../src";

const Demo = () => (
    <>
        <div style={{ margin: "20px" }}>
            <InfoMessage title="Info">
                Cupidatat Lorem incididunt incididunt in non mollit cillum Lorem eiusmod sunt magna.
            </InfoMessage>
        </div>
        <div style={{ margin: "20px" }}>
            <WarningMessage title="Warning">
                In non dolore ullamco minim adipisicing ipsum pariatur deserunt ipsum.
            </WarningMessage>
        </div>
        <div style={{ margin: "20px" }}>
            <ErrorMessage title="Error">
                In non dolore ullamco minim adipisicing ipsum pariatur deserunt ipsum.
            </ErrorMessage>
        </div>
        <div style={{ margin: "20px" }}>
            <SuccessMessage title="Success">Ullamco minim aute Lorem adipisicing.</SuccessMessage>
        </div>
        <div style={{ margin: "20px" }}>
            <InfoMessage fullWidth title="Info">
                Cupidatat Lorem incididunt incididunt in non mollit cillum Lorem eiusmod sunt magna.
            </InfoMessage>
        </div>
        <div style={{ margin: "20px" }}>
            <WarningMessage fullWidth title="Warning">
                In non dolore ullamco minim adipisicing ipsum pariatur deserunt ipsum.
            </WarningMessage>
        </div>
        <div style={{ margin: "20px" }}>
            <ErrorMessage fullWidth title="Error">
                In non dolore ullamco minim adipisicing ipsum pariatur deserunt ipsum.
            </ErrorMessage>
        </div>
        <div style={{ margin: "20px" }}>
            <SuccessMessage fullWidth title="Success">
                Ullamco minim aute Lorem adipisicing.
            </SuccessMessage>
        </div>
    </>
);

ReactDOM.render(<Demo />, document.getElementById("app"));
