import { figma } from "@figma/code-connect";
import React from "react";
import { Pagination } from "./Pagination.js";

figma.connect(
    Pagination,
    "https://www.figma.com/design/jnE6mPCHVfbjn7a0AiKGEK?node-id=4380%3A818",
    {
        imports: [
            'import { Pagination } from "@fremtind/jokul/components/pagination";',
        ],
        props: {},
        example: () => (
            <Pagination
                currentPage={3}
                numberOfPages={10}
                onPageChange={() => {}}
            />
        ),
    },
);
