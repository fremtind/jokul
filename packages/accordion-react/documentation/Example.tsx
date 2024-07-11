import babelParser from "prettier/parser-babel";
import * as prettier from "prettier/standalone";
import React from "react";
import "../../../utils/documentation/dev-example.scss";
import { InteractiveCode } from "../../../utils/interactive-code";
import { scope } from "./AccordionExample";
// @ts-ignore
import AccordionExample from "./AccordionExample?raw";

import "@fremtind/jkl-accordion/accordion.scss";

const CODE_START_BLOCK = "{/* -- EXAMPLE CODE START -- */}";
const CODE_END_BLOCK = "{/* -- EXAMPLE CODE END -- */}";

const exampleCode = `
<>
${(AccordionExample as string).substring(
    (AccordionExample as string).indexOf(CODE_START_BLOCK) + CODE_START_BLOCK.length,
    (AccordionExample as string).indexOf(CODE_END_BLOCK),
)}
</>`;

const formattedCode = prettier.format(exampleCode, {
    parser: "babel",
    plugins: [babelParser],
    trailingComma: "none",
});

export default function Example() {
    return (
        <div className={"jkl"}>
            <InteractiveCode
                title={"Accordion"}
                defaultCode={
                    formattedCode.endsWith(";\n") ? formattedCode.substring(0, formattedCode.length - 2) : formattedCode
                }
                defaultShowEditor={true}
                scope={scope}
            />
        </div>
    );
}
