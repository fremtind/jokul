// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/Pagination?node-id=4380:818
// component=Pagination

import figma from "figma";

const example = figma.code`<Pagination currentPage={3} numberOfPages={10} onPageChange={() => { }}/>`;

export default {
    id: "Pagination",
    imports: [
        'import { Pagination } from "@fremtind/jokul/components/pagination";',
    ],
    example,
};
