import React from "react";
import { Example } from "../components";
import { ErrorMessage, InfoMessage, SuccessMessage, WarningMessage } from "@fremtind/jkl-message-box-react";
import "@fremtind/jkl-message-box/message-box.min.css";
// @ts-ignore
import messageType from "!raw-loader!@fremtind/jkl-message-box-react/build/MessageBox.d.ts";

const example = `<>
        <InfoMessage title="Info">
            Cupidatat Lorem incididunt incididunt in non mollit cillum Lorem eiusmod sunt magna.
        </InfoMessage>
        <ErrorMessage title="Error">
            In non dolore ullamco minim adipisicing ipsum pariatur deserunt ipsum.
        </ErrorMessage>
        <SuccessMessage title="Success">Ullamco minim aute Lorem adipisicing.</SuccessMessage>
        <WarningMessage title="Warning">Culpa commodo velit cupidatat anim excepteur est culpa.</WarningMessage>
        <InfoMessage fullWidth title="Full width info">Reprehenderit magna duis aliquip adipisicing do mollit ullamco. Pariatur quis ullamco eu cillum. Exercitation in mollit amet ex aute culpa do incididunt Lorem et non id quis ex. Pariatur ex cillum anim consectetur eu mollit occaecat ut aliqua mollit magna. Irure ut occaecat aliqua excepteur consectetur aliqua eiusmod qui excepteur consectetur magna aliqua.
        </InfoMessage>
</>`;

const exampleImport = `import { ErrorMessage, InfoMessage, SuccessMessage, WarningMessage } from "@fremtind/jkl-message-box-react";
import "@fremtind/jkl-message-box/message-box.min.css";`;

const MessageBoxExample = () => (
    <Example
        exampleComponents={{ ErrorMessage, InfoMessage, SuccessMessage, WarningMessage }}
        exampleCode={example}
        type={messageType}
        exampleImport={exampleImport}
    />
);

export default MessageBoxExample;
