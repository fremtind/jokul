// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/Logo?node-id=5255:284
// component=Logo

import figma from "figma";

const example = figma.code`<Logo isSymbol/>`;

export default {
    id: "Logo",
    imports: ['import { Logo } from "@fremtind/jokul/components/logo";'],
    example,
    metadata: { nestable: true },
};
