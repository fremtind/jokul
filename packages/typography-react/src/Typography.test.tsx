import React from "react";
import { cleanup, render } from "@testing-library/react";
import { H1, H2, H3, H4, H5, Lead, Body, Small, Micro } from ".";

describe("typography", () => {
    afterEach(cleanup);
    const text = "Hello Mr Universe";

    const elements = [
        { type: "heading 1", component: H1, expectedClassName: "jkl-h1" },
        { type: "heading 2", component: H2, expectedClassName: "jkl-h2" },
        { type: "heading 3", component: H3, expectedClassName: "jkl-h3" },
        { type: "heading 4", component: H4, expectedClassName: "jkl-h4" },
        { type: "heading 5", component: H5, expectedClassName: "jkl-h5" },
        { type: "lead paragraph", component: Lead, expectedClassName: "jkl-lead" },
        { type: "body paragraph", component: Body, expectedClassName: "jkl-body" },
        { type: "small paragraph", component: Small, expectedClassName: "jkl-small" },
        { type: "micro paragraph", component: Micro, expectedClassName: "jkl-micro" },
    ];

    elements.forEach((element) => {
        test(`should render ${element.type} with correct text`, () => {
            const C = element.component;
            const { getByText } = render(<C>{text}</C>);
            const res = getByText(text);
            expect(res).toHaveClass(element.expectedClassName);
        });
    });

    type styleElement = {
        element: "h1" | "h2" | "h3" | "h4" | "h5";
        expectedClassName: string;
    };

    const styleElements: styleElement[] = [
        { element: "h1", expectedClassName: "jkl-h1" },
        { element: "h2", expectedClassName: "jkl-h2" },
        { element: "h3", expectedClassName: "jkl-h3" },
        { element: "h4", expectedClassName: "jkl-h4" },
        { element: "h5", expectedClassName: "jkl-h5" },
    ];

    elements.slice(0, 5).forEach((element) => {
        styleElements.forEach((styleElement) => {
            test(`should render ${element.type} styled as ${styleElement.element}`, () => {
                const C = element.component;
                const { getByText } = render(<C styledAs={styleElement.element}>{text}</C>);
                const res = getByText(text);
                expect(res).toHaveClass(styleElement.expectedClassName);
            });
        });
    });
});
