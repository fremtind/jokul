// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/FileInput?node-id=13371:2526
// component=FileInput

import figma from "figma";

const description = figma.selectedInstance.getString("Prompt");

const example = figma.code`<FileInput
    value={[]}
    onChange={() => { }}
    legend="Last opp"
    ${figma.helpers.react.renderProp("description", description)}
/>`;

export default {
    id: "FileInput",
    imports: [
        'import { FileInput } from "@fremtind/jokul/components/file-input";',
    ],
    example,
    metadata: { nestable: true },
};
