import React from "react";
import { cleanup, render } from "@testing-library/react";
import { H1, H2, H3, H4, H5, Lead, Body, Small, Micro } from ".";

describe("typography", () => {
    afterEach(cleanup);
    const text = "Hello Mr Universe";

    const headings = [
        { type: "heading 1", component: H1, expectedElement: "H1" },
        { type: "heading 2", component: H2, expectedElement: "H2" },
        { type: "heading 3", component: H3, expectedElement: "H3" },
        { type: "heading 4", component: H4, expectedElement: "H4" },
        { type: "heading 5", component: H5, expectedElement: "H5" },
    ];

    const paragraphs = [
        { type: "lead paragraph", component: Lead, expectedElement: "P" },
        { type: "body paragraph", component: Body, expectedElement: "P" },
        { type: "small paragraph", component: Small, expectedElement: "P" },
        { type: "micro paragraph", component: Micro, expectedElement: "P" },
    ];

    [...headings, ...paragraphs].forEach((element) => {
        test(`should render ${element.type} with correct text`, () => {
            const C = element.component;
            const { getByText } = render(<C>{text}</C>);
            const res = getByText(text);
            expect(res.tagName).toBe(element.expectedElement);
        });
    });
});
