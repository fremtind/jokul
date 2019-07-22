import React from "react";
import ReactDOM from "react-dom";
import { InfoMessage, ErrorMessage, SuccessMessage } from "../src";
import "@fremtind/jkl-message-box/message-box.scss";
import "@fremtind/jkl-core/normalize.scss";

const Demo = () => (
    <>
        <div style={{ margin: "20px" }}>
            <InfoMessage title="Info">
                Cupidatat Lorem incididunt incididunt in non mollit cillum Lorem eiusmod sunt magna.
            </InfoMessage>
        </div>
        <div style={{ margin: "20px" }}>
            <ErrorMessage title="Error">
                In non dolore ullamco minim adipisicing ipsum pariatur deserunt ipsum.
            </ErrorMessage>
        </div>
        <div style={{ margin: "20px" }}>
            <SuccessMessage title="Success">Ullamco minim aute Lorem adipisicing.</SuccessMessage>
        </div>
    </>
);

var mountNode = document.getElementById("app");
ReactDOM.render(<Demo />, mountNode);
