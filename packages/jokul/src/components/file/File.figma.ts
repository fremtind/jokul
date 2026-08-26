// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/File?node-id=23716:13629
// component=File

import figma from "figma";

const fileName = figma.selectedInstance.getString("Filename(size)");
const state = figma.selectedInstance.getEnum("State", {
    Error: "error",
    Loading: "loading",
});
const variant = figma.selectedInstance.getEnum("Variant", {
    List: "list",
    Card: "card",
});

const example = figma.code`<File
    ${figma.helpers.react.renderProp("fileName", fileName)}
    fileType="jpg"
    fileSize={14000}
    ${figma.helpers.react.renderProp("state", state)}
    ${figma.helpers.react.renderProp("variant", variant)}
/>`;

export default {
    id: "File",
    imports: ['import { File } from "@fremtind/jokul/components/file";'],
    example,
    metadata: { nestable: true },
};
