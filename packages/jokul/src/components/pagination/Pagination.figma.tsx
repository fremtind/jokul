import { figma } from "@figma/code-connect";
import { Pagination } from "./Pagination.js";

figma.connect(
    Pagination,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=4380%3A818",
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
