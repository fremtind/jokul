import React from "react";
import { Example } from "../components";

import { PrimaryButton, SecondaryButton, TertiaryButton } from "@fremtind/jkl-button-react";
import "@fremtind/jkl-button/button.min.css";
// @ts-ignore
import buttonType from "!raw-loader!@fremtind/jkl-button-react/build/Button.d.ts";

export const example = `<>
    <PrimaryButton onClick={() => alert("hello!")}>Primærknapp</PrimaryButton>
    <SecondaryButton onClick={() => {}}>Sekundærknapp</SecondaryButton>
    <TertiaryButton onClick={() => {}}>Tertiærknapp</TertiaryButton>
</>;`;

const exampleImport = `import { PrimaryButton, SecondaryButton, TertiaryButton } from "@fremtind/jkl-button-react";
import "@fremtind/jkl-button/button.min.css";`;

export const ButtonExample = () => (
    <Example
        exampleComponents={{ PrimaryButton, SecondaryButton, TertiaryButton }}
        exampleCode={example}
        type={buttonType}
        exampleImport={exampleImport}
    />
);
