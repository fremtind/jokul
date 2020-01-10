import React from "react";
import { cleanup, render } from "@testing-library/react";
import { H1, H2, H3, H4, H5, Lead, Body, Small, Micro } from ".";

describe("typography", () => {
    afterEach(cleanup);
    const text = "Hello Mr Universe";

    const elements = [
        { type: "heading 1", component: H1, className: "jkl-h1" },
        { type: "heading 2", component: H2, className: "jkl-h2" },
        { type: "heading 3", component: H3, className: "jkl-h3" },
        { type: "heading 4", component: H4, className: "jkl-h4" },
        { type: "heading 5", component: H5, className: "jkl-h5" },
        { type: "lead paragraph", component: Lead, className: "jkl-lead" },
        { type: "body paragraph", component: Body, className: "jkl-body" },
        { type: "small paragraph", component: Small, className: "jkl-small" },
        { type: "micro paragraph", component: Micro, className: "jkl-micro" },
    ];

    elements.forEach((element) => {
        test(`should render ${element.type} with correct text`, () => {
            const C = element.component;
            const { getByText } = render(<C>{text}</C>);
            const res = getByText(text);
            expect(res).toHaveClass(element.className);
        });
    });

    const styleElements = [
        { element: "h1", className: "jkl-h1" },
        { element: "h2", className: "jkl-h2" },
        { element: "h3", className: "jkl-h3" },
        { element: "h4", className: "jkl-h4" },
        { element: "h5", className: "jkl-h5" },
    ];

    elements.slice(0, 5).forEach((element) => {
        styleElements.forEach((styleElement) => {
            test(`should render ${element.type} styled as ${styleElement.element}`, () => {
                const C = element.component;
                const { getByText } = render(<C styledAs={styleElement.element}>{text}</C>);
                const res = getByText(text);
                expect(res).toHaveClass(styleElement.className);
            });
        });
    });
});
