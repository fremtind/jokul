import React from "react";
import { Example } from "../components";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "@fremtind/jkl-button-react";
import "@fremtind/jkl-button/button.min.css";
// @ts-ignore
import buttonType from "!raw-loader!@fremtind/jkl-button-react/build/Button.d.ts";

const example = `<>
    <PrimaryButton onClick={() => alert("hello!")}>Primærknapp</PrimaryButton>
    <SecondaryButton onClick={() => {}}>Sekundærknapp</SecondaryButton>
    <TertiaryButton onClick={() => {}}>Tertiærknapp</TertiaryButton>
</>;`;

const exampleImport = `import { PrimaryButton, SecondaryButton, TertiaryButton } from "@fremtind/jkl-button-react";
import "@fremtind/jkl-button/button.min.css";`;

const ButtonExample = () => (
    <Example
        exampleComponents={{ PrimaryButton, SecondaryButton, TertiaryButton }}
        exampleCode={example}
        type={buttonType}
        exampleImport={exampleImport}
        figma={[
            "https://www.figma.com/file/TkbB9ANfejDSjB2u4u1OEuqM/J%C3%B8kul-components?node-id=38%3A10",
            "https://www.figma.com/file/TkbB9ANfejDSjB2u4u1OEuqM/J%C3%B8kul-components?node-id=38%3A121",
            "https://www.figma.com/file/TkbB9ANfejDSjB2u4u1OEuqM/J%C3%B8kul-components?node-id=39%3A168",
        ]}
    />
);

export default ButtonExample;
