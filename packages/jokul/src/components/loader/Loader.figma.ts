// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/Loader?node-id=5199:7304
// component=Loader

import figma from "figma";

const example = figma.code`<Loader textDescription="Beskriv hvorfor du viser loaderen"/>`;

export default {
    id: "Loader",
    imports: ['import { Loader } from "@fremtind/jokul/components/loader";'],
    example,
};
